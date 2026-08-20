import Hero from "./components/Hero";
import Register from "./components/Register";
import About from "./components/About";
import PastProjects from "./components/PastProjects";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Register />
      <About />
      <PastProjects />
      <Schedule/>
      <Sponsors/>
    </main>
  );
}