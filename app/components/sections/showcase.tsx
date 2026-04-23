import Image from "next/image";
import { Reveal } from "@/app/components/reveal";
import { Counter } from "@/app/components/counter";
import { Section } from "@/app/components/section";
import { TiltFrame } from "@/app/components/tilt-frame";
import { LockIcon } from "@/app/components/icons";
import { SHOTS, type Shot } from "@/app/lib/content";

const SIDE_COMPONENTS = [LiveStats, PrivateList, UnifiedRoster] as const;

export function Showcase() {
  return (
    <Section id="in-action" label="IN ACTION" index="02">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mb-16 md:mb-24">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-fg">
            Meet the{" "}
            <span className="font-extralight tracking-tight text-accent">
              product
            </span>
            .
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed md:mt-4">
            Three live surfaces, one indexed ledger. Click any frame — they all
            run in production right now.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-4 md:gap-6">
        {SHOTS.map((shot, i) => (
          <Reveal key={shot.num} delay={i * 60}>
            <Plate shot={shot} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Plate({ shot, index }: { shot: Shot; index: number }) {
  const isFrameRight = shot.align === "right";
  const Side = SIDE_COMPONENTS[index];
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
      {/* Frame */}
      <a
        href={shot.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${shot.name}`}
        className={`md:col-span-8 md:row-start-1 ${
          isFrameRight ? "md:col-start-5" : "md:col-start-1"
        }`}
      >
        <BrowserFrame shot={shot} index={index} />
      </a>

      {/* Side card */}
      <div
        className={`md:col-span-4 md:row-start-1 ${
          isFrameRight ? "md:col-start-1" : "md:col-start-9"
        }`}
      >
        <SideCard shot={shot} index={index}>
          <Side />
        </SideCard>
      </div>
    </div>
  );
}

function SideCard({
  shot,
  index,
  children,
}: {
  shot: Shot;
  index: number;
  children: React.ReactNode;
}) {
  const plateLabel = `0${index + 1}`;
  return (
    <div className="group relative h-full flex flex-col gap-5 p-6 md:p-7 rounded-2xl bg-surface border border-line hover:border-line-strong transition-colors overflow-hidden">
      {/* plate numeral — grid-breaking: bleeds off the top-right corner */}
      <span
        aria-hidden
        className="absolute -top-8 -right-3 md:-right-5 font-mono font-thin leading-none tracking-tightest select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-700"
        style={{
          fontSize: "clamp(9rem, 18vw, 16rem)",
          color: "var(--fg)",
        }}
      >
        {plateLabel}
      </span>

      {/* header row */}
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[11px] text-accent tracking-widest">
          {plateLabel} / 03
        </span>
        {shot.badge && (
          <span
            className={`flex items-center gap-1.5 font-mono text-[10px] tracking-widest ${
              shot.badge === "LIVE" ? "text-accent" : "text-fg-dim"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                shot.badge === "LIVE" ? "bg-accent anim-pulse" : "bg-fg-dim"
              }`}
            />
            {shot.badge}
          </span>
        )}
      </div>

      {/* caption */}
      <div className="relative flex flex-col gap-3">
        <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tighter text-fg">
          <span className="font-extralight tracking-tight text-accent">
            {shot.italic}
          </span>{" "}
          {shot.rest}
        </h3>
        <p className="text-sm text-fg-muted leading-relaxed">{shot.desc}</p>
      </div>

      {/* extra content — unique per plate */}
      <div className="relative flex-1 flex flex-col justify-end">
        <div className="pt-5 border-t border-line">{children}</div>
      </div>

      {/* external link */}
      <a
        href={shot.href}
        target="_blank"
        rel="noreferrer"
        className="relative group/link inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors"
      >
        <span className="font-mono text-xs text-fg-dim tracking-wider group-hover/link:text-accent transition-colors">
          ↗
        </span>
        <span className="border-b border-line-strong group-hover/link:border-accent transition-colors">
          {shot.name}
        </span>
      </a>
    </div>
  );
}

function BrowserFrame({ shot, index }: { shot: Shot; index: number }) {
  return (
    <TiltFrame className="block h-full">
      {/* coral under-glow */}
      <div
        aria-hidden
        className="absolute inset-x-6 -bottom-6 h-10 rounded-[50%] blur-2xl pointer-events-none opacity-60"
        style={{ background: "var(--accent-glow)" }}
      />

      <div className="relative h-full rounded-xl md:rounded-2xl bg-surface-2 border border-line overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] group-hover:border-line-strong transition-colors">
        {/* chrome */}
        <div className="relative flex items-center gap-3 h-10 px-4 border-b border-line bg-bg">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-2 h-6 px-3 rounded-md bg-surface border border-line max-w-md w-full justify-center">
              <LockIcon className="text-fg-dim" />
              <span className="font-mono text-[11px] text-fg-muted tracking-wide truncate">
                {shot.url}
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] text-fg-dim tracking-widest hidden sm:inline">
            0{index + 1}/03
          </span>
        </div>

        {/* screenshot — scroll-driven parallax */}
        <div className="relative overflow-hidden">
          <div className="plate-parallax">
            <Image
              src={shot.file}
              alt={shot.name}
              width={1600}
              height={1000}
              className="w-full h-auto block"
              sizes="(min-width: 768px) 800px, 100vw"
              priority={index === 0}
            />
          </div>
          {/* cursor-tracked inner spotlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(244,134,86,0.18), transparent 60%)",
              mixBlendMode: "plus-lighter",
            }}
          />
          {/* vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -40px 60px -40px rgba(2,3,9,0.5)",
            }}
          />
        </div>
      </div>
    </TiltFrame>
  );
}

/* ================= Unique side-card contents ================= */

function LiveStats() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
      <StatRow
        label="events"
        value={<Counter to={3.17e9} format="compact" />}
        highlight
      />
      <StatRow
        label="updates"
        value={<Counter to={215.3e6} format="compact" />}
      />
      <StatRow
        label="validators"
        value={<Counter to={1031} format="int" />}
      />
      <StatRow
        label="parties"
        value={<Counter to={566_310} format="compact" />}
      />
    </ul>
  );
}

function StatRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <li className="flex flex-col gap-1">
      <span
        className={`font-mono font-medium tabular text-xl leading-none ${
          highlight ? "text-accent" : "text-fg"
        }`}
      >
        {value}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        {label}
      </span>
    </li>
  );
}

function PrivateList() {
  const items = [
    "Private contracts",
    "Labelled events",
    "Party-scoped data",
    "Signed exports",
  ];
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        What only you see
      </span>
      <ul className="flex flex-col gap-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 text-sm text-fg">
            <span className="h-px w-5 bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UnifiedRoster() {
  const surfaces = [
    "Home",
    "Swap",
    "Watchlist",
    "Logs",
    "Portfolio",
    "API Docs",
    "Guides",
    "Agentic",
    "Plans",
  ];
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        One surface
      </span>
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 font-mono text-xs">
        {surfaces.map((s, i) => (
          <span key={s} className="flex items-center gap-2.5">
            <span className="text-fg">{s}</span>
            {i < surfaces.length - 1 && (
              <span className="text-fg-dim">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
