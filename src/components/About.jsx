import React, { useState } from "react";
import { ChevronDown, Linkedin, Github } from "lucide-react";
import {
  aboutStats,
  aboutExtendedParagraphs
} from "../data/portfolioData";
import {
  DotMatrix,
  MaskingTape,
  SparkleStar,
  SmallStar,
  SmallWave,
  ScribbleUnderline,
  HandDrawnArrow
} from "./Decorations";
import { MagneticButton } from "./Cursor";

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative overflow-x-hidden px-6 py-20 md:px-12">
      <DotMatrix className="pointer-events-none absolute left-2 top-6 h-24 w-40 text-(--color-violet) opacity-25 md:left-10" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Column: Tilted Photo Card */}
        <div className="relative flex justify-center">
          <div className="relative rounded-[2rem] bg-(--color-canvas-raised) p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] -rotate-2 transition-transform duration-300 hover:rotate-0">
            <MaskingTape
              color="var(--color-coral)"
              className="absolute -top-3 left-10 z-10"
            />

            <img
              src="/img/krish.jpg"
              alt="Krish Singh"
              className="w-64 rounded-2xl object-cover md:w-72"
            />

            <SparkleStar className="pointer-events-none absolute -right-4 -top-4 h-9 w-9 text-(--color-accent)" />
            <SmallStar className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 text-(--color-gold)" />

            <div className="pointer-events-none absolute -right-10 top-1/3 hidden rotate-3 rounded-xl bg-(--color-coral) px-3 py-1.5 font-display text-xs font-extrabold text-(--color-canvas) shadow-[3px_4px_0_0_oklch(0.16_0.04_290)] sm:block">
              That’s me!
            </div>

            <SmallWave className="pointer-events-none absolute left-1/2 -bottom-8 h-4 w-24 -translate-x-1/2 text-(--color-ink)/20" />
          </div>
        </div>

        {/* Right Column: Bio & Stats */}
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
            ◉ About Me
          </p>
          <h2 className="relative inline-block mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Hi, I’m Krish — I turn data into answers.
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-violet)" />
          </h2>

          <p className="mt-5 max-w-lg text-(--color-ink)/80">
            I’m a SQL Developer and Data Analyst with 2+ years of hands-on experience in MySQL and PostgreSQL — multi-table joins, CTEs, window functions, schema design and reporting queries. I also train learners in SQL and build AI agent projects in Python.
          </p>

          {/* Expandable Accordion Drawer */}
          <div
            className={`transition-all duration-400 ease-in-out overflow-hidden ${
              expanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-lg space-y-3 border-l-2 border-dashed border-(--color-accent)/40 pl-4 text-(--color-ink)/75">
              {aboutExtendedParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-8 flex flex-wrap gap-6">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-extrabold text-(--color-accent)">
                  {stat.value}
                </p>
                <p className="text-sm text-(--color-ink)/70">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="relative mt-9 flex flex-wrap items-center gap-4">
            <HandDrawnArrow className="pointer-events-none absolute -top-9 left-6 hidden h-8 w-16 -rotate-[100deg] text-(--color-ink)/30 sm:block" />

            <MagneticButton
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="flex items-center gap-2 rounded-full bg-(--color-accent) px-7 py-4 font-display text-sm font-extrabold text-(--color-canvas) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform hover:-translate-y-0.5"
            >
              {expanded ? "Show Less" : "More About Me"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </MagneticButton>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/krish-singh-688884320/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--color-ink)/15 text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/singhkrish2607-sudo"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-(--color-ink)/15 text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
