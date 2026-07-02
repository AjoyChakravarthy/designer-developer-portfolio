import { experience, experienceIntro } from "@/data/about";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <Reveal>
            <SectionLabel index="05">Experience</SectionLabel>
            <h2 className="mt-6 font-display text-[16vw] font-extrabold uppercase leading-none tracking-tighter text-chalk md:text-9xl">
              Receipts.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md font-mono text-base leading-relaxed text-ash md:ml-auto md:mt-4 md:text-right">
              {experienceIntro}
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-16 border-t border-ink-line">
          {experience.map((role) => (
            <Reveal key={role.period}>
              <article className="grid items-start gap-4 border-b border-ink-line py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <p className="font-mono text-sm uppercase tracking-label text-lime md:col-span-3">
                  {role.period}
                </p>
                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-chalk md:text-4xl">
                    {role.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-ash">{role.org}</p>
                </div>
                <p className="font-mono text-sm leading-relaxed text-ash md:col-span-4">
                  {role.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
