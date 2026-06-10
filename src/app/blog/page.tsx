'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: Category;
  image: string;
  imageAlt: string;
  readTime: number;
}

type Category =
  | 'Seller Strategy'
  | 'Market Updates'
  | 'Senior & Estate'
  | 'Buyer Guide'
  | 'Featured Listings';

const SITE = 'https://thepelhamgroupnw.com';

const blogPosts: BlogPost[] = [
  {
    id: '15',
    title: 'Should You Renovate Before Selling Your Snohomish County Home? A 2026 ROI Reality Check',
    slug: 'pre-sale-renovation-roi-snohomish-2026',
    excerpt:
      'The 2024 Cost vs Value Report shows which pre-sale improvements actually recoup their cost (garage doors at 194%) and which lose money (upscale kitchens at 38%). A Snohomish County broker breaks down which updates to make, which to skip, and how the concierge plan handles the financing.',
    date: '2026-06-09',
    category: 'Seller Strategy',
    image: '/images/hero-02-warm-kitchen.jpg',
    imageAlt: 'Warm staged kitchen photographed for listing',
    readTime: 9,
  },
  {
    id: '14',
    title: 'The Snohomish County Cooling Market in 2026: What Sellers in Mill Creek, Bothell & Everett Need to Know',
    slug: 'snohomish-cooling-market-sellers-2026',
    excerpt:
      'Active listings up. Months of inventory in the 2-to-3-month range. Sale-to-list ratios down from 2021 highs. Why this is not a crash, why preparation matters more than ever, and the strategy that works for sellers in each Snohomish County sub-market.',
    date: '2026-06-09',
    category: 'Market Updates',
    image: '/images/hero-01-aerial-neighborhood.jpg',
    imageAlt: 'Aerial view of Snohomish County neighborhoods',
    readTime: 10,
  },
  {
    id: '13',
    title: 'How Much Is My Home Worth in Snohomish County? An Honest Guide to Comps, Zestimates & What Actually Matters',
    slug: 'how-much-is-my-home-worth-snohomish-county',
    excerpt:
      'A Zestimate is a starting point, not a price. Here is how brokers and appraisers actually value a home using the comparative market analysis approach, why automated estimates can miss by $35,000 to $140,000, and what specifically moves a Snohomish County valuation in 2026.',
    date: '2026-06-09',
    category: 'Seller Strategy',
    image: '/images/property-02-mill-creek-home.jpg',
    imageAlt: 'A Mill Creek home being valued',
    readTime: 8,
  },
  {
    id: '12',
    title: "Selling a Parent's Home in Washington: The Estate Sale Process for Snohomish County Families",
    slug: 'selling-parents-home-washington-estate-sale',
    excerpt:
      'The 7-step Washington estate sale process: legal authority, deed clean-up, stepped-up cost basis valuation, clearing personal property, targeted prep, listing, and closing. Written for adult children navigating an estate sale alongside grief, sibling coordination, and probate timelines.',
    date: '2026-06-09',
    category: 'Senior & Estate',
    image: '/images/property-01-everett-home-exterior.jpg',
    imageAlt: 'A family home with mature trees',
    readTime: 11,
  },
  {
    id: '11',
    title: 'What Buyers in Mill Creek, Bothell & Lake Stevens Actually Want in 2026',
    slug: 'what-buyers-want-snohomish-county-2026',
    excerpt:
      '17 years of buyer feedback distilled. The 9 features Snohomish County buyers actually look for, the 5 dealbreakers that kill listings before they start, and how to read your sub-market: Mill Creek, Bothell, Lake Stevens, Everett, and Mukilteo all behave differently in 2026.',
    date: '2026-06-09',
    category: 'Seller Strategy',
    image: '/images/property-03-lake-stevens-waterfront.jpg',
    imageAlt: 'A Lake Stevens home with view',
    readTime: 9,
  },
  {
    id: '10',
    title: 'Snohomish County, May 2026: The Market Got More Honest This Month',
    slug: 'snohomish-market-may-2026',
    excerpt:
      'Active listings up 58.2% year over year. Months of inventory at 2.2. Median sale price down 3.8%. Mortgage rates at 6.36%. A broker-on-the-ground read of the May 2026 Snohomish County market for buyers and sellers.',
    date: '2026-05-15',
    category: 'Market Updates',
    image: '/images/hero-03-porch-connection.jpg',
    imageAlt: 'A welcoming porch in spring',
    readTime: 7,
  },
  {
    id: '9a',
    title: 'Waterfront or View? Two Snohomish Homes Under $1M, May 2026',
    slug: 'waterfront-or-view-under-1m-may-2026',
    excerpt:
      'A $799,900 high-bank Puget Sound waterfront in Marysville versus a $975,000 view-first remodel in Mukilteo. How to think about the trade-offs at the sub-$1M price point in Snohomish County.',
    date: '2026-05-06',
    category: 'Buyer Guide',
    image: '/images/potlatch-02-exterior.jpg',
    imageAlt: 'Puget Sound waterfront at sunset',
    readTime: 7,
  },
  {
    id: '9b',
    title: "Mukilteo's Most Undercovered Move: The Multi-Gen Split-Entry",
    slug: 'mukilteo-multigen-may-2026',
    excerpt:
      'Inside 4611 76th St SW: a $975K Mukilteo split-entry with a downstairs in-law setup, Olympic views, and the math behind a 102.03% sale-to-list ratio.',
    date: '2026-05-05',
    category: 'Featured Listings',
    image: '/images/mukilteo-01-front-exterior.jpg',
    imageAlt: 'Mukilteo multi-generational split-entry home',
    readTime: 8,
  },
  {
    id: '9',
    title: 'A $3 Million View for Under a Million: Potlatch Beach Road, Marysville',
    slug: 'potlatch-beach-road-tulalip-waterfront',
    excerpt:
      'Seattle waterfront costs $3M+. This Puget Sound high-bank waterfront in Marysville is under $1M. Same Sound, same sunsets, radically different price tag.',
    date: '2026-04-17',
    category: 'Featured Listings',
    image: '/images/potlatch-hero-2400w.jpg',
    imageAlt: 'Puget Sound waterfront at Potlatch Beach Road',
    readTime: 6,
  },
  {
    id: '9c',
    title: 'Snohomish Market Update, April 2026: Inventory Up 52%, Homes Still Selling in Days',
    slug: 'snohomish-market-moving-multiple-offers-april-2026',
    excerpt:
      'April 2026 Snohomish and King County market update. Inventory jumped 51.8% year over year giving buyers more options, while well-priced homes still find offers in days. Median prices, days on market, months of supply, and a broker-on-the-ground read.',
    date: '2026-04-25',
    category: 'Market Updates',
    image: '/images/hero-01-aerial-neighborhood.jpg',
    imageAlt: 'Aerial view of Snohomish County neighborhoods',
    readTime: 8,
  },
  {
    id: '8',
    title: "The Everett Neighborhoods That Flood in November (And 3 That Don't)",
    slug: 'everett-neighborhoods-buyers-guide',
    excerpt:
      '17 years and 50+ Everett homes sold. Here is what I actually know about the neighborhoods, which most people will not tell you until you ask.',
    date: '2026-04-17',
    category: 'Buyer Guide',
    image: '/images/property-01-everett-home-exterior.jpg',
    imageAlt: 'An Everett home in fall',
    readTime: 8,
  },
  {
    id: '7',
    title: 'SRES Realtor: What It Means and Why Seniors Choose One',
    slug: 'sres-realtor-snohomish-county',
    excerpt:
      'SRES stands for Seniors Real Estate Specialist. Here is what the credential actually covers, why it matters for downsizing, and what to ask before you hire.',
    date: '2026-04-17',
    category: 'Senior & Estate',
    image: '/images/about-01-approachable-headshot-env.jpg',
    imageAlt: 'Kim Pelham, SRES Realtor',
    readTime: 6,
  },
  {
    id: '6',
    title: 'Why Staging Beats Price Cuts: A Data-Driven Case',
    slug: 'staging-beats-price-cuts',
    excerpt:
      'A 3% price reduction on a $600K home costs $18,000. Professional staging costs $500 to $2,000. The math strongly favors staging. Here is why.',
    date: '2026-04-17',
    category: 'Seller Strategy',
    image: '/images/hero-02-warm-kitchen.jpg',
    imageAlt: 'A professionally staged living space',
    readTime: 7,
  },
  {
    id: '5',
    title: 'How to Sell 5% Above Market Value in Snohomish County',
    slug: 'sell-above-market-value',
    excerpt:
      'My 102.3% sale-to-list ratio is not luck. It is the result of a specific staging and pricing framework applied to every listing. Here is how it works.',
    date: '2026-04-17',
    category: 'Seller Strategy',
    image: '/images/property-02-mill-creek-home.jpg',
    imageAlt: 'A Mill Creek home sold above asking',
    readTime: 7,
  },
  {
    id: '1',
    title: 'The First 72 Hours: Why They Make or Break Your Home Sale',
    slug: 'first-72-hours',
    excerpt:
      'The first three days after listing are the highest-value hours of your entire sale. Here is how to make sure yours count.',
    date: '2026-03-15',
    category: 'Seller Strategy',
    image: '/images/hero-03-porch-connection.jpg',
    imageAlt: 'A home in the first days of listing',
    readTime: 6,
  },
  {
    id: '2',
    title: 'Senior Downsizing: A Compassionate Guide to Your Next Chapter',
    slug: 'senior-downsizing',
    excerpt:
      'Navigate the emotional and practical aspects of downsizing with a broker who has been through it 30+ times with Snohomish County families.',
    date: '2026-02-28',
    category: 'Senior & Estate',
    image: '/images/kim-with-client-on-couch.jpg',
    imageAlt: 'Kim Pelham with a senior client',
    readTime: 9,
  },
  {
    id: '3',
    title: 'The Psychology of Home Staging: Why Buyers Fall in Love',
    slug: 'staging-psychology',
    excerpt:
      'Buyers decide in 90 seconds. Staging is how you win those 90 seconds. Here is the neuroscience behind what actually works.',
    date: '2026-02-10',
    category: 'Seller Strategy',
    image: '/images/hero-02-warm-kitchen.jpg',
    imageAlt: 'A beautifully staged interior',
    readTime: 8,
  },
  {
    id: '4',
    title: "Understanding Your Sale-to-List Ratio (And Why Kim's Is 102.3%)",
    slug: 'sale-to-list-ratio',
    excerpt:
      'The most useful number for evaluating a real estate broker, and most sellers never ask about it. Here is what it means and how to use it.',
    date: '2026-01-25',
    category: 'Seller Strategy',
    image: '/images/property-01-everett-home-exterior.jpg',
    imageAlt: 'An Everett home sold above asking',
    readTime: 6,
  },
];

