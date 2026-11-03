import React from "react";
import { ADVISORY_PILLARS } from "@/data";

export default function AdvisoryPillars() {
  const pillars = ADVISORY_PILLARS;

  return (
    <section className="py-10 sm:py-14 border-t border-b border-brand-line scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        <div className="mb-8 max-w-2xl">
          {/* <span className="eyebrow mb-2">Gulf Advisory Foundation</span> */}
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-ink">
            ERP Implementation That Goes Beyond Installing Software
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => (
            <div key={idx} className={`border-t-2 ${item.borderColor} pt-4`}>
              <span className={`font-heading text-[11px] ${item.numColor} font-bold block mb-1.5 tracking-wider`}>
                {item.num}
              </span>
              <h3 className="font-heading text-base font-bold text-brand-ink mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
