"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useBooking } from "./BookingProvider";
import { BookingPayload } from "@/lib/booking/validation";

interface BookingFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneRaw: string;
}

export default function ConsultantBookingModal() {
  const { isOpen, closeBooking, source } = useBooking();

  // Mode: "form" or "success"
  const [isSuccess, setIsSuccess] = useState(false);
  const [reference, setReference] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    fullName: string;
    companyName: string;
    businessEmail: string;
    phone: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form setup using react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      companyName: "",
      businessEmail: "",
      phoneRaw: "",
    },
  });

  // Measure time spent on form
  const mountTimeRef = useRef<number>(Date.now());

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setReference("");
      setSubmittedData(null);
      setSubmitError(null);
      reset();
      mountTimeRef.current = Date.now();
    }
  }, [isOpen, reset]);

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

  const targetWhatsAppNumber = "919911083904";

  // Build WhatsApp message
  const getWhatsAppUrl = (data: {
    fullName: string;
    companyName: string;
    businessEmail: string;
    phone: string;
    ref?: string;
  }) => {
    const waMessage =
      `*New Discovery Call Request - Suvrin ERP*\n\n` +
      `👤 *Name:* ${data.fullName.trim()}\n` +
      `🏢 *Company:* ${data.companyName.trim()}\n` +
      `✉️ *Email:* ${data.businessEmail.trim().toLowerCase()}\n` +
      `📱 *Phone:* ${data.phone}\n` +
      `🔖 *Reference:* ${data.ref || reference || "PENDING"}\n` +
      `📍 *Source:* Schedule Discovery Call\n\n` +
      `Please connect with this client for consultation.`;

    return `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodeURIComponent(waMessage)}`;
  };

  // Submit Handler using react-hook-form
  const onSubmit = async (data: BookingFormData) => {
    setSubmitError(null);

    const countryPrefix = "+971";
    const cleanedPhone = data.phoneRaw.replace(/[^\d\s-]/g, "").trim();
    const fullPhone = `${countryPrefix} ${cleanedPhone}`;
    const elapsedSeconds = Math.max(3, (Date.now() - mountTimeRef.current) / 1000);
    const generatedRef = `BK-${Date.now().toString(36).toUpperCase()}`;

    // Save to state and show confirmation
    setSubmittedData({
      fullName: data.fullName,
      companyName: data.companyName,
      businessEmail: data.businessEmail,
      phone: fullPhone,
    });
    setReference(generatedRef);

    // Simultaneously save to backend API
    const payload: BookingPayload = {
      topic: "scoping",
      format: "meet",
      slots: [
        {
          date: new Date().toISOString().split("T")[0],
          time: "10:00",
        },
      ],
      name: data.fullName.trim(),
      email: data.businessEmail.trim().toLowerCase(),
      phone: fullPhone,
      company: data.companyName.trim(),
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

      const resData = await res.json().catch(() => null);

      if (res.ok && resData?.ok && resData.reference) {
        setReference(resData.reference);
      }
    } catch (err) {
      console.error("[Booking Submission Error]", err);
    }

    setIsSuccess(true);
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
            <div className="w-8 h-8 rounded-lg bg-[#2140A6]/10 border border-[#2140A6]/20 text-[#2140A6] flex items-center justify-center">
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
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
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
                  placeholder="e.g. Tariq Mansoor"
                  {...register("fullName", {
                    required: "Please enter your full name.",
                    minLength: {
                      value: 2,
                      message: "Full name must be at least 2 characters.",
                    },
                  })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6]/30 focus:border-[#2140A6] transition-all ${
                    errors.fullName
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-600 mt-1">
                    {errors.fullName.message}
                  </p>
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
                  placeholder="e.g. Al Khaleej Precision Metal LLC"
                  {...register("companyName", {
                    required: "Please enter your company name.",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters.",
                    },
                  })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6]/30 focus:border-[#2140A6] transition-all ${
                    errors.companyName
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                {errors.companyName && (
                  <p className="text-xs text-rose-600 mt-1">
                    {errors.companyName.message}
                  </p>
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
                  placeholder="tariq@alkhaleejmetal.ae"
                  {...register("businessEmail", {
                    required: "Please enter your work email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2140A6]/30 focus:border-[#2140A6] transition-all ${
                    errors.businessEmail
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400"
                  }`}
                />
                {errors.businessEmail && (
                  <p className="text-xs text-rose-600 mt-1">
                    {errors.businessEmail.message}
                  </p>
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
                    errors.phoneRaw
                      ? "border-rose-400 bg-rose-50/20"
                      : "border-slate-300 hover:border-slate-400 focus-within:border-[#2140A6] focus-within:ring-2 focus-within:ring-[#2140A6]/30"
                  }`}
                >
                  <div className="bg-slate-50 border-r border-slate-200 px-3.5 py-2.5 flex items-center gap-1.5 shrink-0 text-slate-700 font-semibold text-sm select-none">
                    <span>🇦🇪</span>
                    <span>+971</span>
                  </div>

                  <input
                    type="tel"
                    id="modalPhone"
                    placeholder="50 123 4567"
                    {...register("phoneRaw", {
                      required: "Please enter your UAE mobile number.",
                      validate: (val) => {
                        const digits = val.replace(/\D/g, "");
                        return (
                          digits.length >= 7 ||
                          "Please enter a valid mobile number (min 7 digits)."
                        );
                      },
                    })}
                    className="flex-1 px-3.5 py-2.5 text-sm text-slate-900 bg-transparent placeholder-slate-400 focus:outline-none"
                  />
                </div>
                {errors.phoneRaw && (
                  <p className="text-xs text-rose-600 mt-1">
                    {errors.phoneRaw.message}
                  </p>
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
                  className="w-full h-12 bg-[#83B773] hover:bg-[#72A363] disabled:bg-slate-300 text-white font-bold rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base active:scale-[0.99]"
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
            /* Dedicated Discovery Call Success Screen */
            <div className="space-y-5 text-center py-2">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mx-auto">
                <span className="material-symbols-outlined text-[32px]">verified</span>
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono text-[11px] font-bold mb-1.5">
                  Ref: {reference}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-extrabold text-brand-ink">
                  Discovery Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                  Thank you, <strong>{submittedData?.fullName}</strong>. Your request is registered.
                </p>
              </div>

              {/* Recap Box with Submitted Data */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-line text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Name:</span>
                  <span className="font-bold text-slate-800">{submittedData?.fullName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Company:</span>
                  <span className="font-bold text-slate-800">{submittedData?.companyName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-bold text-slate-800">{submittedData?.businessEmail}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">WhatsApp / Phone:</span>
                  <span className="font-bold text-[#2140A6]">{submittedData?.phone}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-line">
                <button
                  type="button"
                  onClick={closeBooking}
                  className="w-full h-11 bg-[#83B773] hover:bg-[#72A363] text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
