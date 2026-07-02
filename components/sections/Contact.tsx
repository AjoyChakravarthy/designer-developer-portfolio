"use client";

import { useState } from "react";
import Link from "next/link";
import { contact } from "@/data/about";
import { site, socials } from "@/data/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { MailIcon, SendIcon, ArrowUpRight, socialIconMap } from "@/components/ui/Icons";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // ----------------------------------------------------------
    // UI shell: simulate a send. Wire a real endpoint here, e.g.
    //   await fetch("/api/contact", { method: "POST",
    //     body: JSON.stringify(form) });
    // ----------------------------------------------------------
    await new Promise((r) => setTimeout(r, 900));

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {/* Left: pitch */}
          <Reveal>
            <SectionLabel index="06">Contact</SectionLabel>
            <h2 className="mt-6 font-display text-[14vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-chalk md:text-8xl">
              <span className="block">{contact.titleTop}</span>
              <span className="block">{contact.titleMid}</span>
              <span className="bg-lime px-2 text-ink-900">{contact.titleBottom}</span>
            </h2>

            <p className="mt-10 max-w-md font-mono text-sm leading-relaxed text-ash">
              {contact.blurb}
            </p>

            <Link
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-3 font-display text-2xl font-bold text-chalk transition-colors hover:text-lime md:text-3xl"
            >
              <MailIcon className="h-6 w-6 text-lime" />
              {site.email}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <ul className="mt-10 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center border border-ink-line text-ash transition-colors hover:border-lime hover:text-lime"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-8 border border-ink-line p-7 md:p-10"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Your Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Designer"
                    className="w-full border-b border-ink-line bg-transparent pb-2 font-mono text-base text-chalk outline-none transition-colors placeholder:text-smoke focus:border-lime"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="jane@studio.co"
                    className="w-full border-b border-ink-line bg-transparent pb-2 font-mono text-base text-chalk outline-none transition-colors placeholder:text-smoke focus:border-lime"
                  />
                </Field>
              </div>

              <Field label="Tell me about your project">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="A few sentences about scope, timeline, vibe..."
                  className="w-full resize-none border-b border-ink-line bg-transparent pb-2 font-mono text-base leading-relaxed text-chalk outline-none transition-colors placeholder:text-smoke focus:border-lime"
                />
              </Field>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-label text-smoke">
                  {status === "sent" ? (
                    <span className="text-lime">Message sent — talk soon.</span>
                  ) : (
                    contact.responseNote
                  )}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 bg-lime px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-label text-ink-900 transition-colors hover:bg-lime-bright disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <SendIcon className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-3 block font-mono text-[10px] uppercase tracking-label text-ash">{label}</span>
      {children}
    </label>
  );
}
