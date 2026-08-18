import Hero from "./components/Hero";
import Register from "./components/Register";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Register />
      <About />
    </main>
  );
}
