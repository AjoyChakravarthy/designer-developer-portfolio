// ============================================================
// SKILLS DATA — six categories rendered as a grid.
// `icon` maps to a key in components/ui/Icons.tsx.
// ============================================================

export type SkillIcon =
  | "code"
  | "palette"
  | "sparkle"
  | "layers"
  | "bolt"
  | "accessibility";

export type SkillGroup = {
  num: string;
  icon: SkillIcon;
  title: string;
  items: string[];
};

export const skillsHeading = {
  titleTop: "A studio of",
  titleBottom: "One.", // rendered as outlined display text
  intro:
    "End-to-end from blank Figma to shipped production. Equally at home in a design crit and a pull request review.",
};

export const skills: SkillGroup[] = [
  {
    num: "01",
    icon: "code",
    title: "Engineering",
    items: ["React / Next.js", "TypeScript", "Node.js", "REST / GraphQL", "Vite / Webpack"],
  },
  {
    num: "02",
    icon: "palette",
    title: "Design",
    items: ["Figma & Auto-Layout", "Design Systems", "Type & Color Theory", "Brand & Identity", "Prototyping"],
  },
  {
    num: "03",
    icon: "sparkle",
    title: "Motion & 3D",
    items: ["Framer Motion", "GSAP", "Three.js / R3F", "WebGL Shaders", "Lottie"],
  },
  {
    num: "04",
    icon: "layers",
    title: "Systems",
    items: ["Tailwind / CSS-in-JS", "Radix / Shadcn", "Tokens & Theming", "Storybook", "Monorepos"],
  },
  {
    num: "05",
    icon: "bolt",
    title: "Performance",
    items: ["Core Web Vitals", "Edge Rendering", "Image / Font Loading", "Bundle Diet", "Lighthouse 100"],
  },
  {
    num: "06",
    icon: "accessibility",
    title: "Accessibility",
    items: ["WCAG 2.2 / APCA", "Semantic HTML", "Screen Reader QA", "Keyboard UX", "Reduced Motion"],
  },
];
