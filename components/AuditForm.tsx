"use client";

import React, { useState } from "react";
import { SECTOR_OPTIONS, SOFTWARE_OPTIONS } from "@/data";

export default function AuditForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");
  const [currentSoftware, setCurrentSoftware] = useState("excel");
  const [facility, setFacility] = useState("");
  const [bottlenecks, setBottlenecks] = useState("");

  // Validation errors
  const [nameError, setNameError] = useState(false);
  const [compError, setCompError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [sectorError, setSectorError] = useState(false);

  const handleNextStep = () => {
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
      setStep(2);
    }
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sector) {
      setSectorError(true);
      return;
    }
    setSectorError(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="chapter-audit"
      data-chapter="6"
      data-title="Free Consultation"
      className="chapter-section relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto flex items-center"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="eyebrow mb-3 inline-block">Technical Assessment</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink mb-3 leading-tight">
            Discuss Your Factory ERP Requirements
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our senior Dubai-based ERP architects will walk you through a tailored roadmap showing how Odoo connects your production, inventory, and UAE VAT accounting workflows.
          </p>
        </div>

        {/* Lead Capture Form Card */}
        <div className="bg-transparent border border-brand-line rounded-2xl p-6 sm:p-8">
          <div className="pb-4 mb-5 border-b border-brand-line">
            <h3 className="font-heading text-sm font-bold text-brand-ink uppercase tracking-wide">
              Business ERP Audit
            </h3>
            <p className="text-[11px] text-slate-500">
              Confidential assessment &amp; preliminary BOM roadmap.
            </p>
          </div>

          {!isSubmitted && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs mb-2 font-heading">
                <span className={`font-bold ${step === 1 ? "text-brand-ink" : "text-slate-400"}`}>
                  01. CONTACT DETAILS
                </span>
                <span className={`font-bold ${step === 2 ? "text-brand-ink" : "text-slate-400"}`}>
                  02. FACTORY SCOPE
                </span>
              </div>
              <div className="w-full h-1.5 bg-brand-mist rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-300 rounded-full"
                  style={{ width: step === 1 ? "50%" : "100%" }}
                ></div>
              </div>
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Step 1: Contact Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="inputFullName"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="inputFullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="e.g. Tariq Mansoor"
                      className="field-input"
                    />
                    {nameError && (
                      <p className="text-[11px] text-red-500 mt-1">Please enter your full name</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="inputCompanyName"
                    >
                      Business Facility Name *
                    </label>
                    <input
                      type="text"
                      id="inputCompanyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      placeholder="e.g. Al Khaleej Precision Metal LLC"
                      className="field-input"
                    />
                    {compError && (
                      <p className="text-[11px] text-red-500 mt-1">Please enter your facility name</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="inputBusinessEmail"
                    >
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="inputBusinessEmail"
                      value={businessEmail}
                      onChange={(e) => setBusinessEmail(e.target.value)}
                      required
                      placeholder="tariq@alkhaleejmetal.ae"
                      className="field-input"
                    />
                    {emailError && (
                      <p className="text-[11px] text-red-500 mt-1">Please provide a valid company email</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="inputPhone"
                    >
                      WhatsApp / Mobile (+971) *
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 flex items-center gap-1 text-brand-blue text-xs font-semibold">
                        <span>+971</span>
                      </div>
                      <input
                        type="tel"
                        id="inputPhone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="50 123 4567"
                        className="field-input !pl-16"
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1.5">
                      Our Dubai team sends preliminary notes via WhatsApp / SMS.
                    </p>
                    {phoneError && (
                      <p className="text-[11px] text-red-500 mt-1">Please enter a valid phone number</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-primary w-full h-11 rounded-xl"
                  >
                    <span>Continue to Factory Scope (2/2)</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              )}

              {/* Step 2: Factory Scope */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="selectSector"
                    >
                      Business Sector *
                    </label>
                    <select
                      id="selectSector"
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      required
                      className="field-input"
                    >
                      <option value="" disabled>
                        Select Industry Sector
                      </option>
                      {SECTOR_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {sectorError && (
                      <p className="text-[11px] text-red-500 mt-1">Please select your sector</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="selectCurrentSoftware"
                    >
                      Current Software Setup
                    </label>
                    <select
                      id="selectCurrentSoftware"
                      value={currentSoftware}
                      onChange={(e) => setCurrentSoftware(e.target.value)}
                      className="field-input"
                    >
                      {SOFTWARE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="inputFacility"
                    >
                      Plant &amp; Warehouse Location
                    </label>
                    <input
                      type="text"
                      id="inputFacility"
                      value={facility}
                      onChange={(e) => setFacility(e.target.value)}
                      placeholder="e.g. JAFZA South Plant + Al Quoz Depot"
                      className="field-input"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-bold text-slate-600 mb-1.5"
                      htmlFor="textBottlenecks"
                    >
                      Primary Operational Bottleneck
                    </label>
                    <textarea
                      id="textBottlenecks"
                      rows={2}
                      value={bottlenecks}
                      onChange={(e) => setBottlenecks(e.target.value)}
                      placeholder="e.g. Inaccurate job costing, stockout delays, spreadsheet sync, 5% UAE VAT ledger reconciliation..."
                      className="field-input !h-auto py-3"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="btn-secondary h-11 px-5 rounded-xl text-xs"
                    >
                      <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex-1 h-11 rounded-xl"
                    >
                      <span>Book Free ERP Consultation</span>
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-brand-line flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
                <span className="material-symbols-outlined text-[13px] text-brand-blue">lock</span>
                <span>Strict UAE Data Confidentiality &amp; NDA Guaranteed • Direct Dubai Desk</span>
              </div>
            </form>
          ) : (
            <div className="p-5 rounded-xl bg-emerald-50 border border-brand-green/40 text-left">
              <div className="flex items-center gap-2 text-brand-green-deep font-bold mb-1 text-sm">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <span>Consultation Request Confirmed!</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Thank you, <strong>{fullName}</strong>. A Senior UAE Business ERP Principal from our Dubai Marina office will contact you within 2 to 4 business hours with your preliminary BOM architecture outline for <strong>{companyName}</strong>.
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-green-deep font-semibold">
                <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
                <span>Confirmation details sent to +971 {phone}</span>
              </div>
            </div>
          )}
        </div>

        {/* Instant WhatsApp Alternative */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 p-5 rounded-2xl bg-transparent border border-brand-line">
          <div>
            <span className="font-heading text-sm font-bold text-brand-ink block">
              Prefer instant WhatsApp communication?
            </span>
            <span className="text-[11px] text-slate-500">
              Direct technical chat with our Dubai ERP Principal
            </span>
          </div>
          <a
            href="https://wa.me/9811021616?text=Hello%20Suvrin,%20I'd%20like%20a%20business%20ERP%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-green-deep hover:bg-brand-green text-white font-bold text-xs flex items-center gap-2 transition-colors active:scale-95 shrink-0"
          >
            <svg
              width="16"
              height="16"
              style={{ width: "16px", height: "16px", minWidth: "16px" }}
              className="w-4 h-4 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
