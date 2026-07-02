"use client";

import Link from "next/link";
import { site, socials } from "@/data/site";
import { socialIconMap } from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <footer className="border-t border-ink-line">
      <div className="mx-auto max-w-site px-5 pb-10 pt-20 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Wordmark */}
          <div>
            <h2 className="font-display text-[18vw] font-extrabold uppercase leading-[0.82] tracking-tight text-chalk md:text-[10rem]">
              <span className="block">{firstName}</span>
              <span className="block text-lime">{lastName}.</span>
            </h2>
            <p className="mt-6 font-mono text-xs uppercase tracking-label text-ash">
              {site.role.replace(/\//g, " / ")} / Brooklyn
            </p>
          </div>

          {/* Socials */}
          <ul className="flex gap-3">
            {socials.map((s) => {
              const Icon = socialIconMap[s.icon];
              return (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center border border-ink-line text-ash transition-colors hover:border-lime hover:text-lime"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-line pt-6 font-mono text-[11px] uppercase tracking-label text-smoke sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} — Crafted in browser, shipped to production.</span>
          <Link href="#top" className="text-ash transition-colors hover:text-lime">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
