import React from "react";

export default function Compliance() {
  const compliancePoints = [
    {
      title: "FTA UAE VAT-Ready:",
      desc: "Automated 5% tax reports and electronic tax invoice generation.",
    },
    {
      title: "AED-Centric Accounting:",
      desc: "Multi-currency conversion (USD, EUR, SAR) with live FX rates.",
    },
    {
      title: "Multi-Company & Free Zones:",
      desc: "Unified consolidation for mainland and JAFZA/DAFZA/KIZAD.",
    },
    {
      title: "Multi-Warehouse Routing:",
      desc: "Inter-warehouse transfers between Dubai, Abu Dhabi, and Sharjah depots.",
    },
    {
      title: "Bilingual System:",
      desc: "Native Arabic and English documentation, reports, and UI toggles.",
    },
    {
      title: "On-Site Factory Audits:",
      desc: "Suvrin engineers physically walk your production lines in JAFZA, DIC, or Al Quoz.",
    },
  ];

  const sectors = [
    { title: "Metal & Steel", desc: "MT/KG & scrap" },
    { title: "Equipment & ETO", desc: "Serial tracking" },
    { title: "Plastics & Polymers", desc: "Extrusion & regrind" },
    { title: "Packaging", desc: "GSM & die-cuts" },
    { title: "Joinery & Wood", desc: "Project BOMs" },
    { title: "Food & Beverage", desc: "Halal & expiry" },
    { title: "Switchgear", desc: "Testing sign-offs" },
    { title: "Chemicals", desc: "MSDS & blending" },
  ];

  return (
    <section
      id="chapter-compliance"
      data-chapter="3"
      data-title="UAE Compliance"
      className="chapter-section section-band relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:pl-28 max-w-7xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 surface-panel p-6 sm:p-10">
            <div className="mb-8">
              <span className="eyebrow mb-2">Built for UAE Regulations</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-brand-ink mb-3">
                Odoo ERP Implementation for UAE Industry
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Suvrin combines international Odoo enterprise architecture with localized UAE business practices, Federal Tax Authority compliance, and free zone structures.
              </p>
            </div>

            <div className="space-y-3.5 mb-8">
              {compliancePoints.map((pt, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 ${
                    idx !== compliancePoints.length - 1 ? "border-b border-brand-line pb-3" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-brand-blue text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm text-slate-600">
                    <strong className="text-brand-ink">{pt.title}</strong> {pt.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-brand-line">
              <span className="text-xs uppercase tracking-wider text-brand-ink font-bold block mb-4">
                Supported UAE Business Sectors
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {sectors.map((sec, idx) => (
                  <div key={idx} className="border-t border-brand-line pt-2">
                    <strong className="font-heading text-brand-ink block text-sm">
                      {sec.title}
                    </strong>
                    <span className="text-[11px] text-slate-500">{sec.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-4 lg:pt-8 min-h-[360px]">
            <div className="rounded-2xl bg-transparent border border-brand-line p-6">
              <span className="font-heading text-xs font-bold uppercase text-brand-blue tracking-wider">
                FTA Ready
              </span>
              <p className="font-heading text-2xl font-bold text-brand-ink mt-2 mb-1">
                5% VAT · TRN Validated
              </p>
              <p className="text-sm text-slate-500">
                Bilingual Arabic / English tax invoices and VAT 201 returns, configured for UAE business.
              </p>
            </div>
            <div className="rounded-2xl bg-transparent border border-brand-line p-6">
              <span className="font-heading text-xs font-bold uppercase text-brand-blue tracking-wider">
                Free Zone Coverage
              </span>
              <p className="font-heading text-2xl font-bold text-brand-ink mt-2 mb-1">
                JAFZA · DAFZA · KIZAD
              </p>
              <p className="text-sm text-slate-500">
                Multi-company consolidation across mainland and free-zone entities in one ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
