import { BOOKING_CONFIG } from "./config";

export interface BookingSlotSelection {
  date: string; // "YYYY-MM-DD"
  time: string; // "14:00"
}

export interface BookingPayload {
  topic: string;
  format: string;
  slots: BookingSlotSelection[];
  name: string;
  email: string;
  phone: string;
  countryCode?: string;
  company?: string;
  currentSoftware?: string;
  website?: string; // Honeypot field (must remain empty)
  source: string;
  visitorTz: string;
  elapsedSeconds?: number;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts international format e.g. +91 98110 21616, +91 9811021616, etc.
const PHONE_REGEX = /^\+?[0-9\s\-().]{7,25}$/;

export function validateBookingPayload(data: Partial<BookingPayload>): ValidationResult {
  const errors: Record<string, string> = {};

  // 1. Honeypot check
  if (data.website && data.website.trim().length > 0) {
    errors.website = "Spam detected.";
    return { valid: false, errors };
  }

  // 2. Topic check (defaults to "scoping" if omitted)
  const allowedTopics = BOOKING_CONFIG.topics.map((t) => t.id);
  if (!data.topic || !allowedTopics.includes(data.topic)) {
    data.topic = "scoping";
  }

  // 3. Format check (defaults to "meet" if omitted)
  const allowedFormats = BOOKING_CONFIG.formats.map((f) => f.id);
  if (!data.format || !allowedFormats.includes(data.format)) {
    data.format = "meet";
  }

  // 4. Slots check (defaults to current date if omitted)
  if (!data.slots || !Array.isArray(data.slots) || data.slots.length === 0) {
    const today = new Date().toISOString().split("T")[0];
    data.slots = [{ date: today, time: "10:00" }];
  } else if (data.slots.length > BOOKING_CONFIG.maxPreferredSlots) {
    errors.slots = `You can select up to ${BOOKING_CONFIG.maxPreferredSlots} preferred slots.`;
  } else {
    // Validate each slot structure
    for (const s of data.slots) {
      if (!s.date || !/^\d{4}-\d{2}-\d{2}$/.test(s.date)) {
        s.date = new Date().toISOString().split("T")[0];
      }
      if (!s.time || !/^\d{1,2}:\d{2}$/.test(s.time)) {
        s.time = "10:00";
      }
    }
  }

  // 5. Name check
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  } else if (data.name.length > 80) {
    errors.name = "Name is too long (maximum 80 characters).";
  }

  // 6. Email check
  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid business email address.";
  }

  // 7. Phone check
  if (!data.phone || !PHONE_REGEX.test(data.phone.trim()) || data.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number (at least 7 digits).";
  }

  // 8. Company check (optional)
  if (data.company && data.company.length > 120) {
    errors.company = "Company name cannot exceed 120 characters.";
  }

  // 9. Current software check (optional)
  if (data.currentSoftware && data.currentSoftware.length > 60) {
    errors.currentSoftware = "Software name cannot exceed 60 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
