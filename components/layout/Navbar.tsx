"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems, site } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-ink-line bg-ink-900/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-chalk">
          <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(196,248,42,0.6)]" />
          <span className="uppercase">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-baseline gap-1.5 font-mono text-sm uppercase tracking-label text-chalk transition-colors hover:text-lime"
            >
              <span className="text-[10px] text-ash transition-colors group-hover:text-lime">{item.id}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden bg-lime px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-label text-ink-900 transition-colors hover:bg-lime-bright sm:inline-block"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink-line lg:hidden"
          >
            <span className={`h-px w-5 bg-chalk transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-chalk transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="border-t border-ink-line bg-ink-900/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-site flex-col px-5 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-2 border-b border-ink-line/60 py-4 font-mono text-base uppercase tracking-label text-chalk last:border-0"
              >
                <span className="text-xs text-ash">{item.id}</span>
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-lime px-5 py-3 text-center font-mono text-xs font-bold uppercase tracking-label text-ink-900"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
