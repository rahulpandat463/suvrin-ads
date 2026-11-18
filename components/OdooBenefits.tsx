"use client";

import React from "react";
import Image from "next/image";
import { useBooking } from "@/components/booking/BookingProvider";

const BENEFITS = [
  "Streamlined Operations",
  "Better Financial Management",
  "Improved Decision-Making",
  "Better Sales and ROI",
  "Enhanced Reporting and Analytics",
  "Maximized Customer Satisfaction",
];

export default function OdooBenefits() {
  const { openBooking } = useBooking();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-stretch">
          
          {/* Left Column: Clean Left Column with Perfectly Aligned Line Endings */}
          <div className="flex flex-col justify-between h-full text-left w-full">
            <div>
              {/* Heading on a Single Clean Line (No Orphan Word) */}
              <h2 className="font-heading text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] xl:text-[38px] font-bold text-slate-900 leading-tight tracking-tight mb-4 sm:mb-5 whitespace-normal sm:whitespace-nowrap">
                Benefits of Using Odoo ERP
              </h2>

              {/* Paragraph with Perfectly Aligned Right Line Endings (Justified Alignment) */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 text-justify [text-align-last:left] [text-justify:inter-word] max-w-xl">
                Odoo ERP is an integrated business management solution that streamlines various business processes, including marketing, sales, manufacturing, accounting, billing, and inventory. Its ability to centralize resources and automate processes greatly benefits businesses of all sizes and helps them achieve sustainable growth.
              </p>

              <p className="text-sm sm:text-base text-slate-900 font-semibold leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Revolutionize your business operations with Odoo ERP today!
              </p>
            </div>

            {/* Clean Static CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBooking({ source: "odoo_benefits_cta" })}
                className="bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Get a Free Odoo Consultation
              </button>
            </div>
          </div>

          {/* Right Column: 6 Points Balanced to Align with Button Bottom */}
          <div className="flex flex-col justify-between gap-2.5 sm:gap-3 w-full">
            {BENEFITS.map((title, idx) => (
              <div
                key={idx}
                className="w-full px-5 py-2.5 sm:py-[11px] rounded-lg bg-[#f8f9fa] border border-slate-200/60 flex items-center gap-3.5 text-left"
              >
                {/* Purple Odoo SVG Logo Icon */}
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <Image
                    src="/purple-odoo.svg"
                    alt="Odoo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Clean Title */}
                <span className="text-[15px] sm:text-[16px] font-semibold text-slate-900 tracking-tight">
                  {title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
