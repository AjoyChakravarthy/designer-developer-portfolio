"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Project, CaseStudy } from "@/data/projects";
import type { Design } from "@/data/designs";

// ─── helpers ──────────────────────────────────────────────────────────────────

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const ACCENTS = ["lime", "pink", "chalk"] as const;
const SIZES = ["lg", "md", "wide"] as const;

// ─── blank templates ──────────────────────────────────────────────────────────

function blankProject(): Project {
  return { slug: "", title: "", role: "", year: "", tags: [], accent: "lime", size: "md" };
}

function blankDesign(): Design {
  return { slug: "", title: "", category: "", year: "", tools: [], accent: "lime", size: "md" };
}

// ─── shared input styles ──────────────────────────────────────────────────────

const inputCls =
  "w-full border border-ink-line bg-ink-900 px-3 py-2 font-mono text-sm text-chalk outline-none transition-colors focus:border-lime placeholder:text-smoke";
const labelCls = "block font-mono text-[10px] uppercase tracking-label text-ash mb-1.5";
const selectCls =
  "border border-ink-line bg-ink-900 px-3 py-2 font-mono text-sm text-chalk outline-none transition-colors focus:border-lime";

// ─── Field wrapper ─────────────────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );
}

// ─── Project form ─────────────────────────────────────────────────────────────

