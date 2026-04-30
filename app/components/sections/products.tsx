import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { SpotlightCard } from "@/app/components/spotlight-card";
import {
  IconIkaNet,
  IconIotaNet,
  IconMinaNet,
  IconSilvanaNet,
  IconSuiNet,
  IconWalrusNet,
  IconZekoNet,
  LockIcon,
} from "@/app/components/icons";
import { PRODUCTS, type NetworkSlug, type Product } from "@/app/lib/content";

function IconCantonLogo({
  width = 16,
  height = 16,
  className,
  style,
}: React.SVGProps<SVGSVGElement>) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        width,
        height,
        backgroundColor: "currentColor",
        maskImage: "url(/cantonLogo.svg)",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
        WebkitMaskImage: "url(/cantonLogo.svg)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        ...style,
      }}
    />
  );
}

const NETWORK_ICONS: Record<NetworkSlug, (p: React.SVGProps<SVGSVGElement>) => React.ReactElement> = {
  canton: IconCantonLogo,
  sui: IconSuiNet,
  walrus: IconWalrusNet,
  silvana: IconSilvanaNet,
  ika: IconIkaNet,
  iota: IconIotaNet,
  mina: IconMinaNet,
  zeko: IconZekoNet,
};

const NETWORK_LABELS: Record<NetworkSlug, string> = {
  canton: "Canton",
  sui: "Sui",
  walrus: "Walrus",
  silvana: "Silvana",
  ika: "Ika",
  iota: "IOTA",
  mina: "Mina",
  zeko: "Zeko",
};

