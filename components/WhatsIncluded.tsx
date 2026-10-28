import React from "react";
import Image from "next/image";
import { DELIVERABLES } from "@/data";

export default function WhatsIncluded() {
  return (
    <section
      id="chapter-included"
      data-chapter="4"
      data-title="What's Included"
      className="chapter-section relative py-12 sm:py-16 border-t border-brand-line scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <span className="eyebrow mb-2.5 inline-block">Fixed-Scope Delivery</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight">
            What&apos;s Included in Your Implementation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything your business needs for a seamless Odoo ERP go-live — from initial plant discovery to 90-day post-launch hypercare, with zero hourly billing surprises.
          </p>
        </div>

        {/* 8 Deliverable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {DELIVERABLES.map((item) => (
            <div
              key={item.number}
              className="surface-panel p-5 sm:p-6 rounded-2xl border border-brand-line hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="font-mono text-xs font-bold text-brand-blue bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                    Phase {item.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-brand-line flex items-center justify-center text-slate-700 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                    <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="font-heading text-sm sm:text-base font-bold text-brand-ink group-hover:text-brand-blue transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Deliverable Tag */}
              <div className="pt-3.5 mt-4 border-t border-brand-line/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                <span className="material-symbols-outlined text-[14px] text-emerald-600">check_circle</span>
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Single Database Architecture Panel */}
        <div className="surface-panel rounded-2xl p-6 sm:p-8 border border-brand-line/80 relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10">
            {/* Architecture Banner Header */}
            <div className="max-w-3xl mb-6">
              <span className="eyebrow mb-2 inline-block">Module Map Architecture</span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-ink mb-2">
                One Database, Every Department
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Standard modules are configured around a single Odoo core; custom modules, AI features, and connectors attach to the same data model — no sync jobs or data silos between systems.
              </p>
            </div>

            {/* Architecture Module Map Infographic Image */}
            <div className="relative mt-6 rounded-2xl overflow-hidden border border-brand-line bg-white shadow-xs p-2 sm:p-4 group">
              <Image
                src="/what-include.png?v=2"
                alt="Odoo Implementation Module Map - One Database, Every Department"
                width={1600}
                height={1080}
                className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.005]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
