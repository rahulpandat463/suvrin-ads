"use client";

import React from "react";
import { BOOKING_CONFIG } from "@/lib/booking/config";

interface TopicStepProps {
  selectedTopic: string;
  onSelectTopic: (topicId: string) => void;
  selectedFormat: string;
  onSelectFormat: (formatId: string) => void;
  onNext: () => void;
}

export default function TopicStep({
  selectedTopic,
  onSelectTopic,
  selectedFormat,
  onSelectFormat,
  onNext,
}: TopicStepProps) {
  const canProceed = Boolean(selectedTopic && selectedFormat);

  return (
    <div className="space-y-6">
      {/* Topic Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          1. Select Consultation Topic *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {BOOKING_CONFIG.topics.map((t) => {
            const isSelected = selectedTopic === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onSelectTopic(t.id)}
                className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? "border-brand-blue bg-blue-50/60 shadow-xs ring-1 ring-brand-blue"
                    : "border-brand-line bg-white hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-heading font-bold text-xs sm:text-[13px] text-brand-ink leading-snug">
                    {t.label}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                      isSelected
                        ? "bg-brand-blue text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {t.minutes}m
                  </span>
                </div>
                {t.desc && (
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {t.desc}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Format Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          2. Preferred Meeting Format *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {BOOKING_CONFIG.formats.map((f) => {
            const isSelected = selectedFormat === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => onSelectFormat(f.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  isSelected
                    ? "border-brand-blue bg-blue-50/60 shadow-xs ring-1 ring-brand-blue"
                    : "border-brand-line bg-white hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`material-symbols-outlined text-[19px] ${
                      isSelected ? "text-brand-blue" : "text-slate-400"
                    }`}
                  >
                    {f.icon}
                  </span>
                  <span className="font-bold text-xs text-brand-ink">
                    {f.label}
                  </span>
                </div>
                {f.desc && (
                  <span className="text-[10.5px] text-slate-500 line-clamp-2">
                    {f.desc}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-brand-line flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Step 1 of 3: Topic &amp; Format
        </span>
        <button
          type="button"
          disabled={!canProceed}
          onClick={onNext}
          className={`h-10 px-5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all ${
            canProceed
              ? "btn-primary shadow-sm hover:shadow active:scale-98 cursor-pointer"
              : "bg-slate-100 text-slate-400 cursor-not-allowed"
          }`}
        >
          <span>Choose Date &amp; Time</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
