type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  className?: string;
};

/** Monospace eyebrow: "(01) — SELECTED WORK" */
export function SectionLabel({ index, children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-xs tracking-label text-lime uppercase ${className}`}
    >
      ({index}) <span className="text-ash">— {children}</span>
    </p>
  );
}
