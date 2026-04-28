import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { SpotlightCard } from "@/app/components/spotlight-card";
import {
  IconAgentic,
  IconDvP,
  IconMulticall,
  IconRecurring,
} from "@/app/components/icons";

export function AgenticStack() {
  return (
    <Section id="agentic" label="AGENTIC" index="03">
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
            settlement, party-scoped data, recurring payments — on Modo's
            shared infrastructure layer.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:auto-rows-[minmax(220px,auto)]">
        <Reveal delay={0} className="md:col-span-1 md:row-span-1">
          <BentoShell>
            <BentoHeader num="01" icon={<IconAgentic />} />
            <BentoTitle>Agentic execution</BentoTitle>
            <BentoDesc>
              Ed25519-signed calls, prepare-sign-execute lifecycle, end-to-end
              response signing.
            </BentoDesc>
            <LifecycleStrip steps={["Prepare", "Sign", "Execute"]} />
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
            <FooterStrip
              left="5-step flow"
              right={<span className="text-accent">atomic</span>}
            />
          </BentoShell>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2 md:row-span-2">
          <FeaturedLiveIndex />
        </Reveal>

        <Reveal delay={180} className="md:col-span-1 md:row-span-1">
          <BentoShell>
            <BentoHeader num="04" icon={<IconMulticall />} />
            <BentoTitle>Multi-call batching</BentoTitle>
            <BentoDesc>
              All sub-operations succeed or the entire batch is rolled back.
              Bundle transfers, splits, allocations and CIP-56 ops atomically.
            </BentoDesc>
            <OpsStrip ops={["transfer", "split", "allocate", "cip-56"]} />
          </BentoShell>
        </Reveal>

        <Reveal delay={240} className="md:col-span-1 md:row-span-1">
          <BentoShell>
            <BentoHeader num="05" icon={<IconRecurring />} />
            <BentoTitle>Recurring payments</BentoTitle>
            <BentoDesc>
              Prepaid and pay-as-you-go subscriptions. Pre-approvals settle
              automatically without manual acceptance.
            </BentoDesc>
            <ModesStrip
              left="Prepaid"
              right="Pay-as-you-go"
            />
          </BentoShell>
        </Reveal>

        <Reveal delay={300} className="md:col-span-2 md:row-span-1">
          <BentoShell>
            <BentoHeader num="06" />
            <div className="relative flex flex-col md:flex-row md:items-end gap-6 md:gap-8 flex-1">
              <div className="flex-1 flex flex-col gap-3">
                <BentoTitle>Historic index</BentoTitle>
                <BentoDesc>
                  Ledger-level retention. Query any state at any offset. Full
                  REST + streaming from any ledger offset.
                </BentoDesc>
              </div>
              <Timeline />
            </div>
          </BentoShell>
        </Reveal>

        <Reveal delay={360} className="md:col-span-2 md:row-span-1">
          <BentoShell>
            <BentoHeader num="07" />
            <div className="relative flex flex-col md:flex-row md:items-end gap-6 md:gap-8 flex-1">
              <div className="flex-1 flex flex-col gap-3">
                <BentoTitle>Portfolio &amp; transfers</BentoTitle>
                <BentoDesc>
                  Parties, accounts and transfer history in one structured
                  data view — normalized schema, paginated REST.
                </BentoDesc>
              </div>
              <div className="flex flex-wrap gap-1.5 md:max-w-[220px] md:justify-end">
                {[
                  "Multi-party",
                  "Structured schema",
                  "Paginated",
                ].map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-md border border-line bg-bg/40 font-mono text-[10.5px] uppercase tracking-widest text-fg-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </BentoShell>
        </Reveal>
      </div>

    </Section>
  );
}

/* -------- Bento primitives (kept local; not reused elsewhere) -------- */

function BentoShell({ children }: { children: React.ReactNode }) {
  return (
    <SpotlightCard
      radius={360}
      className="h-full flex flex-col gap-4 p-6 md:p-7 rounded-2xl border border-line bg-surface hover:border-line-strong transition-colors overflow-hidden"
    >
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

/* -------- Per-card footer micro-visuals (bento variety) -------- */

function FooterShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-auto pt-4 border-t border-line/60">
      {children}
    </div>
  );
}

function LifecycleStrip({ steps }: { steps: readonly string[] }) {
  return (
    <FooterShell>
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        {steps.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            {i > 0 && <span className="text-accent">→</span>}
            <span>{s}</span>
          </span>
        ))}
      </div>
    </FooterShell>
  );
}

function FooterStrip({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <FooterShell>
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </FooterShell>
  );
}

function OpsStrip({ ops }: { ops: readonly string[] }) {
  return (
    <FooterShell>
      <div className="flex flex-wrap gap-1">
        {ops.map((op) => (
          <span
            key={op}
            className="px-1.5 py-0.5 rounded font-mono text-[9.5px] uppercase tracking-widest bg-bg/60 border border-line/60 text-fg-muted"
          >
            {op}
          </span>
        ))}
      </div>
    </FooterShell>
  );
}

function ModesStrip({ left, right }: { left: string; right: string }) {
  return (
    <FooterShell>
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-sm bg-accent" />
          {left}
        </span>
        <span className="text-fg-dim/40">·</span>
        <span className="flex items-center gap-1.5">
          <span className="flex gap-[2px]">
            <span className="h-2 w-[3px] rounded-sm bg-accent/60" />
            <span className="h-2 w-[3px] rounded-sm bg-accent/60" />
            <span className="h-2 w-[3px] rounded-sm bg-accent/60" />
          </span>
          {right}
        </span>
      </div>
    </FooterShell>
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
        <BentoIndex primary="Contracts" secondary="+ events · updates" />
        <BentoIndex primary="Parties" secondary="+ accounts · types" />
        <BentoIndex primary="Tokens" secondary="+ market rates" />
        <BentoIndex primary="Validators" secondary="+ governance" />
      </div>
    </SpotlightCard>
  );
}

function BentoIndex({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-xl md:text-2xl font-medium text-fg leading-tight">
        {primary}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
        {secondary}
      </span>
    </div>
  );
}
