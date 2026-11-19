"use client";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-10 text-left">
          {/* <span className="eyebrow mb-2 inline-block">Clear Mutual Accountability</span> */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-2 leading-tight">
            Who Owns What, Stage by Stage
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            So you can plan your team&apos;s time before you sign, not after. Compare your team&apos;s expected input directly against Suvrin&apos;s guaranteed delivery at every milestone.
          </p>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* MOBILE TABLE VIEW (< md): Clean, Simple & Beautiful 3-Column Table */}
        {/* --------------------------------------------------------------------- */}
        <div className="md:hidden">
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs [scrollbar-width:thin]">
            <table className="w-full text-left border-collapse min-w-[340px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-heading font-extrabold uppercase tracking-wider">
                  <th className="py-2.5 px-2 text-slate-700 w-[24%] border-r border-slate-200">
                    Stage
                  </th>
                  <th className="py-2.5 px-2.5 text-slate-700 w-[38%] bg-slate-100/60 border-r border-slate-200">
                    Your Team
                  </th>
                  <th className="py-2.5 px-2.5 text-brand-blue w-[38%] bg-blue-50/50">
                    Suvrin Tech
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {STAGES.map((st) => (
                  <tr key={st.step} className="hover:bg-slate-50/40 transition-colors">
                    {/* Stage & Duration Column */}
                    <td className="py-3 px-2 align-top border-r border-slate-200">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-4 h-4 rounded bg-blue-50 border border-blue-200 text-brand-blue font-mono font-bold text-[9px] flex items-center justify-center shrink-0">
                          {st.step}
                        </span>
                        <span className="font-heading font-bold text-slate-900 text-[11px] leading-tight">
                          {st.title}
                        </span>
                      </div>
                      <span className="inline-block text-[9px] font-mono text-slate-500 font-medium">
                        {st.duration}
                      </span>
                    </td>

                    {/* Your Team Column */}
                    <td className="py-3 px-2.5 align-top bg-slate-50/30 border-r border-slate-200">
                      <div className="font-heading font-bold text-slate-900 text-[11px] leading-snug mb-1">
                        {st.clientRole}
                      </div>
                      <p className="text-[10px] text-slate-600 leading-normal">
                        {st.clientDetail}
                      </p>
                    </td>

                    {/* Suvrin Delivery Column */}
                    <td className="py-3 px-2.5 align-top bg-blue-50/25">
                      <div className="font-heading font-bold text-slate-900 text-[11px] leading-snug mb-1 flex items-start gap-1">
                        <span className="material-symbols-outlined text-emerald-600 text-[13px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{st.suvrinRole}</span>
                      </div>
                      <p className="text-[10px] text-slate-700 leading-normal">
                        {st.suvrinDetail}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* DESKTOP VIEW (md+): 100% UNCHANGED */}
        {/* --------------------------------------------------------------------- */}
        <div className="hidden md:block rounded-2xl border border-brand-line bg-white overflow-hidden shadow-none">
          {/* Table Header: 3 Columns */}
          <div className="grid grid-cols-12 gap-6 px-6 py-3.5 bg-slate-50 border-b border-brand-line text-xs font-heading font-extrabold uppercase tracking-wider">
            <div className="col-span-3 text-slate-500">
              Stage &amp; Timeline
            </div>
            <div className="col-span-4 text-slate-700 text-center">
              Your Team
            </div>
            <div className="col-span-5 text-brand-blue text-center">
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
                <div className="grid grid-cols-12 gap-6 items-center">
                  {/* Column 1: Stage Info */}
                  <div className="col-span-3 flex flex-col items-start gap-1.5">
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
                  <div className="col-span-4 rounded-xl p-4 bg-slate-50/80 border border-slate-200/80">
                    <h4 className="font-heading text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {st.clientRole}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.clientDetail}
                    </p>
                  </div>

                  {/* Column 3: Suvrin Delivery */}
                  <div className="col-span-5 rounded-xl p-4 bg-blue-50/40 border border-brand-blue/20">
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
