import React from "react";
import { COMPLIANCE_POINTS, INDUSTRY_SECTORS } from "@/data";

export default function Compliance() {
  const compliancePoints = COMPLIANCE_POINTS;
  const sectors = INDUSTRY_SECTORS;

  return (
    <section
      id="chapter-compliance"
      data-chapter="3"
      data-title="India Compliance"
      className="chapter-section relative py-12 sm:py-16 border-t border-brand-line scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 surface-panel p-6 sm:p-8">
            <div className="mb-6">
              <span className="eyebrow mb-2">Built for Indian Regulations</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-ink mb-2.5">
                Odoo ERP Implementation for Indian Industry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Suvrin combines international Odoo enterprise architecture with localized Indian statutory practices, GST &amp; e-invoicing compliance, and multi-state SEZ/DTA structures.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {compliancePoints.map((pt, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    idx !== compliancePoints.length - 1 ? "border-b border-brand-line pb-2.5" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-brand-blue text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-brand-ink">{pt.title}</strong> {pt.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-brand-line">
              <span className="text-xs uppercase tracking-wider text-brand-ink font-bold block mb-3">
                Supported Indian Business Sectors
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
                {sectors.map((sec, idx) => (
                  <div key={idx} className="border-t border-brand-line pt-2">
                    <strong className="font-heading text-brand-ink block text-xs sm:text-sm">
                      {sec.title}
                    </strong>
                    <span className="text-[11px] text-slate-500">{sec.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl bg-white border border-brand-line p-5 sm:p-6 shadow-sm">
              <span className="font-heading text-xs font-bold uppercase text-brand-blue tracking-wider">
                GST &amp; e-Invoice Ready
              </span>
              <p className="font-heading text-xl sm:text-2xl font-bold text-brand-ink mt-2 mb-1">
                CGST · SGST · IGST · e-Way
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Automated GST e-invoicing, IRN generation, e-way bills, and GSTR-1/3B filing returns, configured for Indian businesses.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-brand-line p-5 sm:p-6 shadow-sm">
              <span className="font-heading text-xs font-bold uppercase text-brand-blue tracking-wider">
                Multi-State &amp; SEZ Coverage
              </span>
              <p className="font-heading text-xl sm:text-2xl font-bold text-brand-ink mt-2 mb-1">
                Gurgaon · Manesar · Pan-India
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Multi-unit consolidation across SEZ, EOU, and Domestic Tariff Area (DTA) entities in one ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
