"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DELIVERABLES, COMPANY_INFO } from "@/data";
import { useBooking } from "@/components/booking/BookingProvider";

// Clean display titles matching the reference aesthetic
const TAB_TITLES: Record<string, string> = {
  "01": "One-Week Discovery",
  "02": "Fixed-Scope Blueprint",
  "03": "Module Configuration",
  "04": "Custom Modules & Workflows",
  "05": "Data Migration",
  "06": "Third-Party Integrations",
  "07": "Role-Based Training",
  "08": "90-Day Hypercare",
};

// Elaborated second paragraphs for enterprise depth
const PHASE_DESCRIPTIONS: Record<string, string> = {
  "01": "Our certified ERP architects examine your actual shop floor routing, multi-warehouse movements, and accounting practices on-site in Gurgaon, Manesar, or Delhi NCR. We uncover hidden operational bottlenecks and legacy spreadsheet dependencies before a single line of code is configured.",
  "02": "Every deliverable, milestone, integration boundary, and testing gate is locked into a fixed-scope contract. We eliminate unpredictable hourly billing so your leadership team has 100% budget certainty and guaranteed go-live deadlines from day one.",
  "03": "We configure standard Odoo Enterprise apps to match your real-world factory flows — from multi-level Bills of Materials and work center run rates to automated minimum stock reordering rules and Indian GST-compliant e-invoicing & e-way bills.",
  "04": "When your industrial workflow requires specialized logic, our India engineering team writes clean Python modules adhering strictly to Odoo's official upgrade-safe guidelines, ensuring future version migrations are completely friction-free.",
  "05": "We clean, deduplicate, and reconcile your legacy master data — vendors, item masters, opening inventory balances, and chart of accounts. Rigorous parallel runs ensure your Monday morning cutover happens with zero operational interruption.",
  "06": "Connect Odoo directly with Indian bank feeds, payment gateways (Razorpay, Cashfree), logistics carriers, e-commerce storefronts, and factory hardware such as barcode scanners and weighing scales for real-time bidirectional data flow across your operations.",
  "07": "Hands-on, department-specific training sessions conducted on-site or remotely in English and Hindi. We provide recorded video walkthroughs and standard operating procedures (SOPs) for continuous onboarding of new team members.",
  "08": "Direct access to our Gurgaon engineering desk with an 18-minute average first-response time. We sit with your finance team through the crucial first month-end closing, guaranteeing total system and operational stability.",
};

// Scope highlights matching the existing deliverables
const SCOPE_DETAILS: Record<string, string[]> = {
  "01": [
    "Full operational process mapping across sales, inventory & production",
    "Current ERP / spreadsheet audit and architecture gap analysis",
    "Pre-emptive risk register and legacy data complexity assessment",
    "Standalone written diagnostic report — yours to keep regardless of next steps",
  ],
  "02": [
    "Comprehensive module architecture map tailored to Indian statutory regulations",
    "Third-party integration roadmap and API connector list",
    "Custom Python development scope and technical specification document",
    "100% fixed-scope, fixed-price quote with zero hourly overruns",
  ],
  "03": [
    "Core Odoo Enterprise configuration (Sales, Purchase, Inventory, MRP)",
    "Shop floor routing, work centers, and multi-level Bills of Materials (BOM)",
    "Automated min/max procurement rules and approval hierarchies",
    "Multi-state Indian accounting with GST compliant financial charts",
  ],
  "04": [
    "Bespoke Python modules written to official Odoo upgrade-safe patterns",
    "Automated workflow triggers, notifications, and custom status pipelines",
    "Custom GST-compliant PDF reports (e-invoices with QR code, e-way bills, packing slips, job cards)",
    "Shop floor touchscreen tablet interfaces for machine operators",
  ],
  "05": [
    "Master data extraction, cleansing, and deduplication (vendors, items, customers)",
    "Multi-warehouse opening inventory reconciliation with batch/lot tracking",
    "Opening trial balance and general ledger balance sheet cutover",
    "Parallel dry-run testing ensuring zero Monday morning downtime",
  ],
  "06": [
    "Two-way REST / JSON-RPC connectors to Indian bank feeds and payment gateways",
    "Automated shipping and courier API integrations with live AWB generation",
    "E-commerce bi-directional stock synchronization (Shopify, Amazon, WooCommerce)",
    "Factory floor digital scale and hardware barcode scanner integration",
  ],
  "07": [
    "Role-based hands-on training for operators, super-admins, and finance teams",
    "Recorded video walkthroughs and step-by-step Standard Operating Procedures (SOPs)",
    "Live UAT sandbox dry-runs with your actual transaction data",
    "Permanent onboarding documentation playbook for your future hires",
  ],
  "08": [
    "18-minute average first-response time during Indian business hours",
    "Hands-on technical presence for your finance team's critical first month-end closing",
    "Direct Gurgaon engineering desk with rapid on-site factory visits",
    "Seamless handoff to optional SLA retainer or on-demand support",
  ],
};

