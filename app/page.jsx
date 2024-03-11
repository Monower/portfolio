export const revalidate = 10;

import dynamic from "next/dynamic";
const Hero = dynamic(()=>import('./components/Home/Hero'));

const Skills = dynamic(()=> import('./components/Home/Skills'),
);

const Experience = dynamic(()=> import('./components/Home/Experience'),
);

const Projects = dynamic(()=> import('./components/Home/Projects'));

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}
