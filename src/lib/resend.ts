/*
  Thin Resend wrapper.
  ────────────────────
  Uses raw fetch so we don't pull in the `resend` SDK — keeps the edge
  bundle small. Sends are best-effort: callers should not await this in
  a way that blocks the user response if the email service is down.

  Required env vars:
    RESEND_API_KEY  — bearer token from resend.com/api-keys
    RESEND_FROM     — verified sender address, default: hello@thepelhamgroupnw.com
                      (must match a domain you've verified in Resend)

  If RESEND_API_KEY is not set, sendEmail returns { ok: false, reason }
  without making a network call. This lets us deploy the integration
  before the API key exists and have it cleanly no-op.
*/

const RESEND_API = 'https://api.resend.com/emails';

const DEFAULT_FROM = 'Kim Pelham <hello@thepelhamgroupnw.com>';

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  from?: string;
  tags?: { name: string; value: string }[];
}

export interface SendEmailResult {
  ok: boolean;
  id?: string;
  reason?: string;
  status?: number;
}

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, reason: 'RESEND_API_KEY not set (no-op)' };
  }

  const from = input.from ?? process.env.RESEND_FROM ?? DEFAULT_FROM;

  try {
    const res = await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: input.to,
        subject: input.subject,
        html: input.html,
        text: input.text,
        reply_to: input.replyTo ?? 'hello@thepelhamgroupnw.com',
        tags: input.tags,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      return {
        ok: false,
        reason: `Resend ${res.status}: ${body.slice(0, 200)}`,
        status: res.status,
      };
    }

    const data = (await res.json().catch(() => ({}))) as { id?: string };
    return { ok: true, id: data.id };
  } catch (err) {
    return {
      ok: false,
      reason: err instanceof Error ? err.message : 'unknown send error',
    };
  }
}
