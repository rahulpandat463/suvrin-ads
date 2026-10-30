/**
 * getCampaignData
 * ---------------
 * Fetches live section content for a given campaign slug from the main backend.
 * Falls back to `data.ts` defaults if the backend is unreachable or not configured.
 *
 * Usage (server component or route handler):
 *   const content = await getCampaignData("odoo-uae");
 *   const hero = content.hero ?? defaultHeroData;
 */

const BACKEND_URL = process.env.MAIN_BACKEND_URL?.replace(/\/$/, "") ?? "";

export interface CampaignContent {
  hero?: Record<string, unknown>;
  "before-after"?: Record<string, unknown>;
  faqs?: Record<string, unknown>;
  whatsapp?: Record<string, unknown>;
  slots?: Record<string, unknown>;
  [key: string]: Record<string, unknown> | undefined;
}

export async function getCampaignData(slug: string): Promise<CampaignContent> {
  // If backend URL is not configured, immediately return empty (use data.ts fallbacks)
  if (!BACKEND_URL) {
    return {};
  }

  try {
    const res = await fetch(`${BACKEND_URL}/api/campaigns/${encodeURIComponent(slug)}`, {
      // Cache at edge for 60 seconds, then serve stale while revalidating
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`[getCampaignData] Backend returned ${res.status} for slug "${slug}". Using data.ts fallback.`);
      return {};
    }

    const data = await res.json();
    return (data.content ?? {}) as CampaignContent;
  } catch (err) {
    // Network error, backend down, etc — always fall back gracefully
    console.warn("[getCampaignData] Backend unreachable. Using data.ts fallback.", err);
    return {};
  }
}