// Featured post is the most recent / highest-priority piece for the funnel.
const FEATURED_SLUG = 'pre-sale-renovation-roi-snohomish-2026';

const TOPIC_ORDER: { id: string; category: Category; tagline: string }[] = [
  { id: 'seller-strategy', category: 'Seller Strategy', tagline: 'Positioning, pricing, staging, and pre-sale prep for the Snohomish County market.' },
  { id: 'market-updates', category: 'Market Updates', tagline: 'Monthly NWMLS reads on inventory, days on market, sale-to-list, and rates.' },
  { id: 'senior-estate', category: 'Senior & Estate', tagline: 'SRES guidance for downsizing, estate sales, and walking families through transitions.' },
  { id: 'buyer-guide', category: 'Buyer Guide', tagline: 'Neighborhood-level guidance for buyers in Everett, Mill Creek, Bothell, Lake Stevens, Mukilteo, and Marysville.' },
  { id: 'featured-listings', category: 'Featured Listings', tagline: 'A closer look at current and recent Pelham Group listings across Snohomish County.' },
];

const blogFAQs = [
  {
    question: 'What is the current real estate market like in Snohomish County?',
    answer:
      'As of mid-2026, Snohomish County is in a balanced market with a slight seller tilt. Active listings are up substantially year over year, months of inventory is sitting in the 2-to-3-month range, median sale prices are flat to slightly soft, and the average sale-to-list ratio across the county is near 99 to 100 percent. Well-prepared and well-priced homes continue to sell at or above asking, while dated or aspirationally priced homes sit. Monthly NWMLS data drives the specifics.',
  },
  {
    question: "What is Kim Pelham's sale-to-list ratio?",
    answer:
      'Kim Pelham averages a 102.3 percent sale-to-list ratio across her listings, compared to roughly 100.2 percent for the Snohomish County market overall (NWMLS). On a typical $600,000 home, that 2.3-point advantage translates to about $14,000 more in seller proceeds. The ratio reflects a focused pre-sale preparation, professional staging, accurate pricing, and active negotiation, not luck or aggressive listing.',
  },
  {
    question: 'How long does it take to sell a home in Snohomish County?',
    answer:
      'In the 2026 Snohomish County market, a well-prepared and accurately priced home typically goes from listing to accepted offer in 10 to 30 days. From accepted offer to closing usually takes another 30 to 45 days. So the full timeline from listing to closing is generally 2 to 3 months. Homes that are dated or priced above the supportable comp set can sit on the market for 60 to 120 days before a price reduction brings them to contract.',
  },
  {
    question: 'Should I renovate my home before selling?',
    answer:
      'Most Snohomish County sellers in 2026 should make a focused set of pre-sale updates rather than a full remodel. The 2024 Cost vs Value Report shows that targeted exterior projects (garage door replacement, steel entry door) recoup 188 to 194 percent of their cost, while major interior remodels (upscale kitchen, primary suite addition) recoup just 38 to 56 percent. The right strategy is paint, lighting, targeted flooring repair, and professional staging. The Pelham Group concierge plan handles all of this with no out-of-pocket cost to the seller for qualifying homes.',
  },
  {
    question: 'How do I value my home in Snohomish County?',
    answer:
      'The most accurate way to value a Snohomish County home is a comparative market analysis (CMA) prepared by an experienced local broker. The CMA pulls 3 to 8 closed comparable sales within a half mile of the subject home from the past 90 days, adjusts each for differences in square footage, lot, condition, and finish, and arrives at a tight value range. Automated estimates from Zillow, Redfin, and Realtor.com can be useful as a starting range but often miss by 5 to 20 percent on individual homes due to model limitations around condition and finish.',
  },
  {
    question: 'What does SRES (Seniors Real Estate Specialist) mean?',
    answer:
      'SRES stands for Seniors Real Estate Specialist, a credential awarded by the National Association of Realtors to brokers who complete specialized training on the financial, emotional, and logistical complexities of real estate transitions for clients aged 50 and over. SRES brokers are trained on downsizing, age-in-place planning, reverse mortgages, Medicaid Estate Recovery, probate, and coordinating with family members and trusted advisors. Kim Pelham is SRES certified.',
  },
  {
    question: 'How does the Pelham Group pre-sale concierge plan work?',
    answer:
      'For qualifying Snohomish County homes, the Pelham Group fronts the cost of pre-sale updates and staging (paint, lighting, targeted flooring, deep clean, professional staging, and select repairs), manages the contractors and timeline directly, stages the home with Kim Pelham\'s own pieces, and the seller pays the agreed cost from their sale proceeds at closing. There is no out-of-pocket cost during the prep phase, no contractor management burden on the seller, and no separate financing application.',
  },
  {
    question: 'What cities does Kim Pelham serve?',
    answer:
      'Kim Pelham serves the full Snohomish County market with a primary focus on Everett, Mill Creek, Bothell, Snohomish, Lake Stevens, Marysville, and Mukilteo. She is brokered by Katrina Eileen Real Estate and is licensed in Washington State. Her 17-year track record includes 176-plus closed transactions across Snohomish and parts of King County.',
  },
  {
    question: 'How many buyers does Kim Pelham work with at a time?',
    answer:
      'Kim Pelham works with a maximum of two active buyers at a time. The cap exists because buyer-side work (active showings, multiple home tours, drafting offers, navigating multiple-offer situations) is time-intensive, and the only way to give each buyer the responsive, full-attention concierge experience is to cap the number of buyers she represents simultaneously. Seller-side capacity is structured differently.',
  },
  {
    question: 'How quickly should I make pre-sale updates if I want to list this year?',
    answer:
      'For a typical Snohomish County home, a focused pre-sale preparation takes 3 weeks once the plan is set: week one is paint and lighting, week two is flooring and any targeted repairs, and week three is staging and listing photography. The plan itself can be agreed in a single walkthrough. So a seller who wants to list this year can usually be on the market within 4 to 5 weeks of the first call.',
  },
];

