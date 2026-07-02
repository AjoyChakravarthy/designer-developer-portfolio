import { skills, skillsHeading } from "@/data/skills";
import { skillIconMap } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { OutlinedText } from "@/components/ui/OutlinedText";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <SectionLabel index="04">Skills</SectionLabel>
            <h2 className="mt-6 font-display text-[14vw] font-extrabold uppercase leading-[0.82] tracking-tighter text-chalk md:text-8xl">
              <span className="block">{skillsHeading.titleTop}</span>
              <OutlinedText animate fill="chalk" className="block">
                {skillsHeading.titleBottom}
              </OutlinedText>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md font-mono text-base leading-relaxed text-ash md:ml-auto md:text-right">
              {skillsHeading.intro}
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <Reveal
          stagger
          className="mt-16 grid grid-cols-1 gap-px border border-ink-line bg-ink-line md:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = skillIconMap[group.icon];
            return (
              <div key={group.num} className="group bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-800 md:p-10">
                <div className="flex items-start justify-between">
                  <Icon className="h-8 w-8 text-lime" />
                  <span className="font-mono text-xs text-smoke">{group.num}</span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-extrabold uppercase tracking-tight text-chalk md:text-3xl">
                  {group.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-mono text-sm text-ash">
                      <span className="h-1.5 w-1.5 shrink-0 bg-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
