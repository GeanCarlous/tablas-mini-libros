import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/funnel";
import { Section } from "./Section";

export function Testimonials() {
  return (
    <Section
      id="testimonios"
      eyebrow="Familias reales"
      title="Cuando practicar deja de ser una pelea, todo cambia"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            className="rounded-app border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4 flex text-amber-400" aria-label="Cinco estrellas">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="text-[15px] font-medium leading-relaxed text-ink">"{item.quote}"</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-black text-white">
                {item.initials}
              </div>
              <div>
                <h3 className="font-black text-ink">{item.name}</h3>
                <p className="text-sm font-semibold text-muted">
                  {item.role} · {item.country}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