function NetworkRow({ networks }: { networks: NetworkSlug[] }) {
  return (
    <div className="relative flex items-center gap-3">
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim shrink-0">
        Available on
      </span>
      <div className="flex items-center gap-2.5 text-fg-muted">
        {networks.map((slug) => {
          const Icon = NETWORK_ICONS[slug];
          return (
            <span
              key={slug}
              title={NETWORK_LABELS[slug]}
              aria-label={NETWORK_LABELS[slug]}
              className="inline-flex h-4 w-4 items-center justify-center"
            >
              <Icon width={16} height={16} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

type ConstellationNode = {
  slug: NetworkSlug;
  top: string;
  left: string;
  size: number;
  opacity: number;
};

function NetworkConstellation({
  nodes,
  className = "hidden lg:block",
}: {
  nodes: ReadonlyArray<ConstellationNode>;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none text-fg-muted ${className}`}
    >
      {nodes.map((node) => {
        const Icon = NETWORK_ICONS[node.slug];
        return (
          <span
            key={node.slug}
            className="absolute inline-flex"
            style={{
              top: node.top,
              left: node.left,
              opacity: node.opacity,
            }}
          >
            <Icon width={node.size} height={node.size} />
          </span>
        );
      })}
    </div>
  );
}

const CARD_BASE =
  "group relative h-full flex flex-col rounded-2xl bg-surface border border-line hover:border-line-strong transition-colors duration-300 overflow-hidden";

export function Products() {
  const [pub, priv, superApp, api] = PRODUCTS;
  return (
    <Section id="products" label="PRODUCTS" index="01">
      <Reveal>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:gap-10 max-w-5xl mb-16">
          <h2 className="font-display font-medium text-4xl lg:text-5xl tracking-tighter text-fg">
            <span className="whitespace-nowrap">
              End-to-end{" "}
              <em className="font-serif italic font-normal text-accent">
                platform
              </em>
              .
            </span>
            <br />
            One unified data layer.
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed lg:mt-4 max-w-xl">
            Public and private explorers, the super-app, and the API
            — all on the same indexed ledger. From reading data to acting
            on it within the same environment.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 md:gap-4 auto-rows-[minmax(220px,auto)] lg:auto-rows-[minmax(280px,1fr)]">
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <PublicExplorerCard p={pub} />
        </Reveal>
        <Reveal delay={100} className="md:col-span-2 lg:col-span-2 lg:row-span-1">
          <PrivateExplorerCard p={priv} />
        </Reveal>
        <Reveal delay={180}>
          <SuperAppCard p={superApp} />
        </Reveal>
        <Reveal delay={260}>
          <ModoApiCard p={api} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   1. Public Explorer — HERO (2x2)
   Faux live-ledger ticker as the visual signature
   ============================================================ */
const TICKER_ROWS = [
  { kind: "PARTY", id: "0x4f8a…3a2c", t: "09:42:11" },
  { kind: "TOKEN", id: "Canton Coin", t: "09:42:09" },
  { kind: "VALIDATOR", id: "vali-0x7c3a", t: "09:42:07" },
  { kind: "GOV", id: "VOTE-1217", t: "09:41:58" },
  { kind: "TX", id: "0x9b2d…74ef", t: "09:41:53" },
];

const PUBLIC_CONSTELLATION: ReadonlyArray<ConstellationNode> = [
  { slug: "canton", top: "6%", left: "54%", size: 64, opacity: 0.16 },
  { slug: "silvana", top: "4%", left: "82%", size: 26, opacity: 0.14 },
  { slug: "iota", top: "14%", left: "93%", size: 22, opacity: 0.15 },
  { slug: "sui", top: "22%", left: "63%", size: 38, opacity: 0.13 },
  { slug: "mina", top: "26%", left: "82%", size: 30, opacity: 0.13 },
  { slug: "ika", top: "32%", left: "94%", size: 24, opacity: 0.11 },
  { slug: "walrus", top: "36%", left: "70%", size: 34, opacity: 0.10 },
  { slug: "zeko", top: "42%", left: "58%", size: 22, opacity: 0.09 },
];

function PublicExplorerCard({ p }: { p: Product }) {
  return (
    <SpotlightCard className={`${CARD_BASE} p-6 md:p-8`}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(244,134,86,0.10), transparent 60%)",
        }}
      />

      <NetworkConstellation nodes={PUBLIC_CONSTELLATION} />

      <div className="relative flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-success anim-pulse" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
          {p.idx} · live
        </span>
      </div>

      <div className="relative mt-10 md:mt-14 max-w-md">
        <h3 className="font-display font-medium tracking-tight text-3xl md:text-4xl">
          {p.title}
        </h3>
        <p className="text-fg-muted mt-3 text-base md:text-lg leading-relaxed">
          {p.tagline}
        </p>
      </div>

      {/* Faux live ledger */}
      <div className="relative mt-8 md:mt-10 flex-1 flex flex-col gap-0">
        <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-widest text-fg-dim border-b border-line pb-2 mb-1">
          <span>Last entries</span>
          <span>ledger · mainnet</span>
        </div>
        {TICKER_ROWS.map((row, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between gap-3 py-2 font-mono text-[12px] tabular border-b border-line/60 last:border-b-0"
            style={{
              opacity: i === 0 ? 1 : Math.max(0.4, 1 - i * 0.13),
            }}
          >
            <span className="text-accent shrink-0 w-20">{row.kind}</span>
            <span className="text-fg-muted truncate flex-1">{row.id}</span>
            <span className="text-fg-dim shrink-0">{row.t}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-6 pt-4 border-t border-line">
        <NetworkRow networks={p.networks} />
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   2. Private Explorer — WIDE TOP-RIGHT (2x1)
   Locked workspace motif: blurred faux records on the right
   ============================================================ */
function PrivateExplorerCard({ p }: { p: Product }) {
  return (
    <SpotlightCard className={`${CARD_BASE} p-6 md:p-7`}>
      {/* Blurred private-data backdrop on the right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 bottom-0 w-3/5 pointer-events-none overflow-hidden"
      >
        <div className="font-mono text-[10px] leading-tight text-fg-dim/35 select-none whitespace-pre absolute right-0 top-2 -rotate-3 scale-105">
          {Array.from({ length: 8 })
            .map(
              (_, i) =>
                `█████████ ${String(1234 + i * 17).padStart(5, "0")} ████████ █████`,
            )
            .join("\n")}
        </div>
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            background: "var(--scrim-private-blur)",
          }}
        />
        {/* Canton mark watermark — single supported network */}
        <span
          className="absolute top-1/2 right-10 -translate-y-1/2 hidden md:inline-flex text-fg-muted"
          style={{ opacity: 0.12 }}
        >
          <IconCantonLogo width={160} height={160} />
        </span>
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2">
          <span className="text-warning">
            <LockIcon />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-warning">
            {p.idx} · private
          </span>
        </div>

        <h3 className="font-display font-medium tracking-tight text-2xl md:text-3xl mt-6 max-w-sm">
          {p.title}
        </h3>
        <p className="text-fg-muted mt-2 text-sm md:text-base leading-relaxed max-w-md">
          {p.tagline}
        </p>

        <div className="mt-auto pt-5">
          <NetworkRow networks={p.networks} />
        </div>
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   3. Super-App — SMALL (1x1)
   Mini grid of tiles representing connected products
   ============================================================ */
const SUPERAPP_CONSTELLATION: ReadonlyArray<ConstellationNode> = [
  { slug: "canton", top: "6%", left: "62%", size: 38, opacity: 0.18 },
  { slug: "iota", top: "8%", left: "90%", size: 14, opacity: 0.16 },
  { slug: "sui", top: "20%", left: "82%", size: 22, opacity: 0.16 },
  { slug: "walrus", top: "28%", left: "68%", size: 20, opacity: 0.13 },
  { slug: "mina", top: "30%", left: "92%", size: 16, opacity: 0.14 },
];

function SuperAppCard({ p }: { p: Product }) {
  return (
    <SpotlightCard className={`${CARD_BASE} p-6`}>
      <NetworkConstellation nodes={SUPERAPP_CONSTELLATION} />
      {/* 3x3 mini grid — one cell coral as "you are here" */}
      <div className="relative grid grid-cols-3 gap-1 w-fit">
        {Array.from({ length: 9 }).map((_, i) => {
          const accent = i === 4;
          const dim = i === 1 || i === 3 || i === 5 || i === 7;
          return (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-[3px] ${
                accent
                  ? "bg-accent"
                  : dim
                    ? "bg-line-strong"
                    : "bg-line"
              }`}
            />
          );
        })}
      </div>

      <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim mt-8">
        {p.idx} · unified
      </span>
      <h3 className="font-display font-medium tracking-tight text-2xl mt-2">
        {p.title}
      </h3>
      <p className="text-fg-muted text-sm mt-2 leading-relaxed">
        {p.tagline}
      </p>

      <div className="mt-auto pt-4 border-t border-line/60">
        <NetworkRow networks={p.networks} />
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   4. Modo API — SMALL (1x1)
   Code snippet as the visual centerpiece
   ============================================================ */
const API_CONSTELLATION: ReadonlyArray<ConstellationNode> = [
  { slug: "canton", top: "6%", left: "60%", size: 36, opacity: 0.18 },
  { slug: "iota", top: "10%", left: "92%", size: 14, opacity: 0.16 },
  { slug: "sui", top: "20%", left: "80%", size: 22, opacity: 0.15 },
  { slug: "walrus", top: "26%", left: "94%", size: 16, opacity: 0.13 },
  { slug: "mina", top: "24%", left: "66%", size: 18, opacity: 0.14 },
];

function ModoApiCard({ p }: { p: Product }) {
  return (
    <SpotlightCard className={`${CARD_BASE} p-6`}>
      <NetworkConstellation nodes={API_CONSTELLATION} />
      <span className="relative font-mono text-[11px] uppercase tracking-widest text-accent">
        {p.idx} · api
      </span>

      <h3 className="font-display font-medium tracking-tight text-2xl mt-8">
        {p.title}
      </h3>
      <p className="text-fg-muted text-sm mt-2 leading-relaxed">
        {p.tagline}
      </p>

      <pre className="mt-6 rounded-md border border-line bg-bg/60 p-3 font-mono text-[11px] leading-relaxed tabular text-fg-muted overflow-hidden">
        <span className="text-accent">GET</span> /v1/parties/get-party-details
        {"\n"}
        <span className="text-fg-dim">  ?party_id=</span>
        <span>0x4f…3a</span>
        {"\n"}
        <span className="text-success">→ 200 OK</span>{" "}
        <span className="text-fg-dim">· 42 ms</span>
      </pre>

      <div className="mt-auto pt-4">
        <NetworkRow networks={p.networks} />
      </div>
    </SpotlightCard>
  );
}
