"use client";

import { useRef } from "react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  radius?: number;
};

/**
 * Wraps its children in a cursor-tracking spotlight.
 * Updates --mx / --my on pointer move; a radial gradient follows the cursor
 * and fades in on hover. Renders <a> when `href` is provided, otherwise <div>.
 */
export function SpotlightCard({
  children,
  className = "",
  href,
  target,
  rel,
  radius = 420,
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);

  const onMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
    });
  };

  const onLeave = () => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
  };

  const mergedClass = `group relative ${className}`;

  const overlay = (
    <>
      {/* soft radial spotlight following the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), var(--accent-glow), transparent 45%)`,
        }}
      />
      {/* thin coral rim that lights up near the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${radius / 2}px circle at var(--mx, 50%) var(--my, 50%), rgba(244,134,86,0.35), transparent 60%)`,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={mergedClass}
      >
        {overlay}
        {children}
      </a>
    );
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={mergedClass}
    >
      {overlay}
      {children}
    </div>
  );
}
