import React from "react";
import { CornerBrackets, SectionWaveDivider } from "./components/Decorations";
import { Cursor } from "./components/Cursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <CornerBrackets />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <SectionWaveDivider color="var(--color-violet)" />
        <Projects />
        <SectionWaveDivider color="var(--color-coral)" />
        <Experience />
        <SectionWaveDivider color="var(--color-gold)" />
        <Skills />
        <SectionWaveDivider color="var(--color-cyan)" />
        <About />
      </main>
      <Contact />
    </>
  );
}
