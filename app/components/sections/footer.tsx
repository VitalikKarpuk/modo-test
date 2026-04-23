import Image from "next/image";
import { FOOTER_COLUMNS, SITE, SOCIAL_LINKS } from "@/app/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="Modo"
              width={96}
              height={17}
              className="h-5 w-auto"
            />
            <p className="text-sm text-fg-muted max-w-xs leading-relaxed">
              {SITE.tagline}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-line text-fg-muted hover:border-line-strong hover:text-fg transition-colors text-xs font-mono"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.items.map((it) => {
                  const isExternal = it.href.startsWith("http");
                  return (
                    <li key={it.label}>
                      <a
                        href={it.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="text-sm text-fg-muted hover:text-fg transition-colors"
                      >
                        {it.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-fg-dim">
          <span>
            © {new Date().getFullYear()} {SITE.name} · All rights reserved
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-fg transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-fg transition-colors">
              Terms
            </a>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success anim-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
