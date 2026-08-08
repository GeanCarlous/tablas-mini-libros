import { loadStripe } from "@stripe/stripe-js";
import { z } from "zod";

export const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY as string | undefined;
export const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null;

export const checkoutPayloadSchema = z.object({
  productId: z.string().min(1),
  quantity: z.literal(1)
});

const checkoutSessionSchema = z.object({
  url: z.string().url()
});

export type CheckoutPayload = z.infer<typeof checkoutPayloadSchema>;

export async function createCheckoutSession(payload: CheckoutPayload) {
  const body = checkoutPayloadSchema.parse(payload);

  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error("No pudimos continuar. Intentalo nuevamente en unos segundos.");
  }

  const session = checkoutSessionSchema.parse(await response.json());
  return session.url;
}
