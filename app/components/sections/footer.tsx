import Image from "next/image";
import { FOOTER_COLUMNS, SITE } from "@/app/lib/content";

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
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
                        className="text-sm text-fg-muted hover:text-fg transition-colors inline-flex items-center gap-1"
                      >
                        {it.label}
                        {isExternal && (
                          <span aria-hidden className="text-fg-dim text-[10px] leading-none">
                            ↗
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Modo"
              width={96}
              height={17}
              className="h-5 w-auto"
            />
            <span aria-hidden className="h-4 w-px bg-line" />
            <a
              href="https://x.com/modoapps"
              target="_blank"
              rel="noreferrer"
              aria-label="Modo on X"
              className="h-8 w-8 flex items-center justify-center rounded-full border border-line text-fg-muted hover:text-fg hover:border-line-strong transition-colors"
            >
              <IconX />
            </a>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-fg-dim">
            © {new Date().getFullYear()} {SITE.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
