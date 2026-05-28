// Renders the FULL studio asset suite for a listing by driving the live
// /studio URL with per-listing tweaks + photo URLs and screenshotting each
// template at its native dimensions. Output: public/studio/output/<slug>/*.{jpg,pdf}
//
// Usage: node scripts/render-listing-kit.mjs
//
// The studio app.jsx exposes every TWEAK_DEFAULTS key as a URL param.
// We rely on the photo slot extension (photoExterior, photoInterior, etc.).

import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { mkdir } from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SLUG = '2528831-admiralty';
const OUT_DIR = path.join(ROOT, 'public', 'studio', 'output', SLUG);

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const STUDIO_BASE = process.env.STUDIO_BASE || 'https://thepelhamgroupnw.com/studio';
const PHOTO_BASE = 'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos';

// ─── Listing data ────────────────────────────────────────────
// Admiralty spec sheet — JSON-encoded, parsed by makeListing()
const adminraltySpecSheet = JSON.stringify([
  ["Year built", "1989 (remodeled 2024)"],
  ["Type",       "Condo · End-unit · Ground floor"],
  ["HVAC",       "Wall furnace + wall A/C"],
  ["Roof",       "HOA maintained"],
  ["Schools",    "Mukilteo School District"],
  ["Parking",    "1-car detached garage + assigned + guest"],
  ["Taxes",      "$3,277 / yr"],
  ["HOA",        "$533 / mo"],
]);

const listing = {
  // text slots
  listingCity: 'EVERETT',
  listingCityShort: 'EVERETT',
  listingAddress: '11706 Admiralty Way Unit B',
  listingPrice: '$375,000',
  listingPriceShort: '$375K',
  listingOldPrice: '',
  listingBeds: '2',
  listingBaths: '1.75',
  listingSqft: '1,140',
  listingLot: 'End-unit condo',
  listingMls: '2528831',
  listingHook: 'Recently remodeled end-unit, ground floor, all one level.',
  listingFeature: 'Wood-burning fireplace, smart thermostat, ensuite primary, 1-car garage',
  listingDescription: 'Refreshed 1989 condo on the ground floor at the end of the building. New LVP flooring, designer paint, new appliances, smart thermostat, smart light switches, modern outlets and recessed LED throughout. Wood-burning fireplace with mosaic tile surround in the living room. Primary suite has an ensuite bath and walk-in closet. Slider to a private patio with lawn beyond. Mukilteo School District. Five minutes to Boeing, future light rail nearby, easy on to I-5, I-405, and Hwy 2.',
  listingSpecSheetJson: adminraltySpecSheet,
  listingValueProps: 'End-unit condo · Ground floor · Recently remodeled',
  openHouseTagline: 'come walk through, no pitch',
  openHouseDay: 'Saturday',
  openHouseDate: 'May 30',
  openHouseTime: '1 - 3 PM',
  // photo slots
  photoExterior: `${PHOTO_BASE}/exterior-back.jpg`,
  photoHero: `${PHOTO_BASE}/hero-living-fireplace.jpg`,
  photoInterior: `${PHOTO_BASE}/kitchen.jpg`,
  photoView: `${PHOTO_BASE}/slider-to-patio.jpg`,
  photoLiving: `${PHOTO_BASE}/living-french-doors.jpg`,
  photoPorch: `${PHOTO_BASE}/patio-wicker.jpg`,
};

