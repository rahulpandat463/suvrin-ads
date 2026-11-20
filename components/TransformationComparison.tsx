"use client";

import React, { useState } from "react";
import { useBooking } from "@/components/booking/BookingProvider";

interface ComparisonItem {
  id: string;
  category: "procurement" | "manufacturing" | "warehouse" | "finance";
  categoryLabel: string;
  title: string;
  before: {
    badge: string;
    description: string;
    quote: string;
    metric: string;
  };
  after: {
    badge: string;
    description: string;
    solution: string;
    metric: string;
  };
}

const COMPARISON_DATA: ComparisonItem[] = [
  {
    id: "procurement",
    category: "procurement",
    categoryLabel: "Procurement & Supply Chain",
    title: "Raw Material Reordering & Vendor Coordination",
    before: {
      badge: "Reactive WhatsApp Chats",
      description:
        "Purchasing managers order raw materials reactively when machine operators yell across the floor that aluminum or resin ran out. Orders get confirmed in scattered WhatsApp threads.",
      quote: "\"Did anyone reorder the 3mm stainless steel coils? The machine has been idle since 9 AM.\"",
      metric: "14 hrs/wk wasted in chat follow-ups",
    },
    after: {
      badge: "Dynamic Odoo MRP Rules",
      description:
        "Automated min/max replenishment triggers RFQs directly from production demand and supplier lead times. Multi-level PO approval matrices prevent unapproved spend.",
      solution: "Purchase orders auto-generated and matched against delivery slips and vendor bills.",
      metric: "Zero unexpected line-down stockouts",
    },
  },
  {
    id: "manufacturing",
    category: "manufacturing",
    categoryLabel: "Shop Floor & Routing",
    title: "Work Center Job Costing & Multi-Level BOMs",
    before: {
      badge: "Paper Job Cards & Guesswork",
      description:
        "Job cards get oil-stained and lost. Nobody tracks actual machine electricity, scrap percentage, or operator hours. Gross margins on custom manufacturing are pure guesswork.",
      quote: "\"We quoted ₹1,200 per unit based on standard cost, but ended up spending ₹1,450.\"",
      metric: "15% unaccounted scrap & margin erosion",
    },
    after: {
      badge: "Tablet Work Centers & Live Timer",
      description:
        "Operators scan barcodes at work centers using rugged tablets. Real-time timer logs labor and machine runtime. Odoo automatically calculates exact unit cost down to the rupee.",
      solution: "Dynamic Bill of Materials (BOM) routing with real-time scrap tracking per production lot.",
      metric: "99.4% accurate gross margin per finished batch",
    },
  },
  {
    id: "warehouse",
    category: "warehouse",
    categoryLabel: "Multi-State & Hub Warehouse",
    title: "Multi-Location Inventory & Stock Traceability",
    before: {
      badge: "Stock Mismatch & Audit Friction",
      description:
        "Physical inventory across Gurgaon, Manesar, and regional depots never matches the spreadsheets. Stock transfers between state warehouses require hours of manual paperwork and e-way bill generation.",
      quote: "\"The spreadsheet says we have 400 units in Bin C-12, but the warehouse is completely empty.\"",
      metric: "18% inventory variance during annual audit",
    },
    after: {
      badge: "Wireless Barcode & Zone Tracking",
      description:
        "Every pallet, roll, and box has a serialized barcode. Putaway rules, lot tracking, and internal transfers reflect immediately on mobile scanners with clean audit trails.",
      solution: "Automated e-way bill generation, multi-warehouse stock valuation, and serial/lot tracking.",
      metric: "100% audit-compliant real-time stock accuracy",
    },
  },
  {
    id: "finance",
    category: "finance",
    categoryLabel: "Finance & Indian GST",
    title: "Month-End Closing & GST / e-Invoicing Compliance",
    before: {
      badge: "Tally Silos & 2-Week Closing",
      description:
        "Accounting sits in a disconnected Tally silo. Finance staff re-types hundreds of paper invoices and delivery orders. Month-end closing takes 14 days of stressful reconciliation.",
      quote: "\"GSTR-1 filing deadline is in 2 days and the sales team still hasn't sent over their verified invoice files.\"",
      metric: "14-day delay in monthly financial closing",
    },
    after: {
      badge: "1-Click GST Reconciliation & E-Invoicing",
      description:
        "Every sales order and purchase order flows automatically into journals. QR-code GST compliant e-invoices and e-way bills generate automatically. Bank feeds reconcile in minutes.",
      solution: "Native Indian GST returns generated in 1 click, with complete transaction-level drilldown.",
      metric: "Same-day closing & zero GST compliance penalty risk",
    },
  },
];

const CATEGORIES = [
  { id: "procurement", label: "Procurement", icon: "shopping_cart" },
  { id: "manufacturing", label: "Shop Floor MRP", icon: "precision_manufacturing" },
  { id: "warehouse", label: "Multi-WH Inventory", icon: "warehouse" },
  { id: "finance", label: "GST & Finance", icon: "receipt_long" },
];

