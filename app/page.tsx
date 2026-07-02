export const dynamic = "force-dynamic";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Designs } from "@/components/sections/Designs";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { AskAlexChat } from "@/components/chat/AskAlexChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Designs />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AskAlexChat />
    </>
  );
}
