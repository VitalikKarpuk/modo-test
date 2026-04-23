import Image from "next/image";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 frost border-b border-line">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-2 group" aria-label="Modo">
          <Image
            src="/logo.svg"
            alt="Modo"
            width={96}
            height={17}
            priority
            className="h-5 w-auto"
          />
        </a>
        <nav
          className="hidden md:flex items-center gap-8 text-sm text-fg-muted"
          aria-label="Primary"
        >
          <a href="#products" className="hover:text-fg transition-colors">
            Products
          </a>
          <a href="#in-action" className="hover:text-fg transition-colors">
            In action
          </a>
          <a href="#enterprise" className="hover:text-fg transition-colors">
            Enterprise
          </a>
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}
