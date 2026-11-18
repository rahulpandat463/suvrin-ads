"use client";

import React from "react";
import Image from "next/image";

const ROW_ONE = [
  { name: "Deloitte", src: "/partner/DeloitteNewLogo.png" },
  { name: "EY", src: "/partner/EY logo.png" },
  { name: "KPMG", src: "/partner/kpmg logo.jpg" },
  { name: "Honda", src: "/partner/Honda-Logo.png" },
  { name: "Suzuki", src: "/partner/Suzuki_logo.png" },
  { name: "Hitachi", src: "/partner/hitachi.png" },
  { name: "DLF", src: "/partner/DLF_logo.png" },
  { name: "Apollo Dialysis", src: "/partner/Apollo Dialysis.png" },
  { name: "Douglas Elliman", src: "/partner/Douglas Eliman.png" },
];

const ROW_TWO = [
  { name: "UDrive", src: "/partner/UDrive.png" },
  { name: "UFAST", src: "/partner/UFAST Logo.png" },
  { name: "FICCI", src: "/partner/Ficci Logo.png" },
  { name: "Conic Automotive", src: "/partner/Conic Automotive.webp" },
  { name: "Hazet", src: "/partner/Hazet logo.png" },
  { name: "Velocity", src: "/partner/velocity.jpg" },
  { name: "Compass", src: "/partner/compass logo.png" },
  { name: "EZMA", src: "/partner/EZMA_logo.jpeg" },
  { name: "Charu Parashar", src: "/partner/Charu Parashar Logo.png" },
];

export default function PartnerLogos() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-brand-line overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full text-left mb-8 sm:mb-10">
        {/* Header matching Ksolves reference */}
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1.5 font-heading">
            A Trusted Odoo Service Provider
          </p>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-ink leading-tight">
            Chosen by Brands &amp; Industry Leaders Across the UAE &amp; Global Markets
          </h2>
        </div>
      </div>

      {/* Infinite Sliding Marquee Container */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Left & Right Soft Fade Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent z-10"
        />

        {/* Row 1: Sliding Left */}
        <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
          {[...ROW_ONE, ...ROW_ONE, ...ROW_ONE].map((partner, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-40 sm:w-48 h-18 sm:h-20 px-4 py-2.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-center shrink-0 group cursor-pointer"
            >
              <div className="relative w-full h-full max-h-10 sm:max-h-12 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={50}
                  className="max-h-10 sm:max-h-12 w-auto max-w-[110px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right (Reverse) */}
        <div className="animate-marquee-reverse flex gap-4 sm:gap-6 items-center">
          {[...ROW_TWO, ...ROW_TWO, ...ROW_TWO].map((partner, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-40 sm:w-48 h-18 sm:h-20 px-4 py-2.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex items-center justify-center shrink-0 group cursor-pointer"
            >
              <div className="relative w-full h-full max-h-10 sm:max-h-12 flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={50}
                  className="max-h-10 sm:max-h-12 w-auto max-w-[110px] object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
