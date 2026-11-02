import React, { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "../data/portfolioData";
import {
  DotMatrix,
  SparkleStar,
  SmallStar,
  ScribbleUnderline,
  MaskingTape
} from "./Decorations";

function ProjectCard({ project, index, onOpen }) {
  const isEven = index % 2 === 0;

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="grow"
      className={`group relative block w-full text-left rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-3 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)] ${project.rotate} transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:scale-[1.03]`}
    >
      <MaskingTape
        color={`var(${project.accent})`}
        className={`absolute -top-3 z-10 ${
          isEven ? "left-6 -rotate-[8deg]" : "right-6 rotate-[6deg]"
        }`}
      />

      <div className="overflow-hidden rounded-2xl">
        <img
          src={project.img}
          alt={`${project.title} project thumbnail`}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="px-1 pb-1 pt-4">
        <span
          className="rounded-full px-3 py-1 text-xs font-bold text-(--color-canvas)"
          style={{ backgroundColor: `var(${project.accent})` }}
        >
          {project.tag}
        </span>
        <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight">
          {project.title}
        </h3>
      </div>

      <SmallStar className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 text-(--color-gold) opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjectsOpen, setAllProjectsOpen] = useState(false);

  useEffect(() => {
    const handleOpenAll = () => setAllProjectsOpen(true);
    window.addEventListener("open-all-projects", handleOpenAll);
    return () => window.removeEventListener("open-all-projects", handleOpenAll);
  }, []);

  useEffect(() => {
    if (!selectedProject && !allProjectsOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedProject) setSelectedProject(null);
        else setAllProjectsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, allProjectsOpen]);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20 md:px-12">
      <DotMatrix className="pointer-events-none absolute right-4 top-2 h-24 w-40 text-(--color-coral) opacity-25 md:right-14" />
      <SparkleStar className="pointer-events-none absolute left-[3%] top-24 h-7 w-7 text-(--color-cyan) opacity-70" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
              ◉ Projects
            </p>
            <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Things I’ve built
              <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-coral)" />
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setAllProjectsOpen(true)}
            data-cursor="grow"
            className="group relative flex items-center gap-1 font-display text-sm font-extrabold text-(--color-ink)/80 transition-colors hover:text-(--color-accent)"
          >
            View All Projects{" "}
            <ArrowUpRight size={16} />
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-[85%] text-(--color-accent) opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>

        {/* 3-column responsive grid matching site-966 */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, idx) => (
            <ProjectCard
              key={item.title}
              project={item}
              index={idx}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* All Projects Modal */}
      {allProjectsOpen && !selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setAllProjectsOpen(false)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-2 border-dashed border-(--color-ink)/20 bg-(--color-canvas-raised) p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <MaskingTape
              color="var(--color-accent)"
              className="absolute -top-3 left-8 z-10"
            />
            <SparkleStar className="pointer-events-none absolute -right-3 -top-3 h-9 w-9 text-(--color-accent)" />

            <button
              data-cursor="grow"
              onClick={() => setAllProjectsOpen(false)}
              aria-label="Close all projects"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-(--color-canvas) text-(--color-ink) transition-transform hover:scale-110"
            >
              <X size={16} />
            </button>

            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
              ◉ All Projects
            </p>
            <h3 className="relative mt-2 inline-block font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              All my GitHub projects
              <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-full text-(--color-accent)" />
            </h3>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((item, idx) => (
                <ProjectCard
                  key={item.title}
                  project={item}
                  index={idx}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Single Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border-2 border-dashed border-(--color-ink)/20 bg-(--color-canvas-raised) p-6 shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <MaskingTape
              color={`var(${selectedProject.accent})`}
              className="absolute -top-3 left-8 z-10"
            />
            <SparkleStar className="pointer-events-none absolute -right-3 -top-3 h-9 w-9 text-(--color-accent)" />

            <button
              data-cursor="grow"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-(--color-canvas) text-(--color-ink) transition-transform hover:scale-110"
            >
              <X size={16} />
            </button>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={selectedProject.img}
                alt={`${selectedProject.title} project artwork`}
                className="aspect-square w-full object-cover"
              />
            </div>

            <span
              className="mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold text-(--color-canvas)"
              style={{ backgroundColor: `var(${selectedProject.accent})` }}
            >
              {selectedProject.tag}
            </span>

            <h3 className="relative mt-3 inline-block font-display text-2xl font-extrabold tracking-tight">
              {selectedProject.title}
              <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-full text-(--color-accent)" />
            </h3>

            <p className="mt-5 text-(--color-ink)/80">
              {selectedProject.description}
            </p>

            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="grow"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--color-accent) px-6 py-3 font-display text-sm font-extrabold text-(--color-canvas) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)]"
            >
              View on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
