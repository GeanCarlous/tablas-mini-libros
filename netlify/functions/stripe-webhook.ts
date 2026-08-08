import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is required");
}

if (!webhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET is required");
}

const stripe = new Stripe(stripeSecretKey);

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return Response.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const rawBody = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "payment_intent.succeeded": {
      if (n8nWebhookUrl) {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: event.type,
            id: event.id,
            created: event.created,
            data: event.data.object
          })
        });
      }
      break;
    }
    default:
      break;
  }

  return Response.json({ received: true });
}
