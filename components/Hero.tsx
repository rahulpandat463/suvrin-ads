import React from "react";
import LeadFormCard from "@/components/LeadFormCard";

export default function Hero() {
  const highlights = [
    { title: "Odoo MRP", subtitle: "Shop Floor App" },
    { title: "Multi-WH", subtitle: "JAFZA / KIZAD" },
    { title: "FTA VAT", subtitle: "5% Tax Ready" },
    { title: "Costing", subtitle: "Live Job Costing" },
    { title: "Bilingual", subtitle: "Arabic & English" },
    { title: "Audits", subtitle: "On-Site in UAE" },
  ];

  return (
    <section
      id="chapter-hero"
      data-chapter="1"
      data-title="Overview"
      className="chapter-section relative min-h-[100svh] pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Soft background glow accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="hero-orb w-80 h-80 bg-brand-blue/10 top-[12%] right-[5%] hidden lg:block"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="hero-orb w-64 h-64 bg-brand-green/15 bottom-[10%] right-[15%] hidden lg:block"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:pl-28 w-full">
        {/* 2-Column Split: Content on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Description, Contact Desk & Key UAE Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-mist border border-brand-line mb-4">
              <span className="pulse-dot"></span>
              <span className="text-[10.5px] uppercase tracking-wider font-semibold text-brand-blue">
                Dubai &amp; UAE Business ERP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-extrabold text-brand-ink leading-[1.1] mb-4">
              Business ERP<br />
              <span className="text-brand-blue">for Dubai &amp; UAE Industry</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 font-semibold mb-3 leading-snug">
              Connect Production, Multi-Warehouse Inventory, Procurement &amp; UAE VAT Accounting
            </p>

            {/* Description */}
            <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-xl">
              Suvrin helps UAE businesses implement and customise Odoo ERP around real-world factory routing, finite capacity, scrap control, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi plants.
            </p>

            {/* Direct Contact Button */}
            <div className="flex items-center gap-3 mb-8 w-full sm:w-auto">
              <a href="tel:+971551120975" className="btn-secondary h-11 px-5 text-xs">
                <span className="material-symbols-outlined text-[18px] text-brand-blue">call</span>
                <span>Direct Dubai Desk: +971 501 359 238</span>
              </a>
            </div>

            {/* 6 Metric Pillars */}
            <div className="pt-5 border-t border-brand-line grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 w-full">
              {highlights.map((item, i) => (
                <div key={i} className="text-left border-l-2 border-brand-blue pl-2.5">
                  <span className="font-heading block text-xs font-bold uppercase text-brand-ink leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-500 block">{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form Card Only */}
          <div className="lg:col-span-5 w-full">
            <LeadFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}
