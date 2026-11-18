"use client";

import React from "react";
import { PRICING_LEVERS, COMPANY_INFO } from "@/data";
import { useBooking } from "@/components/booking/BookingProvider";

const SPOTLIGHT_ID = "lever-licence-mix";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

export default function PricingLevers() {
  const { openBooking } = useBooking();

  return (
    <section
      id="chapter-pricing"
      data-chapter="6"
      data-title="Pricing Levers"
      aria-labelledby="pricing-title"
      className="chapter-section relative py-8 sm:py-10 border-t border-brand-line scroll-mt-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Header */}
        <div className="max-w-2xl mb-5 text-left">
          <h2
            id="pricing-title"
            className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-ink mb-1.5 leading-tight"
          >
            What Determines Your Odoo Implementation Cost
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            After a one-week discovery, you get one fixed price, with no hourly overruns.
          </p>
        </div>

        {/* Overview grid: 7 levers, full content always visible */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {PRICING_LEVERS.map((lever) => {
            const featured = lever.id === SPOTLIGHT_ID;
            return (
              <li
                key={lever.id}
                className={`group rounded-xl border p-3.5 bg-white transition-all duration-200 hover:border-brand-blue/50 hover:shadow-[0_4px_18px_-6px_rgba(37,99,235,0.35)] ${featured
                  ? "lg:col-span-2 border-brand-blue/40 bg-gradient-to-br from-white to-blue-50/40"
                  : "border-brand-line"
                  }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-[11px] font-bold text-brand-blue">
                    {lever.number}
                  </span>
                  {featured ? (
                    <span className="text-[10.5px] font-heading font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Biggest cost driver · up to 70% savings
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[18px] text-slate-400 transition-all duration-200 group-hover:text-brand-blue group-hover:[font-variation-settings:'FILL'_1] group-hover:drop-shadow-[0_0_6px_rgba(37,99,235,0.7)]"
                    >
                      {lever.icon}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-sm font-bold text-brand-ink leading-snug mb-1">
                  {lever.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lever.summary}
                </p>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="rounded-xl border border-brand-blue/20 bg-blue-50/60 px-4 py-3 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="hidden sm:flex w-9 h-9 rounded-lg bg-white border border-brand-blue/20 text-brand-blue items-center justify-center shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">request_quote</span>
            </span>
            <div>
              <h3 className="font-heading text-sm sm:text-base font-extrabold text-brand-ink leading-tight">
                Get a fixed-price quote in 5 days
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                One-week discovery, then one price. No hourly overruns.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              type="button"
              onClick={() => openBooking({ source: "pricing_levers", topic: "scoping" })}
              className={`h-9 px-4 text-xs justify-center gap-1.5 bg-brand-blue hover:bg-brand-blue-bright text-white font-bold rounded-lg flex items-center transition-colors cursor-pointer shadow-xs ${focusRing}`}
            >
              <span>Schedule a scoping review</span>
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-9 px-4 text-xs justify-center gap-1.5 bg-white hover:bg-slate-50 text-brand-ink border border-brand-line font-bold rounded-lg flex items-center transition-colors ${focusRing}`}
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-emerald-600">chat</span>
              Ask an ERP architect
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}