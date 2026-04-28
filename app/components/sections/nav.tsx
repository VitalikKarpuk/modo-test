import Image from "next/image";
import Link from "next/link";

const ANCHORS = [
  { href: "/#products", label: "Products" },
  { href: "/#explorers", label: "Explorers" },
  { href: "/#agentic", label: "Agentic" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 frost border-b border-line">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand + ambient status */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Modo"
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="Modo"
              width={96}
              height={17}
              priority
              className="h-5 w-auto"
            />
          </Link>
          <span
            aria-hidden
            className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-fg-dim"
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
          <a
            href="https://app.modo.link/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Get Started
            <span aria-hidden className="text-[11px] leading-none">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
