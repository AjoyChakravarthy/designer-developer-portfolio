export type Accent = "lime" | "pink" | "chalk";
export type CardSize = "lg" | "md" | "wide";

export type CaseStudy = {
  overview?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  accent: Accent;
  size: CardSize;
  href?: string;
  image?: string;
  caseStudy?: CaseStudy;
};

export const workIntro =
  "A tight cut of work from the last two years. Editorial agency sites, fintech systems, 3D playgrounds, and the occasional manifesto.";