// ---------------- Helpers ----------------
function formatDate(iso: string): string {
  const date = new Date(iso + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function byDateDesc(a: BlogPost, b: BlogPost): number {
  return b.date.localeCompare(a.date);
}

// ---------------- Share Buttons ----------------
function ShareButtons({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE}/blog/${post.slug}`;
  const text = post.title;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // user denied clipboard; do nothing
    }
  };

  const btn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 4,
    background: 'transparent',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-muted)',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.18s ease',
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}
      aria-label={`Share article: ${post.title}`}
    >
      <span style={{ fontSize: 11, color: 'var(--color-text-faint)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginRight: 4 }}>
        Share
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        style={btn}
      >
        in
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        title="Share on X (Twitter)"
        style={btn}
      >
        X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
        style={btn}
      >
        f
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`Thought you might find this useful: ${url}`)}`}
        aria-label="Share by email"
        title="Share by email"
        style={btn}
      >
        @
      </a>
      <button
        onClick={handleCopy}
        type="button"
        aria-label="Copy article link"
        title={copied ? 'Link copied' : 'Copy article link'}
        style={{ ...btn, minWidth: 30 }}
      >
        {copied ? '✓' : '⎘'}
      </button>
    </div>
  );
}

// ---------------- Blog Card ----------------
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      className="blog-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 14px 32px rgba(47, 82, 51, 0.10)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Link href={`/blog/${post.slug}`} style={{ display: 'block', position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--color-cream-dark)' }}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </Link>

      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-clay)',
              background: 'var(--color-cream)',
              padding: '4px 9px',
              borderRadius: 3,
            }}
          >
            {post.category}
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--color-text-faint)' }}>
            {formatDate(post.date)} · {post.readTime} min read
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 10px', lineHeight: 1.25 }}>
          <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {post.title}
          </Link>
        </h3>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--color-text-light)', lineHeight: 1.6, margin: '0 0 18px', flex: 1 }}>
          {post.excerpt}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 'auto', flexWrap: 'wrap' }}>
          <Link
            href={`/blog/${post.slug}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 700,
              color: 'var(--color-forest)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Read article <span aria-hidden="true">→</span>
          </Link>
          <ShareButtons post={post} />
        </div>
      </div>
    </article>
  );
}

// ---------------- Page ----------------
export default function BlogPage() {
  const featured = blogPosts.find((p) => p.slug === FEATURED_SLUG) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  // Structured data
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Pelham Group NW Blog',
    description:
      'Snohomish County real estate insights from Kim Pelham. Seller strategy, monthly NWMLS market reports, senior and estate transitions, neighborhood buyer guides, and featured listings.',
    url: `${SITE}/blog`,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'RealEstateAgent',
      name: 'The Pelham Group NW',
      url: SITE,
      logo: `${SITE}/images/best-of-snoco-2024-no-background.png`,
    },
    author: {
      '@type': 'Person',
      name: 'Kim Pelham',
      jobTitle: 'Real Estate Broker',
      url: SITE,
      image: `${SITE}/images/kim-headshot-msh.jpg`,
      worksFor: { '@type': 'RealEstateAgent', name: 'Katrina Eileen Real Estate' },
      knowsAbout: [
        'Pre-sale renovation',
        'Home staging',
        'Senior real estate transitions',
        'Estate sales',
        'Snohomish County housing market',
      ],
      hasCredential: 'SRES (Seniors Real Estate Specialist)',
    },
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.date,
      image: `${SITE}${p.image}`,
      author: { '@type': 'Person', name: 'Kim Pelham' },
      description: p.excerpt,
      articleSection: p.category,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    ],
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kim Pelham',
    url: SITE,
    image: `${SITE}/images/kim-headshot-msh.jpg`,
    jobTitle: 'Real Estate Broker',
    description:
      '17 years of Snohomish County real estate experience. 102.3% average sale-to-list ratio vs 100.2% NWMLS market average. Best of Snohomish County 2023 and 2024. SRES certified.',
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Katrina Eileen Real Estate',
    },
    areaServed: [
      'Everett, WA',
      'Mill Creek, WA',
      'Bothell, WA',
      'Snohomish, WA',
      'Lake Stevens, WA',
      'Marysville, WA',
      'Mukilteo, WA',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'SRES (Seniors Real Estate Specialist)',
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'National Association of Realtors' },
      },
    ],
  };

  return (
    <>
      <ScrollProgress />
      <Nav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <main>
        <InnerHero
          title="Snohomish County Real Estate Insights"
          subtitle={`${blogPosts.length} articles on selling, market trends, senior transitions, and neighborhood guides. Updated regularly with NWMLS data.`}
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="Warm kitchen interior in a Snohomish County home"
        />

        {/* AEO opener — direct answer paragraph */}
        <section style={{ background: 'var(--color-cream)', padding: '40px 24px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text)', margin: 0 }}>
              <b>What this blog is.</b> A working library for sellers, buyers, and Snohomish County families thinking about their next move. Every article is written from 17 years of broker-on-the-ground experience, sourced against NWMLS, the National Association of Realtors, JLC Cost vs Value, and Seattle Times reporting, and updated when the market does. Browse by topic below or jump to the featured piece.
            </p>
          </div>
        </section>

        {/* Topic anchor nav */}
        <nav aria-label="Browse blog by topic" style={{ position: 'sticky', top: 76, zIndex: 30, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border)', padding: '12px 24px' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-text-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 6 }}>
              Topics
            </span>
            {TOPIC_ORDER.map((t) => {
              const count = blogPosts.filter((p) => p.category === t.category).length;
              return (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="topic-pill"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: 'var(--color-forest)',
                    background: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    padding: '7px 14px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {t.category} <span style={{ color: 'var(--color-text-faint)', marginLeft: 4 }}>{count}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* FEATURED POST */}
        <section style={{ padding: '64px 24px 32px', background: '#fff' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                Featured
              </span>
            </div>

            <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>
              <Link href={`/blog/${featured.slug}`} style={{ display: 'block', position: 'relative', aspectRatio: '4 / 3', borderRadius: 8, overflow: 'hidden', background: 'var(--color-cream-dark)' }}>
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 880px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </Link>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-clay)', background: 'var(--color-cream)', padding: '5px 10px', borderRadius: 3 }}>
                    {featured.category}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-faint)' }}>
                    {formatDate(featured.date)} · {featured.readTime} min read
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 18px', lineHeight: 1.12 }}>
                  <Link href={`/blog/${featured.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {featured.title}
                  </Link>
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text-light)', lineHeight: 1.65, margin: '0 0 26px' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                  <Link
                    href={`/blog/${featured.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: 'var(--color-clay)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 15,
                      padding: '12px 22px',
                      borderRadius: 4,
                      textDecoration: 'none',
                    }}
                  >
                    Read article <span aria-hidden="true">→</span>
                  </Link>
                  <ShareButtons post={featured} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POSTS BY TOPIC */}
        {TOPIC_ORDER.map((t) => {
          const inTopic = rest.filter((p) => p.category === t.category).sort(byDateDesc);
          if (inTopic.length === 0) return null;
          return (
            <section key={t.id} id={t.id} style={{ padding: '64px 24px', background: t.id === 'market-updates' || t.id === 'buyer-guide' ? 'var(--color-cream)' : '#fff', scrollMarginTop: 140 }}>
              <div style={{ maxWidth: 1180, margin: '0 auto' }}>
                <header style={{ marginBottom: 36, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
                  <div style={{ maxWidth: 640 }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 8px', lineHeight: 1.15 }}>
                      {t.category}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--color-text-light)', lineHeight: 1.6, margin: 0 }}>
                      {t.tagline}
                    </p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {inTopic.length} {inTopic.length === 1 ? 'article' : 'articles'}
                  </span>
                </header>
                <div className="post-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                  {inTopic.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* AUTHOR BIO — E-E-A-T signal */}
        <section style={{ padding: '64px 24px', background: 'var(--color-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'center' }} className="bio-grid">
            <div style={{ position: 'relative', width: 180, height: 180, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 24px rgba(47, 82, 51, 0.12)' }}>
              <Image src="/images/kim-headshot-msh.jpg" alt="Kim Pelham, Snohomish County Real Estate Broker" fill sizes="180px" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 22, color: 'var(--color-clay)' }}>about the author</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 500, color: 'var(--color-forest)', margin: '4px 0 12px', lineHeight: 1.15 }}>
                Kim Pelham, The Pelham Group NW
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'var(--color-text-light)', lineHeight: 1.65, margin: '0 0 16px' }}>
                17 years selling Snohomish County. 176 closed transactions. A 102.3% average sale-to-list ratio against a 100.2% NWMLS county average. SRES certified for senior real estate transitions. Best of Snohomish County in 2023 and 2024. I work with a maximum of two active buyers at a time so every client gets a true concierge experience, and I prep, stage, and photograph my listings myself.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/about" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--color-forest)', textDecoration: 'none', borderBottom: '2px solid var(--color-clay)', paddingBottom: 2 }}>
                  Read Kim&apos;s story
                </Link>
                <Link href="/contact" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--color-forest)', textDecoration: 'none', borderBottom: '2px solid var(--color-clay)', paddingBottom: 2 }}>
                  Reach out
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — emits FAQPage JSON-LD via FAQSection */}
        <FAQSection
          title="Common Questions About Selling in Snohomish County"
          faqs={blogFAQs}
          backgroundColor="#fff"
        />

        {/* Final CTA */}
        <section style={{ padding: '72px 24px 96px', background: 'var(--color-forest)', color: 'var(--color-cream)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--color-cream)', margin: '0 0 16px', lineHeight: 1.15 }}>
              Want the free Pre-Sale Renovation Playbook?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(248,245,240,0.88)', lineHeight: 1.65, margin: '0 0 28px' }}>
              28 pages of the exact updates that pay back at closing, the money-pits to skip, the 3-week timeline, and real Snohomish County before-and-afters. No obligation, ever.
            </p>
            <Link
              href="/listwithkim"
              style={{
                display: 'inline-block',
                background: 'var(--color-clay)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 16,
                padding: '14px 30px',
                borderRadius: 4,
                textDecoration: 'none',
              }}
            >
              Send me the Playbook
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .topic-pill:hover { background: var(--color-forest) !important; color: var(--color-cream) !important; border-color: var(--color-forest) !important; }
        .topic-pill:hover span { color: rgba(248,245,240,0.7) !important; }
        @media (max-width: 880px) {
          .featured-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .bio-grid { grid-template-columns: 1fr !important; text-align: center; }
          .bio-grid > div:first-child { margin: 0 auto; }
        }
        @media (max-width: 720px) {
          .post-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
