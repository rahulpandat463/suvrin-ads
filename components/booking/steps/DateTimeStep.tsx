"use client";

import React, { useState, useEffect } from "react";
import { BOOKING_CONFIG } from "@/lib/booking/config";
import {
  getAvailableDates,
  AvailableDate,
  formatUaeSlot,
  toVisitorTime,
  getVisitorTimezone,
  isDifferentTimezone,
} from "@/lib/booking/slots";
import { BookingSlotSelection } from "@/lib/booking/validation";

interface DateTimeStepProps {
  selectedSlots: BookingSlotSelection[];
  onToggleSlot: (slot: BookingSlotSelection) => void;
  onRemoveSlot: (index: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function DateTimeStep({
  selectedSlots,
  onToggleSlot,
  onRemoveSlot,
  onNext,
  onBack,
}: DateTimeStepProps) {
  const [dates, setDates] = useState<AvailableDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<AvailableDate | null>(null);
  const [visitorTz, setVisitorTz] = useState<string>("Asia/Dubai");
  const [showLocalTz, setShowLocalTz] = useState(false);

  useEffect(() => {
    const availDates = getAvailableDates();
    setDates(availDates);
    if (availDates.length > 0) {
      setSelectedDate(availDates[0]);
    }

    const tz = getVisitorTimezone();
    setVisitorTz(tz);
    setShowLocalTz(isDifferentTimezone(tz));
  }, []);

  const isSlotSelected = (dateIso: string, timeStr: string) => {
    return selectedSlots.some((s) => s.date === dateIso && s.time === timeStr);
  };

  const isMaxReached = selectedSlots.length >= BOOKING_CONFIG.maxPreferredSlots;

  return (
    <div className="space-y-5">
      {/* Step Header Notice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-brand-line">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
            Select Preferred Date &amp; Time
          </label>
          <p className="text-[11px] text-slate-500">
            Choose up to {BOOKING_CONFIG.maxPreferredSlots} preferred slots. We will confirm the first available slot.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold text-brand-blue self-start sm:self-auto">
          <span className="material-symbols-outlined text-[14px]">schedule</span>
          <span>
            {selectedSlots.length} / {BOOKING_CONFIG.maxPreferredSlots} selected
          </span>
        </div>
      </div>

      {/* Date Strip (Horizontal Scroll) */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
          Available Working Days (Next 14 Days)
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200">
          {dates.map((d) => {
            const isCurrentSelected = selectedDate?.iso === d.iso;
            const hasSlotsOnThisDay = selectedSlots.some((s) => s.date === d.iso);

            return (
              <button
                key={d.iso}
                type="button"
                onClick={() => setSelectedDate(d)}
                className={`flex-shrink-0 w-20 py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer relative ${
                  isCurrentSelected
                    ? "border-brand-blue bg-brand-blue text-white shadow-sm ring-2 ring-brand-blue/30"
                    : "border-brand-line bg-white hover:border-slate-300 text-brand-ink"
                }`}
              >
                {hasSlotsOnThisDay && !isCurrentSelected && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-blue rounded-full ring-2 ring-white" />
                )}
                <span
                  className={`block text-[10px] font-bold uppercase tracking-wider ${
                    isCurrentSelected ? "text-blue-100" : "text-slate-400"
                  }`}
                >
                  {d.weekday}
                </span>
                <span className="block text-base font-extrabold font-heading my-0.5">
                  {d.dayNum}
                </span>
                <span
                  className={`block text-[10px] font-medium ${
                    isCurrentSelected ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {d.month}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Slots Grid */}
      {selectedDate && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-brand-ink">
              Slots for {selectedDate.display}
            </span>
            {showLocalTz && (
              <span className="text-[11px] text-slate-500">
                Displaying UAE (GST) + Local ({visitorTz})
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {BOOKING_CONFIG.slots.map((slot) => {
              const selected = isSlotSelected(selectedDate.iso, slot);
              const disabled = !selected && isMaxReached;
              const uaeFormatted = formatUaeSlot(slot);
              const localTime = showLocalTz
                ? toVisitorTime(selectedDate.iso, slot)
                : null;

              return (
                <button
                  key={slot}
                  type="button"
                  disabled={disabled}
                  onClick={() =>
                    onToggleSlot({ date: selectedDate.iso, time: slot })
                  }
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    selected
                      ? "border-brand-blue bg-blue-50/80 ring-1 ring-brand-blue text-brand-blue shadow-xs"
                      : disabled
                      ? "border-slate-100 bg-slate-50/50 text-slate-300 cursor-not-allowed opacity-60"
                      : "border-brand-line bg-white hover:border-brand-blue/50 text-brand-ink hover:bg-slate-50/60 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-xs sm:text-[12.5px]">
                      {uaeFormatted}
                    </span>
                    {selected && (
                      <span className="material-symbols-outlined text-[16px] text-brand-blue shrink-0">
                        check_circle
                      </span>
                    )}
                  </div>
                  {localTime && (
                    <span className="text-[10.5px] text-slate-500 mt-1">
                      Local: {localTime}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Slots Tray */}
      {selectedSlots.length > 0 && (
        <div className="p-3 rounded-xl bg-slate-50 border border-brand-line">
          <span className="text-[11px] font-bold text-slate-600 block mb-1.5 uppercase tracking-wider">
            Your Selected Slots ({selectedSlots.length} of {BOOKING_CONFIG.maxPreferredSlots}):
          </span>
          <div className="flex flex-wrap gap-2">
            {selectedSlots.map((s, idx) => {
              const formattedTime = formatUaeSlot(s.time);
              return (
                <div
                  key={`${s.date}-${s.time}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-brand-blue/30 text-brand-blue text-xs font-semibold shadow-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">event</span>
                  <span>
                    {s.date} @ {formattedTime}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemoveSlot(idx)}
                    className="w-4 h-4 rounded-full hover:bg-blue-100 text-slate-400 hover:text-brand-blue flex items-center justify-center transition-colors cursor-pointer ml-0.5"
                    aria-label="Remove slot"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="pt-3 border-t border-brand-line flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary h-10 px-4 text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back</span>
        </button>

        <button
          type="button"
          disabled={selectedSlots.length === 0}
          onClick={onNext}
          className={`h-10 px-5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            selectedSlots.length > 0
              ? "btn-primary shadow-sm hover:shadow active:scale-98 cursor-pointer"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
        >
          <span>Continue to Details</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
