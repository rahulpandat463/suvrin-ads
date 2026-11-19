import React from "react";
import { TIMELINE_TIERS } from "@/data";

export default function TypicalTimeline() {
  const TIERS = TIMELINE_TIERS;

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
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
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

        {/* Tier Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {TIERS.map((tier, idx) => (
            <li key={idx} className="h-full">
              <div
                className={`group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white border transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
                  tier.isPopular
                    ? "border-[#83B773]/40 ring-1 ring-[#83B773]/25 shadow-soft hover:shadow-[0_14px_34px_-14px_rgba(131,183,115,0.45)]"
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
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        tier.isPopular
                          ? "bg-[#83B773]/10 text-[#3b6630] border border-[#83B773]/30"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tier.badge}
                    </span>

                    {/* Icon tile: fills + glows green on card hover */}
                    <span
                      aria-hidden="true"
                      className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#83B773]/10 group-hover:border-[#83B773]/35 group-hover:shadow-[0_0_18px_rgba(131,183,115,0.35)]"
                    >
                      <span className="material-symbols-outlined text-[20px] text-slate-400 transition-all duration-300 group-hover:text-[#83B773] group-hover:[font-variation-settings:'FILL'_1] group-hover:drop-shadow-[0_0_6px_rgba(131,183,115,0.65)]">
                        schedule
                      </span>
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-brand-ink mb-1 leading-snug">
                    {tier.title}
                  </h3>
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-[#3b6630] mb-2">
                    {tier.duration}
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-500 mb-4 pb-3 border-b border-brand-line">
                    {tier.scope}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {tier.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
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
                <div className="pt-4 border-t border-brand-line flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
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
      </div>
    </section>
  );
}
