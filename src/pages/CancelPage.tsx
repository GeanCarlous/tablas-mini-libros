import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import { useEffect } from "react";
import { pageView } from "../lib/metaPixel";

export default function CancelPage() {
  document.title = "Puedes volver cuando quieras";

  useEffect(() => {
    pageView();
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-4 py-10">
      <motion.section
        className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-premium sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-[24px] bg-blue-50 text-primary">
          <HeartHandshake className="h-10 w-10" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-4xl font-black text-ink">Todo bien, aun puedes volver.</h1>
        <p className="mt-3 text-base font-medium leading-relaxed text-muted">
          Cuando quieras transformar la tarea de tablas en un momento mas tranquilo, estaremos aqui.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-primary px-6 font-bold text-white shadow-soft"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Volver y ver la oferta
        </Link>
      </motion.section>
    </main>
  );
}
