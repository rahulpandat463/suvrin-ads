// import React from "react";
// import LeadFormCard from "@/components/LeadFormCard";
// import { HERO_HIGHLIGHTS, COMPANY_INFO } from "@/data";

// export default function Hero() {
//   const highlights = HERO_HIGHLIGHTS;

//   return (
//     <section
//       id="chapter-hero"
//       data-chapter="1"
//       data-title="Overview"
//       className="chapter-section relative py-8 sm:py-12 lg:py-14 scroll-mt-24"
//     >
//       {/* Soft background glow accents */}
//       <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
//         <div
//           className="hero-orb w-80 h-80 bg-brand-blue/10 top-[8%] right-[5%] hidden lg:block"
//           style={{ animationDelay: "0s" }}
//         ></div>
//         <div
//           className="hero-orb w-64 h-64 bg-brand-green/15 bottom-[8%] right-[15%] hidden lg:block"
//           style={{ animationDelay: "1.5s" }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
//         {/* 2-Column Split: Content on Left, Form on Right */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
//           {/* Left Column: Heading, Subtitle, Description, Contact Desk & Key UAE Metrics */}
//           <div className="lg:col-span-7 flex flex-col items-start text-left">
//             {/* Eyebrow badge */}
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-mist border border-brand-line mb-3.5">
//               <span className="pulse-dot"></span>
//               <span className="text-[10.5px] uppercase tracking-wider font-semibold text-brand-blue">
//                 Dubai &amp; UAE Business ERP
//               </span>
//             </div>

//             {/* Main Headline */}
//             <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-[2.75rem] font-extrabold text-brand-ink leading-[1.12] mb-3.5">
//               Business ERP<br />
//               for Dubai &amp; UAE Industry
//             </h1>

//             {/* Subtitle */}
//             <p className="text-sm sm:text-base text-slate-700 font-semibold mb-2.5 leading-snug">
//               Connect Production, Multi-Warehouse Inventory, Procurement &amp; UAE VAT Accounting
//             </p>

//             {/* Description */}
//             <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed max-w-xl">
//               Suvrin helps UAE businesses implement and customise Odoo ERP around real-world factory routing, finite capacity, scrap control, and bilingual compliance across Dubai, Sharjah, and Abu Dhabi plants.
//             </p>

//             {/* Direct Contact Button */}
//             <div className="flex items-center gap-3 mb-6 w-full sm:w-auto">
//               <a href="tel:+971551120975" className="btn-secondary h-10 px-4 text-xs">
//                 <span className="material-symbols-outlined text-[17px] text-brand-blue">call</span>
//                 <span>Direct Dubai Desk: +971 501 359 238</span>
//               </a>
//             </div>

//             {/* 6 Metric Pillars */}
//             <div className="pt-4 border-t border-brand-line grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 w-full">
//               {highlights.map((item, i) => (
//                 <div key={i} className="text-left border-l-2 border-brand-blue pl-2">
//                   <span className="font-heading block text-[11px] font-bold uppercase text-brand-ink leading-tight">
//                     {item.title}
//                   </span>
//                   <span className="text-[10px] text-slate-500 block">{item.subtitle}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Lead Form Card */}
//           <div className="lg:col-span-5 w-full">
//             <LeadFormCard />
//           </div>
//         </div>
//       </div>
//     </section>
// 
import React from "react";
import LeadFormCard from "@/components/LeadFormCard";
import { HERO_HIGHLIGHTS } from "@/data";

// The ERP "flow" that the whole page is about: one connected chain.
const FLOW_STEPS = [
  { icon: "precision_manufacturing", label: "Production", note: "Shop floor" },
  { icon: "inventory_2", label: "Inventory", note: "Multi-warehouse" },
  { icon: "local_shipping", label: "Procurement", note: "Vendors & POs" },
  { icon: "receipt_long", label: "UAE VAT", note: "FTA ready" },
];

export default function Hero() {
  const highlights = HERO_HIGHLIGHTS;

  return (
    <section
      id="chapter-hero"
      data-chapter="1"
      data-title="Overview"
      className="chapter-section relative overflow-hidden py-8 sm:py-12 lg:py-16 scroll-mt-24"
    >
      {/* Background: dot grid that fades out + soft colour glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(rgba(30,58,138,0.16) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 35% 40%, #000 20%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 35% 40%, #000 20%, transparent 75%)",
          }}
        />
        <div
          className="hero-orb w-96 h-96 bg-brand-blue/10 top-[2%] right-[2%] hidden lg:block"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="hero-orb w-72 h-72 bg-brand-green/15 bottom-[4%] right-[18%] hidden lg:block"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:pl-24 xl:pl-24 lg:pr-8 xl:pr-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur border border-brand-line shadow-sm mb-5">
              <span className="pulse-dot"></span>
              <span className="text-xs uppercase tracking-wider font-semibold text-brand-blue">
                Dubai &amp; UAE Business ERP
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-[2.75rem] font-extrabold text-brand-ink leading-[1.1] tracking-tight mb-4">
              Business ERP
              <br />
              for Dubai &amp; UAE Industry
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-800 font-semibold mb-2.5 leading-snug max-w-2xl">
              Connect Production, Multi-Warehouse Inventory, Procurement &amp; UAE VAT Accounting
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-500 mb-5 leading-relaxed max-w-xl">
              Suvrin helps UAE businesses implement and customise Odoo ERP around real-world factory
              routing, finite capacity, scrap control, and bilingual compliance across Dubai,
              Sharjah, and Abu Dhabi plants.
            </p>

            {/* The one memorable element: the connected ERP flow */}
            <div className="w-full max-w-2xl rounded-2xl bg-white/80 backdrop-blur border border-brand-line shadow-[0_8px_30px_rgba(30,58,138,0.08)] p-4 mb-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-700">
                  One system, one source of truth
                </span>
              </div>

              <div className="relative grid grid-cols-4 gap-2">
                {/* connector line running behind the icons */}
                <div
                  className="absolute left-[12.5%] right-[12.5%] top-5 border-t-2 border-dashed border-brand-blue/30"
                  aria-hidden="true"
                ></div>
                {FLOW_STEPS.map((step) => (
                  <div key={step.label} className="relative flex flex-col items-center text-center">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue text-white ring-4 ring-white shadow-md">
                      <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                    </span>
                    <span className="mt-2 text-[13px] font-bold text-brand-ink leading-tight">
                      {step.label}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight">{step.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric pillars */}
            <div className="pt-4 border-t border-brand-line grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="text-left border-l-[3px] border-brand-blue bg-white/70 rounded-r-lg pl-3 pr-2 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:bg-white hover:shadow-md transition"
                >
                  <span className="font-heading block text-[13px] font-bold uppercase text-brand-ink leading-tight">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: form card */}
          <div className="lg:col-span-5 w-full">
            <LeadFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}