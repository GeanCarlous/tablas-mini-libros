import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems } from "../data/funnel";
import { Section } from "./Section";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <Section id="galeria" eyebrow="Mira por dentro" title="Una experiencia que invita a intentarlo otra vez">
      <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0">
        {galleryItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            className="group relative min-w-[78%] snap-center overflow-hidden rounded-app border border-slate-200 bg-white text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/25 sm:min-w-0"
            aria-label={`Ver de cerca: ${item.title}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
              loading="lazy"
              width="1024"
              height="1536"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-white">
              <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/18 px-2 py-1 text-xs font-bold backdrop-blur">
                <ZoomIn className="h-3 w-3" aria-hidden="true" />
                Toca para ver mas
              </div>
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="text-sm font-semibold text-white/80">{item.label}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la actividad"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-app bg-white shadow-premium"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-soft focus:outline-none focus:ring-4 focus:ring-primary/25"
                aria-label="Cerrar vista ampliada"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <img
                src={galleryItems[active].image}
                alt={galleryItems[active].title}
                className="max-h-[82vh] w-full object-contain"
                width="1024"
                height="1536"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
