"use client";

import React, { useState } from "react";
import { ADVISORY_PILLARS, COMPANY_INFO } from "@/data";
import { useBooking } from "@/components/booking/BookingProvider";

const PILLAR_DETAILS: Record<
  string,
  {
    extended: string;
    highlights: string[];
  }
> = {
  "01 / CONSULTING": {
    extended:
      "We walk your production lines and examine operational bottlenecks across Gurgaon, Manesar, Faridabad, and Delhi NCR plants before writing any code. Every workflow is audited against your physical materials, machine cycle times, scrap percentages, and supply chain constraints.",
    highlights: [
      "Shop floor routing audit",
      "Scrap & wastage reduction",
      "Multi-warehouse analysis",
      "Risk & bottleneck assessment",
    ],
  },
  "02 / MASTERY": {
    extended:
      "Engineered strictly to Odoo upgrade-safe standards with custom Python automation that preserves full compatibility for future versions. We build clean modular extensions without modifying core Odoo code, ensuring security and seamless upgrades.",
    highlights: [
      "Upgrade-safe Python architecture",
      "Automated PO trigger rules",
      "GST & e-invoicing reports",
      "Custom approval matrices",
    ],
  },
  "03 / DEPTH": {
    extended:
      "Designed for multi-level Bills of Materials, shop floor touchscreen operator tablets, and end-to-end heat number/lot traceability. Empower machine operators with intuitive interfaces that log real-time machine run-times, downtime causes, and scrap on the fly.",
    highlights: [
      "Multi-level BOM routing",
      "Shop floor operator tablets",
      "Batch & serial traceability",
      "Live WIP-to-COGS valuation",
    ],
  },
  "04 / PRESENCE": {
    extended:
      "Direct Gurgaon (DLF Cyber City) engineering team providing physical on-site presence across IMT Manesar, Udyog Vihar, Faridabad, Okhla, and Greater Noida for discovery, hands-on staff training, and first month-end closing support.",
    highlights: [
      "Gurgaon & NCR based team",
      "Rapid on-site factory visits",
      "First month-end closing support",
      "Strict NDA & confidentiality",
    ],
  },
};

export default function AdvisoryPillars() {
  const [activeNum, setActiveNum] = useState<string>(ADVISORY_PILLARS[0].num);
  const { openBooking } = useBooking();

  const currentPillar =
    ADVISORY_PILLARS.find((p) => p.num === activeNum) || ADVISORY_PILLARS[0];

  const details =
    PILLAR_DETAILS[currentPillar.num] || PILLAR_DETAILS["01 / CONSULTING"];

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 text-left">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 leading-[1.22] tracking-tight">
              ERP Implementation That Goes Beyond Installing Software
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed lg:text-right pb-1">
            We audit your real-world factory routing, scrap rates, and multi-currency supply chain before configuring Odoo.
          </p>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* MOBILE VIEW (< lg): Accordion ("People Also Ask" Style)              */}
        {/* All 4 points visible, tapping any expands its content directly below  */}
        {/* --------------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col gap-3 w-full">
          {ADVISORY_PILLARS.map((item, idx) => {
            const isOpen = activeNum === item.num;
            const stepNumber = String(idx + 1).padStart(2, "0");
            const itemDetails = PILLAR_DETAILS[item.num] || PILLAR_DETAILS["01 / CONSULTING"];

            return (
              <div
                key={item.num}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#83B773] shadow-sm bg-white"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => setActiveNum(isOpen ? "" : item.num)}
                  className={`w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isOpen
                      ? "bg-[#83B773] text-white font-bold"
                      : "bg-white hover:bg-slate-50 text-slate-800 font-medium"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isOpen
                          ? "bg-white/25 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {stepNumber}
                    </span>
                    <span className="truncate text-sm sm:text-base font-heading">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`material-symbols-outlined text-[22px] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : "text-slate-400"
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {/* Accordion Body: Content opens directly underneath */}
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-left animate-in fade-in duration-200">
                    {/* Primary Description */}
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-2.5 font-medium">
                      {item.desc}
                    </p>

                    {/* Extended Details */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {itemDetails.extended}
                    </p>

                    {/* Scope Highlights Badges */}
                    <div className="grid grid-cols-1 gap-2 mb-5">
                      {itemDetails.highlights.map((point, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#83B773] shrink-0"></span>
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() =>
                          openBooking({
                            source: "advisory_pillar_accordion",
                            topic: item.title,
                          })
                        }
                        className="bg-[#83B773] hover:bg-[#72a363] text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
                      >
                        Schedule a Consultation
                      </button>

                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-600 hover:text-[#3b6630] flex items-center gap-1 py-1"
                      >
                        <span className="material-symbols-outlined text-[15px] text-emerald-600">
                          chat
                        </span>
                        <span>Ask an Architect</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* DESKTOP VIEW (lg+): 100% UNTOUCHED (Tabs on left, Card on right)      */}
        {/* --------------------------------------------------------------------- */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-10 items-start">

          {/* Left Column: All 4 Menu Items Shown on Desktop */}
          <div className="col-span-5 flex flex-col gap-2.5 sm:gap-3 w-full">
            {ADVISORY_PILLARS.map((item, idx) => {
              const isActive = activeNum === item.num;
              const stepNumber = String(idx + 1).padStart(2, "0");

              return (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => setActiveNum(item.num)}
                  className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-left transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 border group ${isActive
                    ? "bg-[#83B773] border-[#83B773] text-white shadow-sm font-semibold"
                    : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 font-medium hover:border-[#83B773]/40"
                    }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isActive
                        ? "bg-white/25 text-white"
                        : "bg-slate-100 text-slate-500"
                        }`}
                    >
                      {stepNumber}
                    </span>
                    <span className="truncate text-sm sm:text-[15px]">{item.title}</span>
                  </div>

                  <span
                    className={`material-symbols-outlined text-[18px] shrink-0 transition-transform ${isActive
                      ? "text-white translate-x-0.5"
                      : "text-slate-400 group-hover:text-[#83B773] group-hover:translate-x-0.5"
                      }`}
                  >
                    chevron_right
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Clean, Spacious Detail Card */}
          <div className="col-span-7 flex flex-col w-full">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-9 text-left relative overflow-hidden shadow-xs flex flex-col justify-between">

              {/* Subtle ambient glow in bottom-right corner */}
              <div className="absolute -bottom-14 -right-14 w-56 h-56 bg-[#83B773]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="font-heading text-2xl sm:text-[26px] font-bold text-slate-900 mb-3 leading-tight">
                  {currentPillar.title}
                </h3>

                {/* Primary Description */}
                <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed mb-3 font-medium">
                  {currentPillar.desc}
                </p>

                {/* Extended Details */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {details.extended}
                </p>

                {/* Scope Highlights (Clean 2-Column Badges) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {details.highlights.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-[13px] text-slate-800 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#83B773] shrink-0"></span>
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Row */}
              <div className="relative z-10 pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    openBooking({
                      source: "advisory_pillar_tab",
                      topic: currentPillar.title,
                    })
                  }
                  className="bg-[#83B773] hover:bg-[#72a363] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer inline-flex items-center justify-center"
                >
                  Schedule a Consultation
                </button>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#3b6630] flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">
                    chat
                  </span>
                  <span>Ask an Architect</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
