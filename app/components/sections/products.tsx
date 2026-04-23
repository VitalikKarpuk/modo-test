import { Reveal } from "@/app/components/reveal";
import { Section } from "@/app/components/section";
import { SpotlightCard } from "@/app/components/spotlight-card";
import { ArrowTopRight, PRODUCT_ICONS } from "@/app/components/icons";
import { PRODUCTS, type Product } from "@/app/lib/content";

export function Products() {
  return (
    <Section id="products" label="PRODUCTS" index="01">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mb-16">
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter text-fg">
            Five products.
            <br />
            One{" "}
            <em className="font-serif italic font-normal text-accent">
              ground-truth
            </em>{" "}
            data layer.
          </h2>
          <p className="text-lg text-fg-muted leading-relaxed md:mt-4">
            Every surface shares the same indexed ledger, so explorer, wallet,
            super-app and API never drift. No fragmentation. No reconciliation.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-fr">
        {PRODUCTS.map((p, i) => (
          <Reveal
            key={p.idx}
            delay={80 * i}
            className={
              p.featured
                ? "lg:col-span-2 lg:row-span-2"
                : "lg:col-span-1 lg:row-span-1"
            }
          >
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = PRODUCT_ICONS[product.iconKey];
  const isExternal = product.href.startsWith("http");
  return (
    <SpotlightCard
      href={product.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`h-full flex flex-col justify-between gap-8 p-6 md:p-8 rounded-2xl bg-surface border border-line hover:border-line-strong transition-colors duration-300 overflow-hidden ${
        product.featured ? "min-h-[380px] md:min-h-[480px]" : "min-h-[240px]"
      }`}
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-surface-2 border border-line text-accent overflow-hidden">
          <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
            <Icon />
          </div>
        </div>
        <span className="font-mono text-xs text-fg-dim tracking-widest">
          {product.idx}
        </span>
      </div>

      <div className="relative flex-1 flex flex-col gap-4">
        <h3
          className={`font-display font-medium tracking-tight text-fg ${
            product.featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {product.title}
        </h3>
        <p
          className={`text-fg-muted leading-relaxed ${
            product.featured ? "text-base md:text-lg max-w-md" : "text-sm"
          }`}
        >
          {product.tagline}
        </p>

        {product.featured && (
          <ul className="mt-2 space-y-2">
            {product.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-sm text-fg-muted"
              >
                <span className="h-px w-4 bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative flex items-center justify-between pt-4 border-t border-line/60">
        <span className="font-mono text-xs uppercase tracking-widest text-fg-dim">
          {isExternal ? new URL(product.href).host : "Coming soon"}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-fg group-hover:bg-accent group-hover:text-ink-950 group-hover:border-accent transition-all">
          <div className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowTopRight />
          </div>
        </span>
      </div>
    </SpotlightCard>
  );
}
