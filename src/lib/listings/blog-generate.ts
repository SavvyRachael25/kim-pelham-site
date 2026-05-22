/*
  AI blog generation for a listing status change.
  ────────────────────────────────────────────────
  "Write the blog post first, every time." When a listing's status changes,
  this drafts a full, on-brand post in Kim Pelham's voice from the listing
  facts, using Anthropic's Messages API. The post is structured to fill the
  Studio `blog.jsx` design (eyebrow / title / dek / sections / stats / FAQ /
  CTA), which the live /blog/[slug] route renders.

  Two layers of compliance (Rachael's mandate — a single Fair Housing / MLS
  slip can pull Kim's license):
    1. PROMPT (belt): the system prompt forbids Coming Soon / pre-market
       language, Fair Housing preference/limitation/steering, false claims,
       guarantees, and brand-voice violations (no em dashes, no urgency, no
       superlatives). It tells the model to describe the HOME, never the buyer.
    2. SCANNER (suspenders): generated text is sanitized for brand dashes and
       run through the fail-closed compliance scanner. The caller refuses to
       publish anything that trips a `block` rule.

  Env:
    ANTHROPIC_API_KEY  — required (no key → generation is skipped, caller holds)
    ANTHROPIC_MODEL    — model id (default below; override as models update)
*/

import type { ListingRow } from './status-templates';
import { normalizeStatus } from './status-templates';
import {
  sanitizeBrand,
  scanFields,
  type ComplianceResult,
} from './compliance';

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages';
// Override via env as model ids roll. "-latest" alias is the most durable default.
const DEFAULT_MODEL = 'claude-3-5-sonnet-latest';

export type BlogVariant =
  | 'listing-feature' // Just Listed / Active — the story of the home
  | 'price-improved' // Price Reduced — honest market framing
  | 'open-house' // Open House — come-walk-it invitation
  | 'sold-story'; // Sold — closing story / social proof

export interface BlogStat {
  value: string;
  label: string;
  note?: string;
}
export interface BlogSection {
  heading: string;
  body: string[]; // paragraphs
}
export interface BlogFaq {
  q: string;
  a: string;
}
export interface BlogCta {
  handwritten: string;
  heading: string;
  body: string;
  buttonLabel: string;
}
export interface BlogListing {
  address: string;
  city: string;
  price: string;
  beds?: string;
  baths?: string;
  sqft?: string;
  mls?: string;
  listingUrl?: string;
}

export interface BlogPost {
  slug: string;
  status: string; // normalized
  variant: BlogVariant;
  eyebrow: string;
  title: string;
  dek: string;
  metaDescription: string;
  sections: BlogSection[];
  stats?: BlogStat[];
  faq?: BlogFaq[];
  cta: BlogCta;
  listing: BlogListing;
  heroImageUrl?: string;
  publishedAtISO: string;
}

export interface BlogGenerationResult {
  post?: BlogPost;
  compliance: ComplianceResult;
  /** true only when a post was generated AND it passed the compliance gate. */
  publishable: boolean;
  error?: string;
}