function ProjectFormPanel({
  initial,
  isNew,
  onSave,
  onCancel,
}: {
  initial: Project;
  isNew: boolean;
  onSave: (p: Project) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Project>(initial);
  const [tagsRaw, setTagsRaw] = useState(initial.tags.join(", "));
  const [hasCaseStudy, setHasCaseStudy] = useState(!!initial.caseStudy);
  const [cs, setCs] = useState<CaseStudy>(initial.caseStudy ?? {});

  function set<K extends keyof Project>(k: K, v: Project[K]) {
    setForm((f) => {
      const next = { ...f, [k]: v };
      if (k === "title" && isNew) next.slug = slugify(v as string);
      return next;
    });
  }

  function save() {
    const project: Project = {
      ...form,
      tags: tagsRaw.split(",").map((t) => t.trim()).filter(Boolean),
      caseStudy: hasCaseStudy ? cs : undefined,
    };
    onSave(project);
  }

  return (
    <div className="mt-6 border border-ink-line bg-ink-800 p-6 md:p-8">
      <h3 className="mb-6 font-display text-xl font-extrabold uppercase tracking-tight text-chalk">
        {isNew ? "Add Project" : `Edit — ${initial.title}`}
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Title">
          <input className={inputCls} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="Project name" />
        </Field>
        <Field label="Slug (auto)">
          <input className={inputCls} value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="project-name" />
        </Field>
        <Field label="Role">
          <input className={inputCls} value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="Design Engineer" />
        </Field>
        <Field label="Year">
          <input className={inputCls} value={form.year} onChange={(e) => set("year", e.target.value)} placeholder="2025" />
        </Field>
        <Field label="Tags (comma-separated)">
          <input className={inputCls} value={tagsRaw} onChange={(e) => setTagsRaw(e.target.value)} placeholder="React, GSAP, Motion" />
        </Field>
        <div className="flex gap-4">
          <Field label="Accent">
            <select className={selectCls} value={form.accent} onChange={(e) => set("accent", e.target.value as Project["accent"])}>
              {ACCENTS.map((a) => <option key={a}>{a}</option>)}
            </select>
          </Field>
          <Field label="Size">
            <select className={selectCls} value={form.size} onChange={(e) => set("size", e.target.value as Project["size"])}>
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Image URL">
          <input className={inputCls} value={form.image ?? ""} onChange={(e) => set("image", e.target.value || undefined)} placeholder="https://..." />
        </Field>
        <Field label="Live URL">
          <input className={inputCls} value={form.href ?? ""} onChange={(e) => set("href", e.target.value || undefined)} placeholder="https://..." />
        </Field>
      </div>

      {/* Case study toggle */}
      <div className="mt-6 border-t border-ink-line pt-6">
        <label className="flex cursor-pointer items-center gap-3">
          <div
            onClick={() => setHasCaseStudy((v) => !v)}
            className={`h-5 w-9 rounded-full transition-colors ${hasCaseStudy ? "bg-lime" : "bg-ink-line"} relative`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-ink-900 transition-transform ${hasCaseStudy ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          <span className="font-mono text-sm text-chalk">Case Study</span>
        </label>

        {hasCaseStudy && (
          <div className="mt-5 grid gap-5">
            {(["overview", "challenge", "solution", "outcome"] as const).map((key) => (
              <Field key={key} label={key.charAt(0).toUpperCase() + key.slice(1)}>
                <textarea
                  rows={4}
                  className={`${inputCls} resize-y`}
                  value={cs[key] ?? ""}
                  onChange={(e) => setCs((c) => ({ ...c, [key]: e.target.value || undefined }))}
                  placeholder={`Describe the ${key}...`}
                />
              </Field>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={save} className="bg-lime px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-label text-ink-900 transition-colors hover:bg-lime-bright">
          {isNew ? "Add Project" : "Save Changes"}
        </button>
        <button onClick={onCancel} className="border border-ink-line px-6 py-2.5 font-mono text-xs uppercase tracking-label text-ash transition-colors hover:text-chalk">
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Design form ──────────────────────────────────────────────────────────────

function DesignFormPanel({
  initial,
  isNew,
  onSave,
  onCancel,
}: {
  initial: Design;
  isNew: boolean;
  onSave: (d: Design) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Design>(initial);
  const [toolsRaw, setToolsRaw] = useState(initial.tools.join(", "));

  function set<K extends keyof Design>(k: K, v: Design[K]) {
    setForm((f) => {
      const next = { ...f, [k]: v };
      if (k === "title" && isNew) next.slug = slugify(v as string);
      return next;
    });
  }

  function save() {
    onSave({ ...form, tools: toolsRaw.split(",").map((t) => t.trim()).filter(Boolean) });
  }

  return (
    <div className="mt-6 border border-ink-line bg-ink-800 p-6 md:p-8">
      <h3 className="mb-6 font-display text-xl font-extrabold uppercase tracking-tight text-chalk">
        {isNew ? "Add Design" : `Edit — ${initial.title}`}
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Title">
          <input className={inputCls} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="Design name" />
        </Field>
        <Field label="Slug (auto)">
          <input className={inputCls} value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="design-name" />
        </Field>
        <Field label="Category">
          <input className={inputCls} value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="Brand Identity" />
        </Field>
        <Field label="Year">
          <input className={inputCls} value={form.year} onChange={(e) => set("year", e.target.value)} placeholder="2025" />
        </Field>
        <Field label="Tools (comma-separated)">
          <input className={inputCls} value={toolsRaw} onChange={(e) => setToolsRaw(e.target.value)} placeholder="Figma, Illustrator" />
        </Field>
        <div className="flex gap-4">
          <Field label="Accent">
            <select className={selectCls} value={form.accent} onChange={(e) => set("accent", e.target.value as Design["accent"])}>
              {ACCENTS.map((a) => <option key={a}>{a}</option>)}
            </select>
          </Field>
          <Field label="Size">
            <select className={selectCls} value={form.size} onChange={(e) => set("size", e.target.value as Design["size"])}>
              {SIZES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Image URL">
          <input className={inputCls} value={form.image ?? ""} onChange={(e) => set("image", e.target.value || undefined)} placeholder="https://..." />
        </Field>
        <Field label="Preview URL">
          <input className={inputCls} value={form.href ?? ""} onChange={(e) => set("href", e.target.value || undefined)} placeholder="https://..." />
        </Field>
      </div>

      <div className="mt-6 flex gap-3">
        <button onClick={save} className="bg-lime px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-label text-ink-900 transition-colors hover:bg-lime-bright">
          {isNew ? "Add Design" : "Save Changes"}
        </button>
        <button onClick={onCancel} className="border border-ink-line px-6 py-2.5 font-mono text-xs uppercase tracking-label text-ash transition-colors hover:text-chalk">
          Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Main admin page ──────────────────────────────────────────────────────────

type Tab = "work" | "designs";
type FormState = { mode: "none" } | { mode: "add" } | { mode: "edit"; slug: string };

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("work");
  const [projects, setProjects] = useState<Project[]>([]);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [form, setForm] = useState<FormState>({ mode: "none" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/projects").then((r) => r.json()).then(setProjects);
    fetch("/api/designs").then((r) => r.json()).then(setDesigns);
  }, []);

  async function saveProjects(next: Project[]) {
    setSaving(true);
    await fetch("/api/projects", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(next) });
    setProjects(next);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setForm({ mode: "none" });
  }

  async function saveDesigns(next: Design[]) {
    setSaving(true);
    await fetch("/api/designs", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(next) });
    setDesigns(next);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setForm({ mode: "none" });
  }

  function deleteProject(slug: string) {
    if (!confirm("Delete this project?")) return;
    saveProjects(projects.filter((p) => p.slug !== slug));
  }

  function deleteDesign(slug: string) {
    if (!confirm("Delete this design?")) return;
    saveDesigns(designs.filter((d) => d.slug !== slug));
  }

  const editingProject = form.mode === "edit" ? projects.find((p) => p.slug === form.slug) : null;
  const editingDesign = form.mode === "edit" ? designs.find((d) => d.slug === form.slug) : null;

  return (
    <div className="min-h-screen bg-ink-900">
      {/* Header */}
      <div className="border-b border-ink-line bg-ink-800">
        <div className="mx-auto flex max-w-site items-center justify-between px-5 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(196,248,42,0.5)]" />
            <span className="font-display text-base font-extrabold uppercase tracking-tight text-chalk">Admin Panel</span>
          </div>
          <Link href="/" className="font-mono text-xs uppercase tracking-label text-ash transition-colors hover:text-lime">
            ← View Site
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 py-10 md:px-10">
        {/* Tabs */}
        <div className="flex gap-0 border-b border-ink-line">
          {(["work", "designs"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setForm({ mode: "none" }); }}
              className={`px-6 py-3 font-mono text-xs uppercase tracking-label transition-colors ${
                tab === t
                  ? "border-b-2 border-lime text-lime"
                  : "text-ash hover:text-chalk"
              }`}
            >
              {t === "work" ? "Work Projects" : "Design Work"}
            </button>
          ))}
        </div>

        {/* Save feedback */}
        {saved && (
          <p className="mt-4 font-mono text-xs text-lime">Saved successfully.</p>
        )}

        {/* ── WORK TAB ── */}
        {tab === "work" && (
          <div className="mt-8">
            <div className="space-y-px border border-ink-line">
              {projects.map((p) => (
                <div key={p.slug} className="flex items-center justify-between gap-4 bg-ink-card px-5 py-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <span className="font-display text-base font-bold uppercase text-chalk truncate">{p.title}</span>
                      {p.caseStudy && (
                        <span className="shrink-0 border border-lime/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-label text-lime">Case Study</span>
                      )}
                    </div>
                    <p className="mt-0.5 font-mono text-[11px] text-smoke">{p.role} · {p.year} · {p.size}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      onClick={() => setForm({ mode: "edit", slug: p.slug })}
                      className="border border-ink-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-ash transition-colors hover:border-lime hover:text-lime"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProject(p.slug)}
                      className="border border-ink-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-ash transition-colors hover:border-flush hover:text-flush"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setForm({ mode: "add" })}
              className="mt-4 border border-dashed border-ink-line px-5 py-3 font-mono text-xs uppercase tracking-label text-ash transition-colors hover:border-lime hover:text-lime"
            >
              + Add Project
            </button>

            {form.mode === "add" && (
              <ProjectFormPanel
                initial={blankProject()}
                isNew
                onSave={(p) => saveProjects([...projects, p])}
                onCancel={() => setForm({ mode: "none" })}
              />
            )}
            {form.mode === "edit" && editingProject && (
              <ProjectFormPanel
                key={editingProject.slug}
                initial={editingProject}
                isNew={false}
                onSave={(p) => saveProjects(projects.map((x) => (x.slug === p.slug ? p : x)))}
                onCancel={() => setForm({ mode: "none" })}
              />
            )}
          </div>
        )}

        {/* ── DESIGNS TAB ── */}
        {tab === "designs" && (
          <div className="mt-8">
            <div className="space-y-px border border-ink-line">
              {designs.map((d) => (
                <div key={d.slug} className="flex items-center justify-between gap-4 bg-ink-card px-5 py-4">
                  <div className="min-w-0">
                    <span className="font-display text-base font-bold uppercase text-chalk truncate">{d.title}</span>
                    <p className="mt-0.5 font-mono text-[11px] text-smoke">{d.category} · {d.year} · {d.size}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      onClick={() => setForm({ mode: "edit", slug: d.slug })}
                      className="border border-ink-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-ash transition-colors hover:border-lime hover:text-lime"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteDesign(d.slug)}
                      className="border border-ink-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-ash transition-colors hover:border-flush hover:text-flush"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setForm({ mode: "add" })}
              className="mt-4 border border-dashed border-ink-line px-5 py-3 font-mono text-xs uppercase tracking-label text-ash transition-colors hover:border-lime hover:text-lime"
            >
              + Add Design
            </button>

            {form.mode === "add" && (
              <DesignFormPanel
                initial={blankDesign()}
                isNew
                onSave={(d) => saveDesigns([...designs, d])}
                onCancel={() => setForm({ mode: "none" })}
              />
            )}
            {form.mode === "edit" && editingDesign && (
              <DesignFormPanel
                key={editingDesign.slug}
                initial={editingDesign}
                isNew={false}
                onSave={(d) => saveDesigns(designs.map((x) => (x.slug === d.slug ? d : x)))}
                onCancel={() => setForm({ mode: "none" })}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
