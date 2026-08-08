import Stripe from "stripe";
import { z } from "zod";

const payloadSchema = z.object({
  productId: z.literal("multiplication-mini-books-pack"),
  quantity: z.literal(1),
});

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is required");
}

const stripe = new Stripe(stripeSecretKey);

export const handler = async (event: any) => {
  try {
    const payload = payloadSchema.parse(JSON.parse(event.body || "{}"));

    const appUrl =
      process.env.APP_URL ||
      "https://pixeldigital.online";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          quantity: payload.quantity,
          price_data: {
            currency: "usd",
            unit_amount: 990,
            product_data: {
              name: "Pack de 12 Mini Libros para Aprender las Tablas de Multiplicar",
              description:
                "PDF imprimible con 12 mini libros, caja organizadora y actividades.",
            },
          },
        },
      ],

      metadata: {
        productId: payload.productId,
      },

      allow_promotion_codes: true,

      success_url:
        `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url:
        `${appUrl}/cancel`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        url: session.url,
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};