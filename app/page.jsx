"use client";

import dynamic from "next/dynamic";
const Hero = dynamic(()=>import('./components/Home/Hero'),{
  ssr:false,
  loading: () => (
    <p>Loading...</p>
  )
});

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