function slugify(s: string): string {
  return (s || 'listing')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

function variantForStatus(status: string): BlogVariant | null {
  switch (status) {
    case 'just-listed':
      return 'listing-feature';
    case 'price-reduced':
      return 'price-improved';
    case 'open-house':
      return 'open-house';
    case 'sold':
      return 'sold-story';
    // coming-soon / pending / contingent intentionally produce no blog post.
    default:
      return null;
  }
}

function priceText(row: ListingRow): string {
  const p = (row.listPrice || '').trim();
  if (!p) return '';
  return p.startsWith('$') ? p : `$${p}`;
}

// The hard rules the model must follow. Compliance first, voice second.
const SYSTEM_PROMPT = `You are the in-house content writer for Kim Pelham, a licensed real estate broker in Snohomish County, Washington (The Pelham Group NW). You write blog posts for her live website. Everything you write can publish automatically, so it must be compliant and on-brand with zero edits.

NON-NEGOTIABLE COMPLIANCE RULES (a violation can get a broker's license pulled):
1. FAIR HOUSING: Describe the HOME and its features, never the type of person who should buy it. Do NOT reference or imply preference/limitation based on race, color, national origin, religion, sex, disability, familial status, marital status, age, sexual orientation, gender identity, or veteran status. Banned: "perfect for families", "great for young professionals", "safe neighborhood", "good schools" as a selling point, "perfect for retirees/seniors", references to churches/religion, "exclusive neighborhood", any ability/disability framing. Name a school DISTRICT factually only if relevant; never claim it is "good/top/best".
2. MLS / NWMLS Clear Cooperation: NEVER write "Coming Soon" or any pre-market teaser ("before it's live", "first look before it hits the market", "pocket listing"). NEVER claim access "before Zillow/Redfin". NEVER guarantee a sale, price, or timeline.
3. Always factual. Do not invent statistics, awards, school ratings, testimonials, or features that were not provided. If you lack a fact, omit it.

BRAND VOICE (Kim):
- Warm, authoritative, data-backed, never salesy. She sounds like a real person, not a brochure.
- NO em dashes ever. Use a period, comma, parentheses, or colon. NO en dashes used rhetorically.
- No urgency tactics ("act now", "don't miss", "won't last"). No exclamation marks in headlines. No superlatives ("best", "#1", "dream home"). No emojis.
- Prefer specific numbers over vague claims.
- Signature phrases when they fit naturally: "walking alongside", "your next chapter", "what home means". Sign-offs use "Always, Kim" or just "Kim", never with a dash.

OUTPUT: Return ONLY valid minified JSON (no markdown, no commentary) matching exactly this shape:
{"eyebrow":string,"title":string,"dek":string,"metaDescription":string,"sections":[{"heading":string,"body":[string,...]}],"faq":[{"q":string,"a":string}],"cta":{"handwritten":string,"heading":string,"body":string,"buttonLabel":string}}
- eyebrow: short kicker, e.g. "Listing Story · Mukilteo".
- title: a real headline; you may include the address.
- dek: one-paragraph italic lede.
- sections: 2 to 4 sections, each 1 to 3 short paragraphs. About the home, the location facts, and the process.
- faq: 2 to 3 genuinely useful Q&As (these become FAQPage schema). Compliant and factual.
- cta: a soft close inviting a conversation. handwritten is a short cursive line (e.g. "let's talk"), buttonLabel is short.
- metaDescription: <= 155 characters, plain, compliant.`;

function buildUserPrompt(row: ListingRow, variant: BlogVariant): string {
  const facts: string[] = [];
  if (row.address) facts.push(`Address: ${row.address}`);
  if (row.city) facts.push(`City: ${row.city}`);
  const price = priceText(row);
  if (price) facts.push(`List price: ${price}`);
  if (row.oldPrice) facts.push(`Previous price: ${row.oldPrice}`);
  if (row.beds) facts.push(`Beds: ${row.beds}`);
  if (row.baths) facts.push(`Baths: ${row.baths}`);
  if (row.sqft) facts.push(`Square feet: ${row.sqft}`);
  if (row.mls) facts.push(`MLS #: ${row.mls}`);
  if (row.openHouse) facts.push(`Open house: ${row.openHouse}`);
  if (row.hook) facts.push(`Angle/hook from Kim: ${row.hook}`);

  const intent: Record<BlogVariant, string> = {
    'listing-feature':
      'This home was just listed and is active on the market. Write a listing-story post about the home itself.',
    'price-improved':
      'The price was just improved/reduced. Frame it honestly as the price meeting the current market, which makes it a good moment to take a real look. Do not use urgency.',
    'open-house':
      'There is an upcoming open house. The post should invite readers to come walk the home in person. Include the open-house detail if provided.',
    'sold-story':
      'This home just sold/closed. Write a brief closing-story post as social proof of Kim\'s work. Do not invent the sale price or terms unless provided.',
  };

  return `Write a ${variant} blog post.\n\n${intent[variant]}\n\nVerified listing facts (use ONLY these; do not invent others):\n${facts.join('\n')}\n\nReturn only the JSON object described in the system instructions.`;
}

interface RawBlogJson {
  eyebrow?: string;
  title?: string;
  dek?: string;
  metaDescription?: string;
  sections?: { heading?: string; body?: string[] }[];
  faq?: { q?: string; a?: string }[];
  cta?: { handwritten?: string; heading?: string; body?: string; buttonLabel?: string };
}

function extractJson(text: string): RawBlogJson | null {
  // Model should return bare JSON, but be defensive about fences/prose.
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1)) as RawBlogJson;
  } catch {
    return null;
  }
}

