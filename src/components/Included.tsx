import { includes } from "../data/funnel";
import { Section } from "./Section";

export function Included() {
  return (
    <Section
      id="incluye"
      eyebrow="Lo que cambia"
      title="Todo esta pensado para que aprender se sienta mas facil"
      text="Cada parte tiene un proposito: menos agobio, mas practica y una sensacion real de avance."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {includes.map((item) => (
          <article key={item.title} className="rounded-app border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-[18px] bg-gradient-to-br from-blue-50 to-green-50 text-primary">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-black text-ink">{item.title}</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
