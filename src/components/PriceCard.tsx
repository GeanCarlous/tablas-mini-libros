import { ShieldCheck, Sparkles } from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";
import { product, secureBadges } from "../data/funnel";

export function PriceCard() {
  return (
    <section className="px-4 pb-28 pt-12 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-ink text-white shadow-premium">
        <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full rounded-[28px] object-cover shadow-[0_28px_70px_rgba(0,0,0,0.30)]"
              loading="lazy"
              width="1024"
              height="1536"
            />
            <div className="absolute left-4 top-4 rounded-full bg-success px-4 py-2 text-sm font-black text-white">
              -60% hoy
            </div>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-100">
              <Sparkles className="h-4 w-4 text-success" aria-hidden="true" />
              Oferta de lanzamiento limitada
            </div>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              Ayuda a tu hijo a sentirse capaz desde hoy.
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-300">
              Una pequena decision puede cambiar muchas tardes de tarea, practica y confianza.
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-xl font-black text-slate-400 line-through">{product.oldPrice}</span>
              <span className="text-5xl font-black text-white">{product.price}</span>
            </div>
            <div className="mt-6 max-w-md">
              <CheckoutButton />
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {secureBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 rounded-[18px] bg-white/8 px-3 py-3 text-sm font-bold text-slate-200">
                  <badge.icon className="h-4 w-4 text-success" aria-hidden="true" />
                  {badge.label}
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-300">
              <ShieldCheck className="h-4 w-4 text-success" aria-hidden="true" />
              Tu pago es seguro y tu acceso queda disponible al instante.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
