export interface ICSParams {
  title: string;
  startUTC: Date;
  minutes: number;
  description: string;
  reference?: string;
  location?: string;
}

export function buildICS(p: ICSParams): string {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const end = new Date(p.startUTC.getTime() + p.minutes * 60000);
  const uid = `bk-${p.reference || Date.now()}@suvrin.com`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Suvrin Technologies//Consultant Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(p.startUTC)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${p.title} (Tentative)`,
    `DESCRIPTION:${p.description.replace(/\r\n|\r|\n/g, "\\n")}`,
    p.location ? `LOCATION:${p.location}` : "LOCATION:Google Meet / Gurgaon Desk",
    "STATUS:TENTATIVE",
    "TRANSP:OPAQUE",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

/**
 * Client-side trigger to prompt the browser to save the generated ICS file
 */
export function downloadICS(icsString: string, filename = "consultation-tentative.ics") {
  if (typeof window === "undefined") return;

  const blob = new Blob([icsString], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
