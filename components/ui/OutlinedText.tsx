"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type OutlinedTextProps = {
  children: string;
  className?: string;
  /** Color the fill wipes in as. */
  fill?: "lime" | "chalk";
  /** If true, the fill wipes left→right as the element scrolls through view. */
  animate?: boolean;
};

const fillColor = { lime: "#c4f82a", chalk: "#f4f5f2" } as const;

/**
 * Display text rendered as an outline (transparent fill + stroke).
 * With `animate`, a solid copy is layered on top and revealed via a
 * scroll-scrubbed clip-path wipe — the page's signature moment.
 */
export function OutlinedText({
  children,
  className = "",
  fill = "chalk",
  animate = false,
}: OutlinedTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!animate) return;
      const el = ref.current;
      if (!el) return;
      const overlay = el.querySelector<HTMLElement>("[data-fill]");
      if (!overlay) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          overlay,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "bottom 55%",
              scrub: 0.6,
            },
          }
        );
      });
      // Reduced motion: just show the fill immediately.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(overlay, { clipPath: "inset(0 0% 0 0)" });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Outline layer */}
      <span
        aria-hidden={animate ? true : undefined}
        className="text-transparent"
        style={{
          WebkitTextStroke: "1.5px rgba(244,245,242,0.32)",
        }}
      >
        {children}
      </span>
      {/* Fill layer (animated) */}
      {animate && (
        <span
          data-fill
          aria-hidden
          className="absolute inset-0"
          style={{ color: fillColor[fill], clipPath: "inset(0 100% 0 0)" }}
        >
          {children}
        </span>
      )}
    </span>
  );
}
