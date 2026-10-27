import React from "react";
import LeadFormCard from "@/components/LeadFormCard";
import { HERO_HIGHLIGHTS, COMPANY_INFO } from "@/data";

export default function Hero() {
  const highlights = HERO_HIGHLIGHTS;

  return (
    <section
      id="chapter-hero"
      data-chapter="1"
      data-title="Overview"
      className="chapter-section relative py-8 sm:py-12 lg:py-14 scroll-mt-24"
    >
      {/* Soft background glow accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="hero-orb w-80 h-80 bg-brand-blue/10 top-[8%] right-[5%] hidden lg:block"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="hero-orb w-64 h-64 bg-brand-green/15 bottom-[8%] right-[15%] hidden lg:block"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        {/* 2-Column Split: Content on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          {/* Left Column: Heading, Subtitle, Description, Contact Desk & Key UAE Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-mist border border-brand-line mb-3.5">
              <span className="pulse-dot"></span>
              <span className="text-[10.5px] uppercase tracking-wider font-semibold text-brand-blue">
                Dubai &amp; UAE Business ERP
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-[2.75rem] font-extrabold text-brand-ink leading-[1.12] mb-3.5">
              Business ERP<br />
              for Dubai &amp; UAE Industry
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-700 font-semibold mb-2.5 leading-snug">
              Connect Production, Multi-Warehouse Inventory, Procurement &amp; UAE VAT Accounting
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed max-w-xl">
              Suvrin helps UAE businesses implement and customise Odoo ERP around real-world factory routing, finite capacity, scrap control, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi plants.
            </p>

            {/* Direct Contact Button */}
            <div className="flex items-center gap-3 mb-6 w-full sm:w-auto">
              <a href="tel:+971551120975" className="btn-secondary h-10 px-4 text-xs">
                <span className="material-symbols-outlined text-[17px] text-brand-blue">call</span>
                <span>Direct Dubai Desk: +971 501 359 238</span>
              </a>
            </div>

            {/* 6 Metric Pillars */}
            <div className="pt-4 border-t border-brand-line grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 w-full">
              {highlights.map((item, i) => (
                <div key={i} className="text-left border-l-2 border-brand-blue pl-2">
                  <span className="font-heading block text-[11px] font-bold uppercase text-brand-ink leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-500 block">{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-5 w-full">
            <LeadFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}
