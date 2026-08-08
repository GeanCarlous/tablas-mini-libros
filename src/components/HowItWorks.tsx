import { ArrowDown, ArrowRight, CreditCard, Download, Printer } from "lucide-react";
import { Section } from "./Section";

const steps = [
  { title: "Elige ayudar hoy", text: "Compra segura y sin complicaciones.", icon: CreditCard },
  { title: "Accede al instante", text: "Todo queda listo en minutos.", icon: Download },
  { title: "Empieza a practicar", text: "Usalo cuando tu hijo mas lo necesita.", icon: Printer }
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" eyebrow="3 pasos" title="De la frustracion a la practica en pocos minutos">
      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        {steps.map((step, index) => (
          <div key={step.title} className="contents">
            <article className="rounded-app border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-[20px] bg-blue-50 text-primary">
                <step.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-ink">{step.title}</h3>
              <p className="mt-2 text-sm font-semibold text-muted">{step.text}</p>
            </article>
            {index < steps.length - 1 ? (
              <div className="grid place-items-center text-primary">
                <ArrowDown className="h-7 w-7 md:hidden" aria-hidden="true" />
                <ArrowRight className="hidden h-7 w-7 md:block" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
