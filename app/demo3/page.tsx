import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/app/components/sections/nav";
import { Footer } from "@/app/components/sections/footer";
import { Reveal } from "@/app/components/reveal";
import { ArrowTopRight } from "@/app/components/icons";
import { PRODUCTS, type Product } from "@/app/lib/content";
import banner from "../demo2/banner.png";
import productsImg from "../demo2/products.png";
import { SpotlightOverlay } from "./spotlight-overlay";

export const metadata: Metadata = {
  title: "Demo 3",
  description:
    "End-to-end Web3 data platform to get on-chain data, gain in-depth network intelligence, and build powerful apps.",
  alternates: { canonical: "/demo3" },
};

const FIGURE_NAMES = ["Sphere", "Cube", "Pyramid", "Cube", "Prism"] as const;

export default function Demo3Page() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden border-b border-line">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute inset-0 anim-ken-burns">
              <Image
                src={banner}
                alt=""
                fill
                priority
                sizes="100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
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
            <Reveal variant="left">
              <div className="flex items-center gap-4 mb-10 md:mb-14">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  00
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
                  / OVERVIEW
                </span>
                <div className="flex-1 h-px bg-line" />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-accent mb-8">
                Enterprise infrastructure for the new financial stack
              </p>
            </Reveal>

            <Reveal delay={160}>
              <h1
                className="font-display font-medium tracking-tightest text-fg"
                style={{
                  fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
                  lineHeight: 0.96,
                }}
              >
                Ultimate Blockchain
              </h1>
            </Reveal>
            <Reveal delay={320} variant="scale">
              <span
                className="block font-display font-extralight tracking-tight text-accent"
                style={{
                  fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.03em",
                }}
              >
                Data Hub
              </span>
            </Reveal>

            <Reveal delay={480} variant="right">
              <p className="mt-10 max-w-2xl text-lg md:text-xl text-fg-muted leading-relaxed">
                End-to-end Web3 data platform to get on-chain data, gain
                in-depth network intelligence, and build powerful apps.
              </p>
            </Reveal>
          </div>
        </section>

        <ProductsBackdrop />
      </main>
      <Footer />
    </>
  );
}

function ProductsBackdrop() {
  return (
    <section
      id="products"
      className="relative border-t border-line overflow-hidden"
    >
      {/* ---- Mobile heading block (above the image) ---- */}
      <div className="md:hidden relative mx-auto max-w-7xl px-6 pt-16 pb-10">
        <Reveal variant="left">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              01
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
              / PRODUCTS
            </span>
            <div className="flex-1 h-px bg-line" />
          </div>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <h2 className="font-display font-medium text-4xl tracking-tightest text-fg mb-6 leading-[0.98]">
            Five shapes.
            <br />
            One{" "}
            <em className="font-serif italic font-normal text-accent">
              ground-truth
            </em>{" "}
            data layer.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="text-base text-fg-muted leading-relaxed">
            Sphere, cubes, pyramid, prism — five renderings of one
            Canton-native engine.
          </p>
        </Reveal>
      </div>

      {/* ---- Image as backdrop ---- */}
      <div className="relative w-full aspect-[4/3] md:aspect-[2720/1536] bg-bg overflow-hidden">
        <div className="absolute inset-0 anim-ken-burns">
          <Image
            src={productsImg}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        {/* Cursor-tracked coral spotlight (desktop-only effect, client) */}
        <SpotlightOverlay size={520} className="hidden md:block" />

        {/* Dark gate — heavier at top (heading zone) + bottom (ribbon seam) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,3,9,0.82) 0%, rgba(2,3,9,0.35) 32%, rgba(2,3,9,0.2) 58%, rgba(2,3,9,0.9) 100%)",
          }}
        />

        {/* Desktop content overlay on the image */}
        <div className="hidden md:flex absolute inset-0">
          <div className="relative mx-auto max-w-7xl w-full px-6 pt-16 lg:pt-20">
            <Reveal variant="left">
              <div className="flex items-center gap-4 mb-10 lg:mb-14">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  01
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
                  / PRODUCTS
                </span>
                <div className="flex-1 h-px bg-line/40" />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-12 gap-6 md:gap-10 max-w-6xl">
              <Reveal delay={160} variant="scale" className="md:col-span-7">
                <h2
                  className="font-display font-medium tracking-tightest text-fg"
                  style={{
                    fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                    lineHeight: 0.98,
                  }}
                >
                  Five shapes.
                  <br />
                  One{" "}
                  <em className="font-serif italic font-normal text-accent">
                    ground-truth
                  </em>{" "}
                  data layer.
                </h2>
              </Reveal>
              <Reveal delay={320} variant="right" className="md:col-span-5">
                <p className="max-w-md text-base lg:text-lg text-fg-muted leading-relaxed md:mt-3">
                  Sphere, cubes, pyramid, prism — five renderings of one
                  Canton-native engine.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Shape index markers — drop ticks from each figure into the ribbon below */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 hidden md:block">
          {PRODUCTS.map((p, i) => {
            const positions = ["18%", "37%", "53%", "69%", "85%"];
            return (
              <div
                key={p.idx}
                className="absolute bottom-0 flex flex-col items-center gap-1 font-mono text-[10px] tracking-widest text-accent anim-float-y"
                style={{
                  left: positions[i],
                  transform: "translateX(-50%)",
                  animationDelay: `${i * 280}ms`,
                }}
              >
                <span>{p.idx}</span>
                <span
                  className="h-8 w-px bg-gradient-to-b from-accent/60 to-accent anim-tick-drop"
                  style={{ animationDelay: `${500 + i * 120}ms` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ---- Ribbon: 5 products, attached directly under image ---- */}
      <div className="relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-line">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.idx} delay={i * 90} variant="scale">
              <RibbonEntry product={p} shape={FIGURE_NAMES[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RibbonEntry({
  product,
  shape,
}: {
  product: Product;
  shape: string;
}) {
  const isExternal = product.href.startsWith("http");
  const host = isExternal ? new URL(product.href).host : "Coming soon";

  return (
    <a
      href={product.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group relative flex h-full flex-col gap-4 p-6 md:p-7 lg:p-8 hover:bg-surface/60 transition-colors"
    >
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

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-line/60">
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

