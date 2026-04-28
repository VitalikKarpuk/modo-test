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

        </div>

        {/* Eyebrow */}
        <p
          className="anim-fade-up text-xs md:text-sm font-medium tracking-widest uppercase text-accent mb-8"
          style={{ animationDelay: "120ms" }}
        >
          An intelligence layer for omni-chain building blocks
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
          The Intelligence Layer
          <br />
          <span
            className="font-extralight tracking-tight text-accent"
            style={{ letterSpacing: "-0.03em" }}
          >
            of Canton
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
            href="https://app.modo.link/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Get Started
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

        {/* Hot — editorial 7/5 split, no boxed cards */}
        <div
          className="anim-fade-up mt-16 md:mt-24 border-t border-line pt-10 md:pt-12"
          style={{ animationDelay: "700ms" }}
        >
          {/* Section meta — same chip language as the top "Live" row */}
          <div className="flex items-center gap-3 mb-10 md:mb-14 font-mono text-[10px] tracking-widest uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent anim-pulse" />
            </span>
            <span className="text-accent">Hot</span>
            <span className="text-fg-dim/60">/</span>
            <span className="text-fg-dim">2 items</span>
            <span className="text-fg-dim/60">·</span>
            <span className="text-fg-dim">Apr 2026</span>
            <div className="flex-1 h-px bg-line ml-2" />
          </div>

          {/* 7/5 grid — news leads, offer is the sidebar */}
          <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-14">
            <HotItem
              span="md:col-span-7 md:border-r md:border-line md:pr-10 lg:pr-14"
              index="01"
              kind="NEWS"
              badge="HOT"
              title="Silvana Joins HackCanton as Sponsor"
              excerpt="Silvana joins HackCanton Season 1 as a sponsor of the AppsFactory program — a business-first build where teams ship MVPs on Canton, not prototypes. Hands-on guidance for agent design, on-chain workflows, and production-ready solutions."
              cta="Read the story"
              href="https://cc.modo.link/mainnet/news/1616"
              external
              titleClass="text-3xl md:text-4xl lg:text-[2.75rem]"
            />
            <HotItem
              span="md:col-span-5"
              index="02"
              kind="OFFER"
              badge="NEW"
              title="Promo codes live"
              excerpt="Limited access for early users — unlock Modo's product suite: APIs for on-chain data, network monitoring and data-driven apps. HackCanton builders: redeem HackCC2026 in the Invite Code field, no plan to choose."
              cta="Redeem code"
              href="https://docs.modo.link/platform/promo-codes"
              external
              titleClass="text-2xl md:text-3xl lg:text-[2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HotItem({
  span,
  index,
  kind,
  badge,
  title,
  excerpt,
  cta,
  href,
  external,
  titleClass,
}: {
  span: string;
  index: string;
  kind: string;
  badge: "HOT" | "NEW";
  title: string;
  excerpt: string;
  cta: string;
  href: string;
  external?: boolean;
  titleClass: string;
}) {
  const isMail = href.startsWith("mailto:");
  const openNew = external && !isMail;
  return (
    <a
      href={href}
      target={openNew ? "_blank" : undefined}
      rel={openNew ? "noreferrer" : undefined}
      className={`group relative flex flex-col gap-5 ${span}`}
    >
      {/* Header — mono kind/idx · animated badge */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest">
          <span className="text-accent">{index}</span>
          <span className="text-fg-dim/60">/</span>
          <span className="text-fg-dim">{kind}</span>
        </div>
        <span
          className={`flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase ${
            badge === "HOT" ? "text-accent" : "text-fg-muted"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              badge === "HOT" ? "bg-accent anim-pulse" : "bg-fg-dim"
            }`}
          />
          {badge}
        </span>
      </div>

      {/* Coral mark — echoes the hero's left-margin tick at top:24px */}
      <span
        aria-hidden
        className="block h-px w-10 bg-accent transition-[width] duration-500 ease-out group-hover:w-24"
      />

      {/* Title — Whyte display, in the same typographic family as H1 */}
      <h3
        className={`font-display font-medium tracking-tightest text-fg leading-[1.04] transition-colors duration-300 group-hover:text-accent ${titleClass}`}
      >
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-base md:text-[17px] text-fg-muted leading-relaxed flex-1 max-w-prose">
        {excerpt}
      </p>

      {/* CTA — underline link, arrow translates */}
      <div className="flex items-center gap-2 pt-2 text-sm font-medium text-fg group-hover:text-accent transition-colors">
        <span className="border-b border-line-strong group-hover:border-accent transition-colors">
          {cta}
        </span>
        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
          {openNew || isMail ? <ArrowTopRight /> : <ArrowRight />}
        </span>
      </div>
    </a>
  );
}
