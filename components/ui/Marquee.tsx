"use client";

import { Fragment } from "react";

type MarqueeProps = {
  items: string[];
  highlight?: string;
};

/** Infinite ribbon. Uses a CSS keyframe loop (defined in tailwind.config). */
export function Marquee({ items, highlight }: MarqueeProps) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const sequence = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-ink-line py-5 select-none">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {sequence.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <span
              className={`px-6 font-display text-3xl font-extrabold tracking-tight md:text-5xl ${
                word === highlight ? "text-lime" : "text-transparent"
              }`}
              style={
                word === highlight
                  ? undefined
                  : { WebkitTextStroke: "1px rgba(139,147,143,0.5)" }
              }
            >
              {word}
            </span>
            <span className="self-center px-2 text-lime" aria-hidden>
              ✦
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
