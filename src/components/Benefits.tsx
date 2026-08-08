import { motion } from "framer-motion";
import { benefits } from "../data/funnel";
import { Section } from "./Section";

export function Benefits() {
  return (
    <Section
      id="beneficios"
      eyebrow="Por que funciona"
      title="Pequenas victorias que hacen que tu hijo quiera seguir"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit, index) => (
          <motion.article
            key={benefit.title}
            className="rounded-app border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(15,23,42,0.10)" }}
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[18px] bg-blue-50 text-primary">
              <benefit.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-black text-ink">{benefit.title}</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-muted">{benefit.text}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
