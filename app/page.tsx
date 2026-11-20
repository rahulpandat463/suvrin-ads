"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdvisoryPillars from "@/components/AdvisoryPillars";
import PartnerLogos from "@/components/PartnerLogos";
import PipelineFlow from "@/components/PipelineFlow";
import Compliance from "@/components/Compliance";
import WhatsIncluded from "@/components/WhatsIncluded";
import StageOwnership from "@/components/StageOwnership";
import OdooBenefits from "@/components/OdooBenefits";
import OdooSaaSToolkit from "@/components/OdooSaaSToolkit";
import TypicalTimeline from "@/components/TypicalTimeline";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

// Main Landing Page
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Fixed Site Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="w-full pt-[68px] sm:pt-[84px]">
        {/* Chapter 1: Overview */}
        <Hero />

        {/* Foundation Pillars */}
        <AdvisoryPillars />

        {/* Partner / Client Logos */}
        <PartnerLogos />

        {/* Chapter 2: Connected Pipeline Flow (Commented Out) */}
        {/* <PipelineFlow /> */}

        {/* Chapter 3: India Compliance & GST */}
        <Compliance />

        {/* Chapter 4: What's Included */}
        <WhatsIncluded />

        {/* Chapter 5: Stage-by-Stage Ownership */}
        <StageOwnership />

        {/* Benefits of Using Odoo ERP */}
        <OdooBenefits />

        {/* Odoo SaaS Toolkit / Scaling */}
        <OdooSaaSToolkit />

        {/* Typical Implementation Timeline */}
        <TypicalTimeline />

        {/* Chapter 7: FAQ Accordion */}
        <FAQ />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />
    </div>
  );
}
