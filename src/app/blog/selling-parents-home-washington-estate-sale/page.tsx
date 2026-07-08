'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  h2: {
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem',
    fontWeight: 400,
    color: 'var(--color-forest)',
    marginBottom: '20px',
    marginTop: '48px',
  } as const,
  h3: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 500,
    color: 'var(--color-forest)',
    marginBottom: '14px',
    marginTop: '32px',
  } as const,
  callout: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
  } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '40px 32px',
    borderRadius: '8px',
    margin: '48px 0 0',
    textAlign: 'center' as const,
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-clay)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 28px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '16px',
  } as const,
};

export default function SellingParentsHomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Selling a Parent's Home in Washington: The Estate Sale Process for Snohomish County Families"
          subtitle="By Kim Pelham, Senior Move Specialist · June 9, 2026 · 11 min read"
          image="/images/property-01-everett-home-exterior.jpg"
          imageAlt="A family home with mature trees"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              When you are selling a parent&apos;s home in Washington State, the process is rarely just a real estate transaction. It is grief, logistics, sibling coordination, probate paperwork, and the practical work of emptying a house that holds 40 years of one family&apos;s life. The legal and tax framework in Washington gives executors and adult children real protections and real responsibilities. Knowing the order of operations (probate clearance, deed status, stepped-up cost basis, repairs and prep, listing, closing) makes the whole thing manageable. So does choosing a broker who has walked families through this season before.
            </p>

            <p style={styles.bodyP}>
              I am a Senior Move Specialist, and a large part of my work in Snohomish County is helping families through exactly this transition: downsizing, selling a parent&apos;s home, and navigating the estate process that comes with it. This guide walks through the practical steps in the order they typically happen, what the Washington-specific rules are, where the common pitfalls hide, and how to honor the home and the person while still getting the family a good outcome.
            </p>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.7 }}>
                <b>Quick overview:</b> The typical Washington estate-sale path is (1) confirm legal authority to sell, (2) understand the deed and probate status, (3) get a stepped-up cost basis valuation as of the date of death, (4) clear personal property, (5) make targeted pre-sale repairs and updates, (6) list, (7) close. The whole process often takes 4 to 9 months, and most of that is steps 1 through 4. The selling part is relatively short once everything else is in order.
              </p>
            </div>

            <h2 style={styles.h2}>Step 1: Confirm who has the legal authority to sell</h2>
            <p style={styles.bodyP}>
              Before a single tour, a single repair, a single listing photo, you need to know who is legally allowed to sign the listing agreement and the closing documents. In Washington, that depends on how the home was titled and how the estate was set up.
            </p>

            <h3 style={styles.h3}>If the home was in a living trust</h3>
            <p style={styles.bodyP}>
              The successor trustee named in the trust has authority. No probate court action is required to sell. This is the cleanest path, and one of the reasons more Washington families set up revocable living trusts.
            </p>

            <h3 style={styles.h3}>If the home was held with right of survivorship</h3>
            <p style={styles.bodyP}>
              The surviving owner (often a spouse) now owns the home outright. They can list and sell as the sole owner. They will need to record the death certificate to clean up title.
            </p>

            <h3 style={styles.h3}>If the home went through probate</h3>
            <p style={styles.bodyP}>
              The personal representative (executor) appointed by the court has authority. This is the most common path when there was a will but no trust. Washington has a relatively streamlined probate process, and most estates can move through it in 6 to 9 months. You can find general information at the{' '}
              <a href="https://www.washingtonlawhelp.org/resource/probate-an-overview" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-clay)' }}>
                Washington LawHelp probate overview
              </a>
              . Talk to a probate attorney before listing.
            </p>

            <h3 style={styles.h3}>If there was no will</h3>
            <p style={styles.bodyP}>
              Washington intestate succession laws determine who inherits. The court appoints a personal representative. The process takes longer than a probate with a will, but it works.
            </p>

            <h2 style={styles.h2}>Step 2: Understand the deed and any title clean-up needed</h2>
            <p style={styles.bodyP}>
              Title issues are the most common source of last-minute closing delays in estate sales. Common things to check early:
            </p>

            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                Is the deed in the correct name? Sometimes a parent re-titled property at some point and the recorded deed does not match the current legal owner.
              </li>
              <li style={{ marginBottom: '12px' }}>
                Are there any liens? Old mortgages that should have been satisfied, judgments, contractor liens, or Medicaid Estate Recovery claims. Washington&apos;s DSHS Estate Recovery program can place a claim on the home if the deceased received Medicaid-funded long-term care after age 55. The state will pursue recovery from estate assets.
              </li>
              <li style={{ marginBottom: '12px' }}>
                Are there any easements or boundary issues that the family is not aware of?
              </li>
            </ul>

            <p style={styles.bodyP}>
              A title company can pull a preliminary title report for around $200 to $400. Getting this done early (before you list) avoids ugly surprises 30 days into a contract.
            </p>

            <h2 style={styles.h2}>Step 3: Get the stepped-up cost basis valuation</h2>
            <p style={styles.bodyP}>
              When a homeowner dies and the home passes to heirs, the cost basis for tax purposes &quot;steps up&quot; to the fair market value on the date of death. This is one of the most valuable tax features in the U.S. tax code for inherited real estate. If your parent paid $80,000 for the home in 1985 and it is worth $750,000 on the date of death, the new cost basis is $750,000 (not $80,000). When you sell, you only pay capital gains tax on the increase from $750,000 forward, not the appreciation that accrued during your parent&apos;s ownership.
            </p>

            <p style={styles.bodyP}>
              To establish the stepped-up basis, you need a credible valuation as of the date of death. Options:
            </p>

            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <b>A formal appraisal</b> ($500 to $700 typically). The most defensible if the IRS ever asks.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>A broker price opinion (BPO) or CMA</b> from an experienced local broker. Less expensive (often free) and acceptable for most family situations.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>The eventual sale price</b>, if the home sells within a year of the date of death. The IRS generally accepts this as a credible date-of-death value, especially in a relatively stable market.
              </li>
            </ul>

            <p style={styles.bodyP}>
              Talk to a CPA or estate attorney about which option best fits your situation. The decision affects future capital gains, and once filed it is hard to unwind.
            </p>

            <h2 style={styles.h2}>Step 4: Clear the personal property</h2>
            <p style={styles.bodyP}>
              This is the step that emotionally breaks the most families I work with. A home full of a parent&apos;s life is hard to walk through, hard to sort, hard to decide about. A few things that make it easier:
            </p>

            <h3 style={styles.h3}>Decide as a family before you start touching things</h3>
            <p style={styles.bodyP}>
              Hold one family meeting (in person or video) before anyone starts moving items. Agree on the high-level approach: are heirlooms being divided by drawing names? Is one sibling buying out the others on certain items? Are charitable donations the default for items no one wants? Decisions made in advance prevent fights over a specific lamp three weeks later.
            </p>

            <h3 style={styles.h3}>Use a professional estate-clearing service for the bulk</h3>
            <p style={styles.bodyP}>
              In Snohomish County there are several reputable estate-clearing companies that can handle the bulk of the work: estate sales, charitable donations, and disposal of the rest. They typically take a percentage of the sale proceeds and can clear a full home in a week. For most families, this is faster, less expensive, and emotionally easier than DIY.
            </p>

            <h3 style={styles.h3}>Take photos of the home, the family, the spaces</h3>
            <p style={styles.bodyP}>
              Before you start clearing, walk through with a camera and photograph the home as your parent kept it. The garden, the kitchen, the workbench. You will not remember the details a year from now, and you will be glad you have them.
            </p>

            <h2 style={styles.h2}>Step 5: Targeted pre-sale repairs and updates</h2>
            <p style={styles.bodyP}>
              An older home that has not been updated in 20 to 30 years will sell, but it will sell to a different buyer pool at a different price than the same home with focused pre-sale prep. The question is whether the family wants to handle the prep or skip it.
            </p>

            <h3 style={styles.h3}>The case for prepping the home</h3>
            <p style={styles.bodyP}>
              In a 2026 Snohomish County market, well-prepared homes are selling for noticeably more than dated homes in the same neighborhood. Paint, lighting, targeted flooring repair, and professional staging can move a home from &quot;needs work, priced for investors&quot; to &quot;move-in ready, priced for owner-occupant buyers.&quot; The owner-occupant buyer pool is typically 5 to 15 percent deeper and 5 to 10 percent more willing to pay full price. See my{' '}
              <Link href="/blog/pre-sale-renovation-roi-snohomish-2026" style={{ color: 'var(--color-clay)' }}>
                Pre-Sale Renovation ROI guide
              </Link>{' '}
              for specifics.
            </p>

            <h3 style={styles.h3}>The case for selling as-is</h3>
            <p style={styles.bodyP}>
              If the family is geographically scattered, time-pressed, or emotionally done, selling as-is to an investor or to an owner-occupant willing to do their own work is a real option. The home sells for less, but it sells fast, with no out-of-pocket prep, and the family is free to move on.
            </p>

            <h3 style={styles.h3}>The concierge option (no out-of-pocket)</h3>
            <p style={styles.bodyP}>
              For qualifying homes, my concierge plan handles the entire pre-sale prep (cleaning, paint, lighting, flooring, staging, photography) and the costs are paid at closing from the sale proceeds. No money out of pocket for the family. This is the path most of the families I work with end up taking, because it removes the cash-flow obstacle and the contractor-management burden during an already hard season.
            </p>

            <h2 style={styles.h2}>Step 6: List, market, and accept offers</h2>
            <p style={styles.bodyP}>
              Once the home is cleared, prepped, and photographed, the actual selling phase moves fast by comparison. In Snohomish County in 2026, a well-prepared home in a popular neighborhood typically goes from list to accepted offer in 10 to 30 days. The contract-to-close period is usually 30 to 45 days. So roughly 2 to 3 months from listing to close.
            </p>

            <p style={styles.bodyP}>
              Things specific to estate sales that matter at this stage:
            </p>

            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <b>Disclose what you know.</b> Washington requires a seller&apos;s disclosure statement. Estate sales often qualify for an exemption because the seller never lived in the home, but it is usually better to disclose what you do know rather than rely on the exemption.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Be ready for inspection requests.</b> Buyers in 2026 expect more requests after inspection than they did in 2022. Budget some negotiation room into the asking price.
              </li>
              <li style={{ marginBottom: '12px' }}>
                <b>Coordinate sibling sign-offs.</b> If multiple family members need to sign the listing agreement or the sale contract, build extra time into every deadline. Coordinated electronic signing makes this much easier.
              </li>
            </ul>

            <h2 style={styles.h2}>Step 7: Close, settle, distribute</h2>
            <p style={styles.bodyP}>
              At closing, the title company disburses proceeds to the estate or trust, and the personal representative or trustee distributes to the heirs per the will or trust terms. Hold back a reserve (10 to 15 percent of proceeds is common) for final estate expenses: final tax filing, attorney fees, unexpected creditor claims. Distribute the rest. Final settlement of the estate often happens 60 to 120 days after the sale closes.
            </p>

            <h2 style={styles.h2}>What I wish more families knew</h2>

            <h3 style={styles.h3}>The home does not need to be empty to list</h3>
            <p style={styles.bodyP}>
              You do not have to finish clearing the entire home before you list. Many families do an initial walkthrough sort (heirlooms claimed, donations identified), then list with select staging in place, and finish the clear-out during the contract-to-close period. This shortens the total timeline by 4 to 8 weeks.
            </p>

            <h3 style={styles.h3}>Grief and decisions do not mix well</h3>
            <p style={styles.bodyP}>
              The 30 days right after a parent dies are not the time to make irreversible decisions about the home. Take a beat. Talk to a broker, a probate attorney, and a CPA, but do not feel pressure to list immediately. The home is not going anywhere.
            </p>

            <h3 style={styles.h3}>A walkthrough does not commit you to anything</h3>
            <p style={styles.bodyP}>
              I do free, no-obligation walkthroughs for families thinking about an estate sale. We talk through the home, the rough value, the prep options, and the timeline. You walk away with information. If you decide to list with me later, great. If you decide to wait, list with someone else, or sell to a family member, that is also fine.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, margin: '0 0 8px', color: 'var(--color-cream)' }}>
                Walking through this with your family?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '0 0 18px', color: 'rgba(248,245,240,0.85)' }}>
                I am a Senior Move Specialist and have helped many Snohomish County families through estate sales. A walkthrough costs you nothing, and you walk away with a plan.
              </p>
              <Link href="/contact" style={styles.ctaButton}>
                Reach out
              </Link>
            </div>

            <h2 style={styles.h2}>Related reading</h2>
            <ul style={{ ...styles.bodyP, paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/senior-downsizing" style={{ color: 'var(--color-clay)' }}>
                  Senior Downsizing in Snohomish County: A Compassionate Walkthrough
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/sres-realtor-snohomish-county" style={{ color: 'var(--color-clay)' }}>
                  What to Look For in a Senior Move Specialist
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/pre-sale-renovation-roi-snohomish-2026" style={{ color: 'var(--color-clay)' }}>
                  Should You Renovate Before Selling? A 2026 ROI Reality Check
                </Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/blog/how-much-is-my-home-worth-snohomish-county" style={{ color: 'var(--color-clay)' }}>
                  How Much Is My Home Worth in Snohomish County?
                </Link>
              </li>
            </ul>

            <p style={{ ...styles.bodyP, fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '40px', borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
              <em>This article is general information for Snohomish County families and is not legal, tax, or financial advice. Probate, title, tax, and Medicaid Estate Recovery rules in Washington are state-specific and change. Consult a probate attorney and a CPA for your situation. Kim Pelham is a licensed real estate broker in Washington State and a Senior Move Specialist, brokered by Katrina Eileen Real Estate.</em>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
