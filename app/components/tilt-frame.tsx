"use client";

import { useRef } from "react";

type TiltFrameProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
};

/**
 * 3D-tilt frame. Rotates around the cursor with a perspective transform,
 * exposes --mx / --my on the element for inner spotlight effects.
 * Instant follow during move, eased reset on leave, respects reduced-motion.
 */
export function TiltFrame({
  children,
  className = "",
  maxTilt = 6,
}: TiltFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const reduced = useRef<boolean>(false);

  const getReduced = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  };

  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;

    // Still track mouse position for spotlight, even under reduced motion
    const { clientX, clientY } = e;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;
      el.style.setProperty("--mx", `${mx}px`);
      el.style.setProperty("--my", `${my}px`);

      reduced.current = getReduced();
      if (reduced.current) return;

      const px = mx / rect.width - 0.5;
      const py = my / rect.height - 0.5;
      el.style.transition = "none";
      el.style.transform = `perspective(1400px) rotateX(${-py * maxTilt}deg) rotateY(${px * maxTilt}deg)`;
    });
  };

  const onLeave = () => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 500ms cubic-bezier(0.21, 0.61, 0.35, 1)";
    el.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
