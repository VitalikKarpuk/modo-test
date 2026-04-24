import { Counter } from "@/app/components/counter";
import { HeroVideo } from "@/app/components/hero-video";
import { ArrowRight, ArrowTopRight } from "@/app/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroVideo />
      <div className="grid-bg" />
      <div className="noise" />

      {/* coral atmospheric glow */}
      <div
        aria-hidden
        className="absolute -right-32 -bottom-40 h-[520px] w-[520px] rounded-full anim-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-glow), transparent 70%)",
        }}
      />

      {/* ambient numeral — editorial depth */}
      <div
        aria-hidden
        className="absolute right-0 -bottom-6 md:right-4 md:-bottom-16 font-mono font-thin leading-none tracking-tightest select-none pointer-events-none hidden md:block"
        style={{
          fontSize: "clamp(12rem, 24vw, 22rem)",
          color: "var(--fg)",
          opacity: 0.035,
        }}
      >
        01
      </div>

      {/* left margin line with ticks */}
      <div
        aria-hidden
        className="absolute left-6 top-0 h-72 w-px bg-gradient-to-b from-accent/60 via-line to-transparent hidden md:block"
      />
      <div
        aria-hidden
        className="absolute left-[22px] top-24 h-px w-2.5 bg-accent/50 hidden md:block"
      />
      <div
        aria-hidden
        className="absolute left-[22px] top-48 h-px w-2.5 bg-line hidden md:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-32 pb-24 md:pb-40">
        {/* top row — live chip / version marker */}
        <div className="flex items-start justify-between gap-4 mb-12 md:mb-16">
          <div
            className="anim-fade-in inline-flex items-center gap-3 text-xs font-mono tracking-wider text-fg-muted"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent anim-pulse" />
            </span>
            <span className="uppercase tracking-widest">Live</span>
            <span className="text-fg-dim">/</span>
            <span className="lowercase">canton mainnet</span>
          </div>

          <div
            className="anim-fade-in hidden md:flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-fg-dim"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-fg-dim/60">[</span>
            <span>v.01</span>
            <span className="text-fg-dim/60">·</span>
            <span>prod</span>
            <span className="text-fg-dim/60">]</span>
          </div>
        </div>

        {/* Eyebrow */}
        <p
          className="anim-fade-up text-xs md:text-sm font-medium tracking-widest uppercase text-accent mb-8"
          style={{ animationDelay: "120ms" }}
        >
          Enterprise infrastructure for the new financial stack
        </p>

        {/* H1 — weight-contrast accent */}
        <h1
          className="anim-fade-up font-display font-medium tracking-tightest text-fg"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
            lineHeight: 0.96,
            animationDelay: "240ms",
          }}
        >
          Ultimate Blockchain
          <br />
          <span
            className="font-extralight tracking-tight text-accent"
            style={{ letterSpacing: "-0.03em" }}
          >
            Data Hub
          </span>
        </h1>

        {/* Sub */}
        <p
          className="anim-fade-up mt-10 max-w-2xl text-lg md:text-xl text-fg-muted leading-relaxed"
          style={{ animationDelay: "380ms" }}
        >
          End-to-end Web3 data platform to get on-chain data, gain in-depth
          network intelligence, and build powerful apps.
        </p>

        {/* CTAs */}
        <div
          className="anim-fade-up mt-12 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "520ms" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Book a demo
            <div className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </div>
          </a>
          <a
            href="https://docs.modo.link/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-full border border-line text-fg text-sm font-medium hover:border-line-strong hover:bg-surface transition-colors"
          >
            Read the docs
            <div className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowTopRight />
            </div>
          </a>
        </div>

        {/* Metrics */}
        <div
          className="anim-fade-up mt-16 md:mt-24 border-t border-line pt-8"
          style={{ animationDelay: "700ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-line">
            <HeroMetric
              index="01"
              value={<Counter to={2.4e9} format="compact" />}
              label="events indexed"
            />
            <HeroMetric
              index="02"
              value={<Counter to={11} format="int" />}
              label="networks live"
            />
            <HeroMetric
              index="03"
              value={
                <>
                  99.
                  <Counter to={99} format="int" />
                </>
              }
              suffix="%"
              label="uptime SLA"
            />
            <HeroMetric
              index="04"
              value={<Counter to={42} format="int" />}
              suffix="ms"
              label="p99 latency"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({
  index,
  value,
  suffix,
  label,
}: {
  index: string;
  value: React.ReactNode;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-3 md:px-6 first:md:pl-0 last:md:pr-0">
      <span className="font-mono text-[10px] tracking-widest uppercase text-fg-dim">
        {index} /
      </span>
      <span className="font-mono text-3xl md:text-4xl font-medium text-fg tabular leading-none">
        {value}
        {suffix && <span className="text-fg-muted">{suffix}</span>}
      </span>
      <span className="text-[11px] font-mono uppercase tracking-widest text-fg-dim">
        {label}
      </span>
    </div>
  );
}
