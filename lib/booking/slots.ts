import { BOOKING_CONFIG as C } from "./config";

export interface AvailableDate {
  iso: string; // "YYYY-MM-DD"
  weekday: string; // "Mon", "Tue"
  dayNum: string; // "29", "30"
  month: string; // "Oct", "Nov"
  display: string; // "Wed, Oct 30"
  isToday: boolean;
  isTomorrow: boolean;
}

/**
 * Returns YYYY-MM-DD for a given date in Indian Time (IST, UTC+05:30)
 */
export function getUaeIsoDate(d: Date): string {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: C.timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(d);
}

/**
 * Generates the next N business dates (Mon-Fri, skipping weekends and holidays)
 */
export function getAvailableDates(now = new Date()): AvailableDate[] {
  const result: AvailableDate[] = [];
  const current = new Date(now);

  const todayIso = getUaeIsoDate(now);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowIso = getUaeIsoDate(tomorrow);

  // We look ahead up to 40 calendar days to safely find daysAhead working days
  let safetyLoop = 0;
  while (result.length < C.daysAhead && safetyLoop < 45) {
    safetyLoop++;
    current.setDate(current.getDate() + 1);

    const iso = getUaeIsoDate(current);
    // Determine day of week in Indian timezone
    const dowFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: C.timezone,
      weekday: "short",
    });
    const shortDay = dowFormatter.format(current); // "Mon", "Tue", etc.

    // Calculate day-of-week index (0 = Sun, 1 = Mon ... 6 = Sat)
    const dowMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };
    const dow = dowMap[shortDay] ?? current.getDay();

    const isAllowedDay =
      C.workingDays.includes(dow) || (C.saturdayEnabled && dow === 6);

    const isHoliday = C.holidays.includes(iso);

    if (isAllowedDay && !isHoliday) {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: C.timezone,
        weekday: "short",
        month: "short",
        day: "numeric",
      }).formatToParts(current);

      const weekday = parts.find((p) => p.type === "weekday")?.value || shortDay;
      const month = parts.find((p) => p.type === "month")?.value || "";
      const dayNum = parts.find((p) => p.type === "day")?.value || "";

      result.push({
        iso,
        weekday,
        dayNum,
        month,
        display: `${weekday}, ${month} ${dayNum}`,
        isToday: iso === todayIso,
        isTomorrow: iso === tomorrowIso,
      });
    }
  }

  return result;
}

/**
 * Converts a slot in Indian time (IST, UTC+05:30) to the visitor's local formatted time.
 */
export function toVisitorTime(dateISO: string, slot: string): string {
  try {
    const utc = new Date(`${dateISO}T${slot}:00+05:30`);
    if (isNaN(utc.getTime())) return slot;
    return utc.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return slot;
  }
}

/**
 * Formats a 24-hr slot string (e.g. "14:00") into a clean 12-hr India display string ("02:00 PM IST")
 */
export function formatUaeSlot(slot: string): string {
  const [hStr, mStr] = slot.split(":");
  let h = parseInt(hStr, 10);
  const m = mStr || "00";
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  const padH = h < 10 ? `0${h}` : `${h}`;
  return `${padH}:${m} ${ampm} IST`;
}

/**
 * Checks if the slot is too soon relative to minLeadHours
 */
export function isSlotAvailable(dateISO: string, slot: string, minLeadHours = C.minLeadHours): boolean {
  const slotDate = new Date(`${dateISO}T${slot}:00+05:30`);
  const now = new Date();
  const minValidTime = now.getTime() + minLeadHours * 60 * 60 * 1000;
  return slotDate.getTime() > minValidTime;
}

/**
 * Safely gets the visitor's resolved timezone name
 */
export function getVisitorTimezone(): string {
  if (typeof window !== "undefined" && typeof Intl !== "undefined" && Intl.DateTimeFormat) {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || C.timezone;
    } catch {
      return C.timezone;
    }
  }
  return C.timezone;
}

/**
 * Returns true if visitor is in a timezone different from Asia/Kolkata
 */
export function isDifferentTimezone(visitorTz: string): boolean {
  if (!visitorTz) return false;
  return (
    visitorTz.toLowerCase() !== C.timezone.toLowerCase() &&
    visitorTz.toLowerCase() !== "asia/calcutta"
  );
}
