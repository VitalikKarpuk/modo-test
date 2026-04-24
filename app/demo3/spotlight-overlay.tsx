"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor-tracked coral radial gradient overlay.
 * Follows the pointer within its containing block (must be position:relative).
 * Fades in on enter, out on leave, respects reduced-motion.
 */
export function SpotlightOverlay({
  size = 420,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: PointerEvent) => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--sx", `${x}px`);
        el.style.setProperty("--sy", `${y}px`);
        el.style.opacity = "1";
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${className}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), rgba(244,134,86,0.22), transparent 60%)`,
        mixBlendMode: "plus-lighter",
      }}
    />
  );
}
