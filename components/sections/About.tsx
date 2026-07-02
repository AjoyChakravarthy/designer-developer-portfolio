import { about } from "@/data/about";
import { site } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

function Headline() {
  const { headline, headlineHighlight } = about;
  const parts = headline.split(headlineHighlight);
  return (
    <h2 className="font-display text-[10vw] font-extrabold uppercase leading-[0.9] tracking-tight text-chalk md:text-7xl">
      {parts[0]}
      <span className="text-lime">{headlineHighlight}</span>
      {parts[1]}
    </h2>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      {/* Ribbon */}
      <Marquee items={about.marquee} highlight={about.marqueeHighlight} />

      <div className="mx-auto mt-20 max-w-site px-5 md:px-10">
        <Reveal>
          <SectionLabel index="03">About</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-[300px_1fr] md:gap-14">
          {/* Portrait */}
          <Reveal>
            <div
              className="aspect-[3/4] w-full overflow-hidden border border-ink-line bg-cover bg-center grayscale"
              style={{
                backgroundImage: about.portrait
                  ? `url(${about.portrait})`
                  : "radial-gradient(120% 100% at 30% 20%, #20271f 0%, #0c0f0d 60%)",
              }}
              role="img"
              aria-label={`Portrait of ${site.name}`}
            />
          </Reveal>

          {/* Text + stats */}
          <div>
            <Reveal>
              <Headline />
            </Reveal>

            <Reveal stagger className="mt-10 grid gap-8 sm:grid-cols-2">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="font-mono text-sm leading-relaxed text-ash">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal stagger className="mt-12 grid grid-cols-2 gap-px border border-ink-line bg-ink-line sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-ink-900 p-6">
                  <p className="font-display text-4xl font-extrabold text-lime md:text-5xl">{stat.value}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-ash">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
