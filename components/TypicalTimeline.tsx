"use client";

import React, { useState, useRef } from "react";
import { TIMELINE_TIERS } from "@/data";

export default function TypicalTimeline() {
  const TIERS = TIMELINE_TIERS;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLUListElement>(null);

  const scrollToTier = (idx: number) => {
    setActiveIndex(idx);
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[idx]) {
        (cards[idx] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      const newIndex = Math.min(
        TIERS.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section
      id="section-timeline"
      aria-labelledby="timeline-title"
      className="relative py-12 sm:py-16 border-t border-brand-line bg-slate-50/50 scroll-mt-24 overflow-hidden"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#83B773]/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-10 text-left">
          <h2
            id="timeline-title"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight"
          >
            Typical Implementation Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No fictional promises. Execution duration depends on your operational scale, number of
            modules, and data readiness.
          </p>
        </div>

        {/* Mobile Segmented Control: 3 Interactive Pills for Quick Switching */}
        <div className="md:hidden flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl mb-4 border border-slate-200">
          {TIERS.map((tier, idx) => {
            const isSelected = activeIndex === idx;
            const shortName = tier.title.replace(" Implementation", "");
            return (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToTier(idx)}
                className={`flex-1 py-2 px-1.5 rounded-lg text-xs font-heading font-bold transition-all text-center truncate cursor-pointer ${
                  isSelected
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200/80"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>{shortName}</span>
                {tier.isPopular && <span className="ml-1 text-[#4e7d40]">★</span>}
              </button>
            );
          })}
        </div>

        {/* Tier Cards - Horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="relative">
          <ul
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {TIERS.map((tier, idx) => (
              <li
                key={idx}
                className="h-full w-[85vw] max-w-[340px] md:w-auto md:max-w-none snap-center shrink-0 md:shrink"
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl p-5 sm:p-7 flex flex-col justify-between bg-white border transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
                    tier.isPopular
                      ? "border-[#83B773]/50 ring-1 ring-[#83B773]/30 shadow-soft hover:shadow-[0_14px_34px_-14px_rgba(131,183,115,0.45)]"
                      : "border-brand-line shadow-xs hover:border-[#83B773]/50 hover:shadow-[0_12px_30px_-14px_rgba(131,183,115,0.35)]"
                  }`}
                >
                  {/* Top accent bar: always visible on popular, slides in on hover for others */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-[#83B773] to-[#A6D198] transition-transform duration-300 ${
                      tier.isPopular ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  <div>
                    {/* Header Badge + Icon */}
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span
                        className={`text-[11px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          tier.isPopular
                            ? "bg-[#83B773]/15 text-[#2e5225] border border-[#83B773]/40"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tier.badge}
                      </span>

                      {/* Icon tile: fills + glows green on card hover */}
                      <span
                        aria-hidden="true"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#83B773]/10 group-hover:border-[#83B773]/35 group-hover:shadow-[0_0_18px_rgba(131,183,115,0.35)]"
                      >
                        <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-slate-400 transition-all duration-300 group-hover:text-[#83B773] group-hover:[font-variation-settings:'FILL'_1] group-hover:drop-shadow-[0_0_6px_rgba(131,183,115,0.65)]">
                          schedule
                        </span>
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-brand-ink mb-1 leading-snug">
                      {tier.title}
                    </h3>
                    <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#3b6630] mb-1.5 sm:mb-2">
                      {tier.duration}
                    </div>
                    <div className="text-xs font-mono font-medium text-slate-500 mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-brand-line">
                      {tier.scope}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-5">
                      {tier.desc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-5 sm:mb-6">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined text-[#83B773] text-[16px] shrink-0 mt-0.5 transition-all duration-300 group-hover:[font-variation-settings:'FILL'_1]"
                          >
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-3.5 sm:pt-4 border-t border-brand-line flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px] text-slate-400 transition-colors group-hover:text-[#83B773]"
                    >
                      flag
                    </span>
                    <span>Kickoff to Full Go-Live</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile Carousel Indicators (Interactive Dots) */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-3">
            {TIERS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToTier(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx
                    ? "w-6 bg-[#83B773]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to tier ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
