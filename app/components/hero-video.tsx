"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      v.pause();
      return;
    }

    v.play().catch(() => {});

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="relative w-full aspect-[1352/680] md:absolute md:inset-0 md:h-full md:w-auto md:aspect-auto">
        <video
          ref={ref}
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, var(--bg) 95%)",
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,3,9,0.72) 0%, rgba(2,3,9,0.5) 22%, rgba(2,3,9,0.6) 70%, rgba(2,3,9,0.98) 100%)",
        }}
      />
    </div>
  );
}
