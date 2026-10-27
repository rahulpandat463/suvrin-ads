import React from "react";
import { TIMELINE_TIERS } from "@/data";

export default function TypicalTimeline() {
  const TIERS = TIMELINE_TIERS;
  return (
    <section
      id="section-timeline"
      className="relative py-12 sm:py-16 border-t border-brand-line bg-slate-50/50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <span className="eyebrow mb-2.5 inline-block">Realistic Delivery Timelines</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight">
            Typical Implementation Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No fictional promises. Execution duration depends on your operational scale, number of modules, and data readiness.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 bg-white border ${
                tier.isPopular
                  ? "border-brand-blue/40 ring-1 ring-brand-blue/20 shadow-soft relative"
                  : "border-brand-line shadow-xs hover:border-slate-300"
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      tier.isPopular
                        ? "bg-blue-50 text-brand-blue border border-brand-blue/20"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <span className="material-symbols-outlined text-slate-400 text-[18px]">
                    schedule
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-brand-ink mb-1">
                  {tier.title}
                </h3>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-brand-blue mb-2">
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
                      <span className="material-symbols-outlined text-brand-blue text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-brand-line">
                <span className="text-[11px] font-mono text-slate-500 block">
                  Kickoff to Full Go-Live
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
