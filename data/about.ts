// ============================================================
// ABOUT + EXPERIENCE DATA
// ============================================================

export const about = {
  // Marquee words above the about block. The one matching
  // `marqueeHighlight` renders in lime.
  marquee: ["Design Systems", "Framer Motion", "Three.js", "TypeScript"],
  marqueeHighlight: "Framer Motion",
  // Headline — the word in `headlineHighlight` renders in lime.
  headline: "I build interfaces that move with intent.",
  headlineHighlight: "interfaces",
  portrait: "", // e.g. "/images/portrait.jpg" — gradient placeholder if empty
  paragraphs: [
    "I'm a frontend developer and designer with eight years of obsessing over the seam between idea and pixel. I prototype in code, design in the browser, and treat motion as a first-class material.",
    "Currently a Senior Design Engineer building tools for creative teams. Previously shipped fintech dashboards, immersive marketing sites, and design systems used by thousands of engineers.",
  ],
  stats: [
    { value: "8+", label: "Years" },
    { value: "40+", label: "Delivered" },
    { value: "12", label: "Design Awards" },
    { value: "∞", label: "Pixel Obsessions" },
  ],
};

export type Role = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const experienceIntro =
  "A career built at the seams — design teams that want engineering rigor, engineering teams that crave craft.";

export const experience: Role[] = [
  {
    period: "2022 — Now",
    title: "Senior Design Engineer",
    org: "Plane (creative tools) · Remote / NYC",
    description:
      "Leading the design-engineering function for a Linear-style creative workspace. Shaping motion language, theming engine, and zero-friction onboarding.",
  },
  {
    period: "2019 — 2022",
    title: "Design Engineer",
    org: "Ledger.fi · New York, NY",
    description:
      "Built the data-dense investing dashboard, charts system, and dark mode foundation. Shipped a design system used by 60+ engineers.",
  },
  {
    period: "2016 — 2019",
    title: "Freelance Designer + Developer",
    org: "Independent · Worldwide",
    description:
      "Editorial sites, brand identities and immersive launch campaigns for agencies and indie founders.",
  },
];

export const contact = {
  titleTop: "Let's make",
  titleMid: "something",
  titleBottom: "Loud.", // rendered with lime highlight
  blurb:
    "Looking for a senior frontend, design engineer, or selective freelance partner for 2026. Pitch ideas, problems, or just say hi.",
  responseNote: "Responds within 48 hrs",
};
