/*
  Render a Brand Studio template URL to a JPEG and post it via Zernio.
  ────────────────────────────────────────────────────────────────────
  - renderTemplateToJpeg(): headless Chromium (serverless-friendly via
    @sparticuz/chromium) screenshots the studio at native dimensions.
    Output is JPEG (quality 80) to stay under Zernio's 1 MB/image cap.
  - hostImage(): uploads the JPEG to Vercel Blob → public URL (Zernio
    requires a publicly fetchable media URL).
  - postToZernio(): POSTs to Zernio's REST API for the given platforms.

  The render mechanism is isolated here so it can be swapped for a
  screenshot API later without touching the webhook route.
*/

import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { put } from '@vercel/blob';

const ZERNIO_API = 'https://zernio.com/api/v1/posts';

// Kim Pelham profile account IDs per platform (env override wins).
const ACCOUNT_IDS: Record<string, string> = {
  facebook: process.env.ZERNIO_FB_ACCOUNT_ID ?? '6a0f3ef2520992756d952519',
  instagram: process.env.ZERNIO_IG_ACCOUNT_ID ?? '6a0f9581520992756d97c91e',
  googlebusiness: process.env.ZERNIO_GBP_ACCOUNT_ID ?? '6a0f988a520992756d97d85f',
};

export async function renderTemplateToJpeg(
  url: string,
  width: number,
  height: number
): Promise<Buffer> {
  // @sparticuz/chromium only extracts its bundled shared libraries
  // (libnss3.so, etc. → /tmp/al2023/lib, which it already adds to
  // LD_LIBRARY_PATH at import) when it detects an AWS Lambda Node 20/22
  // runtime via the AWS_EXECUTION_ENV / AWS_LAMBDA_JS_RUNTIME env strings.
  // Vercel runs functions on Lambda (AL2023) but doesn't reliably expose
  // those strings, so the detection returns false, the lib pack never
  // extracts, and Chromium dies with "libnss3.so: cannot open shared
  // object file". Forcing the runtime string makes executablePath() inflate
  // the AL2023 pack — the exact code path a real Lambda would take.
  if (!process.env.AWS_EXECUTION_ENV && !process.env.AWS_LAMBDA_JS_RUNTIME) {
    process.env.AWS_LAMBDA_JS_RUNTIME = 'nodejs20.x';
  }
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
    defaultViewport: { width, height, deviceScaleFactor: 1 },
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
    // Studio is React + Babel compiled in-browser — give it time to hydrate.
    await new Promise((r) => setTimeout(r, 3500));
    const buf = (await page.screenshot({
      type: 'jpeg',
      quality: 80,
      clip: { x: 0, y: 0, width, height },
    })) as Buffer;
    return buf;
  } finally {
    await browser.close();
  }
}

export async function hostImage(buf: Buffer, slug: string): Promise<string> {
  const key = `listings/${slug}-${Date.now()}.jpg`;
  const blob = await put(key, buf, {
    access: 'public',
    contentType: 'image/jpeg',
  });
  return blob.url;
}

export interface ZernioPostResult {
  ok: boolean;
  status: number;
  body: string;
}

export async function postToZernio(opts: {
  caption: string;
  imageUrl: string;
  platform: 'instagram' | 'facebook' | 'googlebusiness';
  contentType?: 'post' | 'story';
  publishNow: boolean;
}): Promise<ZernioPostResult> {
  const apiKey = process.env.ZERNIO_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 0, body: 'ZERNIO_API_KEY not set' };
  }
  const accountId = ACCOUNT_IDS[opts.platform];
  if (!accountId) {
    return { ok: false, status: 0, body: `No account ID for platform ${opts.platform}` };
  }
  const platformEntry: Record<string, unknown> = { platform: opts.platform, accountId };
  // Instagram supports stories vs feed posts via platformSpecificData.
  if (opts.platform === 'instagram' && opts.contentType === 'story') {
    platformEntry.platformSpecificData = { mediaType: 'stories' };
  }
  const res = await fetch(ZERNIO_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: opts.caption,
      mediaItems: [{ type: 'image', url: opts.imageUrl }],
      platforms: [platformEntry],
      publishNow: opts.publishNow,
      isDraft: !opts.publishNow,
    }),
  });
  const body = await res.text().catch(() => '');
  return { ok: res.ok, status: res.status, body: body.slice(0, 500) };
}
