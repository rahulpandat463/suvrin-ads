import React from "react";
import { ODOO_MODULES, INTEGRATIONS } from "@/data";

export default function ModulesSuite() {
  const modules = ODOO_MODULES;
  const integrations = INTEGRATIONS;

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
          Odoo Business Suite Built Around Your Factory
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
