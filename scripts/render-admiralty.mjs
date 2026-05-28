// Renders the 8 Admiralty Way listing cards locally via puppeteer-core + system Chrome.
// Output: public/social/admiralty/*.jpg @ 1080x1350

import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SOCIAL_DIR = path.join(ROOT, 'public', 'social', 'admiralty');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const cards = [
  '01-just-listed',
  '02-open-house',
  '03-fireplace',
  '04-kitchen',
  '05-primary',
  '06-patio',
  '07-checklist',
  '08-stat-tile',
];

const W = 1080, H = 1350;

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--font-render-hinting=none'],
    defaultViewport: { width: W, height: H, deviceScaleFactor: 2 },
  });
  try {
    for (const name of cards) {
      const url = 'file://' + path.join(SOCIAL_DIR, `${name}.html`);
      const out = path.join(SOCIAL_DIR, `${name}.jpg`);
      const page = await browser.newPage();
      await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 });
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      // Ensure fonts are loaded
      await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
      // Small settle pause
      await new Promise(r => setTimeout(r, 250));
      await page.screenshot({
        path: out,
        type: 'jpeg',
        quality: 90,
        clip: { x: 0, y: 0, width: W, height: H },
      });
      await page.close();
      console.log('rendered', name);
    }
  } finally {
    await browser.close();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
