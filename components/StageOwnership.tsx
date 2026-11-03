import React from "react";
import { STAGES } from "@/data";

export default function StageOwnership() {
  return (
    <section
      id="chapter-ownership"
      data-chapter="5"
      data-title="Ownership"
      className="chapter-section relative py-10 sm:py-14 md:py-16 border-t border-brand-line scroll-mt-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          {/* <span className="eyebrow mb-2 inline-block">Clear Mutual Accountability</span> */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-2 leading-tight">
            Who Owns What, Stage by Stage
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            So you can plan your team&apos;s time before you sign, not after. Compare your team&apos;s expected input directly against Suvrin&apos;s guaranteed delivery at every milestone.
          </p>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* CLEAN & SIMPLE STAGE-BY-STAGE COMPARISON TABLE */}
        {/* --------------------------------------------------------------------- */}
        <div className="rounded-2xl border border-brand-line bg-white overflow-hidden shadow-none">
          {/* Table Header: 3 Columns */}
          <div className="hidden md:grid md:grid-cols-12 gap-6 px-6 py-3.5 bg-slate-50 border-b border-brand-line text-xs font-heading font-extrabold uppercase tracking-wider">
            <div className="md:col-span-3 text-slate-500">
              Stage &amp; Timeline
            </div>
            <div className="md:col-span-4 text-slate-700 text-center">
              Your Team
            </div>
            <div className="md:col-span-5 text-brand-blue text-center">
              Suvrin Technology
            </div>
          </div>

          {/* 6 Clean Comparison Rows */}
          <div className="divide-y divide-brand-line">
            {STAGES.map((st) => (
              <div
                key={st.step}
                className="p-5 md:px-6 md:py-5 hover:bg-slate-50/50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-center">
                  {/* Column 1: Stage Info */}
                  <div className="md:col-span-3 flex md:flex-col items-start gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-blue-50 border border-blue-200/80 text-brand-blue font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {st.step}
                      </span>
                      <h3 className="font-heading text-base font-bold text-brand-ink">
                        {st.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-mono font-semibold text-slate-600">
                      <span className="material-symbols-outlined text-[12px] text-slate-400">schedule</span>
                      <span>{st.duration}</span>
                    </span>
                  </div>

                  {/* Column 2: Client Responsibility */}
                  <div className="md:col-span-4 rounded-xl p-4 bg-slate-50/80 border border-slate-200/80">
                    <div className="md:hidden text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Team
                    </div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {st.clientRole}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.clientDetail}
                    </p>
                  </div>

                  {/* Column 3: Suvrin Delivery */}
                  <div className="md:col-span-5 rounded-xl p-4 bg-blue-50/40 border border-brand-blue/20">
                    <div className="md:hidden text-[10px] font-heading font-extrabold uppercase tracking-wider text-brand-blue mb-1.5">
                      Suvrin Technology
                    </div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 mb-1 leading-snug flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0">
                        check_circle
                      </span>
                      <span>{st.suvrinRole}</span>
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {st.suvrinDetail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
