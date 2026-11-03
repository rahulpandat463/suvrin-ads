"use client";

import React, { useState, useEffect } from "react";
import { useBooking } from "./BookingProvider";
import { BOOKING_CONFIG } from "@/lib/booking/config";
import { BookingSlotSelection, BookingPayload } from "@/lib/booking/validation";
import TopicStep from "./steps/TopicStep";
import DateTimeStep from "./steps/DateTimeStep";
import ContactStep, { ContactFormData } from "./steps/ContactStep";
import SuccessStep from "./steps/SuccessStep";

export default function ConsultantBookingModal() {
  const { isOpen, closeBooking, source, initialTopic, initialFormat } = useBooking();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTopic, setSelectedTopic] = useState<string>(
    initialTopic || BOOKING_CONFIG.topics[0]?.id || "scoping"
  );
  const [selectedFormat, setSelectedFormat] = useState<string>(
    initialFormat || BOOKING_CONFIG.formats[0]?.id || "meet"
  );
  const [selectedSlots, setSelectedSlots] = useState<BookingSlotSelection[]>([]);
  const [contactName, setContactName] = useState<string>("");
  const [reference, setReference] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      if (initialTopic) setSelectedTopic(initialTopic);
      if (initialFormat) setSelectedFormat(initialFormat);
      setStep(1);
      setSubmitError(null);
      // Lock background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialTopic, initialFormat]);

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

  if (!isOpen) return null;

  // Toggle slot in DateTimeStep
  const handleToggleSlot = (slot: BookingSlotSelection) => {
    const exists = selectedSlots.some(
      (s) => s.date === slot.date && s.time === slot.time
    );
    if (exists) {
      setSelectedSlots(
        selectedSlots.filter(
          (s) => !(s.date === slot.date && s.time === slot.time)
        )
      );
    } else {
      if (selectedSlots.length < BOOKING_CONFIG.maxPreferredSlots) {
        setSelectedSlots([...selectedSlots, slot]);
      }
    }
  };

  const handleRemoveSlot = (index: number) => {
    setSelectedSlots(selectedSlots.filter((_, i) => i !== index));
  };

  // Submit booking
  const handleSubmitBooking = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload: BookingPayload = {
      topic: selectedTopic,
      format: selectedFormat,
      slots: selectedSlots,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      currentSoftware: formData.currentSoftware,
      website: formData.website,
      source: source || "modal",
      visitorTz:
        typeof Intl !== "undefined"
          ? Intl.DateTimeFormat().resolvedOptions().timeZone
          : "Asia/Dubai",
      elapsedSeconds: formData.elapsedSeconds,
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
        setContactName(formData.name);
        setStep(4); // Success step
      } else {
        setSubmitError(
          data.error ||
          "Unable to submit booking request right now. Please try again or contact us via WhatsApp."
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
      className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200"
    >
      {/* Backdrop click area */}
      <div
        className="fixed inset-0 -z-10"
        onClick={closeBooking}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="bg-white w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] rounded-t-2xl sm:rounded-2xl border border-brand-line shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-brand-line flex items-center justify-between bg-slate-50/60 shrink-0">
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
                Schedule an ERP Consultation
              </h2>
              <p className="text-[11px] text-slate-500">
                Direct with our UAE Solutions Principal • No Obligation
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

        {/* Step Progress Indicators (Only for Steps 1-3) */}
        {step < 4 && (
          <div className="px-5 pt-3 pb-1 border-b border-slate-100 flex items-center gap-2 shrink-0">
            {[
              { num: 1, label: "Topic" },
              { num: 2, label: "Date & Slots" },
              { num: 3, label: "Details" },
            ].map((s) => {
              const active = step === s.num;
              const completed = step > s.num;
              return (
                <div key={s.num} className="flex-1 flex items-center gap-1.5">
                  <span
                    className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 transition-colors ${completed
                        ? "bg-emerald-500 text-white"
                        : active
                          ? "bg-brand-blue text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                  >
                    {completed ? "✓" : s.num}
                  </span>
                  <span
                    className={`text-[11px] font-semibold truncate ${active ? "text-brand-ink" : "text-slate-400"
                      }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {step === 1 && (
            <TopicStep
              selectedTopic={selectedTopic}
              onSelectTopic={setSelectedTopic}
              selectedFormat={selectedFormat}
              onSelectFormat={setSelectedFormat}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <DateTimeStep
              selectedSlots={selectedSlots}
              onToggleSlot={handleToggleSlot}
              onRemoveSlot={handleRemoveSlot}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <ContactStep
              onSubmit={handleSubmitBooking}
              onBack={() => setStep(2)}
              isSubmitting={isSubmitting}
              submitError={submitError}
            />
          )}

          {step === 4 && (
            <SuccessStep
              reference={reference}
              topicId={selectedTopic}
              formatId={selectedFormat}
              selectedSlots={selectedSlots}
              contactName={contactName}
              onClose={closeBooking}
            />
          )}
        </div>
      </div>
    </div>
  );
}
