"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "@/app/components/icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-bg">
      <div className="max-w-lg w-full text-center flex flex-col gap-8">
        <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
          Error · something went wrong
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-fg">
          The{" "}
          <em className="font-serif italic font-normal text-accent">
            ledger
          </em>{" "}
          slipped.
        </h1>
        <p className="text-fg-muted leading-relaxed">
          An unexpected error interrupted rendering. Try again, or head back to
          the top.
        </p>
        {error.digest && (
          <code className="font-mono text-xs text-fg-dim">
            ref: {error.digest}
          </code>
        )}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={reset}
            className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Try again
            <div className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </div>
          </button>
          <Link
            href="/"
            className="inline-flex items-center h-11 px-6 rounded-full border border-line text-fg text-sm font-medium hover:border-line-strong hover:bg-surface transition-colors"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
