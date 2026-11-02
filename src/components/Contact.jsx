import React from "react";
import { Mail, ArrowUpRight, Linkedin, Github, Download } from "lucide-react";
import {
  DotMatrix,
  SmallStar,
  SmallWave,
  MaskingTape,
  SparkleStar,
  ScribbleUnderline
} from "./Decorations";
import { MagneticButton } from "./Cursor";

export function Contact() {
  const currentYear = new Date().getFullYear();

  const handleOpenAllProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("open-all-projects"));
  };

  return (
    <footer id="contact" className="relative overflow-hidden px-6 pb-10 pt-16 md:px-12">
      <DotMatrix className="pointer-events-none absolute left-4 top-4 h-24 w-40 text-(--color-gold) opacity-20 md:left-16" />
      <SmallStar className="pointer-events-none absolute right-[8%] top-2 h-5 w-5 rotate-6 text-(--color-cyan) opacity-60" />
      <SmallWave className="pointer-events-none absolute left-[6%] bottom-10 h-4 w-24 text-(--color-ink)/15" />

      {/* Main CTA Card */}
      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) px-8 py-14 text-center shadow-[8px_10px_0_0_oklch(0.10_0.03_290)] md:px-16">
        <MaskingTape
          color="var(--color-violet)"
          className="absolute -top-3 left-1/2 z-10 -translate-x-1/2"
        />

        <SmallStar className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 text-(--color-gold)" />
        <SparkleStar className="pointer-events-none absolute -right-4 -top-4 h-10 w-10 text-(--color-accent)" />
        <SmallStar className="pointer-events-none absolute -bottom-3 right-10 h-6 w-6 text-(--color-cyan)" />

        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
          ◉ Let’s Talk
        </p>

        <h2 className="relative mt-3 inline-block font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Have data to untangle?
          <br />
          Let’s talk.
          <ScribbleUnderline className="absolute -bottom-3 left-1/2 h-4 w-2/3 -translate-x-1/2 text-(--color-accent)" />
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            onClick={() => {
              window.location.href = "mailto:singh.krish2003@gmail.com";
            }}
            className="flex items-center gap-2 rounded-full bg-(--color-accent) px-8 py-4 font-display text-sm font-extrabold text-(--color-canvas) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)] transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            singh.krish2003@gmail.com
          </MagneticButton>

          <MagneticButton
            onClick={handleOpenAllProjects}
            className="flex items-center gap-2 rounded-full border-2 border-(--color-ink)/25 px-8 py-4 font-display text-sm font-extrabold text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            View All Projects <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </div>

      {/* Footer Bottom Info */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-(--color-ink)/60 md:flex-row">
        <p>© {currentYear} Krish Singh. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/krish-singh-688884320/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-ink)/15 text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="https://github.com/singhkrish2607-sudo"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-(--color-ink)/15 text-(--color-ink) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
          >
            <Github size={15} />
          </a>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            data-cursor="grow"
            aria-label="Download resume"
            title="Download resume"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-accent) text-(--color-canvas) transition-transform hover:scale-110"
          >
            <Download size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
