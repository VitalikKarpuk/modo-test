import { Reveal } from "@/app/components/reveal";
import { Counter } from "@/app/components/counter";
import { Section } from "@/app/components/section";
import { SpotlightCard } from "@/app/components/spotlight-card";
import {
  IconAgentic,
  IconDvP,
  IconRecurring,
} from "@/app/components/icons";
import { TECH_TAGS } from "@/app/lib/content";

export function EnterpriseStack() {
  return (
    <Section id="enterprise" label="ENTERPRISE" index="03">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mb-12 md:mb-16">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-fg">
            Built for the teams
            <br />
            that{" "}
            <em className="font-serif italic font-normal text-accent">
              can&rsquo;t afford
            </em>{" "}
            to be wrong.
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed md:mt-4">
            Every institutional-grade primitive — signed agents, atomic
            settlement, party-verified data, recurring payments — ready out of
            the box on your validator.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:auto-rows-[220px]">
        <Reveal delay={0} className="md:col-span-1 md:row-span-1">
          <BentoShell>
            <BentoHeader num="01" icon={<IconAgentic />} />
            <BentoTitle>Agentic execution</BentoTitle>
            <BentoDesc>
              Ed25519-signed agent calls, async orchestration, programmable
              external accounts.
            </BentoDesc>
          </BentoShell>
        </Reveal>

        <Reveal delay={60} className="md:col-span-1 md:row-span-1">
          <BentoShell>
            <BentoHeader num="02" icon={<IconDvP />} />
            <BentoTitle>DvP settlement</BentoTitle>
            <BentoDesc>
              Atomic delivery-versus-payment with amulet allocation and fee
              management.
            </BentoDesc>
          </BentoShell>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2 md:row-span-2">
          <FeaturedLiveIndex />
        </Reveal>

        <Reveal delay={180} className="md:col-span-1 md:row-span-1">
          <BentoShell variant="quote">
            <BentoHeader num="03" />
            <p className="relative font-serif italic text-lg md:text-xl leading-snug text-fg">
              What&rsquo;s{" "}
              <span className="text-accent">invisible publicly</span> becomes
              observable privately.
            </p>
            <span className="relative mt-auto font-mono text-[11px] uppercase tracking-widest text-fg-dim">
              Party-verified data
            </span>
          </BentoShell>
        </Reveal>

        <Reveal delay={240} className="md:col-span-1 md:row-span-1">
          <BentoShell>
            <BentoHeader num="04" icon={<IconRecurring />} />
            <BentoTitle>Recurring payments</BentoTitle>
            <BentoDesc>
              Prepaid and pay-as-you-go subscriptions. Batch transfers,
              pre-approvals.
            </BentoDesc>
          </BentoShell>
        </Reveal>

        <Reveal delay={300} className="md:col-span-2 md:row-span-1">
          <BentoShell>
            <BentoHeader num="05" />
            <div className="relative flex flex-col md:flex-row md:items-end gap-6 md:gap-8 flex-1">
              <div className="flex-1 flex flex-col gap-3">
                <BentoTitle>Historic index</BentoTitle>
                <BentoDesc>
                  Block-level retention. Query any state at any offset. Full
                  REST + streaming from any ledger offset.
                </BentoDesc>
              </div>
              <Timeline />
            </div>
          </BentoShell>
        </Reveal>

        <Reveal delay={360} className="md:col-span-2 md:row-span-1">
          <BentoShell>
            <BentoHeader num="06" />
            <div className="relative flex flex-col md:flex-row md:items-end gap-6 md:gap-8 flex-1">
              <div className="flex-1 flex flex-col gap-3">
                <BentoTitle>Portfolio &amp; transfers</BentoTitle>
                <BentoDesc>
                  Normalized multi-chain holdings, signed audit exports,
                  SOC&nbsp;2-ready infrastructure.
                </BentoDesc>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono tabular text-5xl md:text-6xl font-medium text-accent leading-none">
                  11
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
                  networks
                  <br />
                  tracked
                </span>
              </div>
            </div>
          </BentoShell>
        </Reveal>
      </div>

      <Reveal>
        <ul className="mt-12 md:mt-16 flex flex-wrap gap-2 md:gap-3 text-xs font-mono">
          {TECH_TAGS.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1.5 rounded-full border border-line text-fg-muted tracking-wider"
            >
              {tag}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* -------- Bento primitives (kept local; not reused elsewhere) -------- */

function BentoShell({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "quote";
}) {
  const base =
    "h-full flex flex-col gap-4 p-6 md:p-7 rounded-2xl border border-line transition-colors overflow-hidden";
  const bg =
    variant === "quote"
      ? "bg-surface-2 hover:border-line-strong"
      : "bg-surface hover:border-line-strong";
  return (
    <SpotlightCard radius={360} className={`${base} ${bg}`}>
      {children}
    </SpotlightCard>
  );
}

function BentoHeader({
  num,
  icon,
}: {
  num: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="relative flex items-start justify-between">
      {icon ? (
        <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-bg border border-line text-accent overflow-hidden">
          <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">
            {icon}
          </div>
        </div>
      ) : (
        <span />
      )}
      <span className="font-mono text-[11px] text-fg-dim tracking-widest">
        / {num}
      </span>
    </div>
  );
}

function BentoTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative font-display text-xl md:text-2xl font-medium tracking-tight text-fg">
      {children}
    </h3>
  );
}

function BentoDesc({ children }: { children: React.ReactNode }) {
  return (
    <p className="relative text-sm text-fg-muted leading-relaxed">
      {children}
    </p>
  );
}

function Timeline() {
  return (
    <div className="relative shrink-0 w-full md:w-48">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-line" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-accent"
            style={{
              opacity: 0.25 + i * 0.15,
              animation: "pulse-dot 2.4s ease-in-out infinite",
              animationDelay: `${i * 180}ms`,
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-fg-dim tracking-wider uppercase">
        <span>t-∞</span>
        <span>now</span>
      </div>
    </div>
  );
}

function FeaturedLiveIndex() {
  return (
    <SpotlightCard
      radius={540}
      className="relative h-full flex flex-col gap-6 p-6 md:p-8 rounded-2xl border border-line bg-surface-2 hover:border-line-strong transition-colors overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-glow), transparent 70%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent anim-pulse" />
          <span className="font-mono text-[11px] text-fg-dim tracking-widest uppercase">
            Live · canton mainnet
          </span>
        </div>
        <span className="font-mono text-[11px] text-fg-dim tracking-widest">
          / 03
        </span>
      </div>

      <div className="relative flex flex-col gap-3">
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-fg">
          Deep indexing.
          <br />
          <em className="font-serif italic font-normal text-fg-muted">
            No blind spots.
          </em>
        </h3>
        <p className="text-sm md:text-base text-fg-muted leading-relaxed max-w-md">
          Every contract, party, token and transaction — including private
          state only visible inside your node.
        </p>
      </div>

      <div className="relative mt-auto grid grid-cols-2 gap-x-6 gap-y-4 pt-5 border-t border-line">
        <BentoStat
          label="Contracts"
          value={<Counter to={4.8e6} format="compact" />}
        />
        <BentoStat
          label="Parties"
          value={<Counter to={128_430} format="int" />}
        />
        <BentoStat
          label="Tokens"
          value={<Counter to={3_420} format="int" />}
        />
        <BentoStat
          label="Transfers / 24h"
          value={<Counter to={892_104} format="int" />}
        />
      </div>
    </SpotlightCard>
  );
}

function BentoStat({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-2xl md:text-3xl font-medium text-fg tabular leading-none">
        {value}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        {label}
      </span>
    </div>
  );
}
