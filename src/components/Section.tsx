import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, text, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`px-4 py-12 sm:px-6 lg:px-8 lg:py-20 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">
        {title ? (
          <div className="mb-7 text-center">
            {eyebrow ? (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {text ? <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{text}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </motion.section>
  );
}
