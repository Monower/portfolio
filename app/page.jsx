"use client";

import dynamic from "next/dynamic";
const Hero = dynamic(()=>import('./components/Home/Hero'),{
  ssr:false,
  loading: () => (
    <p>Loading...</p>
  )
});

const Skills = dynamic(()=> import('./components/Home/Skills'),
{
  ssr:false,
  loading: () => (
    <p>Loading...</p>
  )
}
);

const Experience = dynamic(()=> import('./components/Home/Experience'),
{
  ssr:false,
  loading: () => (
    <p>Loading...</p>
  )
}
);

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
    </>
  );
}
