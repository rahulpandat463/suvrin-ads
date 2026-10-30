import { COMPANY_INFO } from "@/data";

export interface BookingTopic {
  id: string;
  label: string;
  minutes: number;
  desc?: string;
}

export interface BookingFormat {
  id: string;
  label: string;
  icon: string;
  desc?: string;
}

export const BOOKING_CONFIG = {
  provider: "native" as "native" | "calcom",
  calcomLink: "suvrin/consultation",
  timezone: "Asia/Dubai",
  workingDays: [1, 2, 3, 4, 5], // 1 = Monday, 5 = Friday
  saturdayEnabled: false, // flip to true to include Saturdays
  daysAhead: 14, // business days to display
  minLeadHours: 4, // no slots sooner than this from now
  slots: ["10:00", "11:00", "11:30", "14:00", "15:00", "16:00", "17:00"],
  maxPreferredSlots: 3,
  confirmWithinText: "2 business hours",
  whatsappNumber: COMPANY_INFO.whatsappNumber || "9811021616",
  holidays: [
    // UAE Public Holidays (YYYY-MM-DD format)
  ] as string[],
  topics: [
    {
      id: "scoping",
      label: "Odoo ERP Scoping & Fixed Quote",
      minutes: 30,
      desc: "Discovery & fixed-scope architecture proposal",
    },
    {
      id: "mrp",
      label: "Shop Floor MRP & BOM Review",
      minutes: 45,
      desc: "Routing, work centers & multi-level bill of materials",
    },
    {
      id: "migration",
      label: "Tally-to-Odoo Migration",
      minutes: 30,
      desc: "Chart of accounts, master data clean-up & cutover",
    },
    {
      id: "vat",
      label: "UAE FTA VAT & Multi-Entity",
      minutes: 30,
      desc: "5% FTA compliance, e-invoicing & inter-company journals",
    },
  ] as BookingTopic[],
  formats: [
    {
      id: "meet",
      label: "Google Meet",
      icon: "videocam",
      desc: "Interactive video call with screen share",
    },
    {
      id: "phone",
      label: "Phone Call",
      icon: "call",
      desc: "Direct call to your mobile / WhatsApp",
    },
    {
      id: "onsite",
      label: "On-site Visit (Dubai / Abu Dhabi / Sharjah)",
      icon: "apartment",
      desc: "In-person consultation at your facility or office",
    },
  ] as BookingFormat[],
};
