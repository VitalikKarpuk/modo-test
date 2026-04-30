"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/app/lib/content";

export function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Products menu"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-fg-muted hover:text-fg hover:bg-surface transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
          <rect x="0" y="0" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="8" y="0" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="0" y="8" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="8" y="8" width="6" height="6" rx="1" fill="currentColor" />
        </svg>
      </button>

      <div
        role="menu"
        aria-hidden={!open}
        className={`absolute left-0 top-full mt-3 w-80 rounded-xl border border-line bg-bg/95 backdrop-blur-md shadow-xl p-2 z-50 origin-top-left transition-all duration-150 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-0.5">
          {PRODUCTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="group flex flex-col gap-0.5 rounded-md px-3 py-2.5 hover:bg-surface transition-colors"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-fg group-hover:text-accent transition-colors">
                {p.title}
                <span
                  aria-hidden
                  className="text-fg-dim text-xs leading-none transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </span>
              <span className="text-xs text-fg-dim leading-relaxed">
                {p.tagline}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
