"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  format?: "int" | "decimal2" | "compact";
  duration?: number;
  className?: string;
};

function formatValue(v: number, format: CounterProps["format"]) {
  if (format === "decimal2") return v.toFixed(2);
  if (format === "compact") {
    if (v >= 1e9) return `${(v / 1e9).toFixed(2)}B`;
    if (v >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
    if (v >= 1e3) return `${(v / 1e3).toFixed(0)}K`;
    return Math.round(v).toString();
  }
  return Math.round(v).toLocaleString();
}

export function Counter({
  to,
  format = "int",
  duration = 1600,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        if (reduced) {
          setValue(to);
          observer.disconnect();
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(to * eased);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular ${className}`}>
      {formatValue(value, format)}
    </span>
  );
}
