import React from "react";
import { CASE_STUDY_KPIS } from "@/data";

export default function CaseStudy() {
  const kpis = CASE_STUDY_KPIS;

  return (
    <section
      id="chapter-case"
      data-chapter="4"
      data-title="Case Study & KPIs"
      className="chapter-section relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="eyebrow mb-3 inline-block">Verified Implementation</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 leading-tight">
          Precision Industrial Business Case Study
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          A multi-facility precision business group in India replaced disconnected spreadsheets with an end-to-end Odoo Enterprise solution connecting shop floor machines to GST accounting.
        </p>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-y border-brand-line py-8 text-center">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="text-center">
            <span className={`font-heading text-4xl sm:text-5xl font-extrabold ${kpi.color} block mb-1`}>
              {kpi.stat}
            </span>
            <span className="font-heading text-xs font-bold text-brand-ink uppercase block">
              {kpi.label}
            </span>
            <span className="text-[11px] text-slate-500">{kpi.sub}</span>
          </div>
        ))}
      </div>

      {/* Testimonial Quote */}
      <div className="max-w-3xl mb-12">
        <blockquote className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-4 border-l-2 border-brand-blue pl-5">
          &ldquo;Suvrin delivered the implementation in a timely fashion and thoroughly trained our plant personnel. The team communicated regularly and replied to queries promptly. They pushed the project across the finish line seamlessly.&rdquo;
        </blockquote>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 pl-5">
          <span className="text-brand-ink font-bold">Shikhi Agarwal</span>
          <span>•</span>
          <span>Account Manager @ Velocity Opticals</span>
          <span>•</span>
          <span className="text-brand-green-deep font-semibold">Rating: 5.0 / 5.0 Verified</span>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-8 border-t border-brand-line">
        {/* Output Bar Chart */}
        <div className="md:col-span-7">
          <div className="mb-4">
            <span className="font-heading text-xs font-bold uppercase text-brand-ink">
              Planned vs Actual Output
            </span>
            <span className="text-[11px] text-slate-500 block">
              Monthly units across North India plants (Q1 2026)
            </span>
          </div>
          <div className="w-full h-40 flex items-end rounded-xl bg-transparent border border-brand-line px-3 pt-4 pb-2">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 350 180">
              <line stroke="#E4E9F0" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="350" y1="30" y2="30"></line>
              <line stroke="#E4E9F0" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="350" y1="80" y2="80"></line>
              <line stroke="#E4E9F0" strokeDasharray="3,3" strokeWidth="1" x1="0" x2="350" y1="130" y2="130"></line>
              <line stroke="#CBD5E1" strokeWidth="1" x1="0" x2="350" y1="160" y2="160"></line>
              <rect fill="#94A3B8" height="80" width="18" x="20" y="80" rx="2"></rect>
              <rect fill="#0062fb" height="92" width="18" x="42" y="68" rx="2"></rect>
              <rect fill="#94A3B8" height="88" width="18" x="78" y="72" rx="2"></rect>
              <rect fill="#0062fb" height="102" width="18" x="100" y="58" rx="2"></rect>
              <rect fill="#94A3B8" height="95" width="18" x="136" y="65" rx="2"></rect>
              <rect fill="#0062fb" height="110" width="18" x="158" y="50" rx="2"></rect>
              <rect fill="#94A3B8" height="100" width="18" x="194" y="60" rx="2"></rect>
              <rect fill="#0062fb" height="116" width="18" x="216" y="44" rx="2"></rect>
              <rect fill="#94A3B8" height="105" width="18" x="252" y="55" rx="2"></rect>
              <rect fill="#80B070" height="128" width="18" x="274" y="32" rx="2"></rect>
            </svg>
          </div>
          <div className="flex items-center justify-between pt-3 mt-2 text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-slate-400 inline-block rounded-sm"></span> Plan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-brand-blue inline-block rounded-sm"></span> Actual
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-brand-green inline-block rounded-sm"></span> Target Exceeded
            </span>
          </div>
        </div>

        {/* Cost Absorption Donut */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-heading text-xs font-bold uppercase text-brand-ink">
              Cost Absorption Variance
            </span>
            <span className="text-[11px] text-slate-500 block mb-4">
              Real-time absorption across production batches
            </span>
            <div className="flex items-center gap-6">
              <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" fill="none" r="38" stroke="#E4E9F0" strokeWidth="12"></circle>
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    r="38"
                    stroke="#0062fb"
                    strokeDasharray="238.7"
                    strokeDashoffset="65"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></circle>
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    r="38"
                    stroke="#80B070"
                    strokeDasharray="238.7"
                    strokeDashoffset="180"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></circle>
                </svg>
                <div className="absolute text-center">
                  <span className="font-heading text-sm font-bold text-brand-ink block">
                    94.8%
                  </span>
                  <span className="text-[8px] text-slate-500 block">Efficiency</span>
                </div>
              </div>
              <div className="flex-1 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Raw Materials</span>
                  <span className="font-heading text-brand-ink font-bold">68.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Power &amp; Tools</span>
                  <span className="font-heading text-brand-green-deep font-bold">18.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Labor Absorb</span>
                  <span className="font-heading text-slate-600 font-bold">13.4%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-brand-blue pt-4 border-t border-brand-line mt-6 font-medium">
            Directly connected to Odoo Shop Floor Kiosks
          </div>
        </div>
      </div>
    </section>
  );
}
