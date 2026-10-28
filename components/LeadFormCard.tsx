"use client";

import React, { useState } from "react";

export default function LeadFormCard() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Validation errors
  const [nameError, setNameError] = useState(false);
  const [compError, setCompError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

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
      {/* Form Card Header */}
      <div className="pb-4 mb-4 border-b border-brand-line">
        <h3 className="font-heading text-sm font-bold text-brand-ink uppercase tracking-wide">
          Business ERP Audit
        </h3>
        <p className="text-[11px] text-slate-500">
          Confidential assessment &amp; preliminary roadmap.
        </p>
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
            className="btn-primary w-full h-11 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
          >
            <span>Book a Free Consultation</span>
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
            <span>Consultation Request Confirmed!</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            Thank you, <strong>{fullName}</strong>. A Senior UAE Business ERP Principal from our Dubai Marina office will contact you within 2 to 4 business hours with your preliminary roadmap outline for <strong>{companyName}</strong>.
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
