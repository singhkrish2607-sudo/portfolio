import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { SmallStar, ScribbleUnderline } from "./Decorations";

const navLinks = ["Home", "Projects", "Experience", "About", "Contact"];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-(--color-canvas)/60">
        <a
          href="#top"
          data-cursor="grow"
          className="relative font-display text-xl font-extrabold tracking-tight"
        >
          KRISH<span className="text-(--color-accent)">.</span>
          <SmallStar className="pointer-events-none absolute -right-4 -top-3 h-3.5 w-3.5 rotate-12 text-(--color-gold)" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
              data-cursor="grow"
              className="group relative text-sm font-medium text-(--color-ink)/80 transition-colors hover:text-(--color-accent)"
            >
              {item}
              <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-full text-(--color-accent) opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          data-cursor="grow"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-(--color-ink)/25 text-(--color-ink) md:hidden transition-transform active:scale-95"
        >
          <Menu size={18} />
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-(--color-canvas)/95 px-8 py-10 backdrop-blur-lg md:hidden">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-extrabold tracking-tight"
            >
              KRISH<span className="text-(--color-accent)">.</span>
            </a>
            <button
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-(--color-ink)/25 text-(--color-ink)"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-2xl font-display font-extrabold">
            {navLinks.map((item) => (
              <a
                key={item}
                href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-(--color-accent)"
              >
                {item}
              </a>
            ))}
          </nav>

          <div>
            <a
              href="./Resume.pdf"
              download="Resume.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-(--color-accent) px-6 py-4 font-display text-sm font-extrabold text-(--color-canvas) shadow-[4px_6px_0_0_oklch(0.16_0.04_290)]"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
