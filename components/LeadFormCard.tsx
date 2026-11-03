"use client";

import React, { useState } from "react";
import { useBooking } from "@/components/booking/BookingProvider";

interface LeadFormCardProps {
  onOpenBooking?: () => void;
}

export default function LeadFormCard({ onOpenBooking }: LeadFormCardProps) {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<"callback" | "schedule">("callback");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states for Quick Callback
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation errors
  const [nameError, setNameError] = useState(false);
  const [compError, setCompError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleOpenBookingModal = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openBooking({ source: "hero_card" });
    }
  };

  const handleTabSwitch = (tab: "callback" | "schedule") => {
    setActiveTab(tab);
    if (tab === "schedule") {
      handleOpenBookingModal();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!fullName.trim()) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!companyName.trim()) {
      setCompError(true);
      valid = false;
    } else {
      setCompError(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail.trim())) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!phone.trim() || phone.trim().length < 7) {
      setPhoneError(true);
      valid = false;
    } else {
      setPhoneError(false);
    }

    if (valid) {
      setIsSubmitted(true);
    }
  };

  return (
    <div
      id="chapter-audit"
      className="bg-white border border-brand-line rounded-2xl p-5 sm:p-7 shadow-sm transition-all scroll-mt-24"
    >
      {/* Two Tabs: Quick Callback vs Schedule a Time */}
      <div className="grid grid-cols-2 p-1 bg-slate-100/90 rounded-xl mb-4 border border-slate-200/60">
        <button
          type="button"
          onClick={() => handleTabSwitch("callback")}
          className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === "callback"
              ? "bg-white text-brand-ink shadow-xs"
              : "text-slate-500 hover:text-brand-ink"
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">call</span>
          <span>Quick Callback</span>
        </button>

        <button
          type="button"
          onClick={() => handleTabSwitch("schedule")}
          className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === "schedule"
              ? "bg-white text-brand-blue shadow-xs"
              : "text-slate-500 hover:text-brand-blue"
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
          <span>Schedule a Time</span>
        </button>
      </div>

      {/* Form Card Header */}
      <div className="pb-3.5 mb-3.5 border-b border-brand-line">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-sm font-bold text-brand-ink uppercase tracking-wide">
            Business ERP Audit
          </h3>
          <span className="text-[10px] font-mono font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            UAE Desk
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Confidential assessment &amp; preliminary roadmap.
        </p>
      </div>

      {/* Prompt banner to Pick Slot */}
      <div className="mb-4 p-2.5 rounded-xl bg-blue-50/80 border border-blue-100/90 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-brand-blue font-bold">
          <span className="material-symbols-outlined text-[17px]">event_available</span>
          <span className="text-[11.5px]">Prefer a scheduled meeting?</span>
        </div>
        <button
          type="button"
          onClick={handleOpenBookingModal}
          className="text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-bright px-3 py-1 rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1"
        >
          <span>Pick Slot</span>
          <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
        </button>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
          <div>
            <label
              className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1"
              htmlFor="heroFullName"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="heroFullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="e.g. Tariq Mansoor"
              className="field-input !h-10 text-xs sm:text-sm"
            />
            {nameError && (
              <p className="text-[11px] text-red-500 mt-1">Please enter your full name</p>
            )}
          </div>

          <div>
            <label
              className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1"
              htmlFor="heroCompanyName"
            >
              Business / Company Name *
            </label>
            <input
              type="text"
              id="heroCompanyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              placeholder="e.g. Al Khaleej Precision Metal LLC"
              className="field-input !h-10 text-xs sm:text-sm"
            />
            {compError && (
              <p className="text-[11px] text-red-500 mt-1">Please enter your company name</p>
            )}
          </div>

          <div>
            <label
              className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1"
              htmlFor="heroBusinessEmail"
            >
              Business Email *
            </label>
            <input
              type="email"
              id="heroBusinessEmail"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
              required
              placeholder="tariq@alkhaleejmetal.ae"
              className="field-input !h-10 text-xs sm:text-sm"
            />
            {emailError && (
              <p className="text-[11px] text-red-500 mt-1">Please provide a valid company email</p>
            )}
          </div>

          <div>
            <label
              className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1"
              htmlFor="heroPhone"
            >
              WhatsApp / Mobile (+971) *
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 flex items-center gap-1 text-brand-blue text-xs font-semibold">
                <span>+971</span>
              </div>
              <input
                type="tel"
                id="heroPhone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="50 123 4567"
                className="field-input !h-10 !pl-16 text-xs sm:text-sm"
              />
            </div>

            {phoneError && (
              <p className="text-[11px] text-red-500 mt-1">Please enter a valid phone number</p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary w-full h-11 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
          >
            <span>Request Immediate Callback</span>
            <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
          </button>

          <div className="pt-2.5 border-t border-brand-line flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
            <span className="material-symbols-outlined text-[13px] text-brand-blue">lock</span>
            <span>Strict UAE Data Confidentiality &amp; NDA Guaranteed • Direct Dubai Desk</span>
          </div>
        </form>
      ) : (
        <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-brand-green/40 text-left">
          <div className="flex items-center gap-2 text-brand-green-deep font-bold mb-1 text-sm">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>Callback Request Confirmed!</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            Thank you, <strong>{fullName}</strong>. A Senior UAE Business ERP Principal from our Dubai Marina office will contact you within 2 business hours with your preliminary roadmap outline for <strong>{companyName}</strong>.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-brand-green-deep font-semibold">
            <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
            <span>Confirmation details sent to +971 {phone}</span>
          </div>
        </div>
      )}
    </div>
  );
}
