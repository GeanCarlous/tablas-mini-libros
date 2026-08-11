import Stripe from "stripe";
import crypto from "crypto";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

const metaPixelId = process.env.META_PIXEL_ID;
const metaAccessToken = process.env.META_ACCESS_TOKEN;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is required");
}

if (!webhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET is required");
}

const stripe = new Stripe(stripeSecretKey);

async function sendPurchaseToMeta(session: Stripe.Checkout.Session) {
  if (!metaPixelId || !metaAccessToken) {
    console.warn("META_PIXEL_ID or META_ACCESS_TOKEN is not configured");
    return;
  }

  const email = session.customer_details?.email?.trim().toLowerCase();

  if (!email) {
    console.warn("Purchase event skipped: customer email not available");
    return;
  }

  const emailHash = crypto
    .createHash("sha256")
    .update(email)
    .digest("hex");

  const value = (session.amount_total ?? 0) / 100;
  const currency = (session.currency ?? "usd").toUpperCase();

  const response = await fetch(
    `https://graph.facebook.com/v23.0/${metaPixelId}/events`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            event_name: "Purchase",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: "https://pixeldigitall.online",
            user_data: {
              em: [emailHash],
            },
            custom_data: {
              currency,
              value,
            },
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Meta CAPI error: ${response.status} - ${errorText}`);
  }

  console.log("Purchase sent to Meta successfully");
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return Response.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  const rawBody = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret!
    );
  } catch (error) {
    return Response.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // 1. Envia a compra para a Meta Conversions API
      try {
        await sendPurchaseToMeta(session);
      } catch (error) {
        console.error("Failed to send Purchase to Meta:", error);
      }

      // 2. Mantém a entrega via n8n
      if (n8nWebhookUrl) {
        try {
          await fetch(n8nWebhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: event.type,
              id: event.id,
              created: event.created,
              data: session,
            }),
          });
        } catch (error) {
          console.error("Failed to send event to n8n:", error);
        }
      }

      break;
    }

    case "payment_intent.succeeded": {
      // Não enviamos Purchase aqui para evitar duplicidade.
      // O Purchase oficial vem de checkout.session.completed.
      break;
    }

    default:
      break;
  }

  return Response.json({ received: true });
}