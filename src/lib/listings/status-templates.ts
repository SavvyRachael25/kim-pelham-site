/*
  Listing status → Brand Studio CASCADE.
  ───────────────────────────────────────
  A single status change in the Listings Master tracker fans out into a
  full set of brand assets (Mara's flywheel). Each status produces a
  cascade of CascadeItems:
    - channel:'social' items are drafted to a platform via Zernio
      (Instagram / Facebook / Google Business). Default is DRAFT — nothing
      auto-publishes until LISTING_AUTOPUBLISH=true.
    - channel:'asset' items (email, flyer) are rendered + hosted as links
      for Kim/Riley to use manually (paste email into GHL, print flyer).

  Template IDs + dimensions are taken from the live studio registry
  (public/studio/templates/*.jsx), not assumptions.

  COVERAGE (2026-05-22): Just Listed, Price Reduced, Open House, and the
  Sold email are wired. IG Story (no clean single-frame 9:16 template
  yet), Sold social graphic, Coming Soon / Pending / Contingent are
  intentionally skipped with reasons until those studio templates exist.
*/

// The Brand Studio is served from the main domain at /studio (public/studio).
// The templates.thepelhamgroupnw.com subdomain was never DNS-configured, so
// the headless renderer (which needs a publicly resolvable URL) points at the
// same-origin path instead. Override via STUDIO_BASE if the subdomain goes live.
export const STUDIO_BASE =
  process.env.STUDIO_BASE?.trim() || 'https://thepelhamgroupnw.com/studio';

export type Channel = 'social' | 'asset';
export type SocialPlatform = 'instagram' | 'facebook' | 'googlebusiness';

export interface CascadeItem {
  key: string; // unique within a cascade: 'ig-feed','fb','gbp','email','flyer','ad'
  label: string; // human label for the sheet write-back
  channel: Channel;
  platform?: SocialPlatform; // social only
  contentType?: 'post' | 'story'; // social only
  templateId: string;
  width: number;
  height: number;
  caption?: string; // social only
}

// A queued entry for the weekly Pelham Post (newsletter, ships Thursday
// mornings). Status changes no longer fire a standalone email — instead
// they accumulate here and get assembled into the next Pelham Post.
export interface NewsletterItem {
  section: string; // maps to the Pelham Post section, e.g. "Featured Listing"
  headline: string;
  blurb: string;
  listingUrl?: string;
}

export interface Cascade {
  items: CascadeItem[];
  newsletterItem?: NewsletterItem;
  skipped: { key: string; reason: string }[];
}

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

export function normalizeStatus(raw: string): string {
  const s = (raw || '').trim().toLowerCase();
  if (!s) return '';
  if (s.startsWith('sold')) return 'sold';
  if (s.startsWith('closing')) return 'sold';
  if (s.startsWith('coming')) return 'coming-soon';
  if (s.includes('price') && (s.includes('reduc') || s.includes('drop'))) return 'price-reduced';
  if (s.includes('open house') || s.includes('open-house')) return 'open-house';
  if (s.includes('pending') && s.includes('inspect')) return 'pending-inspection';
  if (s.startsWith('pending')) return 'pending';
  if (s.startsWith('contingent')) return 'contingent';
  if (s.includes('just listed') || s.includes('active')) return 'just-listed';
  return s;
}

const EHO =
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

// Studio render URL with slot overrides for a given template.
export function buildStudioUrl(templateId: string, row: ListingRow): string {
  const params = new URLSearchParams({
    template: templateId,
    ui: 'clean',
    listingCity: (row.city || '').toUpperCase().trim(),
    listingAddress: (row.address || '').trim(),
    listingPrice: priceText(row),
  });
  if (row.oldPrice) {
    params.set('listingOldPrice', row.oldPrice.startsWith('$') ? row.oldPrice : `$${row.oldPrice}`);
  }
  if (row.beds) params.set('listingBeds', row.beds);
  if (row.baths) params.set('listingBaths', row.baths);
  if (row.sqft) params.set('listingSqft', row.sqft);
  if (row.mls) params.set('listingMls', row.mls);
  if (row.hook) params.set('listingHook', row.hook);
  if (row.openHouse) params.set('openHouseRaw', row.openHouse);
  // index.html explicitly so it resolves whether STUDIO_BASE is the /studio
  // path on the main domain or a subdomain root.
  return `${STUDIO_BASE}/index.html?${params.toString()}`;
}

