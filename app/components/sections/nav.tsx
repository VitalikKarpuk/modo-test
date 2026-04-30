import Link from "next/link";
import { Logo } from "@/app/components/logo";
import { ProductsDropdown } from "@/app/components/products-dropdown";
import { ThemeToggle } from "@/app/components/theme-toggle";

const ANCHORS = [
  { href: "/#products", label: "Products" },
  { href: "/#explorers", label: "Explorers" },
  { href: "/#api", label: "API" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 frost border-b border-line">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand + ambient status */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Modo" className="flex items-center text-fg">
            <Logo className="h-5 w-auto" />
          </Link>
          <ProductsDropdown />
          <span
            aria-hidden
            className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-dim ml-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success anim-pulse" />
            live
          </span>
        </div>

        {/* Primary nav */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm text-fg-muted"
          aria-label="Primary"
        >
          {ANCHORS.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="hover:text-fg transition-colors"
            >
              {a.label}
            </Link>
          ))}
          <span aria-hidden className="h-3 w-px bg-line" />
          <a
            href="https://docs.modo.link/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors flex items-center gap-1"
          >
            Docs
            <span className="text-fg-dim text-xs leading-none">↗</span>
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
