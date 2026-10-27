import React from "react";

export default function AdvisoryPillars() {
  const pillars = [
    {
      num: "01 / CONSULTING",
      title: "Business-First Consulting",
      desc: "We audit your shop floor routing, scrap percentages, and multi-currency supply chain before configuring Odoo.",
      borderColor: "border-brand-blue",
      numColor: "text-brand-blue",
    },
    {
      num: "02 / MASTERY",
      title: "Odoo Enterprise Mastery",
      desc: "Certified specialists delivering custom Python modules, automated workflow triggers, and legacy data cleansing.",
      borderColor: "border-brand-blue",
      numColor: "text-brand-blue",
    },
    {
      num: "03 / DEPTH",
      title: "Business Depth",
      desc: "Engineered for multi-level BOMs, finite work center scheduling, sub-assembly staging, and batch traceability.",
      borderColor: "border-brand-green",
      numColor: "text-brand-green-deep",
    },
    {
      num: "04 / PRESENCE",
      title: "UAE & GCC Delivery",
      desc: "Direct Dubai Marina desk. Rapid on-site factory visits across Dubai Industrial City, JAFZA, KIZAD, and Al Quoz.",
      borderColor: "border-brand-green",
      numColor: "text-brand-green-deep",
    },
  ];

  return (
    <section className="section-band py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:pl-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow mb-2">Gulf Advisory Foundation</span>
          <h2 className="font-heading text-2xl sm:text-3xl text-brand-ink">
            ERP Implementation That Goes Beyond Installing Software
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((item, idx) => (
            <div key={idx} className={`border-t-2 ${item.borderColor} pt-5`}>
              <span className={`font-heading text-xs ${item.numColor} font-bold block mb-2 tracking-wider`}>
                {item.num}
              </span>
              <h3 className="font-heading text-base font-bold text-brand-ink mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
