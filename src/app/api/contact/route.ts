import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Receives the contact form payload from the Next.js frontend,
 * captures consent metadata server-side (IP, timestamp), and
 * writes the contact + consent fields to GHL via the Contacts API.
 *
 * A2P 10DLC compliance requirements:
 * - Consent boolean persisted to CRM custom fields
 * - ISO 8601 UTC timestamp recorded at moment of write
 * - IP captured from Vercel x-forwarded-for header (not client)
 * - Verbatim checkbox text stored for audit trail
 * - Server logs errors but never exposes PII in log messages
 *
 * GHL custom fields needed (create in GHL Settings → Custom Fields):
 *   sms_marketing_consent          (boolean / checkbox)
 *   sms_marketing_consent_timestamp (date/time)
 *   sms_transactional_consent      (boolean / checkbox)
 *   sms_transactional_consent_timestamp (date/time)
 *   consent_ip_address             (text)
 *   consent_source_url             (text)
 *   consent_checkbox_text_marketing    (text / long text)
 *   consent_checkbox_text_transactional (text / long text)
 *
 * TODO (Phase 1): Confirm GHL custom field keys/IDs after Phase 1 audit.
 *   The `customField` keys below must match the keys set in GHL exactly.
 *   If GHL uses numeric IDs instead of string keys, replace accordingly.
 *
 * Environment variables required:
 *   GHL_API_TOKEN          — GHL private integration token (never public)
 *   GHL_LOCATION_ID        — Kim's sub-account location ID
 *   NEXT_PUBLIC_LEGAL_BUSINESS_NAME — confirmed from GHL Brand registration
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
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

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
    marketingCheckboxText,
    transactionalCheckboxText,
  } = body;

  if (!firstName || !email) {
    return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
  }

  const ip = getClientIp(req);
  const timestamp = new Date().toISOString();
  const sourceUrl = req.headers.get('referer') ?? 'https://thepelhamgroupnw.com/contact';

  // Build GHL contact payload
  const ghlPayload = {
    firstName,
    lastName: lastName ?? '',
    email,
    phone: phone ?? '',
    locationId: GHL_LOCATION_ID,
    source: 'website_contact_form',
    tags: ['website-lead'],
    ...(interested && { customField: { interested_in: interested } }),
    customField: {
      // A2P consent fields — must match keys configured in GHL custom fields
      // TODO (Phase 1): Verify these keys match the GHL custom field keys exactly
      sms_marketing_consent: smsMarketingConsent,
      sms_marketing_consent_timestamp: smsMarketingConsent ? timestamp : '',
      sms_transactional_consent: smsTransactionalConsent,
      sms_transactional_consent_timestamp: smsTransactionalConsent ? timestamp : '',
      consent_ip_address: ip,
      consent_source_url: sourceUrl,
      consent_checkbox_text_marketing: marketingCheckboxText,
      consent_checkbox_text_transactional: transactionalCheckboxText,
      ...(interested && { interested_in: interested }),
    },
    ...(message && { description: message }),
  };

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

  return NextResponse.json({ success: true }, { status: 200 });
}
