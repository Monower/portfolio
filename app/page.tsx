import Hero from "./components/Home/Hero";
import Skills from "./components/Home/Skills";
import Experience from "./components/Home/Experience";
import Projects from "./components/Home/Projects";
import FAQ from "./components/Home/FAQ";
import Contact from "./components/Home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}
