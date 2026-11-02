import React from "react";
import { Download, Sparkles, Star, ChevronDown } from "lucide-react";
import {
  SmallWave,
  ScribbleUnderline,
  SparkleStar,
  SmallStar,
  DotMatrix,
  StarburstBadge,
  HandDrawnArrow
} from "./Decorations";
import { MagneticButton } from "./Cursor";

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "./Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-32 pb-24 md:px-12 md:pt-40"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-(--color-violet)/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-52 h-72 w-72 rounded-full bg-(--color-accent)/15 blur-3xl" />

      {/* Decorative dot matrix and stars */}
      <DotMatrix className="pointer-events-none absolute left-4 bottom-10 h-28 w-44 text-(--color-cyan) opacity-40 md:left-10" />
      <SparkleStar className="pointer-events-none absolute right-[8%] top-16 h-8 w-8 text-(--color-gold) opacity-70 md:right-[28%]" />
      <SmallStar className="pointer-events-none absolute left-[6%] top-1/2 h-5 w-5 text-(--color-coral) opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Column: Intro & Titles */}
        <div>
          <div className="relative mb-4 inline-flex items-center gap-2 rounded-full bg-(--color-canvas-raised) px-4 py-1.5 text-sm font-medium text-(--color-ink)/80">
            <Sparkles size={14} className="text-(--color-accent)" />
            Hey, I’m
            <SmallWave className="pointer-events-none absolute -bottom-4 left-2 h-3 w-16 text-(--color-ink)/25" />
          </div>

          <h1 className="relative font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            KRISH
            <ScribbleUnderline className="absolute -bottom-3 left-0 h-4 w-48 text-(--color-accent) sm:w-56 md:w-64" />
          </h1>

          <p className="mt-8 max-w-md text-lg font-medium text-(--color-ink)/80">
            SQL Developer&nbsp;·&nbsp;Data Analyst&nbsp;·&nbsp;Trainer
          </p>

          <div className="relative mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={downloadResume}
              className="flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-4 font-display text-sm font-extrabold text-(--color-canvas) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>

            <MagneticButton
              onClick={scrollToProjects}
              className="rounded-full border-2 border-(--color-ink)/25 px-7 py-4 font-display text-sm font-extrabold text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              View Projects
            </MagneticButton>

            <HandDrawnArrow className="pointer-events-none absolute -right-16 top-1/2 hidden h-10 w-20 -translate-y-1/2 rotate-6 text-(--color-ink)/40 lg:block" />
          </div>
        </div>

        {/* Right Column: Cartoon Character Illustration & Floating Badges */}
        <div className="relative flex justify-center md:justify-end">
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-(--color-violet)/35 blur-3xl" />
          <DotMatrix className="pointer-events-none absolute -right-4 bottom-0 h-24 w-40 text-(--color-gold) opacity-40" />

          <div className="relative w-full max-w-sm animate-float-hero">
            <img
              src="/img/krish-character.png"
              alt="Cartoon character of Krish Singh"
              className="relative z-10 w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
            />

            <div className="absolute top-2 right-2 z-20 rounded-2xl bg-(--color-cyan) px-4 py-2 font-display text-xs font-extrabold text-(--color-canvas) shadow-[3px_4px_0_0_oklch(0.16_0.04_290)] animate-rotate-badge">
              Let’s query
              <br />
              something awesome!
            </div>

            <Star
              size={28}
              fill="currentColor"
              className="absolute -left-6 top-10 z-20 text-(--color-gold)"
            />
            <Sparkles
              size={24}
              className="absolute bottom-6 -right-2 z-20 text-(--color-accent)"
            />

            <StarburstBadge
              color="var(--color-coral)"
              className="absolute -left-8 bottom-16 z-20 hidden h-16 w-16 -rotate-8 text-[10px] font-display font-extrabold text-(--color-canvas) sm:flex"
            >
              SQL
            </StarburstBadge>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        data-cursor="grow"
        className="animate-bounce-scroll absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-(--color-ink)/50 md:flex"
        aria-label="Scroll down"
      >
        <span className="font-display text-xs font-bold uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
