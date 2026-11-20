// import React from "react";
// import { PIPELINE_STEPS } from "@/data";

// export default function PipelineFlow() {
//   const steps = PIPELINE_STEPS;

//   return (
//     <section
//       id="chapter-pipeline"
//       data-chapter="2"
//       data-title="Connected Flow"
//       className="chapter-section relative py-12 sm:py-16 scroll-mt-24"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
//         {/* Section Header */}
//         <div className="max-w-3xl text-left mb-10">
//           {/* <span className="eyebrow mb-2.5 inline-block">Unified Live Pipeline</span> */}
//           <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight">
//             One ERP. Your Entire Business Operation.
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
//             Suvrin configures Odoo around your exact factory routing — connecting every barcode scan, machine log, and management decision into one live, end-to-end pipeline.
//           </p>
//         </div>

//         {/* Connected Pipeline Flow Matrix */}
//         <div className="w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//             {steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="p-5 sm:p-6 rounded-2xl border border-brand-line bg-white shadow-sm hover:shadow-md hover:border-brand-blue/40 transition-all flex flex-col justify-between group"
//               >
//                 <div>
//                   <div className="flex items-center justify-between gap-3 mb-3.5">
//                     <span className="w-8 h-8 rounded-xl bg-brand-blue/10 text-brand-blue font-heading font-extrabold text-xs flex items-center justify-center border border-brand-blue/20">
//                       {step.num}
//                     </span>
//                     <span className="material-symbols-outlined text-slate-400 group-hover:text-brand-blue transition-colors text-[20px]">
//                       {step.icon}
//                     </span>
//                   </div>
//                   <h3 className="font-heading text-sm sm:text-base font-bold text-brand-ink mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
//                     {step.desc}
//                   </p>
//                 </div>
//                 <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-brand-blue">
//                   <span>{step.linkText}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Integrated Pipeline Summary Callout */}
//           <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl border border-brand-line bg-gradient-to-r from-brand-mist via-white to-blue-50/40 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
//             <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full md:w-auto">
//               <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/20">
//                 <span className="material-symbols-outlined text-[22px]">verified</span>
//               </div>
//               <div className="w-full">
//                 <h4 className="font-heading text-base sm:text-lg font-bold text-brand-ink mb-1">
//                   Zero Silos. Total Operational Control.
//                 </h4>
//                 <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
//                   Connect shop floor supervisors, warehouse managers, and Indian finance teams into one unified Odoo ERP workflow.
//                 </p>
//               </div>
//             </div>
//             <a
//               href="#chapter-audit"
//               className="btn-primary w-full md:w-auto px-6 py-3.5 justify-center shrink-0 text-xs"
//             >
//               <span>Book a Free Consultation</span>
//               <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { PIPELINE_STEPS } from "@/data";

export default function PipelineFlow() {
  const steps = PIPELINE_STEPS;

  return (
    <section
      id="chapter-pipeline"
      data-chapter="2"
      data-title="Connected Flow"
      aria-labelledby="pipeline-title"
      className="chapter-section relative py-12 sm:py-16 scroll-mt-24 overflow-hidden"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-10">
          <h2
            id="pipeline-title"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight"
          >
            One ERP. Your Entire Business Operation.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Suvrin configures Odoo around your exact factory routing, connecting every barcode scan,
            machine log, and management decision into one live, end-to-end pipeline.
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="w-full">
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {steps.map((step, idx) => (
              <li key={idx} className="h-full">
                <div className="group relative h-full overflow-hidden p-5 sm:p-6 rounded-2xl border border-brand-line bg-white shadow-sm flex flex-col justify-between transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.35)] hover:border-brand-blue/40">
                  {/* Top accent bar that slides in on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-sky-400 transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-brand-blue/10 text-brand-blue font-heading font-extrabold text-xs flex items-center justify-center border border-brand-blue/20 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                          {step.num}
                        </span>
                        <span className="hidden sm:inline font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Step {idx + 1} / {steps.length}
                        </span>
                      </span>

                      {/* Icon tile: fills + glows blue on card hover */}
                      <span
                        aria-hidden="true"
                        className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.35)]"
                      >
                        <span className="material-symbols-outlined text-[22px] text-slate-400 transition-all duration-300 group-hover:text-brand-blue group-hover:[font-variation-settings:'FILL'_1] group-hover:drop-shadow-[0_0_6px_rgba(37,99,235,0.7)]">
                          {step.icon}
                        </span>
                      </span>
                    </div>

                    <h3 className="font-heading text-sm sm:text-base font-bold text-brand-ink mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                      {step.desc}
                    </p>
                  </div>

                  {/* Static outcome label (not a link, so no hover arrow) */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-brand-blue">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[14px]"
                    >
                      check_circle
                    </span>
                    <span>{step.linkText}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Integrated Pipeline Summary Callout */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl border border-brand-blue/20 bg-gradient-to-r from-brand-mist via-white to-blue-50/60 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 w-full md:w-auto">
              <div className="relative w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0 border border-brand-blue/20">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl bg-brand-blue/20 animate-ping motion-reduce:animate-none"
                  style={{ animationDuration: "2.5s" }}
                />
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined relative text-[22px] [font-variation-settings:'FILL'_1]"
                >
                  verified
                </span>
              </div>
              <div className="w-full">
                <h4 className="font-heading text-base sm:text-lg font-bold text-brand-ink mb-1">
                  Zero Silos. Total Operational Control.
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xl leading-relaxed">
                  Connect shop floor supervisors, warehouse managers, and Indian finance teams into one
                  unified Odoo ERP workflow.
                </p>
              </div>
            </div>

            <a
              href="#chapter-audit"
              className="btn-primary group w-full md:w-auto px-6 py-3.5 justify-center shrink-0 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            >
              <span>Book a Free Consultation</span>
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1"
              >
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}