"use client";

import React, { useState, useEffect, useRef } from "react";
import { COMPANY_INFO } from "@/data";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  currentSoftware?: string;
  website?: string;
  elapsedSeconds?: number;
}

interface ContactStepProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
  submitError: string | null;
}

const COUNTRY_PREFIXES = [
  { code: "+91", label: "India (+91)", flag: "🇮🇳" },
  { code: "+971", label: "UAE (+971)", flag: "🇦🇪" },
  { code: "+1", label: "US / Canada (+1)", flag: "🇺🇸" },
  { code: "+44", label: "UK (+44)", flag: "🇬🇧" },
  { code: "+966", label: "Saudi Arabia (+966)", flag: "🇸🇦" },
  { code: "+65", label: "Singapore (+65)", flag: "🇸🇬" },
  { code: "+974", label: "Qatar (+974)", flag: "🇶🇦" },
  { code: "+968", label: "Oman (+968)", flag: "🇴🇲" },
  { code: "+973", label: "Bahrain (+973)", flag: "🇧🇭" },
  { code: "+965", label: "Kuwait (+965)", flag: "🇰🇼" },
];

const SOFTWARE_OPTIONS = [
  "Tally Prime / ERP 9",
  "Excel Spreadsheets & WhatsApp",
  "QuickBooks / Zoho Books",
  "Legacy Custom ERP",
  "SAP / Oracle / Microsoft Dynamics",
  "New Setup / Starting Fresh",
];

export default function ContactStep({
  onSubmit,
  onBack,
  isSubmitting,
  submitError,
}: ContactStepProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryPrefix, setCountryPrefix] = useState("+91");
  const [phoneRaw, setPhoneRaw] = useState("");
  const [company, setCompany] = useState("");
  const [currentSoftware, setCurrentSoftware] = useState("");
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");

  // Validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const mountTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    // Validate Name
    if (!name.trim() || name.trim().length < 2) {
      setNameError("Please enter your name");
      hasError = true;
    } else {
      setNameError("");
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid work email");
      hasError = true;
    } else {
      setEmailError("");
    }

    // Validate Phone
    const digitsOnly = phoneRaw.replace(/\D/g, "");
    if (!phoneRaw.trim() || digitsOnly.length < 7) {
      setPhoneError("Please enter a valid phone number (at least 7 digits)");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (hasError) return;

    const fullPhone = `${countryPrefix} ${phoneRaw.trim()}`;
    const elapsedSeconds = (Date.now() - mountTimeRef.current) / 1000;

    await onSubmit({
      name: name.trim(),
      email: email.trim(),
      phone: fullPhone,
      company: company.trim() || undefined,
      currentSoftware: currentSoftware || undefined,
      website: websiteHoneypot,
      elapsedSeconds,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor="bookingName"
          className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
        >
          Your Full Name *
        </label>
        <input
          type="text"
          id="bookingName"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) setNameError("");
          }}
          placeholder="e.g. Tariq Al-Mansoor"
          required
          className="field-input !h-10 text-xs sm:text-sm"
        />
        {nameError && (
          <p className="text-[11px] text-red-500 mt-1 font-medium">{nameError}</p>
        )}
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="bookingEmail"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
          >
            Business Email *
          </label>
          <input
            type="email"
            id="bookingEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            placeholder="rahul@company.in"
            required
            className="field-input !h-10 text-xs sm:text-sm"
          />
          {emailError && (
            <p className="text-[11px] text-red-500 mt-1 font-medium">{emailError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="bookingPhone"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
          >
            WhatsApp / Mobile *
          </label>
          <div className="flex gap-1.5">
            <select
              value={countryPrefix}
              onChange={(e) => setCountryPrefix(e.target.value)}
              className="field-input !h-10 !w-24 text-xs font-semibold px-2 bg-slate-50 cursor-pointer shrink-0"
              aria-label="Country code"
            >
              {COUNTRY_PREFIXES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="bookingPhone"
              value={phoneRaw}
              onChange={(e) => {
                setPhoneRaw(e.target.value);
                if (phoneError) setPhoneError("");
              }}
              placeholder="98765 43210"
              required
              className="field-input !h-10 flex-1 text-xs sm:text-sm"
            />
          </div>
          {phoneError && (
            <p className="text-[11px] text-red-500 mt-1 font-medium">{phoneError}</p>
          )}
        </div>
      </div>

      {/* Company Name & Current Software */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="bookingCompany"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
          >
            Company Name <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="bookingCompany"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Precision Components Pvt Ltd"
            className="field-input !h-10 text-xs sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="bookingSoftware"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1"
          >
            Current Software <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="bookingSoftware"
            value={currentSoftware}
            onChange={(e) => setCurrentSoftware(e.target.value)}
            className="field-input !h-10 text-xs sm:text-sm bg-white"
          >
            <option value="">Select current system...</option>
            {SOFTWARE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot anti-spam field (hidden from real users) */}
      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="website">Website (Leave empty)</label>
        <input
          type="text"
          id="website"
          name="website"
          value={websiteHoneypot}
          onChange={(e) => setWebsiteHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Error alert with WhatsApp fallback if submission fails */}
      {submitError && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>{submitError}</span>
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-brand-green-deep underline shrink-0"
          >
            <span>Book via WhatsApp</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="pt-3 border-t border-brand-line flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="btn-secondary h-10 px-4 text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back</span>
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary h-10 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>Confirm Booking Request</span>
              <span className="material-symbols-outlined text-[16px]">check</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-1 text-[10.5px] text-slate-400 text-center">
        <span className="material-symbols-outlined text-[13px] text-brand-blue">lock</span>
        <span>Strict Data Confidentiality &amp; NDA • Direct Gurgaon Desk</span>
      </div>
    </form>
  );
}
