"use client";

import React from "react";
import { COMPANY_INFO } from "@/data";
import { useBooking } from "@/components/booking/BookingProvider";

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
}

export default function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const { openBooking } = useBooking();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      openBooking({ source: "mobile_bar" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-brand-line px-4 py-2.5 flex sm:hidden items-center gap-3 shadow-[0_-8px_24px_rgba(20,20,20,0.06)]">
      <a
        href={`tel:${COMPANY_INFO.phoneTel}`}
        className="w-11 h-11 rounded-xl border border-brand-line text-brand-blue flex items-center justify-center shrink-0 bg-white active:scale-95"
        aria-label="Call Gurgaon Desk"
      >
        <span className="material-symbols-outlined text-[20px]">call</span>
      </a>
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[44px] px-3 rounded-xl bg-brand-green-deep text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95"
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
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={handleClick}
        className="flex-[1.3] min-h-[44px] px-3 rounded-xl bg-[#0062fb] hover:bg-[#0052d6] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
        <span>Book a Consultant</span>
      </button>
    </div>
  );
}
