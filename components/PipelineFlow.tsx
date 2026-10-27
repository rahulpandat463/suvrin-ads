import React from "react";

export default function PipelineFlow() {
  const steps = [
    {
      num: "01",
      icon: "trending_up",
      title: "Sales & Demand Forecast",
      desc: "AED sales orders convert automatically into business demand forecasts and delivery commitments.",
      linkText: "➔ Feeds MRP engine",
    },
    {
      num: "02",
      icon: "account_tree",
      title: "BOM & MRP Engine",
      desc: "Multi-level BOM breakdown verifies component availability, lead times, scrap allowance, and sub-assemblies.",
      linkText: "➔ Triggers auto-procurement",
    },
    {
      num: "03",
      icon: "shopping_cart",
      title: "Automated Procurement",
      desc: "Auto-generate RFQs and LPOs based on minimum stock rules and supplier lead times with multi-tier approvals.",
      linkText: "➔ Routes to Goods Receipt",
    },
    {
      num: "04",
      icon: "fact_check",
      title: "Goods Receipt & QC Quarantine",
      desc: "Barcode-scanned raw material intake with lot/batch tracking, test cert verification, and quarantine routing.",
      linkText: "➔ Releases raw stock to floor",
    },
    {
      num: "05",
      icon: "precision_manufacturing",
      title: "Work Center Tablets",
      desc: "Shop floor tablets guide operators with digital work instructions, machine logging, and real-time scrap recording.",
      linkText: "➔ Monitors live work center OEE",
    },
    {
      num: "06",
      icon: "rule",
      title: "In-Line Quality Checkpoints",
      desc: "Quality gates trigger automated Non-Conformance Reports (NCR) immediately upon parameter deviation.",
      linkText: "➔ Validates finished quality",
    },
    {
      num: "07",
      icon: "local_shipping",
      title: "Packaging & UAE Dispatch",
      desc: "Serialised finished goods packaging, automated packing lists, delivery notes, and transport dispatch.",
      linkText: "➔ Triggers customer delivery",
    },
    {
      num: "08",
      icon: "receipt_long",
      title: "Job Costing & UAE VAT",
      desc: "Instant WIP-to-COGS entries, actual cost vs standard variance analysis, and FTA-compliant 5% e-invoicing.",
      linkText: "✓ Live Financial Settlement",
    },
  ];

  return (
    <section
      id="chapter-pipeline"
      data-chapter="2"
      data-title="Connected Flow"
      className="chapter-section relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:pl-28 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="eyebrow mb-3 inline-block">Unified Live Pipeline</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 leading-tight">
          One ERP. Your Entire <span className="text-brand-blue">Business Operation.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Suvrin configures Odoo around your exact factory routing — connecting every barcode scan, machine log, and management decision into one live, end-to-end pipeline.
        </p>
      </div>

      {/* Connected Pipeline Flow Matrix */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-brand-line bg-white shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="w-8 h-8 rounded-xl bg-brand-blue/10 text-brand-blue font-heading font-extrabold text-xs flex items-center justify-center border border-brand-blue/20">
                    {step.num}
                  </span>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-blue transition-colors text-[20px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-brand-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-brand-blue">
                <span>{step.linkText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Pipeline Summary Callout */}
        <div className="mt-12 p-5 sm:p-8 rounded-2xl border border-brand-line bg-gradient-to-r from-brand-mist via-white to-blue-50/40 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full md:w-auto">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/20">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div className="w-full">
              <h4 className="font-heading text-base sm:text-lg font-bold text-brand-ink mb-1">
                Zero Silos. Total Operational Control.
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                Connect shop floor supervisors, warehouse managers, and UAE finance teams into one unified Odoo ERP workflow.
              </p>
            </div>
          </div>
          <a
            href="#chapter-audit"
            className="btn-primary w-full md:w-auto px-6 py-3.5 justify-center shrink-0"
          >
            <span>Book a Free Consultation</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
