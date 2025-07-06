
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/pages/home/hero";
import { Skills } from "@/components/pages/home/skills";
import Activities from "@/components/pages/home/activities";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Activities/> */}
      {/* add slideshow or pic to show my overview activities , but create the modern style and beautiful design */}
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
}
