import { PARTNERS } from "@/app/lib/content";

const SHOW_NAME = new Set(["iota", "sui"]);

export function Partners() {
  return (
    <section
      aria-label="Supported networks and partners"
      className="relative border-y border-line overflow-hidden bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-6 pt-8 md:pt-10 pb-4 flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent anim-pulse" />
        <span className="font-mono text-[11px] tracking-widest uppercase text-fg-dim">
          Networks & partners
        </span>
        <div className="flex-1 h-px bg-line" />
      </div>

      <div className="absolute left-0 top-12 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-12 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

      <div className="flex items-center gap-14 md:gap-20 pt-6 pb-10 md:pb-12 marquee-track whitespace-nowrap">
        {[...PARTNERS, ...PARTNERS].map((p, i) => (
          <div
            key={`${p.slug}-${i}`}
            aria-label={p.name}
            className="partner-slot shrink-0 flex items-center gap-3 select-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/partners/${p.slug}.svg`}
              alt={p.name}
              className="partner-logo h-6 md:h-7 w-auto"
              loading="lazy"
              decoding="async"
            />
            {SHOW_NAME.has(p.slug) && (
              <span className="font-mono text-[11px] uppercase tracking-widest text-fg-muted">
                {p.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
