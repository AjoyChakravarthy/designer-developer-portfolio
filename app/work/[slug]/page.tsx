import { notFound } from "next/navigation";
import Link from "next/link";
import { readProjects } from "@/lib/data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  const projects = readProjects();
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = readProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) notFound();

  const { title, role, year, tags, image, accent, caseStudy } = project;

  const accentText = {
    lime: "text-lime",
    pink: "text-flush",
    chalk: "text-chalk",
  }[accent];

  const sections = [
    { label: "Overview", body: caseStudy.overview },
    { label: "Challenge", body: caseStudy.challenge },
    { label: "Solution", body: caseStudy.solution },
    { label: "Outcome", body: caseStudy.outcome },
  ].filter((s) => s.body);

  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-24">
        {/* Hero */}
        <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: image ? `url(${image})` : undefined,
              background: image
                ? undefined
                : "radial-gradient(120% 120% at 20% 10%, #1c2410 0%, #0c0f0b 55%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-site px-5 pb-12 md:px-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-ink-line bg-ink-900/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-label text-ash backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className={`font-display text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl ${accentText}`}>
              {title}
            </h1>
            <p className="mt-3 font-mono text-sm uppercase tracking-label text-ash">
              {role} · {year}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-site px-5 py-20 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
            {/* Back link */}
            <div>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-ash transition-colors hover:text-lime"
              >
                ← Back to Work
              </Link>
            </div>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map((section) => (
                <div key={section.label}>
                  <p className="mb-4 font-mono text-xs uppercase tracking-label text-lime">
                    {section.label}
                  </p>
                  <div className="space-y-4">
                    {section.body!.split("\n\n").map((para, i) => (
                      <p key={i} className="font-mono text-base leading-relaxed text-ash">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
