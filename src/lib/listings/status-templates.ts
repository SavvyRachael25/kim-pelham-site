/*
  Listing status → Brand Studio template mapping + caption builder.
  ─────────────────────────────────────────────────────────────────
  Drives the event-driven social pipeline: Kim changes a row's Status
  in the Listings Master tracker → Apps Script webhook → /api/listing-
  status-change → this map decides which Studio template to render and
  what caption to post.

  Studio lives at https://templates.thepelhamgroupnw.com and is driven
  by URL query params (see studio/AGENT-PROTOCOL.md §1-2). We screenshot
  the template at its native dimensions with ?ui=clean.

  TEMPLATE COVERAGE (as of 2026-05-22):
    Just Listed     -> meta-ad-listing-single-image  (EXISTS)
    Price Reduced   -> meta-ad-price-drop            (EXISTS)
    Open House      -> meta-ad-open-house-drive       (EXISTS)
    Sold            -> meta-ad-just-sold              (TODO: build in studio)
    Coming Soon     -> meta-ad-coming-soon            (TODO: build in studio)
    Pending         -> meta-ad-pending                (TODO: build in studio)
    Pending Inspect -> meta-ad-pending                (TODO: build in studio)
    Contingent      -> meta-ad-contingent             (TODO: build in studio)
  Statuses whose template doesn't exist yet return ready:false, so the
  webhook logs + skips rather than posting a broken graphic.
*/

export const STUDIO_BASE = 'https://templates.thepelhamgroupnw.com';

// Native render dimensions per template (matches studio registry).
const SQUARE = { width: 1080, height: 1080 };

export interface ListingRow {
  status: string;
  address: string;
  city: string;
  mls?: string;
  listPrice: string;
  oldPrice?: string;
  beds?: string;
  baths?: string;
  sqft?: string;
  listingUrl?: string;
  openHouse?: string;
  hook?: string;
}

export interface TemplatePlan {
  ready: boolean;
  templateId?: string;
  width?: number;
  height?: number;
  caption?: string;
  reason?: string; // why not ready, when ready:false
}

// Normalize the freeform sheet status ("SOLD 5/21", "coming 6/29/26",
// "Pending Inspection") down to a canonical key.
export function normalizeStatus(raw: string): string {
  const s = (raw || '').trim().toLowerCase();
  if (!s) return '';
  if (s.startsWith('sold')) return 'sold';
  if (s.startsWith('closing')) return 'sold'; // "closing 5/29" treated as sold-pending celebration
  if (s.startsWith('coming')) return 'coming-soon';
  if (s.includes('price') && (s.includes('reduc') || s.includes('drop'))) return 'price-reduced';
  if (s.includes('pending') && s.includes('inspect')) return 'pending-inspection';
  if (s.startsWith('pending')) return 'pending';
  if (s.startsWith('contingent')) return 'contingent';
  if (s.includes('just listed') || s === 'active' || s.includes('active')) return 'just-listed';
  return s;
}

const EHO_LINE =
  'Equal Housing Opportunity. Brokered by Katrina Eileen Real Estate. Kim Pelham, WA Broker #119262.';

function priceText(row: ListingRow): string {
  const p = (row.listPrice || '').trim();
  if (!p) return '';
  return p.startsWith('$') ? p : `$${p}`;
}

function specLine(row: ListingRow): string {
  const parts: string[] = [];
  if (row.beds) parts.push(`${row.beds} bed`);
  if (row.baths) parts.push(`${row.baths} bath`);
  if (row.sqft) parts.push(`${row.sqft} sqft`);
  return parts.join(', ');
}

function hashtags(row: ListingRow): string {
  const cityTag = (row.city || '').replace(/[^a-zA-Z]/g, '');
  const base = ['#SnohomishCountyRealEstate', '#PNWRealEstate', '#PelhamGroupNW'];
  if (cityTag) base.unshift(`#${cityTag}WA`);
  return base.join(' ');
}

// Build the studio render URL with slot overrides for a given template.
export function buildStudioUrl(templateId: string, row: ListingRow): string {
  const params = new URLSearchParams({
    template: templateId,
    ui: 'clean',
    listingCity: (row.city || '').toUpperCase().trim(),
    listingAddress: (row.address || '').trim(),
    listingPrice: priceText(row),
  });
  if (row.oldPrice) params.set('listingOldPrice', row.oldPrice.startsWith('$') ? row.oldPrice : `$${row.oldPrice}`);
  if (row.beds) params.set('listingBeds', row.beds);
  if (row.baths) params.set('listingBaths', row.baths);
  if (row.sqft) params.set('listingSqft', row.sqft);
  if (row.mls) params.set('listingMls', row.mls);
  if (row.hook) params.set('listingHook', row.hook);
  return `${STUDIO_BASE}/?${params.toString()}`;
}

export function planForStatus(row: ListingRow): TemplatePlan {
  const status = normalizeStatus(row.status);
  const city = (row.city || '').trim();
  const addr = (row.address || '').trim();
  const price = priceText(row);
  const specs = specLine(row);
  const tags = hashtags(row);
  const sig = `\n\nAlways, Kim\n\n${EHO_LINE}\n\n${tags}`;

  switch (status) {
    case 'just-listed':
      return {
        ready: true,
        templateId: 'meta-ad-listing-single-image',
        ...SQUARE,
        caption:
          `Just listed in ${city}. ${addr}${price ? `, offered at ${price}` : ''}.` +
          (specs ? `\n\n${specs}.` : '') +
          `\n\nI take two active clients at a time, so every showing gets my full attention. Want to walk it in person? Send me a message or text 425.250.9422.` +
          sig,
      };
    case 'price-reduced':
      return {
        ready: true,
        templateId: 'meta-ad-price-drop',
        ...SQUARE,
        caption:
          `Price improved in ${city}. ${addr}${price ? `, now ${price}` : ''}.` +
          `\n\nThe price was adjusted to reflect where the market is today, which makes this a good moment to take a real look.` +
          `\n\nMessage me or text 425.250.9422 for a private showing.` +
          sig,
      };
    case 'open-house':
      return {
        ready: true,
        templateId: 'meta-ad-open-house-drive',
        ...SQUARE,
        caption:
          `Open house in ${city}. ${addr}.` +
          (row.openHouse ? `\n\n${row.openHouse}.` : '') +
          `\n\nStop by, no appointment needed. Questions before you come? Text 425.250.9422.` +
          sig,
      };
    case 'sold':
      return {
        ready: false,
        reason: 'No "Sold" social template in the studio yet (meta-ad-just-sold). Build it, then enable.',
      };
    case 'coming-soon':
      return {
        ready: false,
        reason: 'No "Coming Soon" social template in the studio yet (meta-ad-coming-soon).',
      };
    case 'pending':
    case 'pending-inspection':
      return {
        ready: false,
        reason: 'No "Pending" social template in the studio yet (meta-ad-pending).',
      };
    case 'contingent':
      return {
        ready: false,
        reason: 'No "Contingent" social template in the studio yet (meta-ad-contingent).',
      };
    default:
      return { ready: false, reason: `Unrecognized status: "${row.status}"` };
  }
}
