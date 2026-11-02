import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data/portfolioData";
import {
  DotMatrix,
  SparkleStar,
  SmallStar,
  MaskingTape,
  ScribbleUnderline
} from "./Decorations";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20 md:px-12">
      <DotMatrix className="pointer-events-none absolute right-4 top-2 h-24 w-40 text-(--color-violet) opacity-25 md:right-14" />
      <SparkleStar className="pointer-events-none absolute left-[3%] top-24 h-7 w-7 text-(--color-gold) opacity-70" />

      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
          ◉ Experience
        </p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Where I’ve worked
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-violet)" />
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10">
          {experience.map((item) => (
            <div
              key={item.role}
              className={`relative rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-6 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)] md:p-8 ${item.rotate} hover:rotate-0 transition-transform`}
            >
              <MaskingTape
                color={`var(${item.accent})`}
                className="absolute -top-3 left-8 z-10"
              />
              <SmallStar className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 text-(--color-gold)" />

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `var(${item.accent})` }}
                  >
                    <Briefcase size={20} className="text-(--color-canvas)" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-(--color-ink)/70">{item.company}</p>
                  </div>
                </div>

                <span
                  className="rounded-full px-3 py-1 text-xs font-bold text-(--color-canvas)"
                  style={{ backgroundColor: `var(${item.accent})` }}
                >
                  {item.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2 text-(--color-ink)/80">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education Card */}
          <div className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-(--color-ink)/15 px-6 py-4">
            <GraduationCap className="text-(--color-cyan)" size={24} />
            <p className="text-sm md:text-base">
              <span className="font-display font-extrabold">
                {education.degree}
              </span>
              , {education.institution}, {education.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