/**
 * Generate a compliant blog post for a status change. Returns publishable=false
 * (with reasons in `compliance`) if no key is set, generation fails, or the
 * draft trips a compliance blocker — the caller must NOT publish in that case.
 */
export async function generateListingBlog(
  row: ListingRow,
  opts?: { heroImageUrl?: string }
): Promise<BlogGenerationResult> {
  const status = normalizeStatus(row.status);
  const variant = variantForStatus(status);
  const emptyCompliance: ComplianceResult = {
    clean: false,
    findings: [],
    blockers: [],
    warnings: [],
    summary: '',
  };

  if (!variant) {
    return {
      publishable: false,
      compliance: { ...emptyCompliance, summary: `No blog variant for status "${row.status}"` },
      error: `No blog variant for status "${row.status}"`,
    };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      publishable: false,
      compliance: { ...emptyCompliance, summary: 'ANTHROPIC_API_KEY not set' },
      error: 'ANTHROPIC_API_KEY not set',
    };
  }

  const model = process.env.ANTHROPIC_MODEL || DEFAULT_MODEL;

  let raw: RawBlogJson | null = null;
  try {
    const res = await fetch(ANTHROPIC_API, {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model,
        max_tokens: 2000,
        temperature: 0.7,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: buildUserPrompt(row, variant) }],
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      return {
        publishable: false,
        compliance: { ...emptyCompliance, summary: `Anthropic ${res.status}` },
        error: `Anthropic ${res.status}: ${body.slice(0, 300)}`,
      };
    }
    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const text = (data.content ?? [])
      .filter((b) => b.type === 'text')
      .map((b) => b.text ?? '')
      .join('\n');
    raw = extractJson(text);
  } catch (err) {
    return {
      publishable: false,
      compliance: { ...emptyCompliance, summary: 'generation error' },
      error: (err as Error).message,
    };
  }

  if (!raw || !raw.title || !raw.sections) {
    return {
      publishable: false,
      compliance: { ...emptyCompliance, summary: 'model returned no usable JSON' },
      error: 'model returned no usable JSON',
    };
  }

  // Sanitize brand dashes across every text field, then assemble.
  const sb = sanitizeBrand;
  const sections: BlogSection[] = (raw.sections ?? [])
    .map((s) => ({
      heading: sb(s.heading ?? ''),
      body: (s.body ?? []).map(sb).filter(Boolean),
    }))
    .filter((s) => s.heading || s.body.length);
  const faq: BlogFaq[] = (raw.faq ?? [])
    .map((f) => ({ q: sb(f.q ?? ''), a: sb(f.a ?? '') }))
    .filter((f) => f.q && f.a);

  const post: BlogPost = {
    slug: slugify(`${row.address}-${row.city}`),
    status,
    variant,
    eyebrow: sb(raw.eyebrow ?? ''),
    title: sb(raw.title ?? ''),
    dek: sb(raw.dek ?? ''),
    metaDescription: sb(raw.metaDescription ?? '').slice(0, 160),
    sections,
    faq,
    cta: {
      handwritten: sb(raw.cta?.handwritten ?? "let's talk"),
      heading: sb(raw.cta?.heading ?? 'Thinking about your next chapter?'),
      body: sb(raw.cta?.body ?? 'A short conversation, no pressure. We figure out what makes sense for you.'),
      buttonLabel: sb(raw.cta?.buttonLabel ?? 'Talk to Kim'),
    },
    listing: {
      address: row.address,
      city: row.city,
      price: priceText(row),
      beds: row.beds,
      baths: row.baths,
      sqft: row.sqft,
      mls: row.mls,
      listingUrl: row.listingUrl,
    },
    heroImageUrl: opts?.heroImageUrl,
    publishedAtISO: new Date().toISOString(),
  };

  // Fail-closed compliance scan across every generated text field.
  const compliance = scanFields({
    title: post.title,
    eyebrow: post.eyebrow,
    dek: post.dek,
    metaDescription: post.metaDescription,
    sections: sections.map((s) => `${s.heading}\n${s.body.join('\n')}`).join('\n\n'),
    faq: faq.map((f) => `${f.q}\n${f.a}`).join('\n\n'),
    cta: `${post.cta.handwritten}\n${post.cta.heading}\n${post.cta.body}\n${post.cta.buttonLabel}`,
  });

  return {
    post,
    compliance,
    publishable: compliance.clean,
    error: compliance.clean ? undefined : `compliance blocked: ${compliance.summary}`,
  };
}
