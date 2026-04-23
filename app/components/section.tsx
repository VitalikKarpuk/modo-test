import { Reveal } from "@/app/components/reveal";

type SectionProps = {
  id?: string;
  label?: string;
  index?: string;
  children: React.ReactNode;
};

/**
 * Reusable section shell: border-top, max-width container, optional editorial
 * label row (coral index · mono label · extending line). Label animates on reveal.
 */
export function Section({ id, label, index, children }: SectionProps) {
  return (
    <section id={id} className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        {label && (
          <Reveal>
            <div className="flex items-center gap-4 mb-12 md:mb-16">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {index}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
                / {label}
              </span>
              <div className="flex-1 h-px bg-line" />
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
