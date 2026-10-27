import React from "react";
import { STAGES } from "@/data";

export default function StageOwnership() {
  return (
    <section
      id="chapter-ownership"
      data-chapter="5"
      data-title="Ownership"
      className="chapter-section relative py-12 sm:py-16 border-t border-brand-line scroll-mt-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <span className="eyebrow mb-2.5 inline-block">Clear Mutual Accountability</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight">
            Who Owns What, Stage by Stage
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            So you can plan your team&apos;s time before you sign, not after. Transparent delivery commitments with zero ambiguity.
          </p>
        </div>

        {/* 6-Stage Balanced Process Cards */}
        <div className="space-y-4">
          {STAGES.map((st) => (
            <div
              key={st.step}
              className="rounded-2xl border border-brand-line bg-white shadow-xs hover:shadow-soft hover:border-brand-blue/30 transition-all duration-200 p-5 sm:p-6"
            >
              {/* Card Header: Stage Number, Icon, Title, Duration */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3.5 border-b border-brand-line/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-brand-blue flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                    {st.step}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-brand-blue">
                      {st.icon}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-brand-ink">
                      {st.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-mono font-semibold text-slate-700">
                  <span className="material-symbols-outlined text-[13px] text-slate-400">schedule</span>
                  <span>{st.duration}</span>
                </span>
              </div>

              {/* Card Body: 2 Balanced Columns for Client vs Suvrin */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Responsibility */}
                <div className="rounded-xl bg-slate-50/80 p-4 border border-slate-200/70 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase font-heading font-extrabold tracking-wider text-slate-500 mb-2">
                      <span className="material-symbols-outlined text-[15px] text-slate-400">group</span>
                      <span>Your Team (Client Responsibility)</span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 mb-1">
                      {st.clientRole}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.clientDetail}
                    </p>
                  </div>
                </div>

                {/* Suvrin Delivery & SLA */}
                <div className="rounded-xl bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 p-4 border border-brand-blue/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase font-heading font-extrabold tracking-wider text-brand-blue mb-2">
                      <span className="material-symbols-outlined text-[15px] text-brand-blue">verified</span>
                      <span>Suvrin Delivery &amp; SLA Commitment</span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <span>{st.suvrinRole}</span>
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {st.suvrinDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mutual Assurance Footer */}
        <div className="mt-6 px-6 py-4 bg-slate-50/80 rounded-2xl border border-brand-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span>Explicit sign-off criteria before each stage transition</span>
          </div>
          <a
            href="#chapter-audit"
            className="text-brand-blue font-heading font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>Schedule Initial Discovery Call</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}


