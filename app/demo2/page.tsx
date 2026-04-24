import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/app/components/sections/nav";
import { Footer } from "@/app/components/sections/footer";
import { Reveal } from "@/app/components/reveal";
import { ArrowTopRight } from "@/app/components/icons";
import { PRODUCTS, type Product } from "@/app/lib/content";
import banner from "./banner.png";
import productsImg from "./products.png";

export const metadata: Metadata = {
  title: "Demo 2",
  description:
    "End-to-end Web3 data platform to get on-chain data, gain in-depth network intelligence, and build powerful apps.",
  alternates: { canonical: "/demo2" },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <Image
              src={banner}
              alt=""
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(2,3,9,0.72) 0%, rgba(2,3,9,0.5) 22%, rgba(2,3,9,0.6) 70%, rgba(2,3,9,0.98) 100%)",
              }}
            />
          </div>
          <div className="grid-bg" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-16 h-[420px] w-[420px] rounded-full anim-glow"
            style={{
              background:
                "radial-gradient(closest-side, var(--accent-glow), transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-32 pb-24 md:pb-40">
            <Reveal>
              <div className="flex items-center gap-4 mb-10 md:mb-14">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  00
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
                  / PRICING
                </span>
                <div className="flex-1 h-px bg-line" />
              </div>
            </Reveal>

            <Reveal>
              <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-accent mb-8">
                Enterprise infrastructure for the new financial stack
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="font-display font-medium tracking-tightest text-fg"
                style={{
                  fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
                  lineHeight: 0.96,
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
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-10 max-w-2xl text-lg md:text-xl text-fg-muted leading-relaxed">
                End-to-end Web3 data platform to get on-chain data, gain
                in-depth network intelligence, and build powerful apps.
              </p>
            </Reveal>
          </div>
        </section>

        <ProductsExhibit />
      </main>
      <Footer />
    </>
  );
}

const FIGURE_NAMES = ["Sphere", "Cube", "Pyramid", "Cube", "Prism"] as const;

function ProductsExhibit() {
  return (
    <section id="products" className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <Reveal>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              01
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
              / PRODUCTS
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mb-12 md:mb-16">
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-fg">
              Five shapes.
              <br />
              One{" "}
              <em className="font-serif italic font-normal text-accent">
                ground-truth
              </em>{" "}
              data layer.
            </h2>
            <p className="text-lg text-fg-muted leading-relaxed md:mt-4">
              Sphere, cubes, pyramid, prism — every surface shares the same
              indexed ledger. No fragmentation, no reconciliation, just one
              Canton-native engine rendered five different ways.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-24 -bottom-10 h-20 rounded-[50%] blur-3xl opacity-60"
              style={{ background: "var(--accent-glow)" }}
            />

            <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-line bg-bg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              {/* image with editorial markers floating over */}
              <div className="relative">
                <Image
                  src={productsImg}
                  alt="Five Modo products rendered as five shapes"
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  placeholder="blur"
                  className="block h-auto w-full"
                />

                {/* Eyebrow counter top-left */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3 font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-fg-dim">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-accent anim-pulse" />
                  </span>
                  <span className="text-accent">05</span>
                  <span className="text-fg-dim/70">/</span>
                  <span>shapes</span>
                </div>

                {/* Shape index markers — one per figure, positioned by approximate x of the figure */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full hidden md:block">
                  {PRODUCTS.map((p, i) => {
                    const positions = ["18%", "37%", "53%", "69%", "85%"];
                    return (
                      <div
                        key={p.idx}
                        className="absolute bottom-4 flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest text-accent"
                        style={{ left: positions[i], transform: "translateX(-50%)" }}
                      >
                        <span className="h-4 w-px bg-accent/60" />
                        <span>{p.idx}</span>
                      </div>
                    );
                  })}
                </div>

                {/* top vignette / bottom vignette */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -60px 80px -40px rgba(2,3,9,0.6)",
                  }}
                />
              </div>

              {/* legend: 5 columns, one per product, aligned under the figures */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 border-t border-line">
                {PRODUCTS.map((p, i) => (
                  <FigureCell
                    key={p.idx}
                    product={p}
                    shape={FIGURE_NAMES[i]}
                    isLast={i === PRODUCTS.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FigureCell({
  product,
  shape,
  isLast,
}: {
  product: Product;
  shape: string;
  isLast: boolean;
}) {
  const isExternal = product.href.startsWith("http");
  const host = isExternal ? new URL(product.href).host : "Coming soon";

  return (
    <a
      href={product.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`group relative flex flex-col gap-4 p-6 md:p-7 bg-surface hover:bg-surface-2 transition-colors overflow-hidden ${
        isLast ? "" : "border-b md:border-b-0 md:border-r border-line"
      }`}
    >
      {/* coral drop tick at top — visually "falls" from the figure above */}
      <span
        aria-hidden
        className="absolute top-0 left-6 md:left-7 h-6 w-px bg-accent/70 origin-top scale-y-100 md:scale-y-100 transition-transform duration-500 group-hover:bg-accent"
      />

      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
          {product.idx}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim">
          {shape}
        </span>
      </div>

      <h3 className="font-display text-xl md:text-[1.375rem] font-medium tracking-tight text-fg leading-tight">
        {product.title}
      </h3>

      <p className="text-sm text-fg-muted leading-relaxed flex-1">
        {product.tagline}
      </p>

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-line/70">
        <span className="font-mono text-[10px] uppercase tracking-widest text-fg-dim truncate">
          {host}
        </span>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line text-fg shrink-0 group-hover:bg-accent group-hover:text-ink-950 group-hover:border-accent transition-all">
          <div className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowTopRight />
          </div>
        </span>
      </div>
    </a>
  );
}

