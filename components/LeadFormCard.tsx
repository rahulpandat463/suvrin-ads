"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useBooking } from "@/components/booking/BookingProvider";

interface LeadFormCardProps {
  onOpenBooking?: () => void;
}

interface LeadFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone: string;
}

export default function LeadFormCard({ onOpenBooking }: LeadFormCardProps) {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<"callback" | "schedule">("callback");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<LeadFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      companyName: "",
      businessEmail: "",
      phone: "",
    },
  });

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

  const onSubmit = async (data: LeadFormData) => {
    setSubmittedData(data);

    const cleanedPhone = data.phone.replace(/[^\d\s-]/g, "").trim();
    const fullPhone = `+971 ${cleanedPhone}`;
    const targetWhatsAppNumber = "919911083904";

    const waMessage =
      `*New ERP Callback Request - Suvrin ERP*\n\n` +
      `*Name:* ${data.fullName.trim()}\n` +
      `*Company:* ${data.companyName.trim()}\n` +
      `*Email:* ${data.businessEmail.trim().toLowerCase()}\n` +
      `*Phone:* ${fullPhone}\n` +
      `*Source:* Quick Callback Form\n\n` +
      `Please connect with this client for an initial ERP consultation.`;

    const waUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(waMessage)}`;

    // Simultaneously save to backend API
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: "scoping",
          format: "phone",
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
          source: "quick_callback_card",
          elapsedSeconds: 5,
        }),
      });
    } catch (e) {
      console.warn("API submission background error:", e);
    }

    setIsSubmitted(true);
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
              ? "bg-white text-[#2140A6] shadow-xs"
              : "text-slate-500 hover:text-[#2140A6]"
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
          <span className="text-[10px] font-mono font-bold text-[#2140A6] bg-[#2140A6]/10 px-2 py-0.5 rounded border border-[#2140A6]/20">
            UAE Desk
          </span>
        </div>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Confidential assessment &amp; preliminary roadmap.
        </p>
      </div>

      {/* Prompt banner to Pick Slot */}
      <div className="mb-4 p-2.5 rounded-xl bg-[#2140A6]/5 border border-[#2140A6]/15 flex items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-[#2140A6] font-bold">
          <span className="material-symbols-outlined text-[17px]">event_available</span>
          <span className="text-[11.5px]">Prefer a scheduled meeting?</span>
        </div>
        <button
          type="button"
          onClick={handleOpenBookingModal}
          className="text-xs font-bold text-white bg-[#2140A6] hover:bg-[#1a3385] px-3 py-1 rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-1"
        >
          <span>Pick Slot</span>
          <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
        </button>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3.5">
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
              placeholder="e.g. Tariq Mansoor"
              {...register("fullName", {
                required: "Please enter your full name",
                minLength: { value: 2, message: "Min 2 characters required" },
              })}
              className={`field-input !h-10 text-xs sm:text-sm ${
                errors.fullName ? "!border-rose-400 bg-rose-50/20" : ""
              }`}
            />
            {errors.fullName && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.fullName.message}</p>
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
              placeholder="e.g. Al Khaleej Precision Metal LLC"
              {...register("companyName", {
                required: "Please enter your company name",
                minLength: { value: 2, message: "Min 2 characters required" },
              })}
              className={`field-input !h-10 text-xs sm:text-sm ${
                errors.companyName ? "!border-rose-400 bg-rose-50/20" : ""
              }`}
            />
            {errors.companyName && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.companyName.message}</p>
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
              placeholder="tariq@alkhaleejmetal.ae"
              {...register("businessEmail", {
                required: "Please enter your work email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className={`field-input !h-10 text-xs sm:text-sm ${
                errors.businessEmail ? "!border-rose-400 bg-rose-50/20" : ""
              }`}
            />
            {errors.businessEmail && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.businessEmail.message}</p>
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
              <div className="absolute left-3.5 flex items-center gap-1 text-[#2140A6] text-xs font-semibold">
                <span>+971</span>
              </div>
              <input
                type="tel"
                id="heroPhone"
                placeholder="50 123 4567"
                {...register("phone", {
                  required: "Please enter your mobile number",
                  validate: (val) => {
                    const digits = val.replace(/\D/g, "");
                    return digits.length >= 7 || "Min 7 digits required";
                  },
                })}
                className={`field-input !h-10 !pl-16 text-xs sm:text-sm ${
                  errors.phone ? "!border-rose-400 bg-rose-50/20" : ""
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-[11px] text-rose-600 mt-1">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 bg-[#83B773] hover:bg-[#72A363] text-white rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow transition-all active:scale-[0.99]"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Connecting...</span>
              </span>
            ) : (
              <>
                <span>Request Immediate Callback</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </>
            )}
          </button>

          <div className="pt-2.5 border-t border-brand-line flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
            <span className="material-symbols-outlined text-[13px] text-[#2140A6]">lock</span>
            <span>Strict UAE Data Confidentiality &amp; NDA Guaranteed • Direct Dubai Desk</span>
          </div>
        </form>
      ) : (
        <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-left">
          <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1 text-sm">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <span>Callback Request Confirmed!</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            Thank you, <strong>{submittedData?.fullName}</strong>. A Senior UAE Business ERP Principal from our Dubai Marina office will contact you within 2 business hours with your preliminary roadmap outline for <strong>{submittedData?.companyName}</strong>.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <span className="material-symbols-outlined text-[16px]">phone_iphone</span>
            <span>Confirmation details sent to +971 {submittedData?.phone}</span>
          </div>
        </div>
      )}
    </div>
  );
}
