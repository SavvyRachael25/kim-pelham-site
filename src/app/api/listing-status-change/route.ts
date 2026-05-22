import { NextRequest, NextResponse } from 'next/server';
import {
  buildCascade,
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
export const dynamic = 'force-dynamic'; // GET diagnostic must reflect live runtime, never cached

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

  // 2. Build the cascade for this status
  const cascade = buildCascade(row);
  if (cascade.items.length === 0) {
    console.log(
      `[listing-webhook] no cascade for ${row.address} (${row.status}): ${cascade.skipped.map((s) => s.reason).join('; ')}`
    );
    return NextResponse.json(
      { skipped: cascade.skipped, results: [] },
      { status: 200 }
    );
  }

  const publishNow = process.env.LISTING_AUTOPUBLISH?.trim() === 'true';
  const slug = slugify(row.address);

  // 3-5. Render → host → (social) draft via Zernio, for each cascade item.
  // Each item is independent; one failure doesn't abort the rest.
  const results: Array<{
    key: string;
    label: string;
    channel: string;
    platform?: string;
    imageUrl?: string;
    posted?: boolean;
    mode?: string;
    error?: string;
  }> = [];

  for (const item of cascade.items) {
    try {
      const studioUrl = buildStudioUrl(item.templateId, row);
      const jpeg = await renderTemplateToJpeg(studioUrl, item.width, item.height);
      const imageUrl = await hostImage(jpeg, `${slug}-${item.key}`);

      if (item.channel === 'social' && item.platform) {
        const r = await postToZernio({
          caption: item.caption ?? '',
          imageUrl,
          platform: item.platform,
          contentType: item.contentType,
          publishNow,
        });
        results.push({
          key: item.key,
          label: item.label,
          channel: item.channel,
          platform: item.platform,
          imageUrl,
          posted: r.ok,
          mode: publishNow ? 'published' : 'draft',
          error: r.ok ? undefined : `Zernio ${r.status}: ${r.body}`,
        });
      } else {
        // Collateral asset: rendered + hosted, not posted.
        results.push({
          key: item.key,
          label: item.label,
          channel: item.channel,
          imageUrl,
        });
      }
    } catch (err) {
      results.push({
        key: item.key,
        label: item.label,
        channel: item.channel,
        platform: item.platform,
        error: (err as Error).message,
      });
    }
  }

  const okCount = results.filter((r) => !r.error).length;
  console.log(
    `[listing-webhook] ${row.address} (${row.status}): ${okCount}/${results.length} cascade items ok, mode=${publishNow ? 'published' : 'draft'}`
  );

  // Pick a primary image for the Pelham Post queue entry (prefer the
  // square GBP/feed render, fall back to whatever rendered first).
  const primaryImage =
    results.find((r) => r.key === 'gbp' && r.imageUrl)?.imageUrl ??
    results.find((r) => r.key === 'ig-feed' && r.imageUrl)?.imageUrl ??
    results.find((r) => r.imageUrl)?.imageUrl;

  // The Apps Script reads `newsletter` and appends it to the
  // "Pelham Post Queue" tab. Status changes no longer send a standalone
  // email; they accumulate here for Thursday's Pelham Post.
  const newsletter = cascade.newsletterItem
    ? { ...cascade.newsletterItem, imageUrl: primaryImage ?? '' }
    : null;

  return NextResponse.json({
    success: true,
    mode: publishNow ? 'published' : 'draft',
    address: row.address,
    status: row.status,
    results,
    newsletter,
    skipped: cascade.skipped,
  });
}

// Health check / Apps Script connectivity ping + runtime diagnostic.
// The diag block reports the actual Node version + AWS Lambda env strings
// Vercel exposes (the missing facts behind the libnss3 render failures) and
// whether @sparticuz/chromium's lib pack actually extracts. Remove once the
// render path is confirmed green.
export async function GET() {
  const diag: Record<string, unknown> = {
    node: process.version,
    awsExecEnv: process.env.AWS_EXECUTION_ENV ?? null,
    awsJsRuntime: process.env.AWS_LAMBDA_JS_RUNTIME ?? null,
    ldLibraryPath: process.env.LD_LIBRARY_PATH ?? null,
  };
  try {
    const chromium = (await import('@sparticuz/chromium')).default;
    diag.chromiumPath = await chromium.executablePath();
  } catch (e) {
    diag.execErr = (e as Error).message;
  }
  try {
    const fs = await import('node:fs');
    diag.al2023Exists = fs.existsSync('/tmp/al2023');
    diag.libnss3Exists = fs.existsSync('/tmp/al2023/lib/libnss3.so');
    diag.al2023LibDir = fs.existsSync('/tmp/al2023/lib')
      ? fs.readdirSync('/tmp/al2023/lib').slice(0, 12)
      : null;
  } catch (e) {
    diag.fsErr = (e as Error).message;
  }
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/listing-status-change',
    method: 'POST',
    autopublish: process.env.LISTING_AUTOPUBLISH?.trim() === 'true',
    diag,
  });
}
