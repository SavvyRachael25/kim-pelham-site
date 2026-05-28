import { NextRequest, NextResponse } from 'next/server';

/**
 * /api/debug-message-status?messageId=<id>
 *
 * Pull the actual delivery status from GHL for a message we sent.
 * Returns the raw record. 201 from /conversations/messages only means
 * GHL queued the message — this endpoint shows whether carriers ever
 * delivered it (status: sent / delivered / failed / undelivered).
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

export async function GET(req: NextRequest) {
  const GHL_API_TOKEN = process.env.GHL_API_TOKEN;
  if (!GHL_API_TOKEN) {
    return NextResponse.json({ error: 'No GHL token' }, { status: 500 });
  }
  const messageId = req.nextUrl.searchParams.get('messageId') ?? '';
  if (!messageId) return NextResponse.json({ error: 'Pass ?messageId=' }, { status: 400 });

  const out: Record<string, unknown> = {};

  // Try the singular message lookup
  try {
    const r = await fetch(`${GHL_API_BASE}/conversations/messages/${messageId}`, {
      headers: {
        Authorization: `Bearer ${GHL_API_TOKEN}`,
        Version: GHL_API_VERSION,
        Accept: 'application/json',
      },
    });
    const txt = await r.text();
    out.message = { status: r.status, ok: r.ok, body: txt.slice(0, 2000) };
  } catch (err) {
    out.message = { error: (err as Error).message };
  }

  // Also try the locations/{id}/numbers endpoint to see what numbers are registered for sending
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
  if (GHL_LOCATION_ID) {
    try {
      const r = await fetch(`${GHL_API_BASE}/locations/${GHL_LOCATION_ID}/numbers`, {
        headers: {
          Authorization: `Bearer ${GHL_API_TOKEN}`,
          Version: GHL_API_VERSION,
          Accept: 'application/json',
        },
      });
      const txt = await r.text();
      out.locationNumbers = { status: r.status, ok: r.ok, body: txt.slice(0, 2000) };
    } catch (err) {
      out.locationNumbers = { error: (err as Error).message };
    }
  }

  return NextResponse.json(out);
}
