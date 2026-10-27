"use client";

import React, { useEffect, useState } from "react";

interface ChapterInfo {
  id: string;
  number: string;
  title: string;
}

const CHAPTERS: ChapterInfo[] = [
  { id: "chapter-hero", number: "01", title: "Overview" },
  { id: "chapter-pipeline", number: "02", title: "Connected Flow" },
  { id: "chapter-compliance", number: "03", title: "UAE Compliance" },
  { id: "chapter-faq", number: "04", title: "FAQs" },
];

export default function ProgressRail() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If scrolled near the bottom, activate the last chapter (FAQs)
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveIdx(CHAPTERS.length - 1);
        return;
      }

      // If near the top, activate the first chapter
      if (scrollY < 180) {
        setActiveIdx(0);
        return;
      }

      // Check section bounding rects
      let foundIdx = 0;
      for (let i = 0; i < CHAPTERS.length; i++) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.45) {
            foundIdx = i;
          }
        }
      }
      setActiveIdx(foundIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      className="fixed left-3 sm:left-5 xl:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-start select-none"
      aria-label="Page Sections Navigation"
    >
      {/* Chapter Counter Badge */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
        <span className="font-heading font-extrabold text-[10.5px] text-brand-blue tracking-widest uppercase">
          0{activeIdx + 1} / 0{CHAPTERS.length}
        </span>
      </div>

      {/* Chapters Vertical Navigation List */}
      <nav className="relative flex flex-col gap-1 py-1">
        {/* Continuous background guide line */}
        <div className="absolute left-[9px] top-3 bottom-3 w-[1.5px] bg-slate-200 -z-10 rounded-full" />

        {CHAPTERS.map((ch, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => scrollToChapter(ch.id)}
              className={`group flex items-center gap-3 text-left py-2 px-1 rounded-xl transition-all duration-300 pointer-events-auto cursor-pointer ${
                isActive
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-85"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* Dot / Pill Indicator */}
              <div className="relative flex items-center justify-center w-5 shrink-0">
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-6 bg-brand-blue rounded-full shadow-sm shadow-brand-blue/30"
                      : "w-2 h-2 bg-slate-300 group-hover:bg-brand-blue/70 group-hover:scale-125"
                  }`}
                />
              </div>

              {/* Step Number & Section Title */}
              <div className="flex items-center gap-2 transition-all duration-200">
                <span
                  className={`font-mono text-[10px] font-bold ${
                    isActive ? "text-brand-blue" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                >
                  {ch.number}
                </span>
                <span
                  className={`font-heading text-xs tracking-wide transition-all ${
                    isActive
                      ? "font-extrabold text-brand-ink"
                      : "font-medium text-slate-500 group-hover:text-brand-ink"
                  }`}
                >
                  {ch.title}
                </span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Brand Subtitle Footer */}
      <div className="mt-3 px-1 text-[9px] font-heading font-bold uppercase tracking-widest text-slate-400">
        Suvrin ERP UAE
      </div>
    </aside>
  );
}
