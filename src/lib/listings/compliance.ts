/*
  Compliance gate for auto-generated listing content.
  ─────────────────────────────────────────────────────
  Kim Pelham is a licensed WA broker. Anything this pipeline writes can land
  on her live website / social the moment a status changes, with no human in
  the loop. A single Fair Housing or MLS slip is not a typo — it can get a
  license pulled. So this module is the hard, FAIL-CLOSED gate: text only
  ships if it passes. Anything that trips a `block` rule does NOT publish; it
  holds for human review and reports why.

  Three bodies of rules, in priority order:
    1. MLS / NWMLS Clear Cooperation — no "Coming Soon" / pre-market hype,
       no "before Zillow/Redfin", no guarantees.
    2. Fair Housing (federal FHA + WA RCW 49.60 protected classes:
       race, color, national origin, religion, sex, disability, familial
       status, marital status, age, sexual orientation, gender identity,
       veteran/military status, source of income) — no preference, no
       limitation, no steering (incl. proxies like "safe neighborhood").
    3. Brand voice (Savvy global rule) — no em dashes, no urgency, no
       unprovable superlatives.

  severity:
    'block' → publish is refused (fail closed). Holds for review.
    'warn'  → publishes, but is logged/flagged for a human to glance at.

  NOTE: patterns target steering *phrases*, not innocent nouns. "family room"
  is a room and passes; "perfect for families" is steering and blocks.
*/

export type ComplianceSeverity = 'block' | 'warn';

export type ComplianceCategory =
  | 'mls-clear-cooperation'
  | 'mls-false-claim'
  | 'fair-housing-familial'
  | 'fair-housing-religion'
  | 'fair-housing-race-national-origin'
  | 'fair-housing-disability'
  | 'fair-housing-age'
  | 'fair-housing-sex'
  | 'fair-housing-steering'
  | 'brand-voice';

export interface ComplianceRule {
  id: string;
  category: ComplianceCategory;
  severity: ComplianceSeverity;
  pattern: RegExp;
  message: string;
}

export interface ComplianceFinding {
  ruleId: string;
  category: ComplianceCategory;
  severity: ComplianceSeverity;
  match: string;
  message: string;
}

export interface ComplianceResult {
  /** true only when there are zero `block`-severity findings. */
  clean: boolean;
  findings: ComplianceFinding[];
  blockers: ComplianceFinding[];
  warnings: ComplianceFinding[];
  /** one-line human summary for logs / sheet write-back. */
  summary: string;
}

