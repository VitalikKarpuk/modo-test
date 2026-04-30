import Image from "next/image";
import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { SpotlightCard } from "@/app/components/spotlight-card";
import {
  ArrowTopRight,
  IconIkaNet,
  IconIotaNet,
  IconMinaNet,
  IconSuiNet,
  IconWalrusNet,
  IconZekoNet,
  LockIcon,
} from "@/app/components/icons";
import { EXPLORERS, type Explorer } from "@/app/lib/content";

const CARD_BASE =
  "group relative h-full flex flex-col rounded-2xl bg-surface border border-line hover:border-line-strong transition-colors duration-300 overflow-hidden";

const INDEXED_CHIPS = [
  "PARTIES",
  "TOKENS",
  "VALIDATORS",
  "GOVERNANCE",
  "TRANSFERS",
  "APPS",
];

export function Explorers() {
  const [pub, priv, sui, walrus, ika, iota, mina, zeko] = EXPLORERS;
  return (
    <Section id="explorers" label="EXPLORERS" index="02">
      <Reveal>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:gap-10 max-w-5xl mb-16">
          <h2 className="font-display font-medium text-4xl lg:text-5xl tracking-tighter text-fg">
            <span className="whitespace-nowrap">
              Explorer-as-a-
              <em className="font-serif italic font-normal text-accent">
                Service
              </em>
              .
            </span>
            <br />
            One shared stack.
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed lg:mt-4 max-w-xl">
            Modo CC for Canton, plus chain-specific instances across Sui,
            Walrus, Ika, IOTA, Mina and Zeko — consistent UX, network-native
            capabilities.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto] gap-3 md:gap-4 auto-rows-[minmax(180px,auto)] lg:auto-rows-[minmax(220px,1fr)]">
        {/* Hero — Modo CC Public, 2x2 */}
        <Reveal className="lg:col-span-2 lg:row-span-2">
          <FlagshipCard e={pub} />
        </Reveal>

        {/* Modo CC Private — 2x1 */}
        <Reveal delay={80} className="md:col-span-2 lg:col-span-2 lg:row-span-1">
          <PrivateCard e={priv} />
        </Reveal>

        {/* Sui ecosystem pair — 1x1 each */}
        <Reveal delay={140}>
          <CompactCard e={sui} mark={<IconSuiNet />} />
        </Reveal>
        <Reveal delay={180}>
          <CompactCard e={walrus} mark={<IconWalrusNet />} />
        </Reveal>

        {/* Bottom row — 4 small cards */}
        <Reveal delay={220}>
          <CompactCard e={ika} mark={<IconIkaNet />} />
        </Reveal>
        <Reveal delay={260}>
          <CompactCard e={iota} mark={<IconIotaNet />} />
        </Reveal>
        <Reveal delay={300}>
          <CompactCard e={mina} mark={<IconMinaNet />} />
        </Reveal>
        <Reveal delay={340}>
          <CompactCard e={zeko} mark={<IconZekoNet />} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   1. Flagship — Modo CC Public (2x2 hero)
   ============================================================ */
function FlagshipCard({ e }: { e: Explorer }) {
  return (
    <SpotlightCard
      href={e.href}
      target="_blank"
      rel="noreferrer"
      className={`${CARD_BASE} p-6 md:p-8`}
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/modoCC2.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--scrim-image)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 0% 100%, var(--accent-glow), transparent 60%)",
          }}
        />
      </div>

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-success anim-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
            EaaS · native · live
          </span>
        </div>
        <span className="text-fg-dim group-hover:text-accent transition-colors">
          <ArrowTopRight />
        </span>
      </div>

      <div className="relative mt-10 md:mt-14 max-w-md">
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
          {e.network}
        </span>
        <h3 className="font-display font-medium tracking-tight text-3xl md:text-5xl mt-3">
          {e.name}
        </h3>
        <p className="text-fg-muted mt-3 text-base md:text-lg leading-relaxed">
          Modo's native public explorer for Canton — parties, tokens,
          validators and governance, indexed in real time.
        </p>
      </div>

      <div className="relative mt-10 flex flex-wrap gap-1.5">
        {INDEXED_CHIPS.map((c) => (
          <span
            key={c}
            className="inline-flex items-center px-2.5 py-1 rounded-md border border-line bg-surface-2/60 font-mono text-[10.5px] uppercase tracking-widest text-fg-muted"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="relative mt-auto pt-6 flex items-center justify-between font-mono text-[11px] tabular text-fg-dim">
        <span>{e.host}</span>
        <span className="uppercase tracking-widest text-success">
          {e.access}
        </span>
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   2. Private — Modo CC Private (2x1)
   ============================================================ */
function PrivateCard({ e }: { e: Explorer }) {
  return (
    <SpotlightCard
      href={e.href}
      target="_blank"
      rel="noreferrer"
      className={`${CARD_BASE} p-6 md:p-7`}
    >
      {/* <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/private.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--scrim-image-105)" }}
        />
      </div> */}

      {/* dotted "scoped" pattern decoration on right edge */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-0 w-32 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--line-strong) 1px, transparent 1.5px)",
          backgroundSize: "10px 10px",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 60%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 60%, black 100%)",
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-warning">
            <LockIcon />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-warning">
            EaaS · subscription
          </span>
        </div>
        <span className="text-fg-dim group-hover:text-accent transition-colors">
          <ArrowTopRight />
        </span>
      </div>

      <div className="relative mt-6 max-w-md">
        <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
          {e.network}
        </span>
        <h3 className="font-display font-medium tracking-tight text-2xl md:text-3xl mt-2">
          {e.name}
        </h3>
        <p className="text-fg-muted mt-2 text-sm md:text-base leading-relaxed">
          Confidential workspace for institutions — same indexed ledger, scoped
          to authorized parties.
        </p>
      </div>

      <div className="relative mt-auto pt-5 flex items-center justify-between font-mono text-[11px] tabular text-fg-dim">
        <span>{e.host}</span>
        <span className="uppercase tracking-widest text-warning">
          {e.access}
        </span>
      </div>
    </SpotlightCard>
  );
}

/* ============================================================
   3. Compact — chain-specific explorers (1x1)
   Each gets a tiny ascii/geometric mark for bento variety.
   ============================================================ */
function CompactCard({ e, mark }: { e: Explorer; mark: React.ReactNode }) {
  return (
    <SpotlightCard
      href={e.href}
      target="_blank"
      rel="noreferrer"
      className={`${CARD_BASE} p-5 md:p-6`}
    >
      <div className="relative flex items-start justify-between">
        <span
          aria-hidden
          className="h-9 inline-flex items-center text-fg-muted group-hover:text-accent transition-colors duration-300"
        >
          {mark}
        </span>
        <span className="text-fg-dim group-hover:text-accent transition-colors">
          <ArrowTopRight />
        </span>
      </div>

      <div className="relative mt-6 flex flex-col gap-1.5">
        <span className="font-mono text-[10.5px] uppercase tracking-widest text-fg-dim">
          {e.network}
        </span>
        <h3 className="font-display font-medium tracking-tight text-xl md:text-2xl">
          {e.name}
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
          {e.role}
        </p>
      </div>

      <div className="relative mt-auto pt-4 border-t border-line/60 flex items-center justify-between font-mono text-[10.5px] tabular">
        <span className="text-fg-dim truncate">{e.host}</span>
        <span className="uppercase tracking-widest text-success/80">
          {e.access}
        </span>
      </div>
    </SpotlightCard>
  );
}

