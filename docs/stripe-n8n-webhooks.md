# Stripe and n8n Webhook Flow

This project keeps Stripe secrets on the backend only. The React app calls:

```txt
POST /api/create-checkout-session
{
  "productId": "multiplication-mini-books-pack",
  "quantity": 1
}
```

The backend returns:

```txt
{
  "url": "https://checkout.stripe.com/..."
}
```

The frontend redirects the buyer to `session.url`.

## Required Environment Variables

```txt
VITE_STRIPE_PUBLIC_KEY=pk_live_or_test_key
STRIPE_SECRET_KEY=sk_live_or_test_key
STRIPE_WEBHOOK_SECRET=whsec_from_stripe
APP_URL=https://your-domain.com
N8N_WEBHOOK_URL=https://your-n8n.example/webhook/stripe-mini-books
DOWNLOAD_FALLBACK_URL=https://your-secure-download-url.example/file.pdf
```

Never expose `STRIPE_SECRET_KEY` or `STRIPE_WEBHOOK_SECRET` to the Vite client.

## Webhook Events

Configure Stripe to call your deployed webhook endpoint:

```txt
POST /api/stripe-webhook
```

Listen for:

```txt
checkout.session.completed
payment_intent.succeeded
```

## n8n Automation

Recommended production flow:

```txt
Stripe
↓
Webhook /api/stripe-webhook
↓
n8n webhook
↓
Generate secure download link
↓
Send email to customer
↓
Save customer and order metadata
↓
Send analytics/conversion event
```

In n8n, generate a short-lived or customer-specific download URL, then include it in the email. You can also redirect the buyer to:

```txt
/success?download_url=<encoded-secure-download-url>
```

If no download URL exists on the success page, the UI shows a disabled fallback state and expects the email automation to deliver the material.
