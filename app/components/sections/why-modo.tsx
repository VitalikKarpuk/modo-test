import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { WHY_POINTS } from "@/app/lib/content";

export function WhyModo() {
  return (
    <Section id="why" label="WHY MODO" index="04">
      <Reveal>
        <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-fg mb-12 md:mb-16 max-w-4xl">
          Many explorers exist.
          <br />
          None are a{" "}
          <em className="font-serif italic font-normal text-accent">
            platform
          </em>
          .
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {WHY_POINTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent tracking-widest">
                  0{i + 1}
                </span>
                <div className="flex-1 h-px bg-line" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-fg">
                {p.title}
              </h3>
              <p className="text-fg-muted leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
