import { readProjects } from "@/lib/data";
import { workIntro } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const sizeClasses: Record<string, string> = {
  lg: "md:col-span-4 md:row-span-2 min-h-[460px] md:min-h-[620px]",
  md: "md:col-span-2 min-h-[300px]",
  wide: "md:col-span-4 min-h-[360px]",
};

export async function Work() {
  const projects = readProjects();

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-site px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <SectionLabel index="02">Selected Work</SectionLabel>
            <h2 className="mt-6 font-display text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tighter text-chalk md:text-8xl">
              Recent
              <br />
              Obsessions.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md font-mono text-base leading-relaxed text-ash md:ml-auto md:text-right">
              {workIntro}
            </p>
          </Reveal>
        </div>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-4 md:auto-rows-[290px] md:grid-cols-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className={sizeClasses[project.size]}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
