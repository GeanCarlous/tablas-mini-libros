import { ReactNode } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";

import { initiateCheckout } from "../lib/metaPixel";

import {
  checkoutPayloadSchema,
  createCheckoutSession,
  type CheckoutPayload,
} from "../services/stripe";

import { product } from "../data/funnel";

type CheckoutButtonProps = {
  children?: ReactNode;
  className?: string;
  compact?: boolean;
};

export function CheckoutButton({
  children = "Quiero ayudar a mi hijo hoy",
  className = "",
  compact = false,
}: CheckoutButtonProps) {
  const { handleSubmit, register } = useForm<CheckoutPayload>({
    resolver: zodResolver(checkoutPayloadSchema),
    defaultValues: {
      productId: product.id,
      quantity: 1,
    },
  });

  const checkout = useMutation({
    mutationFn: async (payload: CheckoutPayload) => {
      const params = new URLSearchParams(window.location.search);

      const getCookie = (name: string) => {
        const value = document.cookie
          .split("; ")
          .find((row) => row.startsWith(`${name}=`))
          ?.split("=")
          .slice(1)
          .join("=");

        return value ? decodeURIComponent(value) : undefined;
      };

      const utmData = {
        utm_source: params.get("utm_source") ?? undefined,
        utm_medium: params.get("utm_medium") ?? undefined,
        utm_campaign: params.get("utm_campaign") ?? undefined,
        utm_content: params.get("utm_content") ?? undefined,
        utm_term: params.get("utm_term") ?? undefined,
      };

      let fbp = getCookie("_fbp");
      let fbc = getCookie("_fbc");

      // Se o Meta não criou _fbc ainda, cria a partir do fbclid
      const fbclid = params.get("fbclid");

      if (!fbc && fbclid) {
        fbc = `fb.1.${Date.now()}.${fbclid}`;
      }

      const trackingData = {
        ...utmData,
        fbp,
        fbc,
        user_agent: navigator.userAgent,
      };

      initiateCheckout();

      return createCheckoutSession({
        ...payload,
        ...trackingData,
      });
    },

    onSuccess: (url) => {
      window.location.assign(url);
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => checkout.mutate(values))}
      className={className}
      aria-label="Comprar de forma segura"
    >
      <input type="hidden" {...register("productId")} />

      <input
        type="hidden"
        value={1}
        {...register("quantity", { valueAsNumber: true })}
      />

      <button
        type="submit"
        disabled={checkout.isPending}
        className={`btn-ripple group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-success px-6 font-bold text-white shadow-[0_18px_36px_rgba(34,197,94,0.30)] transition hover:-translate-y-0.5 hover:bg-[#16A34A] focus:outline-none focus:ring-4 focus:ring-success/25 disabled:cursor-wait disabled:opacity-75 ${
          compact ? "min-h-12 text-sm" : "text-base"
        }`}
        aria-label="Acceder ahora con pago seguro"
      >
        {checkout.isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Preparando tu acceso...
          </>
        ) : (
          <>
            {children}
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </>
        )}
      </button>

      {checkout.isError ? (
        <p className="mt-3 text-center text-sm text-red-600">
          {(checkout.error as Error).message}
        </p>
      ) : null}
    </form>
  );
}