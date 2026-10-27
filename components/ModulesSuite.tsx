import React from "react";

export default function ModulesSuite() {
  const modules = [
    {
      num: "01",
      title: "Business MRP",
      desc: "Work center load planning, routing, and operator tablet apps.",
    },
    {
      num: "02",
      title: "Multi-Level BOM",
      desc: "Version control, sub-assemblies, scrap % and alternative RM rules.",
    },
    {
      num: "03",
      title: "Production MPS",
      desc: "Master production schedules, bottleneck flags & shift planning.",
    },
    {
      num: "04",
      title: "Multi-Warehouse",
      desc: "JAFZA, KIZAD & Al Quoz transfers with live barcode lot tracking.",
    },
    {
      num: "05",
      title: "Auto Procurement",
      desc: "Min-stock automated RFQ triggers and tiered LPO approvals.",
    },
    {
      num: "06",
      title: "Quality Control",
      desc: "In-line QC gates, raw material tests, NCR logs & ISO 9001 audit.",
    },
    {
      num: "07",
      title: "Maintenance CMMS",
      desc: "Preventive machine maintenance, MTBF/MTTR tracking & spares.",
    },
    {
      num: "08",
      title: "Precise Job Costing",
      desc: "True cost breakdown per batch: RM, machine power, and labor.",
    },
    {
      num: "09",
      title: "Sales & MO Sync",
      desc: "Auto-convert quotations directly into shop floor business orders.",
    },
    {
      num: "10",
      title: "UAE VAT Finance",
      desc: "FTA-compliant VAT returns, multi-currency ledger (AED/USD/SAR).",
    },
  ];

  const integrations = [
    { title: "Tally Prime", desc: "Bi-directional bridge" },
    { title: "SCADA / PLCs", desc: "Machine cycle sync" },
    { title: "UAE Banks", desc: "ENBD, ADCB, FAB" },
    { title: "Weighbridges", desc: "RS232 Serial sync" },
  ];

  return (
    <section
      id="chapter-modules"
      data-chapter="3"
      data-title="10 Modules"
      className="chapter-section relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="eyebrow mb-3 inline-block">Functional Architecture</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 leading-tight">
          Odoo Business Suite <span className="text-brand-blue">Built Around Your Factory</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          10 core enterprise modules engineered specifically for discrete, process, and hybrid industrial Gulf businesses.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        {/* 10 Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="surface-panel p-5 rounded-2xl border border-brand-line bg-white/90 backdrop-blur-md shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-heading font-extrabold text-brand-blue block mb-1">
                  {m.num}
                </span>
                <h4 className="font-heading text-base font-bold text-brand-ink mb-1.5">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Bar */}
        <div className="surface-panel p-6 rounded-2xl border border-brand-line bg-white/80 backdrop-blur-md shadow-sm">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-4 text-center">
            Connected Integrations &amp; Industrial Ecosystem
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-center">
            {integrations.map((item, idx) => (
              <div key={idx} className="border-t-2 border-brand-blue pt-3">
                <strong className="text-brand-ink block font-heading text-sm">
                  {item.title}
                </strong>
                <span className="text-xs text-slate-500">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
