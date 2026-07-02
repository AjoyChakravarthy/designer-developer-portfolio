import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function CodeIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
    </svg>
  );
}

export function PaletteIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.5 0-.4-.2-.8-.5-1.1-.3-.3-.5-.7-.5-1.1 0-.8.7-1.3 1.5-1.3H15a5 5 0 0 0 5-5c0-4-3.6-7-8-7Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SparkleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v6m0 6v6M5 12h6m2 0h6" opacity="0" />
      <path d="M11 3c.4 3.2 1.8 4.6 5 5-3.2.4-4.6 1.8-5 5-.4-3.2-1.8-4.6-5-5 3.2-.4 4.6-1.8 5-5Z" />
      <path d="M18 13c.2 1.5.9 2.2 2.5 2.5-1.6.3-2.3 1-2.5 2.5-.2-1.5-.9-2.2-2.5-2.5 1.6-.3 2.3-1 2.5-2.5Z" />
    </svg>
  );
}

export function LayersIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function BoltIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
    </svg>
  );
}

export function AccessibilityIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M5 8c2 1 5 1.4 7 1.4S17 9 19 8" />
      <path d="M12 9.4V14m0 0-3 6m3-6 3 6" />
    </svg>
  );
}

export function ArrowUpRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

export function SendIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function BotIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="8" width="16" height="11" rx="2.5" />
      <path d="M12 4v4M9 13h.01M15 13h.01M9 16h6" />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function GithubIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.6c0-1 .3-1.7-.4-2.3 2.3-.3 4.7-1.2 4.7-5.2A4 4 0 0 0 18 7a3.7 3.7 0 0 0-.1-2.8s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.1 3.9 5.1 4.2 5.1 4.2A3.7 3.7 0 0 0 5 7a4 4 0 0 0-1.3 2.9c0 4 2.4 4.9 4.7 5.2-.7.6-.4 1.3-.4 2.3V21" />
    </svg>
  );
}

export function LinkedinIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </svg>
  );
}

export function TwitterIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 6a8 8 0 0 1-2.3.6 4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1A4 4 0 0 0 11 9.5a11.3 11.3 0 0 1-8.2-4.2 4 4 0 0 0 1.2 5.3A4 4 0 0 1 2.2 10v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6 11.3 11.3 0 0 0 8.1 20c7 0 11-6 11-11v-.5A7.7 7.7 0 0 0 21 6Z" />
    </svg>
  );
}

export function DribbbleIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M5 8c4 .5 9 .3 13-1M3.5 13c5-1.3 10 .2 13 4M9 4c3 4 4.5 9 4.7 16" />
    </svg>
  );
}

export const skillIconMap = {
  code: CodeIcon,
  palette: PaletteIcon,
  sparkle: SparkleIcon,
  layers: LayersIcon,
  bolt: BoltIcon,
  accessibility: AccessibilityIcon,
} as const;

export const socialIconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  dribbble: DribbbleIcon,
} as const;
