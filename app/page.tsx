import React from "react";
import Header from "@/components/Header";
import ProgressRail from "@/components/ProgressRail";
import Hero from "@/components/Hero";
import AdvisoryPillars from "@/components/AdvisoryPillars";
import PipelineFlow from "@/components/PipelineFlow";
import Compliance from "@/components/Compliance";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      {/* Progress Rail (Left-docked on desktop) */}
      <ProgressRail />

      {/* Main Page Flow */}
      <div className="page-content">
        <Header />
        <main>
          {/* Chapter 1: Overview */}
          <Hero />

          {/* Foundation Pillars */}
          <AdvisoryPillars />

          {/* Chapter 2: Connected Pipeline Flow */}
          <PipelineFlow />

          {/* Chapter 3: UAE Compliance */}
          <Compliance />

          {/* FAQ Accordion */}
          <FAQ />
        </main>
        <Footer />
      </div>

      {/* Mobile Sticky Bar */}
      <MobileStickyBar />
    </>
  );
}
