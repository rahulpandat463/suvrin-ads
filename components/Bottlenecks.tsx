import React from "react";
import { BOTTLENECK_STEPS } from "@/data";

export default function Bottlenecks() {
  const steps = BOTTLENECK_STEPS;

  return (
    <section
      id="chapter-bottlenecks"
      data-chapter="2"
      data-title="Bottlenecks"
      className="chapter-section relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="eyebrow eyebrow-alert mb-3 inline-block">
          The Compounding Bottleneck Loop
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 leading-tight">
          Is Your Factory Still Hamstrung by <span className="text-red-600">Disconnected Systems?</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          In UAE business, disconnected spreadsheets don&apos;t operate in isolation — they trigger a compounding chain reaction across departments that silently drains operational margins.
        </p>
      </div>

      {/* Interconnected Flow Grid */}
      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line Background for Desktop (Visual Chain Link) */}
        <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-400 via-brand-blue/30 to-red-500 z-0 opacity-40"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-10 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="surface-panel p-6 sm:p-7 rounded-2xl border border-red-200/80 bg-white/90 backdrop-blur-md shadow-sm hover:shadow-md transition-all relative group"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 font-heading font-extrabold text-xs flex items-center justify-center border border-red-200">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-red-500">
                    {step.badge}
                  </span>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-red-500 transition-colors text-[20px]">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-brand-ink mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {step.desc}
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-red-600/90">
                <span className="material-symbols-outlined text-[15px]">{step.impactIcon}</span>
                <span>{step.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Impact Stat Banner */}
        <div className="mt-12 surface-panel p-5 sm:p-8 rounded-2xl border border-brand-line bg-gradient-to-r from-red-50/70 via-white to-brand-mist flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full md:w-auto">
            <div className="w-20 h-20 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex flex-col items-center justify-center shrink-0">
              <span className="font-heading text-3xl font-extrabold text-brand-blue leading-none">
                14%
              </span>
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-1">
                Margin Drain
              </span>
            </div>
            <div className="w-full">
              <h4 className="font-heading text-base sm:text-lg font-bold text-brand-ink mb-1">
                The Cost of Unconnected Operations in UAE
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                Industrial businesses across Dubai, JAFZA, and Abu Dhabi lose up to 14% operating margin every year due to this unbroken chain of disconnected spreadsheets.
              </p>
            </div>
          </div>
          <a
            href="#chapter-audit"
            className="btn-primary w-full md:w-auto px-6 py-3.5 justify-center shrink-0"
          >
            <span>Break The Bottleneck Loop</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
