"use client";

import Link from "next/link";
import type { Design } from "@/data/designs";
import { ArrowUpRight } from "@/components/ui/Icons";

const accentText: Record<Design["accent"], string> = {
  lime: "text-lime",
  pink: "text-flush",
  chalk: "text-chalk",
};

const placeholderBg: Record<Design["accent"], string> = {
  lime: "radial-gradient(120% 120% at 20% 10%, #1c2410 0%, #0c0f0b 55%), linear-gradient(140deg, #161a12, #0a0c0b)",
  pink: "radial-gradient(120% 120% at 80% 0%, #2a1020 0%, #0c0a0d 55%), linear-gradient(140deg, #1a1016, #0a0c0b)",
  chalk: "radial-gradient(120% 120% at 50% 0%, #1a1f1d 0%, #0b0e0d 55%), linear-gradient(140deg, #161a19, #0a0c0b)",
};

export function DesignCard({ design, className = "" }: { design: Design; className?: string }) {
  const { title, category, year, tools, accent, image, href = "#" } = design;

  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between overflow-hidden border border-ink-line bg-ink-card p-6 transition-colors duration-300 hover:border-ash/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${className}`}
    >
      {/* Background image or gradient */}
      <div
        className="absolute inset-0 -z-10 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{
          background: image ? undefined : placeholderBg[accent],
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-ink-900/10" />

      {/* Top row: tools + arrow */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="border border-ink-line bg-ink-900/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-ash backdrop-blur-sm"
            >
              {tool}
            </span>
          ))}
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center border border-ink-line bg-ink-900/60 text-chalk transition-colors duration-300 group-hover:bg-lime group-hover:text-ink-900">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Bottom: meta + title */}
      <div className="mt-24">
        <p className="font-mono text-[11px] uppercase tracking-label text-ash">
          {category} · {year}
        </p>
        <h3
          className={`mt-2 font-display text-3xl font-extrabold uppercase leading-none tracking-tight md:text-4xl ${accentText[accent]}`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
}
