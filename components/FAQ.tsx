"use client";

import React, { useState } from "react";
import { FAQS } from "@/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="chapter-faq"
      data-chapter="7"
      data-title="FAQs"
      className="hidden md:block chapter-section relative py-12 sm:py-16 border-t border-brand-line scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Section Header (Left-aligned matching site flow) */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          {/* <span className="eyebrow mb-2.5 inline-block">Clear Answers</span> */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about Odoo ERP implementation for UAE businesses.
          </p>
        </div>

        {/* Accordion List (Full Width Aligned to Content Container) */}
        <div className="w-full space-y-1" id="faqAccordion">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`py-3.5 sm:py-4 ${idx !== FAQS.length - 1 ? "border-b border-brand-line" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="faq-btn w-full text-left flex items-center justify-between gap-4 text-sm sm:text-base font-heading font-bold text-brand-ink hover:text-brand-blue transition-colors py-1 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span
                    className={`material-symbols-outlined text-[20px] text-brand-blue transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : "rotate-0"
                      }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-350 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pt-2.5 sm:pt-3" : "max-h-0 opacity-0 pt-0"
                    }`}
                >
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-4xl">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
