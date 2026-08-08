# Pack de 12 Mini Libros Sales Funnel

Premium mobile-first React sales funnel for a Spanish educational printable product.

## Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- React Router
- Lucide React
- Stripe Checkout
- React Query
- React Hook Form
- Zod

## Local Setup

```bash
npm install
npm run dev
```

Create `.env` from `.env.example` and add your Stripe values. The client only uses `VITE_STRIPE_PUBLIC_KEY`; all secret keys belong in backend or serverless environments.

## Routes

- `/` sales funnel
- `/success` payment approved and download start page
- `/cancel` friendly abandoned checkout page

## Stripe

The frontend posts to `/api/create-checkout-session` with:

```json
{
  "productId": "multiplication-mini-books-pack",
  "quantity": 1
}
```

The backend returns `{ "url": "https://checkout.stripe.com/..." }` and the frontend redirects automatically.

Webhook notes live in `docs/stripe-n8n-webhooks.md`.