export default function WhatsIncluded() {
  const [activeNumber, setActiveNumber] = useState<string>("01");
  const { openBooking } = useBooking();

  const currentItem =
    DELIVERABLES.find((item) => item.number === activeNumber) || DELIVERABLES[0];

  const displayTitle = TAB_TITLES[currentItem.number] || currentItem.title;
  const secondParagraph = PHASE_DESCRIPTIONS[currentItem.number] || "";
  const highlights = SCOPE_DETAILS[currentItem.number] || [];

  return (
    <section
      id="chapter-included"
      className="relative py-12 sm:py-16 md:py-20 bg-white border-t border-brand-line scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0062fb]/10 border border-[#0062fb]/30 text-[#0062fb] font-heading text-[11px] font-extrabold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062fb] animate-pulse"></span>
              Fixed-Scope Delivery
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink leading-tight">
              What&apos;s Included in Your Implementation
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Everything your business needs for a seamless Odoo ERP go-live — from initial plant discovery to 90-day post-launch hypercare, with zero hourly billing surprises.
            </p>
          </div>
        </div>

        {/* --------------------------------------------------------------------- */}
        {/* MOBILE VIEW (< lg): Accordion (Google 'People Also Ask' Style)       */}
        {/* All 8 deliverables visible, tapping any expands its content beneath   */}
        {/* --------------------------------------------------------------------- */}
        <div className="lg:hidden flex flex-col gap-2.5 w-full mb-10">
          {DELIVERABLES.map((item) => {
            const isOpen = activeNumber === item.number;
            const title = TAB_TITLES[item.number] || item.title;
            const secParagraph = PHASE_DESCRIPTIONS[item.number] || "";
            const itemHighlights = SCOPE_DETAILS[item.number] || [];

            return (
              <div
                key={item.number}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                    ? "border-[#0062fb] shadow-sm bg-white"
                    : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => setActiveNumber(isOpen ? "" : item.number)}
                  className={`w-full py-3.5 px-4 text-left transition-colors cursor-pointer flex items-center justify-between gap-3 text-sm font-heading ${isOpen
                      ? "bg-[#83B773] text-white font-bold"
                      : "text-slate-800 hover:bg-slate-50 font-medium"
                    }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${isOpen
                          ? "bg-white/25 text-white"
                          : "bg-slate-100 text-slate-500"
                        }`}
                    >
                      {item.number}
                    </span>
                    <span className="truncate">{title}</span>
                  </div>

                  <span
                    className={`material-symbols-outlined text-[22px] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-white" : "text-slate-400"
                      }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {/* Accordion Body: Expands directly beneath the tapped deliverable */}
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-left animate-in fade-in duration-200">
                    {/* Core Description Paragraph 1 */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    {/* Strategic Context Paragraph 2 */}
                    {secParagraph && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {secParagraph}
                      </p>
                    )}

                    {/* Scope Checklist in Compact Grid */}
                    <div className="pt-3 border-t border-slate-100 mb-4">
                      <div className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                        Scope Highlights
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {itemHighlights.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-[#83B773] text-[16px] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <span className="text-xs text-slate-700 leading-snug">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          openBooking({
                            source: "whats_included_accordion",
                            topic: title,
                          })
                        }
                        className="bg-[#0062fb] hover:bg-[#0052d6] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition-all cursor-pointer"
                      >
                        Schedule Scoping Review
                      </button>

                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-600 hover:text-[#3b6630] flex items-center gap-1 transition-colors py-1"
                      >
                        <span className="material-symbols-outlined text-[15px] text-emerald-600">
                          chat
                        </span>
                        <span>Ask an ERP Architect</span>
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
        <div className="hidden lg:grid grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
          {/* Left Column: Clean Tab List without bulky wrapper box */}
          <div className="col-span-5 flex flex-col gap-1">
            {DELIVERABLES.map((item) => {
              const isActive = activeNumber === item.number;
              const title = TAB_TITLES[item.number] || item.title;
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveNumber(item.number)}
                  className={`w-full py-3.5 px-4 sm:px-5 rounded-lg text-left transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 text-sm sm:text-[15px] font-heading group ${isActive
                      ? "bg-[#0062fb] !text-white shadow-sm font-bold"
                      : "text-slate-800 hover:bg-[#0062fb] hover:!text-white font-medium"
                    }`}
                  style={isActive ? { color: "#ffffff" } : undefined}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`truncate transition-colors ${isActive ? "!text-white" : "group-hover:!text-white"
                      }`}
                    style={isActive ? { color: "#ffffff" } : undefined}
                  >
                    {title}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[19px] shrink-0 transition-all ${isActive
                        ? "!text-white translate-x-0.5"
                        : "text-slate-400 group-hover:!text-white group-hover:translate-x-0.5"
                      }`}
                    style={isActive ? { color: "#ffffff" } : undefined}
                  >
                    chevron_right
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Sleek Card with Clean Typography & Proportions */}
          <div className="col-span-7">
            <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 sm:p-8 md:p-9 text-left relative overflow-hidden shadow-xs">
              {/* Subtle Decorative Curve in Bottom Right (matching reference style) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 w-48 h-48 rounded-full border-[16px] border-[#0062fb]/20 opacity-70"
              />

              {/* Title */}
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-ink mb-4 leading-tight">
                {displayTitle}
              </h3>

              {/* Core Description Paragraph 1 */}
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-4">
                {currentItem.desc}
              </p>

              {/* Strategic Context Paragraph 2 */}
              {secondParagraph && (
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6">
                  {secondParagraph}
                </p>
              )}

              {/* Scope Checklist in Compact Clean 2-Column Grid */}
              <div className="pt-4 border-t border-slate-100 mb-6">
                <div className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Scope Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#0062fb] text-[17px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="text-xs sm:text-[13px] text-slate-600 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions matching Reference (Primary Button + Secondary Chat) */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 relative z-10">
                <button
                  type="button"
                  onClick={() =>
                    openBooking({
                      source: "whats_included_tab",
                      topic: displayTitle,
                    })
                  }
                  className="bg-[#0062fb] hover:bg-[#0052d6] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-lg shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  Schedule Scoping Review
                </button>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#3b6630] flex items-center gap-1.5 transition-colors py-2"
                >
                  <span className="material-symbols-outlined text-[17px] text-emerald-600">
                    chat
                  </span>
                  <span>Ask an ERP Architect</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Single Database Architecture Panel */}
        <div className="surface-panel rounded-2xl p-6 sm:p-8 border border-brand-line/80 relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-[#83B773]/10">
          <div className="relative z-10">
            {/* Architecture Banner Header */}
            <div className="max-w-3xl mb-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#83B773]/10 border border-[#83B773]/30 text-[#3b6630] font-heading text-[11px] font-extrabold uppercase tracking-wider mb-2.5">
                Module Map Architecture
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-ink mb-2">
                One Database, Every Department
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Standard modules are configured around a single Odoo core; custom modules, AI features, and connectors attach to the same data model — no sync jobs or data silos between systems.
              </p>
            </div>

            {/* Architecture Module Map Infographic Image */}
            <div className="relative mt-6 rounded-2xl overflow-hidden border border-brand-line bg-white shadow-xs group">
              <Image
                src="/what-include.png?v=5"
                alt="Odoo Implementation Module Map - One Database, Every Department"
                width={1600}
                height={1080}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.005]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
