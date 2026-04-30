import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { SpotlightCard } from "@/app/components/spotlight-card";
import {
  IconAgentic,
  IconDashboard,
  IconDvP,
  IconPortfolio,
  IconRealtime,
} from "@/app/components/icons";

type Method = "GET" | "POST" | "WS";

const SHELL =
  "group relative h-full flex flex-col rounded-2xl bg-surface border border-line hover:border-line-strong transition-colors duration-300 overflow-hidden";

function methodTone(m: Method) {
  return m === "POST"
    ? "text-accent border-accent/40"
    : m === "WS"
      ? "text-warning border-warning/40"
      : "text-fg-muted border-line";
}

export function ApiStack() {
  return (
    <Section id="api" label="API" index="03">
      <Reveal>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:gap-10 max-w-5xl mb-12 md:mb-16">
          <h2 className="font-display font-medium text-4xl lg:text-5xl tracking-tighter text-fg">
            <span className="whitespace-nowrap">
              Production-grade{" "}
              <em className="font-serif italic font-normal text-accent">
                API
              </em>
              .
            </span>
            <br />
            Built for teams that can&rsquo;t afford to be wrong.
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed lg:mt-4 max-w-xl">
            Surfaces of one shared data layer. Same auth, same observability,
            same docs. Read the ledger, act on it, prove it ran.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3 md:gap-4">
        {/* HERO BAND — Historic API (full width) */}
        <Reveal>
          <HistoricHero />
        </Reveal>

        {/* ACTION BAND — 4 surface cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Reveal delay={80}>
            <SurfaceCard
              method="GET"
              endpoint="/v1/transfers"
              title="Transfer API"
              description="View asset transfers between accounts."
              icon={<IconDvP />}
              glyph={<TransferGlyph />}
            />
          </Reveal>
          <Reveal delay={140}>
            <SurfaceCard
              method="GET"
              endpoint="/v1/portfolios"
              title="Portfolio API"
              description="Track party & account activity with a structured view across data."
              icon={<IconPortfolio />}
              glyph={<PortfolioGlyph />}
            />
          </Reveal>
          <Reveal delay={200}>
            <SurfaceCard
              method="POST"
              endpoint="/v1/agentic"
              title="Agentic API"
              description="Send transactions through agents with support for automated flows."
              icon={<IconAgentic />}
              glyph={<LifecycleGlyph steps={["Prepare", "Sign", "Execute"]} />}
            />
          </Reveal>
          <Reveal delay={260}>
            <SurfaceCard
              method="WS"
              endpoint="/v1/stream"
              title="Real-Time API"
              description="Stream on-chain data as it happens."
              status="Soon"
              icon={<IconRealtime />}
              glyph={<StreamGlyph />}
            />
          </Reveal>
        </div>

        {/* MONITORING BAND — Dashboard (full width) */}
        <Reveal delay={340}>
          <DashboardCard />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   HERO — Historic API (top band, 2-column inside)
   ============================================================ */
function HistoricHero() {
  return (
    <SpotlightCard radius={720} className={`${SHELL} p-7 md:p-10`}>
      {/* Subtle dot-grid pattern — keeps the hero atmospheric without an image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--grid-line) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-glow), transparent 70%)",
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: meta + title + tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent anim-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
              Historic · indexed
            </span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-xs">
            <span
              className={`uppercase tracking-widest border rounded px-1.5 py-0.5 ${methodTone("GET")}`}
            >
              GET
            </span>
            <span className="text-fg-dim">/v1/historic</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-fg">
            Historic API.
          </h3>
          <p className="text-base md:text-lg text-fg-muted leading-relaxed max-w-md">
            Query deep, indexed blockchain history.
          </p>
        </div>

        {/* Right: code snippet + timeline */}
        <div className="flex flex-col gap-5">
          <CodeBlock>
            <CodeLine>
              <span className="text-fg-muted">GET</span> /v1/historic
            </CodeLine>
            <CodeLine indent>
              <span className="text-fg-dim">?from=</span>genesis
              <span className="text-fg-dim">&to=</span>now
            </CodeLine>
            <CodeLine indent>
              <span className="text-fg-dim">&limit=</span>100
            </CodeLine>
            <CodeLine>
              <span className="text-success">→ 200 OK</span>{" "}
              <span className="text-fg-dim">· 142ms · 100 records</span>
            </CodeLine>
          </CodeBlock>
          <div className="border-t border-line pt-5">
            <TimelineGlyph />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   SURFACE CARDS — 4 small bento cells in the middle row
   ============================================================ */
function SurfaceCard({
  method,
  endpoint,
  title,
  description,
  status,
  icon,
  glyph,
}: {
  method: Method;
  endpoint: string;
  title: string;
  description: string;
  status?: string;
  icon: React.ReactNode;
  glyph: React.ReactNode;
}) {
  return (
    <SpotlightCard radius={420} className={`${SHELL} p-6 md:p-7 gap-4`}>
      <div className="relative flex items-start justify-between">
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-bg border border-line text-accent overflow-hidden">
          <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
            {icon}
          </div>
        </div>
        {status && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-warning border border-warning/40 rounded px-1.5 py-0.5">
            {status}
          </span>
        )}
      </div>

      <div className="relative flex items-center gap-2.5 font-mono text-[11px]">
        <span
          className={`uppercase tracking-widest border rounded px-1.5 py-0.5 ${methodTone(method)}`}
        >
          {method}
        </span>
        <span className="text-fg-dim truncate">{endpoint}</span>
      </div>

      <h3 className="relative font-display text-xl md:text-2xl font-medium tracking-tight text-fg">
        {title}
      </h3>
      <p className="relative text-sm text-fg-muted leading-relaxed">
        {description}
      </p>

      <div className="relative mt-auto pt-4 border-t border-line/60">
        {glyph}
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   FOOTER BAND — Dashboard (wide, no method/endpoint)
   ============================================================ */
function DashboardCard() {
  return (
    <SpotlightCard radius={620} className={`${SHELL} p-6 md:p-8`}>
      <div className="relative grid md:grid-cols-[1fr_minmax(280px,420px)] gap-6 md:gap-10 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-bg border border-line text-accent overflow-hidden">
              <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
                <IconDashboard />
              </div>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
              monitoring
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight text-fg">
            API Dashboard
          </h3>
          <p className="text-sm md:text-base text-fg-muted leading-relaxed max-w-md">
            Monitor aggregated network stats, metrics, and analytics.
          </p>
        </div>
        <div className="md:border-l md:border-line/60 md:pl-10">
          <DashboardGlyph />
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   Code block primitives
   ============================================================ */
function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="rounded-md border border-line bg-bg/60 p-4 font-mono text-[11px] md:text-xs leading-relaxed tabular text-fg-muted overflow-hidden">
      {children}
    </pre>
  );
}

function CodeLine({
  children,
  indent,
}: {
  children: React.ReactNode;
  indent?: boolean;
}) {
  return <div className={indent ? "pl-3" : ""}>{children}</div>;
}

/* ============================================================
   Visualization glyphs
   ============================================================ */
function TimelineGlyph() {
  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-line" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{
              opacity: 0.2 + i * 0.11,
              animation: "pulse-dot 2.4s ease-in-out infinite",
              animationDelay: `${i * 180}ms`,
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-fg-dim tracking-wider uppercase">
        <span>genesis</span>
        <span>now</span>
      </div>
    </div>
  );
}

function TransferGlyph() {
  return (
    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
      <span className="text-fg-muted">0xa1…7c</span>
      <span className="text-accent">→</span>
      <span className="text-fg-muted">0xb3…9d</span>
      <span className="ml-auto text-accent tabular">+12.4</span>
    </div>
  );
}

function PortfolioGlyph() {
  const rows: { label: string; pct: number; opacity: number }[] = [
    { label: "Party-A", pct: 82, opacity: 1 },
    { label: "Party-B", pct: 56, opacity: 0.7 },
    { label: "Party-C", pct: 34, opacity: 0.45 },
  ];
  return (
    <div className="flex flex-col gap-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2">
          <span className="w-14 truncate">{r.label}</span>
          <span className="relative flex-1 h-1 bg-line/60 rounded-[1px] overflow-hidden">
            <span
              className="absolute inset-y-0 left-0 bg-accent rounded-[1px]"
              style={{ width: `${r.pct}%`, opacity: r.opacity }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

function LifecycleGlyph({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fg-dim">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          {i > 0 && <span className="text-accent">→</span>}
          <span>{s}</span>
        </span>
      ))}
    </div>
  );
}

function StreamGlyph() {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
      <span className="flex items-center gap-[3px]">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="h-2.5 w-[3px] rounded-[1px] bg-accent"
            style={{
              opacity: 0.25,
              animation: "pulse-dot 1.6s ease-in-out infinite",
              animationDelay: `${i * 90}ms`,
            }}
          />
        ))}
      </span>
      <span className="ml-auto">streaming</span>
    </div>
  );
}

function DashboardGlyph() {
  const bars = [10, 18, 14, 22, 16, 24, 20, 28, 18, 22, 14, 26];
  const max = 28;
  return (
    <div className="relative w-full">
      <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        <span className="h-1.5 w-1.5 rounded-full bg-success anim-pulse" />
        Live monitoring
      </div>
      <div className="flex items-end gap-1 h-9">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 bg-accent/45 rounded-[1px]"
            style={{ height: `${(h * 100) / max}%` }}
          />
        ))}
      </div>
    </div>
  );
}