// ─── Templates to render (listing-relevant subset) ───────────
const KIT = [
  // PRINT
  { id: 'flyer-listing-feature-sheet', w: 816,  h: 1056, group: 'print' },
  { id: 'flyer-open-house',            w: 816,  h: 1056, group: 'print' },
  { id: 'mailer-postcard-just-listed', w: 1056, h: 576,  group: 'print' },
  // IG feed
  { id: 'ig-feed-listing-portrait',    w: 1080, h: 1350, group: 'ig-feed' },
  { id: 'ig-feed-stat-card',           w: 1080, h: 1350, group: 'ig-feed' },
  // IG story
  { id: 'ig-story-3frame-listing',     w: 1080, h: 1920, group: 'ig-story' },
  { id: 'ig-story-open-house-countdown', w: 1080, h: 1920, group: 'ig-story' },
  // FB
  { id: 'fb-post-listing',             w: 1200, h: 628,  group: 'fb' },
  // LinkedIn
  { id: 'linkedin-post-hero',          w: 1200, h: 628,  group: 'linkedin' },
  // Meta ads
  { id: 'meta-ad-listing-single-image', w: 1080, h: 1080, group: 'meta-ad' },
  { id: 'meta-ad-listing-portrait',     w: 1080, h: 1920, group: 'meta-ad' },
  { id: 'meta-ad-open-house-drive',     w: 1080, h: 1080, group: 'meta-ad' },
  // Email
  { id: 'email-listing-announcement',  w: 600,  h: 1800, group: 'email' },
  { id: 'email-open-house-invite',     w: 600,  h: 1400, group: 'email' },
  // Blog / property page
  { id: 'blog-listing-feature',        w: 1200, h: 1800, group: 'blog' },
  { id: 'property-page-active',        w: 1440, h: 2400, group: 'blog' },
  // Reels script
  { id: 'script-listing-reel-30s',     w: 816,  h: 1056, group: 'script' },
];

function buildUrl(templateId) {
  const params = new URLSearchParams();
  params.set('template', templateId);
  params.set('ui', 'clean');
  for (const [k, v] of Object.entries(listing)) {
    if (v !== '' && v != null) params.set(k, String(v));
  }
  return `${STUDIO_BASE}?${params.toString()}`;
}

async function renderOne(browser, { id, w, h }) {
  const url = buildUrl(id);
  const outJpg = path.join(OUT_DIR, `${id}.jpg`);
  const outPdf = path.join(OUT_DIR, `${id}.pdf`);
  const page = await browser.newPage();
  // Larger viewport than the template so we can capture at native dims
  await page.setViewport({ width: Math.max(w, 1440), height: Math.max(h, 900), deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });
  // Wait for templates to register + render
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    // Wait until React mounts the template
    const start = Date.now();
    while (Date.now() - start < 8000) {
      const frame = document.querySelector('.stage-frame');
      if (frame && frame.offsetWidth > 100) return;
      await new Promise(r => setTimeout(r, 200));
    }
  });
  // Move the stage-frame to a fixed top-left position so clip is reliable
  await page.evaluate(({ w, h }) => {
    const frame = document.querySelector('.stage-frame');
    if (!frame) return;
    Object.assign(frame.style, {
      position: 'fixed', top: '0', left: '0',
      transform: 'none', zoom: '1',
      width: w + 'px', height: h + 'px',
      boxShadow: 'none',
    });
    document.body.style.background = '#fff';
    document.body.style.margin = '0';
  }, { w, h });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({
    path: outJpg,
    type: 'jpeg',
    quality: 92,
    clip: { x: 0, y: 0, width: w, height: h },
  });
  // For 8.5x11 print templates, also export a PDF (Letter)
  if (w === 816 && h === 1056) {
    await page.pdf({
      path: outPdf,
      width: '8.5in', height: '11in',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
  }
  // Postcard PDF (11x6)
  if (w === 1056 && h === 576) {
    await page.pdf({
      path: outPdf,
      width: '11in', height: '6in',
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
  }
  await page.close();
  console.log(`✓ ${id} (${w}×${h})`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--font-render-hinting=none'],
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  });
  try {
    // Sequential to avoid hammering Vercel + keep memory steady
    for (const tpl of KIT) {
      try {
        await renderOne(browser, tpl);
      } catch (err) {
        console.error(`✗ ${tpl.id}: ${err.message}`);
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
