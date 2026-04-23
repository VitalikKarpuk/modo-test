/**
 * Route-level loading UI. Streams while the segment is fetching.
 * Keep it minimal — a pulse of brand accent is enough signal.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inset-0 rounded-full bg-accent anim-pulse" />
          <span
            className="absolute inset-0 rounded-full bg-accent"
            style={{
              animation: "pulse-dot 2.4s ease-in-out infinite",
              opacity: 0.35,
              transform: "scale(2.5)",
            }}
          />
        </span>
        <span className="font-mono text-[11px] tracking-widest uppercase text-fg-dim">
          Loading
        </span>
      </div>
    </div>
  );
}
