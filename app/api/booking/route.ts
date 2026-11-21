import { NextRequest, NextResponse } from "next/server";
import { BOOKING_CONFIG } from "@/lib/booking/config";
import { validateBookingPayload, BookingPayload } from "@/lib/booking/validation";

export async function POST(req: NextRequest) {
  try {
    const body: BookingPayload = await req.json();

    // 1. Anti-bot checks: honeypot & time-on-form
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json(
        { ok: false, error: "Spam detected." },
        { status: 400 }
      );
    }

    if (typeof body.elapsedSeconds === "number" && body.elapsedSeconds < 2.5) {
      return NextResponse.json(
        { ok: false, error: "Submission too fast. Please retry." },
        { status: 400 }
      );
    }

    // 2. Validate payload structure
    const { valid, errors } = validateBookingPayload(body);
    if (!valid) {
      return NextResponse.json(
        { ok: false, errors },
        { status: 422 }
      );
    }

    // 3. Re-verify slot dates are not blocked holidays
    for (const slot of body.slots) {
      if (BOOKING_CONFIG.holidays.includes(slot.date)) {
        return NextResponse.json(
          { ok: false, error: `The selected date ${slot.date} is a holiday.` },
          { status: 400 }
        );
      }
    }

    // 4. Generate reference code (e.g. BK-7X8Y2)
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const reference = `BK-${randomHex}`;

    const timestamp = new Date().toISOString();

    // 5. Structure booking payload for logging & future integrations
    const bookingRecord = {
      reference,
      createdAt: timestamp,
      customer: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone.trim(),
        company: body.company?.trim() || "Not specified",
        currentSoftware: body.currentSoftware?.trim() || "Not specified",
      },
      consultation: {
        topic: body.topic,
        format: body.format,
        slots: body.slots,
        visitorTz: body.visitorTz || BOOKING_CONFIG.timezone,
      },
      meta: {
        source: body.source || "web",
        ip: req.headers.get("x-forwarded-for") || "unknown",
        userAgent: req.headers.get("user-agent") || "unknown",
      },
    };

    console.log("[Booking Received]", JSON.stringify(bookingRecord, null, 2));

    // -------------------------------------------------------------------------
    // FUTURE INTEGRATION HOOKS (Google Sheets / CRM / Resend Email)
    // When you are ready to connect Google Sheets or Email, add the env variables
    // -------------------------------------------------------------------------

    // A. Google Sheet / CRM Webhook integration:
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingRecord),
        });
      } catch (webhookErr) {
        console.error("[Booking Webhook Error]", webhookErr);
      }
    }

    // B. Resend Email notification integration:
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Suvrin Bookings <no-reply@suvrin.com>",
            to: [process.env.TEAM_EMAIL || "sudeep@suvrin.com"],
            subject: `[New Consultation Request] ${reference} - ${bookingRecord.customer.name} (${bookingRecord.customer.company})`,
            text: `New consultation request received:\nReference: ${reference}\nTopic: ${bookingRecord.consultation.topic}\nFormat: ${bookingRecord.consultation.format}\nCustomer: ${bookingRecord.customer.name} (${bookingRecord.customer.phone}, ${bookingRecord.customer.email})\nPreferred Slots: ${JSON.stringify(bookingRecord.consultation.slots)}`,
          }),
        });
      } catch (emailErr) {
        console.error("[Booking Email Error]", emailErr);
      }
    }

    // -------------------------------------------------------------------------
    // C. Sync lead to Suvrin main backend (admin panel CRM)
    //    Set MAIN_BACKEND_URL and LEADS_SYNC_SECRET in .env.local to activate.
    // -------------------------------------------------------------------------
    const mainBackendUrl = process.env.MAIN_BACKEND_URL;
    const leadsSyncSecret = process.env.LEADS_SYNC_SECRET;
    if (mainBackendUrl) {
      try {
        // Fire-and-forget — landing page response is never blocked by this
        const primarySlot = body.slots?.[0];
        const phoneParts = body.phone.trim().split(" ");
        const inferredCountryCode =
          body.countryCode ||
          (phoneParts.length > 1 && phoneParts[0].startsWith("+") ? phoneParts[0] : "+91");
        const inferredPhone =
          phoneParts.length > 1 && phoneParts[0].startsWith("+")
            ? phoneParts.slice(1).join(" ")
            : body.phone.trim();

        fetch(`${mainBackendUrl}/api/leads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(leadsSyncSecret ? { "x-api-key": leadsSyncSecret } : {}),
          },
          body: JSON.stringify({
            region: process.env.LEAD_REGION || "uae",
            source: body.source || "web",
            referenceCode: reference,
            name: bookingRecord.customer.name,
            company: bookingRecord.customer.company,
            email: bookingRecord.customer.email,
            phone: inferredPhone,
            countryCode: inferredCountryCode,
            currentSoftware: bookingRecord.customer.currentSoftware,
            slotDate: primarySlot?.date ?? null,
            slotTime: primarySlot?.time ?? null,
            slotTimezone: body.visitorTz || BOOKING_CONFIG.timezone,
            topic: body.topic || null,
            format: body.format || null,
          }),
        }).catch((syncErr) =>
          console.error("[Lead Sync Error — non-blocking]", syncErr)
        );
      } catch {
        // Never crash the landing page if sync fails
      }
    }

    return NextResponse.json({
      ok: true,
      reference,
      confirmWithin: BOOKING_CONFIG.confirmWithinText,
      message: "Consultation request received. Our Gurgaon team will confirm your slot within 2 business hours.",
    });
  } catch (err: unknown) {
    console.error("[Booking API Error]", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred while processing your booking." },
      { status: 500 }
    );
  }
}
