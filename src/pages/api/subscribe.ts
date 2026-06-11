// On-demand endpoint (runs on Cloudflare) — NOT prerendered.
export const prerender = false;

import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

const BREVO_CONTACTS_ENDPOINT = "https://api.brevo.com/v3/contacts";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}

// Normalize a (likely Bulgarian) phone number to E.164 for Brevo's SMS attribute.
function normalizePhone(raw: string): string | null {
  const p = (raw || "").trim().replace(/[^\d+]/g, "");
  if (!p) return null;
  if (p.startsWith("+")) return p;
  if (p.startsWith("00")) return "+" + p.slice(2);
  if (p.startsWith("359")) return "+" + p;
  if (p.startsWith("0")) return "+359" + p.slice(1);
  return "+359" + p;
}

export const POST: APIRoute = async ({ request }) => {
  // Secrets come from Cloudflare env vars (via `cloudflare:workers`). The
  // import.meta.env fallback is only for local convenience. Key is NEVER in code.
  const apiKey: string | undefined =
    (env as any).BREVO_API_KEY ?? import.meta.env.BREVO_API_KEY;
  const listId = Number((env as any).BREVO_LIST_ID ?? import.meta.env.BREVO_LIST_ID ?? 4);

  if (!apiKey) {
    return json(
      { ok: false, error: "Формата все още не е конфигурирана (липсва BREVO_API_KEY)." },
      500
    );
  }

  // Accept JSON or classic form-encoded submissions.
  let body: Record<string, any> = {};
  try {
    const ct = request.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      body = await request.json();
    } else {
      const fd = await request.formData();
      fd.forEach((v, k) => (body[k] = v));
    }
  } catch {
    return json({ ok: false, error: "Невалидни данни." }, 400);
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").trim();
  const consent =
    body.consent === true || body.consent === "on" || body.consent === "true";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Моля, въведете валиден имейл адрес." }, 400);
  }
  if (!consent) {
    return json({ ok: false, error: "Моля, дайте съгласие за обработка на данните." }, 400);
  }

  const sms = normalizePhone(phone);
  const baseAttributes: Record<string, string> = {};
  if (name) baseAttributes.FIRSTNAME = name;

  const createContact = (includeSms: boolean) => {
    const attributes = { ...baseAttributes };
    if (includeSms && sms) attributes.SMS = sms;
    return fetch(BREVO_CONTACTS_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        attributes,
        listIds: [listId],
        updateEnabled: true, // upsert if the contact already exists
      }),
    });
  };

  try {
    let res = await createContact(true);
    // An invalid SMS format makes Brevo reject the whole contact — retry without
    // the phone so we never lose the lead.
    if (!res.ok && sms) res = await createContact(false);

    if (res.ok || res.status === 201 || res.status === 204) {
      // ── FUTURE: Zoom webinar registration goes here (see note at bottom) ──
      return json({ ok: true });
    }

    console.error("Brevo error", res.status, await res.text());
    return json(
      { ok: false, error: "Възникна грешка при записването. Опитайте отново." },
      502
    );
  } catch (e) {
    console.error("Brevo request failed", e);
    return json(
      { ok: false, error: "Възникна грешка при връзката. Опитайте отново." },
      502
    );
  }
};

// ───────────────────────────────────────────────────────────────────────────
// FUTURE — Zoom Webinar registration
// After the Brevo upsert succeeds, register the attendee to the Zoom webinar and
// return their unique join link. Create a Zoom Server-to-Server OAuth app and add
// ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET, ZOOM_WEBINAR_ID as
// Cloudflare env vars, then:
//   1) POST https://zoom.us/oauth/token?grant_type=account_credentials&account_id=$ZOOM_ACCOUNT_ID
//      Authorization: Basic base64(client_id:client_secret)  → { access_token }
//   2) POST https://api.zoom.us/v2/webinars/$ZOOM_WEBINAR_ID/registrants
//      Authorization: Bearer access_token  body: { email, first_name }  → { join_url }
//   3) return { ok:true, joinUrl } and/or email it via a Brevo transactional template.
// ───────────────────────────────────────────────────────────────────────────
