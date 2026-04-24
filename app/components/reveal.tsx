"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variantCls =
    variant && variant !== "up" ? `reveal-${variant}` : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantCls} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
