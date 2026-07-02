"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "@/components/ui/Icons";

const accentText: Record<Project["accent"], string> = {
  lime: "text-lime",
  pink: "text-flush",
  chalk: "text-chalk",
};

const placeholderBg: Record<Project["accent"], string> = {
  lime: "radial-gradient(120% 120% at 20% 10%, #1c2410 0%, #0c0f0b 55%), linear-gradient(140deg, #161a12, #0a0c0b)",
  pink: "radial-gradient(120% 120% at 80% 0%, #2a1020 0%, #0c0a0d 55%), linear-gradient(140deg, #1a1016, #0a0c0b)",
  chalk: "radial-gradient(120% 120% at 50% 0%, #1a1f1d 0%, #0b0e0d 55%), linear-gradient(140deg, #161a19, #0a0c0b)",
};

export function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  const { title, role, year, tags, accent, image, href = "#", slug, caseStudy } = project;
  const dest = caseStudy ? `/work/${slug}` : href;

  return (
    <Link
      href={dest}
      className={`group relative flex flex-col justify-between overflow-hidden border border-ink-line bg-ink-card p-6 transition-colors duration-300 hover:border-ash/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${className}`}
    >
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

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink-line bg-ink-900/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-ash backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
          {caseStudy && (
            <span className="border border-lime/50 bg-lime/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-lime backdrop-blur-sm">
              Case Study
            </span>
          )}
        </div>
        <span className="grid h-9 w-9 shrink-0 place-items-center border border-ink-line bg-ink-900/60 text-chalk transition-colors duration-300 group-hover:bg-lime group-hover:text-ink-900">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-24">
        <p className="font-mono text-[11px] uppercase tracking-label text-ash">
          {role} · {year}
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
