import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/funnel";
import { Section } from "./Section";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" eyebrow="Preguntas frecuentes" title="Lo que una mama quiere saber antes de decidir">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <article key={faq.question} className="overflow-hidden rounded-app border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus:ring-4 focus:ring-primary/20"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-black text-ink">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-none text-primary transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-5 pb-5 text-sm font-medium leading-relaxed text-muted">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