export function buildCascade(row: ListingRow): Cascade {
  const status = normalizeStatus(row.status);
  const city = (row.city || '').trim();
  const addr = (row.address || '').trim();
  const price = priceText(row);
  const specs = specLine(row);
  const tags = hashtags(row);
  const sig = `\n\nAlways, Kim\n\n${EHO}\n\n${tags}`;

  const items: CascadeItem[] = [];
  const skipped: { key: string; reason: string }[] = [];
  let newsletterItem: NewsletterItem | undefined;

  switch (status) {
    case 'just-listed': {
      const caption =
        `Just listed in ${city}. ${addr}${price ? `, offered at ${price}` : ''}.` +
        (specs ? `\n\n${specs}.` : '') +
        `\n\nI take two active clients at a time, so every showing gets my full attention. Want to walk it in person? Send me a message or text 425.250.9422.` +
        sig;
      items.push(
        { key: 'ig-feed', label: 'Instagram Feed', channel: 'social', platform: 'instagram', contentType: 'post', templateId: 'ig-feed-listing-portrait', width: 1080, height: 1350, caption },
        { key: 'fb', label: 'Facebook', channel: 'social', platform: 'facebook', contentType: 'post', templateId: 'fb-post-listing', width: 1200, height: 628, caption },
        { key: 'gbp', label: 'Google Business', channel: 'social', platform: 'googlebusiness', contentType: 'post', templateId: 'meta-ad-listing-single-image', width: 1080, height: 1080, caption },
        { key: 'flyer', label: 'Flyer (feature sheet)', channel: 'asset', templateId: 'flyer-listing-feature-sheet', width: 816, height: 1056 }
      );
      newsletterItem = {
        section: 'Featured Listing',
        headline: `Just listed in ${city}`,
        blurb:
          `${addr}${price ? `, offered at ${price}` : ''}.` +
          (specs ? ` ${specs}.` : '') +
          ` I work with a maximum of two active clients at a time, so reach out and I will walk you through it personally.`,
        listingUrl: row.listingUrl,
      };
      skipped.push({ key: 'ig-story', reason: 'No clean single-frame 9:16 story template yet (only 3-frame strip).' });
      break;
    }
    case 'price-reduced': {
      const caption =
        `Price improved in ${city}. ${addr}${price ? `, now ${price}` : ''}.` +
        `\n\nThe price was adjusted to reflect where the market is today, which makes this a good moment to take a real look. Message me or text 425.250.9422 for a private showing.` +
        sig;
      items.push(
        { key: 'ig-feed', label: 'Instagram Feed', channel: 'social', platform: 'instagram', contentType: 'post', templateId: 'meta-ad-price-drop', width: 1080, height: 1080, caption },
        { key: 'fb', label: 'Facebook', channel: 'social', platform: 'facebook', contentType: 'post', templateId: 'meta-ad-price-drop', width: 1080, height: 1080, caption },
        { key: 'gbp', label: 'Google Business', channel: 'social', platform: 'googlebusiness', contentType: 'post', templateId: 'meta-ad-price-drop', width: 1080, height: 1080, caption }
      );
      newsletterItem = {
        section: 'Featured Listing',
        headline: `Price improved in ${city}`,
        blurb:
          `${addr} is now ${price || 'newly priced'}. Adjusted to meet the market, which makes this a good week to take a look. Reply or text me for a private showing.`,
        listingUrl: row.listingUrl,
      };
      break;
    }
    case 'open-house': {
      const caption =
        `Open house in ${city}. ${addr}.` +
        (row.openHouse ? `\n\n${row.openHouse}.` : '') +
        `\n\nStop by, no appointment needed. Questions before you come? Text 425.250.9422.` +
        sig;
      items.push(
        { key: 'ig-feed', label: 'Instagram Feed', channel: 'social', platform: 'instagram', contentType: 'post', templateId: 'meta-ad-open-house-drive', width: 1080, height: 1080, caption },
        { key: 'fb', label: 'Facebook', channel: 'social', platform: 'facebook', contentType: 'post', templateId: 'meta-ad-open-house-drive', width: 1080, height: 1080, caption },
        { key: 'gbp', label: 'Google Business', channel: 'social', platform: 'googlebusiness', contentType: 'post', templateId: 'meta-ad-open-house-drive', width: 1080, height: 1080, caption },
        { key: 'flyer', label: 'Flyer (open house)', channel: 'asset', templateId: 'flyer-open-house', width: 816, height: 1056 }
      );
      newsletterItem = {
        section: 'Open House',
        headline: `Open house in ${city}`,
        blurb:
          `${addr}${row.openHouse ? `, ${row.openHouse}` : ''}. Stop by, no appointment needed. I will have coffee on.`,
        listingUrl: row.listingUrl,
      };
      skipped.push({ key: 'ig-story', reason: 'Open-house countdown story is a 3-frame strip; needs a single 9:16 frame to post.' });
      break;
    }
    case 'sold': {
      newsletterItem = {
        section: 'Recently Sold',
        headline: `Just sold in ${city}`,
        blurb:
          `${addr} is closed. Another Snohomish County chapter, start to finish. If you are wondering what your home could do in this market, that is exactly the conversation I like to have.`,
        listingUrl: row.listingUrl,
      };
      skipped.push({ key: 'social', reason: 'No square "Just Sold" social graphic in the studio yet — build meta-ad-just-sold to enable IG/FB/GBP.' });
      break;
    }
    case 'coming-soon':
      // ⛔ COMPLIANCE HARD BLOCK — never generate "Coming Soon" content.
      // Publicly marketing a listing before it is active in the MLS violates
      // NWMLS Clear Cooperation Policy and is a Fair Housing / licensing risk
      // (it can get a broker's license pulled). No social, no newsletter, no
      // "first look before it's live" teaser — produce nothing and tell Kim why.
      skipped.push({
        key: 'all',
        reason:
          'BLOCKED for compliance: "Coming Soon" pre-marketing is not permitted (NWMLS Clear Cooperation Policy / Fair Housing). No assets were generated. List the property as Active / Just Listed in the MLS first, then change the status here.',
      });
      break;
    case 'pending':
    case 'pending-inspection':
      skipped.push({ key: 'all', reason: 'No "Pending" templates in the studio yet (and pending listings usually skip the newsletter).' });
      break;
    case 'contingent':
      skipped.push({ key: 'all', reason: 'No "Contingent" templates in the studio yet.' });
      break;
    default:
      skipped.push({ key: 'all', reason: `Unrecognized status: "${row.status}"` });
  }

  return { items, newsletterItem, skipped };
}
