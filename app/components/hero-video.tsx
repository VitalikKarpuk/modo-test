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
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden h-[min(640px,90vh)] md:h-[min(820px,95vh)]"
    >
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
      {/* darkening — confined to the video region */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,3,9,0.72) 0%, rgba(2,3,9,0.5) 22%, rgba(2,3,9,0.62) 72%, rgba(2,3,9,0.96) 100%)",
        }}
      />
      {/* fade-to-bg at the bottom of the video region */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 md:h-40"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, var(--bg) 100%)",
        }}
      />
    </div>
  );
}
