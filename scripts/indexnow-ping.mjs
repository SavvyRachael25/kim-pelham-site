#!/usr/bin/env node
/* ============================================================
   indexnow-ping.mjs — submit site URLs to IndexNow
   ------------------------------------------------------------
   IndexNow feeds Bing's index (and Yandex/Seznam/Naver), and
   Bing is what ChatGPT's live web retrieval leans on. No account
   needed: the key file hosted in public/ proves ownership.

   Usage:
     node scripts/indexnow-ping.mjs                 # submit every sitemap URL
     node scripts/indexnow-ping.mjs /blog/new-post  # submit specific path(s)

   Run this after any deploy that adds or meaningfully updates
   pages (new blog, new listing, price change). Part of the
   AEO/LLM-visibility work, 2026-08-14.
   ============================================================ */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = 'thepelhamgroupnw.com';
const KEY = '33a592c43d040c113292636d4edb872a';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

let urls;
const args = process.argv.slice(2);
if (args.length) {
  urls = args.map((p) => (p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : '/' + p}`));
} else {
  const sitemap = readFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
  urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
});

console.log(`Submitted ${urls.length} URLs -> HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
