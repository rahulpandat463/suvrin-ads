"use client";

import React from "react";
import Image from "next/image";
import { useBooking } from "@/components/booking/BookingProvider";

// Paired row-by-row so left and right columns stay 100% aligned across all 4 rows
const FEATURE_ITEMS = [
  "Streamlined Operations",
  "Staging and Production Environments",
  "Odoo-Native Architecture",
  "99.9% Uptime with High Availability",
  "Zero-Downtime Updates",
  "No DevOps or Infrastructure Hassles",
  "Rapid Deployment",
  "Real-time Monitoring",
];

export default function OdooSaaSToolkit() {
  const { openBooking } = useBooking();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/40 to-white border-t border-slate-100 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: UI Mockup (Hidden on mobile, visible on desktop lg+) */}
          <div className="hidden lg:block lg:col-span-6 w-full">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#f2f8f0] via-[#f7faf5] to-[#eef4fc] p-4 sm:p-6 md:p-8 pt-8 sm:pt-9 border border-[#80B070]/30 shadow-sm flex flex-col justify-center min-h-[420px]">

              {/* Ambient blur glows in Suvrin Green & Blue */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-[#80B070]/20 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-52 h-52 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none -ml-12 -mb-12"></div>

              {/* Floating Badge Top-Right: Price & Specs (Floating over top-right corner as in reference) */}
              <div className="absolute -top-3 sm:-top-4 right-3 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl border border-[#80B070]/40 shadow-lg px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-3 z-30 transition-transform hover:scale-[1.02]">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-slate-900">$10.40</span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#446b39] bg-[#80B070]/20 px-2 py-0.5 rounded-full border border-[#80B070]/40">
                      Very Small
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5 mt-0.5">
                    <span>1 CPU</span>
                    <span className="text-[#80B070]">•</span>
                    <span>2GB RAM</span>
                    <span className="text-[#80B070]">•</span>
                    <span>10GB Storage</span>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-lg p-4 sm:p-5 w-full z-10">
                {/* Dashboard Top Header Bar with Suvrin Logo inside (Matching reference layout) */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400 font-medium">
                    <span>Dashboard</span>
                    <span>&gt;</span>
                    <span className="text-slate-600">Select Product</span>
                  </div>

                  {/* Clean Suvrin Logo inside Dashboard Header */}
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.png"
                      alt="Suvrin Technologies"
                      width={130}
                      height={36}
                      className="h-6 sm:h-7 w-auto object-contain"
                      priority
                    />
                    <div className="hidden sm:flex items-center gap-1 text-[10px] font-semibold text-slate-600 bg-slate-100/90 px-2.5 py-1 rounded-md border border-slate-200">
                      <span>Server</span>
                      <svg className="w-2.5 h-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dashboard Title & Status */}
                <div className="flex items-center justify-between pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#80B070] animate-pulse"></div>
                    <span className="text-sm font-bold text-slate-800">Deployment Build</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    <svg className="w-3 h-3 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={3} />
                      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={3} />
                    </svg>
                    <span>Server Active</span>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500 border-b border-slate-100 pb-2 mb-3 overflow-x-auto scrollbar-none">
                  <span className="font-bold text-brand-blue border-b-2 border-brand-blue pb-1 cursor-pointer whitespace-nowrap">
                    Overview
                  </span>
                  <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Build History</span>
                  <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Addons</span>
                  <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap">Backup History</span>
                  <span className="hover:text-slate-700 cursor-pointer whitespace-nowrap hidden sm:inline">Deployment Configurations</span>
                </div>

                {/* Build Overview Heading */}
                <span className="text-[11px] font-bold text-slate-700 block mb-2">Build Overview</span>

                {/* Build Overview Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-50/80 border border-slate-100">
                    <span className="text-[10px] text-slate-500 block">Configuration</span>
                    <span className="text-xs font-bold text-slate-800">Very Small</span>
                    <span className="text-[10px] text-slate-400 block">1 CPU, 2GB RAM</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#80B070]/10 border border-[#80B070]/25">
                    <span className="text-[10px] text-slate-500 block">Storage</span>
                    <span className="text-xs font-bold text-slate-800">10GB NVMe</span>
                    <span className="text-[10px] text-[#446b39] font-semibold flex items-center gap-1">
                      <svg className="w-2.5 h-2.5 text-[#5F9450]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Encrypted
                    </span>
                  </div>
                </div>

                {/* Sub-action bar */}
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
                  <span className="text-slate-500 font-medium">Build</span>
                  <div className="flex items-center gap-2">
                    <button type="button" className="text-[10px] font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                      Create Backup
                    </button>
                    <button type="button" className="text-[10px] font-semibold px-2.5 py-1 rounded bg-brand-blue text-white hover:bg-brand-blue-hover transition-colors shadow-xs">
                      Restore Backup
                    </button>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Element 1 (Left): Server Name Pill */}
              <div className="absolute left-2 sm:left-4 top-[58%] -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-xl border border-blue-200/90 shadow-md p-2.5 sm:p-3 flex items-center gap-2.5 z-20 transition-transform hover:scale-105">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <svg
                  width="16"
                  height="16"
                  style={{ width: "16px", height: "16px" }}
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <div className="text-left pr-2">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Server Name</span>
                  <span className="text-xs font-bold text-brand-blue font-mono">odooserver12</span>
                </div>
              </div>

              {/* Overlapping Floating Element 2 (Right): Deployment Checklist */}
              <div className="absolute right-2 sm:right-4 bottom-12 sm:bottom-14 bg-white/95 backdrop-blur-md rounded-xl border border-[#80B070]/40 shadow-lg p-2.5 sm:p-3 w-40 sm:w-44 z-20 text-[10px] space-y-1">
                <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 border-b border-slate-100 pb-1 mb-1">
                  <span>Progress</span>
                  <span className="text-[#446b39] font-bold">7 of 8 steps</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#446b39] font-semibold">
                  <svg className="w-3 h-3 shrink-0 text-[#5F9450]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="truncate">Manage Database</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#446b39] font-semibold">
                  <svg className="w-3 h-3 shrink-0 text-[#5F9450]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="truncate">Storage Mounted</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#446b39] font-semibold">
                  <svg className="w-3 h-3 shrink-0 text-[#5F9450]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="truncate">Odoo Server Online</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-blue font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#80B070] animate-ping shrink-0 inline-block mr-0.5"></span>
                  <span className="truncate">Ready to Use</span>
                </div>
              </div>

              {/* Bottom Progress Bar Card */}
              <div className="mt-3 bg-white/95 backdrop-blur-md rounded-xl border border-[#80B070]/30 shadow-md p-3 z-10">
                <div className="flex items-center justify-between text-[11px] text-slate-600 mb-1.5">
                  <span className="font-mono text-[10px] text-slate-500 truncate max-w-[160px] sm:max-w-[200px]">
                    kss00416-prod-b2085648a7d44c4...
                  </span>
                  <span className="text-[10px] font-bold text-[#446b39]">7 of 8 steps</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#80B070] to-brand-blue h-1.5 rounded-full w-[87.5%]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy, Bullets & Buttons in Brand Green (#80B070) & Blue */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow / Main Heading */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-slate-900 leading-tight tracking-tight mb-2">
              No More Scaling Barriers!
            </h2>

            {/* Branded Blue & Green Subheading */}
            <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] font-bold leading-snug tracking-tight mb-4">
              <span className="text-brand-blue">Create Hundreds of Odoo Instances in Minutes </span>
              <span className="text-[#4e7d40] font-bold">
                with Odoo SaaS Toolkit!
              </span>
            </h3>

            {/* Body Description with Straight, Justified End-of-Line Alignment */}
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 text-justify [text-align-last:left] [text-justify:inter-word]">
              Eliminate deployment delays, DevOps complexity, &amp; scaling issues with Suvrin Odoo SaaS Toolkit. Now, launch, manage, and monitor your Odoo SaaS efficiently with rapid deployments and zero DevOps dependency. Built for high scalability, our Odoo SaaS engine allows you to create hundreds to thousands of Odoo instances within minutes. Powered by enterprise-grade features, it delivers secure, reliable Odoo hosting so that you can scale with confidence.
            </p>

            {/* 2-Column Feature Checklist with Perfect Row-by-Row Alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 w-full mb-8">
              {FEATURE_ITEMS.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  {/* Official Purple Odoo SVG Logo Icon (top-aligned to first line of text) */}
                  <div className="w-5 h-5 shrink-0 flex items-center justify-center mt-0.5">
                    <Image
                      src="/purple-odoo.svg"
                      alt="Odoo"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="flex items-center w-full">
              <button
                type="button"
                onClick={() => openBooking({ source: "odoo_saas_trial_cta" })}
                className="bg-[#83B773] hover:bg-[#72a363] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Connect with Us for 30-Day Free Trial</span>
                <svg
                  width="16"
                  height="16"
                  style={{ width: "16px", height: "16px" }}
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
