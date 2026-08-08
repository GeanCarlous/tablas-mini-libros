import { CheckCircle2, XCircle } from "lucide-react";
import { Section } from "./Section";

const withoutItems = [
  "La tarea termina en enojo, cansancio o lagrimas",
  "Tu hijo dice que no puede antes de intentarlo",
  "Cada tabla nueva se siente como una montana",
  "Tu buscas ideas a ultimo minuto sin saber que probar"
];

const withItems = [
  "Practica corta que tu hijo puede terminar con orgullo",
  "Avance visible que motiva a repetir sin tanta resistencia",
  "Aprendizaje visual, manual y sin depender de pantallas",
  "Una herramienta simple para reforzar en casa o en clase"
];

export function Comparison() {
  return (
    <Section id="comparacion" eyebrow="Antes y despues" title="La diferencia se nota en la actitud de tu hijo">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-app border border-red-100 bg-white p-5 shadow-sm">
          <h3 className="text-2xl font-black text-ink">Sin una forma amable de practicar</h3>
          <div className="mt-5 space-y-3">
            {withoutItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-[18px] bg-red-50 p-3 text-sm font-semibold text-slate-700">
                <XCircle className="mt-0.5 h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-app border border-green-100 bg-white p-5 shadow-soft">
          <h3 className="text-2xl font-black text-ink">Con una practica pensada para motivar</h3>
          <div className="mt-5 space-y-3">
            {withItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-[18px] bg-green-50 p-3 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-success" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
