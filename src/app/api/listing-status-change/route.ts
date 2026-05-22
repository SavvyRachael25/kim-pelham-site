import { NextRequest, NextResponse } from 'next/server';
import {
  planForStatus,
  buildStudioUrl,
  type ListingRow,
} from '@/lib/listings/status-templates';
import {
  renderTemplateToJpeg,
  hostImage,
  postToZernio,
} from '@/lib/listings/render';

/*
  POST /api/listing-status-change

  Event-driven social pipeline. Fired by the Google Apps Script bound to
  the Listings Master tracker whenever Kim changes a row's Status.

  Flow:
    1. Verify shared secret (X-Pelham-Listing-Secret).
    2. Map the row's status → Studio template + caption (status-templates).
       If no template exists yet for that status, log + 200 (skip).
    3. Render the Studio template to a JPEG (headless Chromium).
    4. Host the JPEG on Vercel Blob (Zernio needs a public URL).
    5. Post to Instagram + Facebook via Zernio's REST API.
       Default = DRAFT (LISTING_AUTOPUBLISH != "true"), so nothing goes
       live until Rachael flips the gate — matches the agency's
       "social auto-publish OFF until approved" rule.

  Env vars:
    LISTING_WEBHOOK_SECRET  — shared secret with the Apps Script
    ZERNIO_API_KEY          — Zernio REST key (Kim profile, read-write)
    ZERNIO_FB_ACCOUNT_ID    — optional override (defaults baked in)
    ZERNIO_IG_ACCOUNT_ID    — optional override
    LISTING_AUTOPUBLISH     — "true" to publish immediately; else draft
    BLOB_READ_WRITE_TOKEN   — auto-provisioned by Vercel Blob
*/

export const runtime = 'nodejs';
export const maxDuration = 60;

interface IncomingPayload {
  status?: string;
  address?: string;
  city?: string;
  mls?: string;
  listPrice?: string;
  oldPrice?: string;
  beds?: string;
  baths?: string;
  sqft?: string;
  listingUrl?: string;
  openHouse?: string;
  hook?: string;
}

function slugify(s: string): string {
  return (s || 'listing')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export async function POST(req: NextRequest) {
  // 1. Auth
  const expected = process.env.LISTING_WEBHOOK_SECRET?.trim();
  if (!expected) {
    console.error('[listing-webhook] LISTING_WEBHOOK_SECRET not set');
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }
  const provided = req.headers.get('x-pelham-listing-secret');
  if (provided !== expected) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  let payload: IncomingPayload;
  try {
    payload = (await req.json()) as IncomingPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const row: ListingRow = {
    status: payload.status ?? '',
    address: payload.address ?? '',
    city: payload.city ?? '',
    mls: payload.mls,
    listPrice: payload.listPrice ?? '',
    oldPrice: payload.oldPrice,
    beds: payload.beds,
    baths: payload.baths,
    sqft: payload.sqft,
    listingUrl: payload.listingUrl,
    openHouse: payload.openHouse,
    hook: payload.hook,
  };

  if (!row.address || !row.status) {
    return NextResponse.json(
      { error: 'address and status are required' },
      { status: 400 }
    );
  }

  // 2. Plan
  const plan = planForStatus(row);
  if (!plan.ready || !plan.templateId) {
    console.log(
      `[listing-webhook] skip ${row.address} (${row.status}): ${plan.reason}`
    );
    return NextResponse.json(
      { skipped: true, reason: plan.reason },
      { status: 200 }
    );
  }

  const studioUrl = buildStudioUrl(plan.templateId, row);
  const publishNow = process.env.LISTING_AUTOPUBLISH?.trim() === 'true';

  try {
    // 3. Render
    const jpeg = await renderTemplateToJpeg(
      studioUrl,
      plan.width ?? 1080,
      plan.height ?? 1080
    );
    // 4. Host
    const imageUrl = await hostImage(jpeg, slugify(row.address));
    // 5. Post
    const result = await postToZernio({
      caption: plan.caption ?? '',
      imageUrl,
      publishNow,
    });

    if (!result.ok) {
      console.error(
        `[listing-webhook] Zernio ${result.status}: ${result.body}`
      );
      return NextResponse.json(
        { error: 'Zernio post failed', status: result.status, detail: result.body },
        { status: 502 }
      );
    }

    console.log(
      `[listing-webhook] ${publishNow ? 'published' : 'drafted'} ${plan.templateId} for ${row.address}`
    );
    return NextResponse.json({
      success: true,
      mode: publishNow ? 'published' : 'draft',
      template: plan.templateId,
      imageUrl,
      studioUrl,
    });
  } catch (err) {
    console.error('[listing-webhook] render/post error:', (err as Error).message);
    return NextResponse.json(
      { error: 'Render or post failed', detail: (err as Error).message },
      { status: 500 }
    );
  }
}

// Health check / Apps Script connectivity ping
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/listing-status-change',
    method: 'POST',
    autopublish: process.env.LISTING_AUTOPUBLISH?.trim() === 'true',
  });
}
