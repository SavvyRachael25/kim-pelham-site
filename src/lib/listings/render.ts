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
  //
  // IMPORTANT: the package only extracts the AL2023 pack (the one its
  // LD_LIBRARY_PATH points at, /tmp/al2023/lib) when AWS_EXECUTION_ENV or
  // AWS_LAMBDA_JS_RUNTIME contains "20.x"/"22.x". If Vercel sets
  // AWS_EXECUTION_ENV to e.g. "AWS_Lambda_nodejs24.x", a guard that only
  // acts when those vars are *unset* would never fire and we'd be back to
  // the missing-lib error. So force AWS_LAMBDA_JS_RUNTIME unless it already
  // indicates 20/22.
  const jsRuntime = process.env.AWS_LAMBDA_JS_RUNTIME ?? '';
  if (!jsRuntime.includes('20.x') && !jsRuntime.includes('22.x')) {
    process.env.AWS_LAMBDA_JS_RUNTIME = 'nodejs20.x';
  }
  // Triggers the AL2023 lib-pack extraction to /tmp/al2023/lib.
  const executablePath = await chromium.executablePath();
  // CONFIRMED via the GET diagnostic: the libs (libnss3.so et al.) DO extract
  // to /tmp/al2023/lib, but the package's setupLambdaEnvironment runs at import
  // — before we force the runtime string — so LD_LIBRARY_PATH never gains that
  // dir and Chromium dies with "libnss3.so: cannot open shared object file".
  // The libs are now on disk, so wire up the path ourselves and hand it to the
  // spawned browser explicitly.
  const libDir = '/tmp/al2023/lib';
  const ldPaths = (process.env.LD_LIBRARY_PATH ?? '').split(':').filter(Boolean);
  if (!ldPaths.includes(libDir)) {
    process.env.LD_LIBRARY_PATH = [libDir, ...ldPaths].join(':');
  }
  // The Studio auto-fits with hardcoded 80px padding and zoom = min(sx, sy, 1).
  // At a viewport equal to the template size that scales it to ~92%. Give the
  // viewport extra room so the fit caps at zoom=1 and the template renders at
  // native size at the top-left, where we clip.
  const viewport = { width: width + 200, height: height + 200, deviceScaleFactor: 1 };
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath,
    headless: true,
    defaultViewport: viewport,
    env: { ...process.env },
  });
  try {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });
    // The Studio compiles ~13 JSX files with Babel-standalone in the browser,
    // then React renders the template. networkidle0 only means the files
    // downloaded — compile + render happen after. Wait for the template to
    // actually paint into .stage-frame instead of a blind timeout (faster AND
    // reliable). Falls through to the screenshot if the signal never comes.
    try {
      await page.waitForFunction(
        () => {
          const f = document.querySelector('.stage-frame');
          if (!f) return false;
          const r = (f as HTMLElement).getBoundingClientRect();
          return r.width > 100 && r.height > 100 && f.childElementCount > 0;
        },
        { timeout: 30000, polling: 250 }
      );
    } catch {
      // proceed to screenshot anyway — better a degraded shot than a hard fail
    }
    // The Studio's ui=clean CSS grid collapses the stage column to 0 width,
    // which clips the rendered template to nothing — every screenshot came out
    // a blank cream rectangle even though the DOM had the full graphic.
    // (Confirmed by local headless debugging: .stage-wrap / .right measured
    // width 0.) Relocate the .stage-frame out of that broken layout into a clean
    // fixed box at native size, force zoom back to 1, and hide everything else,
    // so the clip captures the complete graphic.
    await page.evaluate(
      ({ w, h }) => {
        const f = document.querySelector('.stage-frame') as HTMLElement | null;
        if (!f) return;
        const zoomDiv = f.parentElement as HTMLElement | null;
        if (zoomDiv) zoomDiv.style.zoom = '1';
        document.body.appendChild(f);
        Object.assign(f.style, {
          position: 'fixed',
          top: '0',
          left: '0',
          zoom: '1',
          margin: '0',
          width: `${w}px`,
          height: `${h}px`,
        });
        document.documentElement.style.margin = '0';
        document.body.style.margin = '0';
        Array.from(document.body.children).forEach((c) => {
          if (c !== f) (c as HTMLElement).style.display = 'none';
        });
      },
      { w: width, h: height }
    );
    // Force-load the brand webfonts (variable TTFs: Cormorant Garamond / Inter /
    // Caveat) and await them before snapping. @sparticuz Chromium otherwise
    // rasterizes the screenshot before the text faces are ready, so the photo
    // and shapes render but every word drops out. fonts.ready alone isn't
    // enough — actively trigger each face, then wait.
    await page
      .evaluate(async () => {
        const d = document as unknown as {
          fonts: { load: (s: string) => Promise<unknown>; ready: Promise<unknown> };
        };
        const fams = ['"Cormorant Garamond"', '"Inter"', '"Caveat"'];
        const weights = ['400', '500', '600', '700'];
        const jobs: Promise<unknown>[] = [];
        for (const f of fams) for (const w of weights) jobs.push(d.fonts.load(`${w} 48px ${f}`).catch(() => {}));
        jobs.push(d.fonts.load('italic 48px "Cormorant Garamond"').catch(() => {}));
        await Promise.all(jobs);
        await d.fonts.ready;
      })
      .catch(() => {});
    await new Promise((r) => setTimeout(r, 900));
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
