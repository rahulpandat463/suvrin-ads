// import React from "react";
// import { TIMELINE_TIERS } from "@/data";

// export default function TypicalTimeline() {
//   const TIERS = TIMELINE_TIERS;
//   return (
//     <section
//       id="section-timeline"
//       className="relative py-12 sm:py-16 border-t border-brand-line bg-slate-50/50 scroll-mt-24"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
//         {/* Section Header */}
//         <div className="max-w-3xl mb-8 sm:mb-10 text-left">
//           {/* <span className="eyebrow mb-2.5 inline-block">Realistic Delivery Timelines</span> */}
//           <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight">
//             Typical Implementation Timeline
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
//             No fictional promises. Execution duration depends on your operational scale, number of modules, and data readiness.
//           </p>
//         </div>

//         {/* 3 Tier Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
//           {TIERS.map((tier, idx) => (
//             <div
//               key={idx}
//               className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 bg-white border ${tier.isPopular
//                   ? "border-brand-blue/40 ring-1 ring-brand-blue/20 shadow-soft relative"
//                   : "border-brand-line shadow-xs hover:border-slate-300"
//                 }`}
//             >
//               <div>
//                 {/* Header Badge */}
//                 <div className="flex items-center justify-between gap-2 mb-3">
//                   <span
//                     className={`text-[11px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tier.isPopular
//                         ? "bg-blue-50 text-brand-blue border border-brand-blue/20"
//                         : "bg-slate-100 text-slate-600"
//                       }`}
//                   >
//                     {tier.badge}
//                   </span>
//                   <span className="material-symbols-outlined text-slate-400 text-[18px]">
//                     schedule
//                   </span>
//                 </div>

//                 <h3 className="font-heading text-lg font-bold text-brand-ink mb-1">
//                   {tier.title}
//                 </h3>
//                 <div className="font-mono text-xl sm:text-2xl font-extrabold text-brand-blue mb-2">
//                   {tier.duration}
//                 </div>
//                 <div className="text-xs font-mono font-medium text-slate-500 mb-4 pb-3 border-b border-brand-line">
//                   {tier.scope}
//                 </div>

//                 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
//                   {tier.desc}
//                 </p>

//                 {/* Features List */}
//                 <ul className="space-y-2 mb-6">
//                   {tier.features.map((feat, fIdx) => (
//                     <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
//                       <span className="material-symbols-outlined text-brand-blue text-[16px] shrink-0 mt-0.5">
//                         check_circle
//                       </span>
//                       <span>{feat}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="pt-4 border-t border-brand-line">
//                 <span className="text-[11px] font-mono text-slate-500 block">
//                   Kickoff to Full Go-Live
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { TIMELINE_TIERS } from "@/data";

export default function TypicalTimeline() {
  const TIERS = TIMELINE_TIERS;

  return (
    <section
      id="section-timeline"
      aria-labelledby="timeline-title"
      className="relative py-12 sm:py-16 border-t border-brand-line bg-slate-50/50 scroll-mt-24 overflow-hidden"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <h2
            id="timeline-title"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-ink mb-3 leading-tight"
          >
            Typical Implementation Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No fictional promises. Execution duration depends on your operational scale, number of
            modules, and data readiness.
          </p>
        </div>

        {/* Tier Cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {TIERS.map((tier, idx) => (
            <li key={idx} className="h-full">
              <div
                className={`group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white border transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${tier.isPopular
                    ? "border-brand-blue/40 ring-1 ring-brand-blue/20 shadow-soft hover:shadow-[0_14px_34px_-14px_rgba(37,99,235,0.45)]"
                    : "border-brand-line shadow-xs hover:border-brand-blue/40 hover:shadow-[0_12px_30px_-14px_rgba(37,99,235,0.3)]"
                  }`}
              >
                {/* Top accent bar: always visible on popular, slides in on hover for others */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand-blue to-sky-400 transition-transform duration-300 ${tier.isPopular ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />

                <div>
                  {/* Header Badge + Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tier.isPopular
                          ? "bg-blue-50 text-brand-blue border border-brand-blue/20"
                          : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      {tier.badge}
                    </span>

                    {/* Icon tile: fills + glows blue on card hover */}
                    <span
                      aria-hidden="true"
                      className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.35)]"
                    >
                      <span className="material-symbols-outlined text-[20px] text-slate-400 transition-all duration-300 group-hover:text-brand-blue group-hover:[font-variation-settings:'FILL'_1] group-hover:drop-shadow-[0_0_6px_rgba(37,99,235,0.7)]">
                        schedule
                      </span>
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-brand-ink mb-1 leading-snug">
                    {tier.title}
                  </h3>
                  <div className="font-mono text-xl sm:text-2xl font-extrabold text-brand-blue mb-2">
                    {tier.duration}
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-500 mb-4 pb-3 border-b border-brand-line">
                    {tier.scope}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {tier.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined text-brand-blue text-[16px] shrink-0 mt-0.5 transition-all duration-300 group-hover:[font-variation-settings:'FILL'_1]"
                        >
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-brand-line flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[14px] text-slate-400 transition-colors group-hover:text-brand-blue"
                  >
                    flag
                  </span>
                  <span>Kickoff to Full Go-Live</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}