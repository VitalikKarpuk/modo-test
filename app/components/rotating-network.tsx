"use client";

import { useEffect, useState } from "react";

const NETWORKS = ["Canton", "Sui", "Walrus", "Ika", "IOTA"] as const;
const INTERVAL_MS = 2600;
const ANIM_MS = 620;

/**
 * Cycles through Modo-supported network names with a left-to-right mask
 * reveal: the outgoing word wipes out from its left edge while the incoming
 * word wipes in from its left edge — both moving in the same direction so it
 * reads as a single sweep across the text. Width is stabilized via inline-grid
 * (all entries stack in the same cell as invisible ghosts to define max width).
 * Honors prefers-reduced-motion.
 */
export function RotatingNetwork() {
  const [index, setIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const cycle = window.setInterval(() => {
      setIndex((curr) => {
        setExitingIndex(curr);
        return (curr + 1) % NETWORKS.length;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(cycle);
  }, []);

  // Drop the outgoing word once its wipe-out animation has completed,
  // so it doesn't linger in the DOM next to a fresh incoming word.
  useEffect(() => {
    if (exitingIndex === null) return;
    const id = window.setTimeout(() => {
      setExitingIndex(null);
    }, ANIM_MS + 50);
    return () => window.clearTimeout(id);
  }, [exitingIndex, index]);

  return (
    <span className="relative inline-grid align-baseline">
      {/* Width stabilizers — every word rendered invisibly so the grid cell
          claims max-content width and the H1 line never reflows. */}
      {NETWORKS.map((n) => (
        <span
          key={`ghost-${n}`}
          aria-hidden
          className="col-start-1 row-start-1 invisible"
        >
          {n}
        </span>
      ))}
      {/* Outgoing word — wipes out left → right */}
      {exitingIndex !== null && (
        <span
          key={`out-${index}-${exitingIndex}`}
          aria-hidden
          className="col-start-1 row-start-1 anim-mask-out"
        >
          {NETWORKS[exitingIndex]}
        </span>
      )}
      {/* Incoming / active word — wipes in left → right */}
      <span
        key={`in-${index}`}
        className="col-start-1 row-start-1 anim-mask-in"
      >
        {NETWORKS[index]}
      </span>
    </span>
  );
}
