"use client";

import React from "react";
import { BOOKING_CONFIG } from "@/lib/booking/config";
import { formatUaeSlot } from "@/lib/booking/slots";
import { buildICS, downloadICS } from "@/lib/booking/ics";
import { BookingSlotSelection } from "@/lib/booking/validation";

interface SuccessStepProps {
  reference: string;
  topicId: string;
  formatId: string;
  selectedSlots: BookingSlotSelection[];
  contactName: string;
  onClose: () => void;
}

export default function SuccessStep({
  reference,
  topicId,
  formatId,
  selectedSlots,
  contactName,
  onClose,
}: SuccessStepProps) {
  const topic = BOOKING_CONFIG.topics.find((t) => t.id === topicId);
  const format = BOOKING_CONFIG.formats.find((f) => f.id === formatId);

  // Generate WhatsApp text with reference and details
  const slotsSummary = selectedSlots
    .map((s) => `${s.date} at ${formatUaeSlot(s.time)}`)
    .join(" OR ");

  const waMessage = encodeURIComponent(
    `Hi Suvrin team, I submitted a consultation request [${reference}].\n\nName: ${contactName}\nTopic: ${
      topic?.label || topicId
    }\nFormat: ${format?.label || formatId}\nPreferred Slots: ${slotsSummary}\n\nPlease confirm our meeting time.`
  );
  const waUrl = `https://wa.me/${BOOKING_CONFIG.whatsappNumber}?text=${waMessage}`;

  // Handle ICS download
  const handleDownloadICS = () => {
    if (selectedSlots.length === 0) return;

    // Use primary (first) preferred slot for calendar invite
    const primarySlot = selectedSlots[0];
    const startUTC = new Date(`${primarySlot.date}T${primarySlot.time}:00+05:30`);
    const minutes = topic?.minutes || 30;

    const description = [
      `Consultation Request with Suvrin Technologies Gurgaon Desk`,
      `Reference: ${reference}`,
      `Topic: ${topic?.label}`,
      `Format: ${format?.label}`,
      `Preferred Slots: ${slotsSummary}`,
      `Status: Tentative. Our Gurgaon desk will confirm within 2 business hours with final link or venue.`,
      `WhatsApp: +${BOOKING_CONFIG.whatsappNumber}`,
    ].join("\n");

    const icsContent = buildICS({
      title: `Suvrin Consultation: ${topic?.label || "Odoo ERP Review"}`,
      startUTC,
      minutes,
      description,
      reference,
      location: format?.label,
    });

    downloadICS(icsContent, `suvrin-consultation-${reference.toLowerCase()}.ics`);
  };

  return (
    <div className="space-y-5 text-center py-2">
      {/* Success Badge */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-brand-green-deep border border-brand-green/30 mx-auto">
        <span className="material-symbols-outlined text-[32px]">verified</span>
      </div>

      <div>
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono text-[11px] font-bold mb-1.5">
          Reference: {reference}
        </span>
        <h3 className="font-heading text-lg sm:text-xl font-extrabold text-brand-ink">
          Booking Request Received
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
          Thank you, <strong>{contactName}</strong>. A Senior ERP Consultant from our Gurgaon desk will confirm your slot within <strong>{BOOKING_CONFIG.confirmWithinText}</strong>.
        </p>
      </div>

      {/* Recap Box */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-line text-left max-w-md mx-auto space-y-2">
        <div className="flex items-start justify-between text-xs">
          <span className="text-slate-500 font-medium">Topic:</span>
          <span className="font-bold text-brand-ink text-right">
            {topic?.label} ({topic?.minutes} mins)
          </span>
        </div>
        <div className="flex items-start justify-between text-xs">
          <span className="text-slate-500 font-medium">Format:</span>
          <span className="font-bold text-brand-ink text-right">{format?.label}</span>
        </div>
        <div className="border-t border-slate-200/80 pt-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Preferred Slots Requested:
          </span>
          <ul className="space-y-1">
            {selectedSlots.map((s, idx) => (
              <li
                key={`${s.date}-${s.time}`}
                className="text-xs text-brand-blue font-semibold flex items-center gap-1.5"
              >
                <span className="w-4 h-4 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center text-[10px] font-bold shrink-0">
                  {idx + 1}
                </span>
                <span>
                  {s.date} @ {formatUaeSlot(s.time)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next Actions: WhatsApp & ICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto pt-1">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp h-11 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:shadow"
        >
          <svg
            width="18"
            height="18"
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>Message on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleDownloadICS}
          className="btn-secondary h-11 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:border-brand-blue"
        >
          <span className="material-symbols-outlined text-[18px] text-brand-blue">
            calendar_add_on
          </span>
          <span>Add to Calendar (.ics)</span>
        </button>
      </div>

      <div className="pt-3 border-t border-brand-line">
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-bold text-slate-500 hover:text-brand-ink transition-colors cursor-pointer py-1 px-3"
        >
          Done / Close Window
        </button>
      </div>
    </div>
  );
}
