import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Download } from "lucide-react";
import { pageView, purchase } from "../lib/metaPixel";


export default function SuccessPage() {
  const [params] = useSearchParams();
  const downloadUrl = params.get("download_url") || params.get("downloadUrl") || "";
  document.title = "Todo listo para empezar";

useEffect(() => {
  pageView();
  purchase(9.9);

  if (!downloadUrl) return;

  const timer = window.setTimeout(() => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, 900);

    return () => window.clearTimeout(timer);
}, [downloadUrl]);

  return (
    <main className="grid min-h-screen place-items-center bg-[linear-gradient(180deg,#F8FAFC,#EFF6FF)] px-4 py-10">
      <motion.section
        className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-6 text-center shadow-premium sm:p-8"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        <motion.div
          className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-green-50 text-success"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
        >
          <Check className="h-12 w-12" aria-hidden="true" />
        </motion.div>
        <h1 className="mt-6 text-4xl font-black text-ink">Tu compra fue aprobada</h1>
        <p className="mt-3 text-lg font-semibold text-muted">Tu material ya esta listo</p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-muted">
          Ya puedes empezar a ayudar a tu hijo a practicar con mas calma y confianza.
        </p>
        {downloadUrl ? (
          <a
            href={downloadUrl}
            className="btn-ripple mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-success px-6 font-bold text-white shadow-[0_18px_36px_rgba(34,197,94,0.30)]"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Abrir mi material
          </a>
        ) : (
          <button
            type="button"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-slate-200 px-6 font-bold text-slate-500"
            disabled
          >
            Material disponible pronto
          </button>
        )}
        <Link to="/" className="mt-5 inline-flex text-sm font-bold text-primary">
          Volver al inicio
        </Link>
      </motion.section>
    </main>
  );
}
