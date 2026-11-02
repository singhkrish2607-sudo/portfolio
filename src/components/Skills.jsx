import React from "react";
import {
  Database,
  Table2,
  CodeXml,
  ChartColumn,
  ShieldCheck,
  Bot
} from "lucide-react";
import { skills } from "../data/portfolioData";
import {
  DotMatrix,
  SmallStar,
  SparkleStar,
  ScribbleUnderline,
  HandDrawnArrow
} from "./Decorations";

const iconMap = {
  Database,
  Table2,
  CodeXml,
  ChartColumn,
  ShieldCheck,
  Bot
};

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20 md:px-12">
      <DotMatrix className="pointer-events-none absolute right-2 bottom-4 h-24 w-40 text-(--color-accent) opacity-25 md:right-12" />
      <SmallStar className="pointer-events-none absolute left-[5%] top-4 h-5 w-5 text-(--color-cyan) opacity-70" />
      <SparkleStar className="pointer-events-none absolute right-[6%] top-10 h-6 w-6 text-(--color-coral) opacity-70" />
      <SmallStar className="pointer-events-none absolute left-[12%] bottom-6 h-4 w-4 rotate-12 text-(--color-violet) opacity-60" />

      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
          ◉ Skills
        </p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Tools I work with every day
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-accent)" />
        </h2>

        <HandDrawnArrow className="pointer-events-none mt-1 hidden h-8 w-16 text-(--color-ink)/30 sm:block" />

        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map(({ name, iconName, accent, tilt }) => {
            const Icon = iconMap[iconName] || Database;
            return (
              <div
                key={name}
                data-cursor="grow"
                className={`group relative flex items-center gap-3 rounded-2xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) px-5 py-4 shadow-[4px_5px_0_0_oklch(0.10_0.03_290)] ${tilt} transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:scale-105`}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ backgroundColor: `var(${accent})` }}
                >
                  <Icon size={18} className="text-(--color-canvas)" />
                </span>
                <span className="font-display text-sm font-extrabold">{name}</span>
                <SmallStar className="pointer-events-none absolute -right-2 -top-2 h-4 w-4 rotate-6 text-(--color-gold) opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
