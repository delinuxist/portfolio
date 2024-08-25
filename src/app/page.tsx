import Hero from "@/components/layouts/hero";
import Navbar from "@/components/layouts/navbar";
import Projects from "@/components/layouts/projects";
import Tape from "@/components/layouts/tape";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Tape />
    </main>
  );
}
