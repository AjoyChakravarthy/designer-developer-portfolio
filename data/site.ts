// ============================================================
// SITE DATA — edit this file to update identity, nav & hero
// All copy here is placeholder. Swap in your real details.
// ============================================================

export const site = {
  name: "Ajoy Chakravarthy",
  role: "Frontend Developer / Designer",
  location: "Brooklyn, NY",
  email: "hello@ajoychakravarthy.design",
  // Used by the live clock in the hero status bar (IANA timezone).
  timezone: "America/New_York",
  timezoneLabel: "EST",
  status: "Available '26",
  portfolioVersion: "V.2026.01",
};

export type NavItem = { id: string; label: string; href: string };

// `href` values match the `id` attributes on each <section>.
export const navItems: NavItem[] = [
  { id: "01", label: "Designs", href: "#designs" },
  { id: "02", label: "Work", href: "#work" },
  { id: "03", label: "About", href: "#about" },
  { id: "04", label: "Skills", href: "#skills" },
  { id: "05", label: "Experience", href: "#experience" },
  { id: "06", label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
] as const;

export const hero = {
  // Two-line display headline. Line two renders as outlined text.
  titleTop: "Design",
  titleBottom: "Engineer",
  intro:
    "I'm Ajoy Chakravarthy, a frontend developer & designer crafting interfaces at the intersection of code and craft — typography-first, motion with restraint, shipped to production.",
  primaryCta: { label: "See selected work", href: "#work" },
  secondaryCta: { label: "Start a project", href: "#contact" },
};
