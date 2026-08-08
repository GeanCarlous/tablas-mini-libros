import { motion } from "framer-motion";
import { Section } from "./Section";

export function VideoSection() {
  return (
    <Section
      id="video"
      eyebrow="Mira el cambio"
      title="Imagina la tarea de tablas con menos enojo y mas ganas"
      text="En pocos segundos veras como una practica simple puede ayudar a tu hijo a sentirse capaz."
    >
      <motion.div
        className="group relative mx-auto block aspect-video w-full max-w-4xl overflow-hidden rounded-app bg-ink text-left shadow-premium focus:outline-none focus:ring-4 focus:ring-primary/25"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        aria-label="Ver como ayuda a practicar las tablas"
      >
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster="/product-overview.png"
          aria-label="Video mostrando como practicar las tablas con mas confianza"
        >
          <source src="/videos/ct-sem-audio.mp4" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
      </motion.div>
    </Section>
  );
}
