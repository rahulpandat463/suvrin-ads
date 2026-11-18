"use client";

import React, { useState, useEffect, useRef } from "react";
import { useBooking } from "./BookingProvider";
import { BookingPayload } from "@/lib/booking/validation";
import { BOOKING_CONFIG } from "@/lib/booking/config";
import SuccessStep from "./steps/SuccessStep";

export default function ConsultantBookingModal() {
  const { isOpen, closeBooking, source } = useBooking();

  // Mode: "form" or "success"
  const [isSuccess, setIsSuccess] = useState(false);
  const [reference, setReference] = useState("");

  // Form Fields (Fixed to UAE +971)
  const countryPrefix = "+971";
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [phoneRaw, setPhoneRaw] = useState("");

  // Validation & Submission States
  const [nameError, setNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Measure time spent on form
  const mountTimeRef = useRef<number>(Date.now());

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setReference("");
      setFullName("");
      setCompanyName("");
      setBusinessEmail("");
      setPhoneRaw("");
      setNameError(false);
      setCompanyError(false);
      setEmailError(false);
      setPhoneError(false);
      setSubmitError(null);
      mountTimeRef.current = Date.now();
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeBooking();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeBooking]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Validation
  const validateForm = () => {
    let valid = true;

    if (!fullName.trim() || fullName.trim().length < 2) {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }

    if (!companyName.trim()) {
      setCompanyError(true);
      valid = false;
    } else {
      setCompanyError(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail.trim() || !emailRegex.test(businessEmail.trim())) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    const digits = phoneRaw.replace(/\D/g, "");
    if (!digits || digits.length < 7) {
      setPhoneError(true);
      valid = false;
    } else {
      setPhoneError(false);
    }

    return valid;
  };

  // Submit Handler
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const cleanedPhone = phoneRaw.replace(/[^\d\s-]/g, "").trim();
    const fullPhone = `${countryPrefix} ${cleanedPhone}`;
    const elapsedSeconds = Math.max(3, (Date.now() - mountTimeRef.current) / 1000);

    const payload: BookingPayload = {
      topic: "scoping",
      format: "meet",
      slots: [
        {
          date: new Date().toISOString().split("T")[0],
          time: "10:00",
        },
      ],
      name: fullName.trim(),
      email: businessEmail.trim().toLowerCase(),
      phone: fullPhone,
      company: companyName.trim(),
      source: source || "hero_modal",
      visitorTz:
        typeof Intl !== "undefined"
          ? Intl.DateTimeFormat().resolvedOptions().timeZone
          : "Asia/Dubai",
      elapsedSeconds,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setReference(data.reference || `BK-${Date.now().toString(36).toUpperCase()}`);
        setIsSuccess(true);
      } else {
        setSubmitError(
          data.error ||
            "Unable to submit request right now. Please try again or contact us via WhatsApp."
        );
      }
    } catch (err) {
      console.error("[Booking Submission Error]", err);
      setSubmitError(
        "Network connection issue. Please retry or message our team directly via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingModalTitle"
      className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/65 backdrop-blur-xs transition-opacity duration-200"
    >
      {/* Backdrop click area */}
      <div
        className="fixed inset-0 -z-10"
        onClick={closeBooking}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="bg-white w-full sm:max-w-lg max-h-[94vh] sm:max-h-[90vh] rounded-t-2xl sm:rounded-2xl border border-brand-line shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-brand-line flex items-center justify-between bg-slate-50/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-brand-blue flex items-center justify-center">
              <span className="material-symbols-outlined text-[19px]">
                calendar_month
              </span>
            </div>
            <div>
              <h2
                id="bookingModalTitle"
                className="font-heading font-extrabold text-sm sm:text-base text-brand-ink"
              >
                Schedule a Discovery Call
              </h2>
              <p className="text-[11px] text-slate-500">
                Direct consultation with our Dubai Solutions Principal • No Obligation
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeBooking}
            className="w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-brand-ink hover:border-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {!isSuccess ? (
            <form onSubmit={handleSubmitForm} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1"
                  htmlFor="modalFullName"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="modalFullName"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (nameError) setNameError(false);
                  }}
                  required
                  placeholder="e.g. Tariq Mansoor"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                    nameError
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                {nameError && (
                  <p className="text-xs text-rose-600 mt-1">Please enter your full name.</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label
                  className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1"
                  htmlFor="modalCompanyName"
                >
                  Business / Company Name *
                </label>
                <input
                  type="text"
                  id="modalCompanyName"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    if (companyError) setCompanyError(false);
                  }}
                  required
                  placeholder="e.g. Al Khaleej Precision Metal LLC"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                    companyError
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                {companyError && (
                  <p className="text-xs text-rose-600 mt-1">Please enter your company name.</p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label
                  className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1"
                  htmlFor="modalEmail"
                >
                  Business Email *
                </label>
                <input
                  type="email"
                  id="modalEmail"
                  value={businessEmail}
                  onChange={(e) => {
                    setBusinessEmail(e.target.value);
                    if (emailError) setEmailError(false);
                  }}
                  required
                  placeholder="tariq@alkhaleejmetal.ae"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all ${
                    emailError
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                {emailError && (
                  <p className="text-xs text-rose-600 mt-1">Please enter a valid work email.</p>
                )}
              </div>

              {/* WhatsApp / Phone with Fixed UAE +971 Prefix */}
              <div>
                <label
                  className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-1"
                  htmlFor="modalPhone"
                >
                  WhatsApp / Mobile Number *
                </label>
                <div
                  className={`flex rounded-lg border bg-white overflow-hidden transition-all ${
                    phoneError
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400 focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/30"
                  }`}
                >
                  <div className="bg-slate-50 border-r border-slate-200 px-3.5 py-2.5 flex items-center gap-1.5 shrink-0 text-slate-700 font-semibold text-sm select-none">
                    <span>🇦🇪</span>
                    <span>+971</span>
                  </div>

                  <input
                    type="tel"
                    id="modalPhone"
                    value={phoneRaw}
                    onChange={(e) => {
                      setPhoneRaw(e.target.value);
                      if (phoneError) setPhoneError(false);
                    }}
                    required
                    placeholder="50 123 4567"
                    className="flex-1 px-3.5 py-2.5 text-sm text-slate-900 bg-transparent placeholder-slate-400 focus:outline-none"
                  />
                </div>
                {phoneError && (
                  <p className="text-xs text-rose-600 mt-1">Please enter your UAE mobile number (e.g. 50 123 4567).</p>
                )}
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  {submitError}
                </div>
              )}

              {/* Primary Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-brand-blue hover:bg-[#001770] disabled:bg-slate-300 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="text-center pt-1 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-slate-400">lock</span>
                <span>Strict UAE Data Confidentiality &amp; NDA Guaranteed • Direct Dubai Desk</span>
              </div>
            </form>
          ) : (
            /* Success Mode */
            <SuccessStep
              reference={reference}
              topicId="odoo_scoping"
              formatId="meet"
              selectedSlots={[]}
              contactName={fullName}
              onClose={closeBooking}
            />
          )}
        </div>
      </div>
    </div>
  );
}
