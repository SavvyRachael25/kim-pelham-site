import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Receives the contact form payload from the Next.js frontend, captures consent
 * metadata server-side, creates the contact in GHL, attaches the message as a
 * note, and immediately texts Kim with the lead details so she can respond
 * within minutes.
 *
 * Flow:
 *   1. Validate input (firstName + email required)
 *   2. POST contact to GHL Contacts API (with consent tags)
 *   3. POST message as a note on the contact (best-effort)
 *   4. POST SMS to Kim's notification contact via Conversations API (best-effort)
 *   5. Return 200 to the form even if (3) or (4) fail — the lead is captured
 *
 * Environment variables:
 *   GHL_API_TOKEN                 — GHL Private Integration Token (required)
 *   GHL_LOCATION_ID               — Kim's sub-account location ID (required)
 *   GHL_KIM_NOTIFICATION_CONTACT_ID — Kim's contact record in her own GHL (for SMS routing; optional)
 *
 * GHL→FUB sync: HLApps already mirrors GHL contacts to Follow Up Boss, so
 * writing to GHL is sufficient — do NOT also write to FUB directly (creates
 * duplicate records and race conditions).
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interested?: string;
  message?: string;
  smsMarketingConsent: boolean;
  smsTransactionalConsent: boolean;
  marketingCheckboxText: string;
  transactionalCheckboxText: string;
  tags?: string[];
  source?: string;
}

function buildKimAlert(p: ContactPayload, leadId?: string): string {
  const lines: string[] = [];
  lines.push(`🏡 New Pelham website lead`);
  lines.push(`${p.firstName}${p.lastName ? ' ' + p.lastName : ''}`);
  if (p.phone) lines.push(`📱 ${p.phone}`);
  lines.push(`✉️ ${p.email}`);
  if (p.interested) lines.push(`Interested: ${p.interested}`);
  if (p.message) {
    const trimmed = p.message.length > 220 ? p.message.slice(0, 220) + '…' : p.message;
    lines.push(`"${trimmed}"`);
  }
  if (leadId) lines.push(`GHL: ${leadId.slice(0, 8)}`);
  return lines.join('\n');
}

export async function POST(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  const KIM_CONTACT_ID = process.env.GHL_KIM_NOTIFICATION_CONTACT_ID;

  if (!GHL_API_TOKEN || !GHL_LOCATION_ID) {
    console.error('[contact-api] Missing GHL_API_TOKEN or GHL_LOCATION_ID env vars');
    return NextResponse.json(
      { error: 'Server configuration error. Please try again or call Kim at 425-250-9422.' },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    interested,
    message,
    smsMarketingConsent,
    smsTransactionalConsent,
    tags: customTags,
    source: customSource,
  } = body;

  if (!firstName || !email) {
    return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
  }

  // Build GHL contact payload
  const consentTags: string[] = [];
  if (smsMarketingConsent) consentTags.push('consent-marketing');
  if (smsTransactionalConsent) consentTags.push('consent-transactional');
  if (interested) consentTags.push(`interested-${interested.toLowerCase().replace(/\s+/g, '-')}`);

  const ghlPayload: Record<string, unknown> = {
    firstName,
    lastName: lastName ?? '',
    email,
    phone: phone ?? '',
    locationId: GHL_LOCATION_ID,
    source: customSource ?? 'website_contact_form',
    tags: [...(customTags ?? ['website-lead']), ...consentTags],
  };

  // 1. Create the contact
  let ghlRes: Response;
  try {
    ghlRes = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        'Content-Type': 'application/json',
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify(ghlPayload),
    });
  } catch (err) {
    console.error('[contact-api] Network error calling GHL:', (err as Error).message);
    return NextResponse.json(
      { error: "We couldn't submit your request. Please try again or text/call Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  if (!ghlRes.ok) {
    const errBody = await ghlRes.text().catch(() => '(no body)');
    console.error(`[contact-api] GHL returned ${ghlRes.status}:`, errBody.slice(0, 200));
    return NextResponse.json(
      { error: "We couldn't submit your request. Please try again or text/call Kim at 425-250-9422." },
      { status: 502 }
    );
  }

  // Pull the new contact ID for downstream calls
  let newContactId: string | undefined;
  try {
    const data = (await ghlRes.clone().json()) as { contact?: { id?: string } };
    newContactId = data.contact?.id;
  } catch {
    // Non-fatal — we just won't be able to attach a note
  }

  // 2. Best-effort: attach the message as a note on the new contact
  if (message && newContactId) {
    try {
      await fetch(`${GHL_API_BASE}/contacts/${newContactId}/notes`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({ body: message }),
      });
    } catch {
      console.error('[contact-api] Failed to create note on contact');
    }
  }

  // 3. Best-effort: text Kim immediately so she can respond within minutes
  if (KIM_CONTACT_ID) {
    try {
      const alertBody = buildKimAlert(body, newContactId);
      const smsRes = await fetch(`${GHL_API_BASE}/conversations/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          'Content-Type': 'application/json',
          Version: GHL_API_VERSION,
        },
        body: JSON.stringify({
          type: 'SMS',
          contactId: KIM_CONTACT_ID,
          message: alertBody,
        }),
      });
      if (!smsRes.ok) {
        const errTxt = await smsRes.text().catch(() => '(no body)');
        console.error(`[contact-api] Kim alert SMS returned ${smsRes.status}:`, errTxt.slice(0, 200));
      }
    } catch (err) {
      console.error('[contact-api] Failed to send Kim alert SMS:', (err as Error).message);
    }
  } else {
    console.warn('[contact-api] GHL_KIM_NOTIFICATION_CONTACT_ID not set — lead captured but Kim was not texted');
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
