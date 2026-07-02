import type { Accent, CardSize } from "@/data/projects";

export type Design = {
  slug: string;
  title: string;
  category: string;
  year: string;
  tools: string[];
  accent: Accent;
  size: CardSize;
  href?: string;
  image?: string;
};

export const designsIntro =
  "Visual work from the studio — brand systems, UI explorations, and the occasional typographic experiment.";
