"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: boolean;
  /** Delay before the animation starts (seconds). */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
};

/**
 * Wrap any block to fade + slide it up when it scrolls into view.
 * Respects prefers-reduced-motion (GSAP matchMedia handles the skip).
 */
export function Reveal({
  children,
  as,
  className,
  stagger = false,
  delay = 0,
  y = 28,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? el.children : el;
        gsap.from(targets, {
          opacity: 0,
          y,
          duration: 0.85,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
