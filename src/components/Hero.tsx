import { motion } from "framer-motion";
import { Check, Download, Printer, ShieldCheck, Star } from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";
import { product, proofStats, trustBadges } from "../data/funnel";

export function Hero() {
  return (
    <header className="relative overflow-hidden px-4 pb-10 pt-5 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.26),transparent_34%),linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_58%,#EFF6FF_100%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:grid lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-2 text-sm font-bold text-primary shadow-soft backdrop-blur">
            <span className="flex text-amber-400" aria-label="Cinco estrellas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            Mas de 2.300 familias practican con menos peleas
          </div>

          <div className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-ink px-4 py-3 text-center text-sm font-bold text-white shadow-premium sm:w-auto">
            <ShieldCheck className="h-4 w-4 text-success" aria-hidden="true" />
            Oferta especial de lanzamiento: ahorra US$15 hoy
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-[0.98] text-ink sm:text-5xl lg:text-6xl">
            Que tu hijo aprenda las tablas sin frustracion
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-muted sm:text-xl">
            Una forma simple y divertida de convertir la tarea de matematica en un momento de confianza.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex min-h-12 items-center gap-2 rounded-[18px] border border-slate-200 bg-white px-3 text-sm font-bold text-ink shadow-sm"
              >
                <badge.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                {badge.label}
              </div>
            ))}
          </div>

          <div className="mt-7 max-w-md">
            <CheckoutButton />
            <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-muted">
              <ShieldCheck className="h-4 w-4 text-success" aria-hidden="true" />
              Pago seguro. Acceso inmediato. Sin suscripciones.
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-white bg-white/80 p-3 shadow-sm">
                <div className="text-xl font-black text-ink">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-[430px] lg:max-w-[520px]">
            <motion.img
              src={product.image}
              alt={product.name}
              className="relative z-10 aspect-[4/5] w-full rounded-[28px] object-cover shadow-premium"
              width="1024"
              height="1536"
              loading="eager"
              fetchPriority="high"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 left-4 z-20 flex items-center gap-2 rounded-[20px] bg-white px-4 py-3 shadow-premium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Check className="h-5 w-5 rounded-full bg-success p-1 text-white" aria-hidden="true" />
              <span className="text-sm font-black text-ink">Empieza en minutos</span>
            </motion.div>
            <div className="absolute -right-3 top-8 z-20 rounded-[20px] bg-white px-3 py-3 shadow-soft">
              <Download className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div className="absolute -left-3 top-1/2 z-20 rounded-[20px] bg-white px-3 py-3 shadow-soft">
              <Printer className="h-6 w-6 text-success" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
