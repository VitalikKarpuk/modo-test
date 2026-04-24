import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 frost border-b border-line">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Modo"
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
        <nav
          className="hidden md:flex items-center gap-8 text-sm text-fg-muted"
          aria-label="Primary"
        >
          <Link href="/#products" className="hover:text-fg transition-colors">
            Products
          </Link>
          <Link href="/#in-action" className="hover:text-fg transition-colors">
            In action
          </Link>
          <Link href="/#enterprise" className="hover:text-fg transition-colors">
            Enterprise
          </Link>
          <Link href="/demo2" className="hover:text-fg transition-colors">
            Demo 2
          </Link>
          <Link href="/demo3" className="hover:text-fg transition-colors">
            Demo 3
          </Link>
          <a
            href="https://docs.modo.link/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors"
          >
            Docs ↗
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