// All patterns are case-insensitive. Keep them phrase-anchored to avoid
// flagging legitimate real-estate vocabulary.
const RULES: ComplianceRule[] = [
  // ── 1. MLS / NWMLS Clear Cooperation ──────────────────────────────────
  {
    id: 'coming-soon',
    category: 'mls-clear-cooperation',
    severity: 'block',
    pattern: /\bcoming\s*soon\b/i,
    message:
      '"Coming Soon" pre-marketing violates NWMLS Clear Cooperation Policy. List as Active in the MLS first.',
  },
  {
    id: 'pre-market-teaser',
    category: 'mls-clear-cooperation',
    severity: 'block',
    pattern:
      /\b(before\s+it'?s?\s+(live|listed|on\s+the\s+market)|first\s+look\s+before|pre[\s-]?market(ing)?|pocket\s+listing|private\s+(listing|sale)\s+before|sneak\s+peek\s+before)\b/i,
    message:
      'Pre-market / "first look before it\'s live" language is prohibited (Clear Cooperation). No marketing before MLS go-live.',
  },
  {
    id: 'off-market-marketing',
    category: 'mls-clear-cooperation',
    severity: 'warn',
    pattern: /\boff[\s-]?market\b/i,
    message:
      '"Off-market" can imply non-cooperative marketing. Confirm this is descriptive, not promotional.',
  },
  // ── MLS false / unprovable claims ─────────────────────────────────────
  {
    id: 'before-portals',
    category: 'mls-false-claim',
    severity: 'block',
    pattern: /\b(before|beat|ahead\s+of)\s+(zillow|redfin|the\s+portals?|the\s+mls)\b/i,
    message:
      'Claiming access "before Zillow/Redfin" is inaccurate (IDX syncs at go-live) and a NWMLS rules concern.',
  },
  {
    id: 'guarantee',
    category: 'mls-false-claim',
    severity: 'block',
    pattern: /\bguarantee(d|s)?\b/i,
    message:
      'Guarantees of sale/price/timeline are unprovable claims and a regulatory risk. Remove.',
  },
  // ── 2. Fair Housing — familial status ─────────────────────────────────
  {
    id: 'fh-familial-preference',
    category: 'fair-housing-familial',
    severity: 'block',
    pattern:
      /\b(perfect|ideal|great|good|wonderful)\s+(for\s+)?(a\s+|the\s+)?(famil(y|ies)|kids|children|young\s+famil)/i,
    message:
      'Targeting families/children indicates a familial-status preference (FHA). Describe the home, not the buyer.',
  },
  {
    id: 'fh-familial-exclusion',
    category: 'fair-housing-familial',
    severity: 'block',
    pattern:
      /\b(no\s+(kids|children)|adults?\s+only|adult\s+community|empty[\s-]?nesters?|newlyweds?|singles?\s+(only|welcome)|couples?\s+only|bachelor\s+pad)\b/i,
    message:
      'Limiting by family/marital status (FHA + WA marital status). Remove buyer-type framing.',
  },
  // ── Fair Housing — religion ───────────────────────────────────────────
  {
    id: 'fh-religion',
    category: 'fair-housing-religion',
    severity: 'block',
    pattern:
      /\b(church(es)?|synagogue|mosque|temple|christian|catholic|jewish|muslim|buddhist|congregation)\b/i,
    message:
      'Religious references (incl. "near churches") indicate a religious preference (FHA). Remove.',
  },
  // ── Fair Housing — race / national origin ─────────────────────────────
  {
    id: 'fh-race-no',
    category: 'fair-housing-race-national-origin',
    severity: 'block',
    pattern:
      /\b(integrated|segregated|ethnic|traditional\s+(neighborhood|community)|exclusive\s+(neighborhood|community|enclave))\b/i,
    message:
      'Language implying racial/ethnic/national-origin character or exclusivity is steering (FHA). Remove.',
  },
  // ── Fair Housing — disability ─────────────────────────────────────────
  {
    id: 'fh-disability',
    category: 'fair-housing-disability',
    severity: 'block',
    pattern:
      /\b(able[\s-]?bodied|no\s+wheelchairs?|not\s+(handicap|wheelchair)\s+accessible|perfect\s+for\s+active|for\s+the\s+physically\s+fit)\b/i,
    message:
      'References to physical ability/disability are prohibited (FHA). Describe features factually (e.g. "step-free entry").',
  },
  // ── Fair Housing — age (WA protected) ─────────────────────────────────
  {
    id: 'fh-age-preference',
    category: 'fair-housing-age',
    severity: 'block',
    pattern:
      /\b(young\s+professionals?|perfect\s+for\s+(seniors?|retirees?|the\s+elderly)|mature\s+(buyers?|adults?))\b/i,
    message:
      'Targeting an age group is a preference (WA RCW 49.60 protects age). Describe the home, not the buyer.',
  },
  {
    id: 'fh-age-restricted',
    category: 'fair-housing-age',
    severity: 'warn',
    pattern: /\b(55\+|age[\s-]?restricted|senior\s+(living|community))\b/i,
    message:
      '55+/age-restricted may be a valid HOPA community, confirm it qualifies before publishing.',
  },
  // ── Fair Housing — sex / gender ───────────────────────────────────────
  {
    id: 'fh-sex',
    category: 'fair-housing-sex',
    severity: 'warn',
    pattern: /\b(his\s+and\s+hers|man\s+cave|she[\s-]?shed)\b/i,
    message:
      'Gendered framing can imply a sex preference. Prefer neutral feature descriptions.',
  },
  // ── Fair Housing — steering proxies ───────────────────────────────────
  {
    id: 'fh-steering-safe',
    category: 'fair-housing-steering',
    severity: 'block',
    pattern: /\b(safe|crime[\s-]?free|low[\s-]?crime)\s+(neighborhood|area|community|street|block)\b/i,
    message:
      '"Safe neighborhood" implies other areas are unsafe, classic steering proxy (FHA). Remove.',
  },
  {
    id: 'fh-steering-schools',
    category: 'fair-housing-steering',
    severity: 'warn',
    pattern: /\b(good|great|top|best|top[\s-]?rated|excellent)\s+schools?\b/i,
    message:
      'School-quality claims are a known steering proxy. Prefer naming the district factually.',
  },
  {
    id: 'fh-steering-desirable',
    category: 'fair-housing-steering',
    severity: 'warn',
    pattern: /\b(prestigious|desirable\s+area|sought[\s-]?after\s+neighborhood)\b/i,
    message: 'Subjective neighborhood-desirability claims can read as steering. Use specifics.',
  },
  // ── 3. Brand voice (Savvy global rules) ───────────────────────────────
  {
    id: 'brand-em-dash',
    category: 'brand-voice',
    severity: 'warn', // auto-sanitized before publish; warn so we can see it slipped through generation
    pattern: /[—]|(?:\s[–]\s)/,
    message: 'Em dash / rhetorical en dash present (Savvy rule: none, ever). Will be sanitized.',
  },
  {
    id: 'brand-urgency',
    category: 'brand-voice',
    severity: 'warn',
    pattern:
      /\b(act\s+now|don'?t\s+miss|limited\s+time|hurry|last\s+chance|won'?t\s+last|must\s+sell|once[\s-]in[\s-]a[\s-]lifetime)\b/i,
    message: 'Urgency tactic, against Kim\'s voice rules. Soften or remove.',
  },
  {
    id: 'brand-superlative',
    category: 'brand-voice',
    severity: 'warn',
    pattern: /\b(#\s?1|number\s+one|the\s+best|top[\s-]?rated\s+agent|dream\s+home)\b/i,
    message: 'Unprovable superlative / cliché. Prefer specific numbers.',
  },
];

/**
 * Strip the brand-forbidden dashes (Savvy global rule: no em dashes, ever).
 * Em dash → comma+space; rhetorical " – " → ", "; tidy doubled spaces.
 * Numeric en-dash ranges ("9–5") are left alone.
 */
export function sanitizeBrand(text: string): string {
  return text
    .replace(/\s*—\s*/g, ', ')
    .replace(/(\D)\s–\s(\D)/g, '$1, $2')
    .replace(/ {2,}/g, ' ')
    .replace(/\s+([,.])/g, '$1');
}

/**
 * Scan a single string. Returns every finding plus a clean flag that is true
 * only when there are no `block`-severity findings.
 */
export function scanForCompliance(text: string): ComplianceResult {
  const findings: ComplianceFinding[] = [];
  const haystack = text || '';
  for (const rule of RULES) {
    const m = haystack.match(rule.pattern);
    if (m) {
      findings.push({
        ruleId: rule.id,
        category: rule.category,
        severity: rule.severity,
        match: m[0],
        message: rule.message,
      });
    }
  }
  const blockers = findings.filter((f) => f.severity === 'block');
  const warnings = findings.filter((f) => f.severity === 'warn');
  const clean = blockers.length === 0;
  const summary = clean
    ? warnings.length === 0
      ? 'PASS'
      : `PASS with ${warnings.length} warning(s): ${warnings.map((w) => w.ruleId).join(', ')}`
    : `BLOCKED by ${blockers.length}: ${blockers.map((b) => `${b.ruleId} ("${b.match}")`).join('; ')}`;
  return { clean, findings, blockers, warnings, summary };
}

/**
 * Scan several named fields at once (e.g. {title, body, caption}). Aggregates
 * findings, prefixing each with its field so the report says where it lives.
 * `clean` is true only if every field is clean.
 */
export function scanFields(fields: Record<string, string>): ComplianceResult {
  const all: ComplianceFinding[] = [];
  for (const [name, value] of Object.entries(fields)) {
    const r = scanForCompliance(value);
    for (const f of r.findings) {
      all.push({ ...f, message: `[${name}] ${f.message}` });
    }
  }
  const blockers = all.filter((f) => f.severity === 'block');
  const warnings = all.filter((f) => f.severity === 'warn');
  const clean = blockers.length === 0;
  const summary = clean
    ? warnings.length === 0
      ? 'PASS'
      : `PASS with ${warnings.length} warning(s)`
    : `BLOCKED by ${blockers.length}: ${blockers.map((b) => b.ruleId).join(', ')}`;
  return { clean, findings: all, blockers, warnings, summary };
}
