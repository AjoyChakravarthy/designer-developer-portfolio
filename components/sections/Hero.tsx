"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { hero, site } from "@/data/site";
import { OutlinedText } from "@/components/ui/OutlinedText";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState("--:-- --");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()).toUpperCase());
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

function StatusItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <p className="font-mono text-[10px] uppercase tracking-label text-smoke">{label}</p>
      <p className="font-mono text-sm uppercase tracking-wide text-chalk">{children}</p>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const time = useLocalTime(site.timezone);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-status] > *", { opacity: 0, y: 12, stagger: 0.06, duration: 0.5 })
          .from("[data-title-top]", { yPercent: 110, duration: 0.9 }, "-=0.1")
          .from("[data-title-bottom]", { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
          .from("[data-dot]", { scale: 0, duration: 0.6, ease: "back.out(2)" }, "-=0.4")
          .from("[data-intro]", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4")
          .from("[data-cta] > *", { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, "-=0.3");
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="top" className="relative min-h-screen pb-16 pt-28 md:pt-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        {/* Status bar */}
        <div
          data-status
          className="grid grid-cols-2 gap-y-6 border-b border-ink-line pb-8 md:grid-cols-4"
        >
          <StatusItem label="Based">Brooklyn / NY</StatusItem>
          <StatusItem label="Status">
            <span className="inline-flex items-center gap-2 text-lime">
              <span className="h-2 w-2 rounded-full bg-lime animate-blink" />
              {site.status}
            </span>
          </StatusItem>
          <StatusItem label="Local Time">{time} {site.timezoneLabel}</StatusItem>
          <StatusItem label="Portfolio">{site.portfolioVersion}</StatusItem>
        </div>

        {/* Display title */}
        <h1 className="mt-10 font-display font-extrabold uppercase leading-[0.82] tracking-tighter md:mt-14">
          <span className="block overflow-hidden">
            <span data-title-top className="block text-[22vw] text-chalk md:text-[15rem]">
              {hero.titleTop}
            </span>
          </span>
          <span data-title-bottom className="relative block text-[22vw] md:text-[15rem]">
            <OutlinedText animate fill="chalk">
              {hero.titleBottom}
            </OutlinedText>
            <span
              data-dot
              className="ml-2 inline-block h-[0.13em] w-[0.13em] translate-y-[-0.05em] rounded-full bg-lime align-baseline"
            />
          </span>
        </h1>

        {/* Intro + CTAs */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-end">
          <p data-intro className="max-w-xl font-mono text-base leading-relaxed text-ash">
            {hero.intro.split(site.name)[0]}
            <span className="text-chalk">{site.name}</span>
            {hero.intro.split(site.name)[1]}
          </p>

          <div data-cta className="flex flex-wrap gap-4 md:justify-end">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-lime px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-label text-ink-900 transition-colors hover:bg-lime-bright"
            >
              {hero.primaryCta.label}
              <ArrowDown className="h-4 w-4" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border border-ink-line px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-label text-chalk transition-colors hover:border-lime hover:text-lime"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
