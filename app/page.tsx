import React from "react";
import Header from "@/components/Header";
import ProgressRail from "@/components/ProgressRail";
import Hero from "@/components/Hero";
import AdvisoryPillars from "@/components/AdvisoryPillars";
import TransformationComparison from "@/components/TransformationComparison";
import PipelineFlow from "@/components/PipelineFlow";
import Compliance from "@/components/Compliance";
import WhatsIncluded from "@/components/WhatsIncluded";
import StageOwnership from "@/components/StageOwnership";
import TypicalTimeline from "@/components/TypicalTimeline";
import PricingLevers from "@/components/PricingLevers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Fixed Site Header */}
      <Header />

      {/* Left Progress Rail (Fixed on desktop, exactly where it was) */}
      <ProgressRail />

      {/* Main Page Flow */}
      <main className="w-full pt-[68px] sm:pt-[84px]">
        {/* Chapter 1: Overview */}
        <Hero />

        {/* Foundation Pillars */}
        <AdvisoryPillars />

        {/* Before vs After Transformation Comparison */}
        <TransformationComparison />

        {/* Chapter 2: Connected Pipeline Flow */}
        <PipelineFlow />

        {/* Chapter 3: UAE Compliance */}
        <Compliance />

        {/* Chapter 4: What's Included */}
        <WhatsIncluded />

        {/* Chapter 5: Stage-by-Stage Ownership */}
        <StageOwnership />

        {/* Typical Implementation Timeline */}
        <TypicalTimeline />

        {/* Chapter 6: What Affects The Price (Pricing Levers) */}
        <PricingLevers />

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