export default function TransformationComparison() {
  const [activeCategory, setActiveCategory] = useState<string>("procurement");
  const [mobileMode, setMobileMode] = useState<"both" | "before" | "after">("both");
  const { openBooking } = useBooking();

  const currentItem =
    COMPARISON_DATA.find((item) => item.category === activeCategory) ||
    COMPARISON_DATA[0];

  return (
    <section
      id="chapter-transformation"
      data-chapter="2"
      data-title="Transformation"
      className="chapter-section relative py-12 sm:py-16 lg:py-20 bg-slate-50/60 border-t border-brand-line scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          {/* <span className="eyebrow inline-block mb-1.5">Operational Benchmark</span> */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink leading-tight">
            Manual Operations vs. <span className="text-brand-blue">Odoo Automation</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
            See the exact operational shift when your Gurgaon or Indian business transitions from disconnected spreadsheets to a unified, real-time Odoo Enterprise architecture.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-3 border-b border-brand-line">
          {/* Department Filter Tabs (Compact, No 'All Departments') */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-3.5 sm:px-4 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${activeCategory === cat.id
                  ? "bg-brand-blue text-white shadow-xs ring-2 ring-brand-blue/25"
                  : "bg-white border border-brand-line text-slate-600 hover:text-brand-blue hover:border-brand-blue/40"
                  }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile View Switcher (Only visible on small screens) */}
          <div className="flex sm:hidden items-center p-1 bg-white border border-brand-line rounded-xl text-[11px] font-bold self-start">
            <button
              type="button"
              onClick={() => setMobileMode("both")}
              className={`px-2.5 py-1 rounded-lg transition-all ${mobileMode === "both" ? "bg-brand-blue text-white shadow-xs" : "text-slate-500"
                }`}
            >
              Split View
            </button>
            <button
              type="button"
              onClick={() => setMobileMode("before")}
              className={`px-2.5 py-1 rounded-lg transition-all ${mobileMode === "before" ? "bg-red-50 text-red-600" : "text-slate-500"
                }`}
            >
              Before Only
            </button>
            <button
              type="button"
              onClick={() => setMobileMode("after")}
              className={`px-2.5 py-1 rounded-lg transition-all ${mobileMode === "after" ? "bg-emerald-50 text-emerald-700" : "text-slate-500"
                }`}
            >
              After Only
            </button>
          </div>
        </div>

        {/* Focused Comparison Card (Clean & Compact) */}
        <div className="bg-white rounded-2xl border border-brand-line shadow-xs overflow-hidden transition-all hover:shadow-md">
          {/* Card Department Tag Header */}
          <div className="px-5 sm:px-6 py-3 bg-slate-50/80 border-b border-brand-line flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="font-heading font-bold text-brand-blue uppercase tracking-wider text-xs">
                {currentItem.categoryLabel}
              </span>
            </div>
            <span className="text-xs text-slate-600 font-semibold">
              {currentItem.title}
            </span>
          </div>

          {/* Side-by-Side Comparison Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-line">
            {/* BEFORE / MANUAL OPERATIONS */}
            {(mobileMode === "both" || mobileMode === "before") && (
              <div className="p-5 sm:p-7 bg-rose-50/20 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0">
                      ✕
                    </span>
                    <span className="text-xs font-heading font-extrabold text-red-600 uppercase tracking-wider">
                      Fragmented: {currentItem.before.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mb-4">
                    {currentItem.before.description}
                  </p>

                  {/* Quote callout */}
                  <div className="p-3.5 rounded-xl bg-white border border-red-100 text-xs text-red-900/80 italic mb-4">
                    {currentItem.before.quote}
                  </div>
                </div>

                <div className="pt-3 border-t border-red-100/80 flex items-center gap-1.5 text-xs text-red-600 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">warning</span>
                  <span>{currentItem.before.metric}</span>
                </div>
              </div>
            )}

            {/* AFTER / TURNKEY ODOO */}
            {(mobileMode === "both" || mobileMode === "after") && (
              <div className="p-5 sm:p-7 bg-emerald-50/25 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green-deep flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-xs font-heading font-extrabold text-brand-green-deep uppercase tracking-wider">
                      Automated: {currentItem.after.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-4">
                    {currentItem.after.description}
                  </p>

                  {/* Solution highlight */}
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-100/80 text-xs text-emerald-950 font-medium mb-4">
                    <span className="text-brand-blue font-bold block mb-0.5">Suvrin Architecture:</span>
                    {currentItem.after.solution}
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-100/80 flex items-center gap-1.5 text-xs text-brand-green-deep font-bold">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>{currentItem.after.metric}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-brand-line shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-xl text-left">
            <h4 className="font-heading font-extrabold text-sm sm:text-base text-brand-ink">
              Ready to replace manual spreadsheets with turnkey automation?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Book a 30-minute scoping session. Our Gurgaon ERP architect will audit your workflows and deliver a fixed-scope roadmap.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBooking({ source: "transformation_comparison", topic: "scoping" })}
            className="btn-primary h-10 px-5 text-xs font-bold rounded-xl flex items-center gap-2 shrink-0 cursor-pointer shadow-sm hover:shadow"
          >
            <span className="material-symbols-outlined text-[17px]">calendar_today</span>
            <span>Schedule Scoping Review</span>
          </button>
        </div>
      </div>
    </section>
  );
}
