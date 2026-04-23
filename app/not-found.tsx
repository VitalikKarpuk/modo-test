import Link from "next/link";
import { ArrowRight } from "@/app/components/icons";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-bg">
      <div className="max-w-lg w-full text-center flex flex-col gap-8">
        <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
          404 · page not found
        </span>
        <h1 className="font-display font-medium tracking-tightest text-fg">
          <span className="font-mono tabular text-6xl md:text-7xl block text-accent mb-4">
            404
          </span>
          <span className="block text-3xl md:text-4xl">
            Off the{" "}
            <em className="font-serif italic font-normal">indexed ledger</em>.
          </span>
        </h1>
        <p className="text-fg-muted leading-relaxed">
          This route doesn&rsquo;t exist — or it hasn&rsquo;t been indexed yet.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-ink-950 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Back home
            <div className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
