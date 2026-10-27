"use client";

import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "1. What is Business ERP vs basic accounting software?",
    a: "Basic accounting records historical numbers after production finishes. Business ERP actively coordinates the physical plant: multi-level BOMs, machine routing, scrap % calculation, WIP buffers, and barcode scanning, generating automated VAT ledger entries on execution.",
  },
  {
    q: "2. Why choose Odoo over Tier-1 ERPs (SAP/Oracle)?",
    a: "Odoo delivers 90% of Tier-1 capability at a fraction of the cost of ownership, deploying in weeks instead of 18+ months. Its modern mobile and tablet UI is adopted easily by shop floor workers.",
  },
  {
    q: "3. Can Odoo handle multi-level nested BOMs?",
    a: "Yes. Odoo supports unlimited hierarchical BOM nesting from parent assemblies through sub-assemblies to raw fasteners and chemicals, with engineering change orders (ECO) and scrap management.",
  },
  {
    q: "4. Can Odoo track raw materials and WIP across Emirates?",
    a: "Yes. Every movement is barcode-scanned in real time: from raw stock at JAFZA port depots, to production floor WIP staging, through to finished stock at Dubai or Abu Dhabi fulfillment hubs.",
  },
  {
    q: "5. Is the system compliant with UAE FTA 5% VAT?",
    a: "Completely. Suvrin UAE deployments come pre-configured with FTA-compliant VAT rate rules, bilingual Arabic/English tax invoices with mandatory TRN validation, and push-button generation of VAT 201 returns.",
  },
  {
    q: "6. Can you integrate Odoo with our existing Tally software?",
    a: "Yes. If your finance team wants to retain Tally Prime while running shop floor and inventory in Odoo, we provide a bidirectional sync bridge. Or we can migrate historical ledgers fully into Odoo.",
  },
  {
    q: "7. How long does a typical implementation take?",
    a: "A focused implementation for a single-plant discrete business takes 8 to 12 weeks from initial audit to live go-live. Multi-plant hybrid operations typically range from 14 to 20 weeks.",
  },
  {
    q: "8. Do you offer physical on-site audits in Dubai?",
    a: "Yes. Our team is stationed at Living Marina Gate, Dubai Marina. We conduct physical walkthroughs and scoping sessions in DIC, JAFZA, KIZAD, Al Quoz, Sharjah, and across the Emirates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="chapter-faq"
      data-chapter="4"
      data-title="FAQs"
      className="chapter-section py-20 sm:py-24 px-4 sm:px-8 md:px-12 lg:pl-28 max-w-4xl mx-auto"
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="eyebrow mb-3 inline-block">Clear Answers</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-slate-600">
          Everything you need to know about Odoo ERP implementation for UAE businesses.
        </p>
      </div>

      <div className="space-y-1" id="faqAccordion">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`py-4 ${idx !== FAQS.length - 1 ? "border-b border-brand-line" : ""}`}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="faq-btn w-full text-left flex items-center justify-between gap-4 text-sm font-heading font-bold text-brand-ink hover:text-brand-blue transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span
                  className={`material-symbols-outlined text-[18px] text-brand-blue transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-350 ease-in-out ${
                  isOpen ? "max-h-[500px] opacity-100 pt-3" : "max-h-0 opacity-0 pt-0"
                }`}
              >
                <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
