"use client";

import React from "react";
import Image from "next/image";
import { useBooking } from "@/components/booking/BookingProvider";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section
      id="chapter-hero"
      data-chapter="1"
      data-title="Overview"
      className="chapter-section relative min-h-[540px] lg:min-h-[600px] flex items-center overflow-hidden bg-white border-b border-brand-line scroll-mt-24"
    >
      {/* Background: Seamless Right-Side Photograph with Gradient Fade into Left White Background */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] pointer-events-none select-none overflow-hidden z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-consulting.jpg"
            alt="Suvrin Odoo ERP Specialists in Dubai UAE"
            fill
            priority
            className="object-cover object-center lg:object-right"
          />

          {/* Smooth multi-directional white gradients to blend seamlessly into left content */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:from-white lg:via-white/50 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Tag: Suvrin's Original Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-slate-200 shadow-2xs mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            <span className="font-heading text-xs uppercase tracking-wider font-bold text-brand-blue">
              Dubai &amp; UAE Business ERP
            </span>
          </div>

          {/* Suvrin's Exact Original Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-4">
            Business ERP for <br className="hidden sm:inline" />
            Dubai &amp; UAE Industry
          </h1>

          {/* Suvrin's Exact Original Subtitle */}
          <p className="text-base sm:text-lg text-slate-800 font-semibold mb-3 leading-snug max-w-xl">
            Connect Production, Multi-Warehouse Inventory, Procurement &amp; UAE VAT Accounting
          </p>

          {/* Suvrin's Exact Original Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
            Suvrin helps UAE businesses implement and customise Odoo ERP around real-world factory routing, finite capacity, scrap control, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi plants.
          </p>

          {/* Primary CTA Button (opens Lead Form Modal directly) */}
          <div>
            <button
              type="button"
              onClick={() => openBooking({ source: "hero_discovery_cta" })}
              className="bg-[#83B773] hover:bg-[#7da970] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-white">
                calendar_today
              </span>
              <span className="text-white">
                Schedule a Discovery Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
