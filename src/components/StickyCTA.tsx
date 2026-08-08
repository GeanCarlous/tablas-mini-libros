import { AnimatePresence, motion } from "framer-motion";
import { product } from "../data/funnel";
import { CheckoutButton } from "./CheckoutButton";

type StickyCTAProps = {
  show: boolean;
  progress: number;
};

export function StickyCTA({ show, progress }: StickyCTAProps) {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-blue-100">
        <div className="h-full bg-primary transition-[width]" style={{ width: `${progress * 100}%` }} />
      </div>
      <AnimatePresence>
        {show ? (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/94 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 shadow-[0_-18px_45px_rgba(15,23,42,0.12)] backdrop-blur lg:hidden"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="mx-auto flex max-w-md items-center gap-3">
              <img
                src={product.image}
                alt=""
                className="h-14 w-14 rounded-[16px] object-cover"
                loading="lazy"
                width="120"
                height="120"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-black text-ink">{product.price}</p>
                <p className="truncate text-xs font-semibold text-muted">Acceso inmediato</p>
              </div>
              <div className="w-44">
                <CheckoutButton compact>Empezar</CheckoutButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
