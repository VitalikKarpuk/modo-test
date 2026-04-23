import { Reveal } from "@/app/components/reveal";
import { ArrowRight, ArrowTopRight } from "@/app/components/icons";
import { SITE } from "@/app/lib/content";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative border-t border-line overflow-hidden"
    >
      <div className="noise" />
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[460px] w-[900px] rounded-full anim-glow"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
        <Reveal>
          <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-accent mb-6">
            Ready when you are
          </p>
          <h2
            className="font-display font-medium tracking-tightest text-fg mb-8"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.25rem)",
              lineHeight: 0.98,
            }}
          >
            Build on{" "}
            <em className="font-serif italic font-normal text-accent">
              ground truth
            </em>
            .
            <br />
            Not approximations.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-fg-muted leading-relaxed mb-12">
            Talk to our team about deploying Modo on your validator, migrating
            an existing explorer, or integrating the API into your product.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Contact sales
              <div className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </div>
            </a>
            <a
              href={SITE.docsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full border border-line text-fg text-sm font-medium hover:border-line-strong hover:bg-surface transition-colors"
            >
              Explore the API
              <div className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowTopRight />
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
