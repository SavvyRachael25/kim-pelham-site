'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
import GuideGate from '@/components/GuideGate';

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
  list: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
    paddingLeft: '24px',
  } as const,
  callout: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
  } as const,
  sources: {
    background: 'var(--color-cream)',
    padding: '28px 32px',
    borderRadius: '6px',
    margin: '48px 0 0',
  } as const,
  sourceItem: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    lineHeight: '1.7',
    marginBottom: '6px',
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
  link: { color: 'var(--color-clay)' } as const,
};

const faqs = [
  {
    question: 'How much does a home in Everett cost?',
    answer:
      'Zillow reported a typical Everett home value of $648,066 as of July 31, 2026. Realtor.com’s June 2026 median listing price was $629,995. These are different measurements and should not be treated as interchangeable.',
  },
  {
    question: 'Are there condos and townhomes in Everett?',
    answer:
      'Yes. Everett’s official planning documents identify single-family homes, townhouses, multifamily housing, apartments and condominiums among the city’s housing options.',
  },
  {
    question: 'Can you take a train from Everett to Seattle?',
    answer:
      'Yes. Sound Transit’s Sounder N Line provides scheduled weekday commuter rail service between Everett and Seattle. Riders should check the current schedule because service times can change.',
  },
  {
    question: 'Does light rail go to Everett?',
    answer:
      'Not yet. Sound Transit currently plans light rail to SW Everett Industrial Center for 2037 and the northern Everett stations, including Everett Station, for 2041.',
  },
  {
    question: 'Does Everett have waterfront access?',
    answer:
      'Yes. City parks include saltwater access at Howarth Park, while the Grand Avenue Park Bridge connects the city to the Port of Everett waterfront. Seasonal ferry service also provides access to Jetty Island.',
  },
  {
    question: 'How do I find the schools for an Everett house?',
    answer:
      'Verify the exact address through the applicable school district. Everett Public Schools publishes attendance-boundary information and notes that boundaries can be modified.',
  },
  {
    question: 'Is Everett walkable?',
    answer:
      'It depends heavily on the location. City planning documents describe Metro Everett and several commercial corridors as walkable and transit-served, while noting that some residential areas have limited sidewalk coverage.',
  },
  {
    question: 'What is the best Everett neighborhood to buy in?',
    answer:
      'There is no objective best neighborhood. The right fit depends on your budget, housing needs, commute, preferred amenities and other priorities. Comparing neighborhoods in person is more useful than relying on a general ranking.',
  },
];

const sources = [
  'Zillow: Everett, WA Housing Market, 2026 Home Prices and Trends',
  'Realtor.com: Everett, WA Housing Market and Rental Trends',
  'Realtor.com: Everett, WA Homes for Sale and Real Estate',
  'U.S. Census Bureau QuickFacts: Everett city, Washington',
  'City of Everett: Comprehensive Planning',
  'City of Everett: Parks, Trails and Open Space',
  'Everett Public Schools: District Boundary Maps',
  'Everett Public Schools: Highest Graduation Rate',
  'Everett Public Schools: Washington School Recognition Program honors',
  'Everett Public Schools: Choice Programs',
  'Community Transit: Swift',
  'Sound Transit: Everett Link Extension timeline',
];

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Living in Everett, WA"
          subtitle="By Kim Pelham · August 30, 2026 · 10 min read"
          image="/images/neighborhood-01-everett-marina.jpg"
          imageAlt="The Everett marina on Port Gardner Bay"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 700 }}>
              A home buyer&apos;s neighborhood guide.
            </p>
            <p style={styles.bodyP}>
              Everett offers home buyers an unusual mix of city conveniences, established residential neighborhoods, waterfront recreation, parks and regional transit. Housing ranges from single-family homes to condos, townhomes and multifamily development. Buyers should compare neighborhoods carefully, because housing, transit access, schools, sidewalks and everyday amenities can vary considerably across the city.
            </p>

            <h2 style={styles.h2}>Where Is Everett, Washington?</h2>
            <p style={styles.bodyP}>
              Everett is the largest city in Snohomish County. The U.S. Census Bureau estimated its population at 113,567 on July 1, 2025, compared with 110,629 at the 2020 Census. The city covers about 33.2 square miles of land.
            </p>
            <p style={styles.bodyP}>
              For home buyers, Everett is not one single type of community. The city includes older neighborhoods near downtown, areas overlooking Port Gardner Bay, neighborhoods around Silver Lake, residential areas near major commercial corridors, and areas near the Snohomish River.
            </p>
            <p style={styles.bodyP}>
              City planning documents describe residential areas ranging from primarily single-family neighborhoods to apartment and condominium developments. Commercial and mixed-use development is concentrated in places including Metro Everett, Broadway, Evergreen Way, Everett Mall Way and the Port of Everett.
            </p>
            <p style={styles.bodyP}>
              That variety is one of the most important things to understand when shopping for a home here. Two Everett addresses can offer very different housing, transportation and lifestyle options.
            </p>

            <h2 style={styles.h2}>Everett Housing Market Snapshot</h2>
            <p style={styles.bodyP}>
              Housing statistics need some explanation because different real estate websites measure different things.
            </p>
            <p style={styles.bodyP}>
              As of July 31, 2026, Zillow&apos;s typical home value for Everett was $648,066, down 1.6% from a year earlier. Zillow calls this its Home Value Index, or ZHVI. It is a measure of typical home values based on Zillow&apos;s methodology; it is not the median price of homes currently listed for sale. Zillow also reported 414 homes in for-sale inventory and 166 new listings for July.
            </p>
            <p style={styles.bodyP}>
              Zillow reported 13 median days to pending in July 2026. That measures the time until a listing goes pending and should not be confused with days on market.
            </p>
            <p style={styles.bodyP}>
              Realtor.com&apos;s June 2026 market report put Everett&apos;s median listing price at $629,995. This means half of the listed properties represented in that dataset were priced above the median and half below it. Realtor.com also reported a median sold price of $629,000, 610 active listings and a median 34 days on market for June.
            </p>
            <p style={styles.bodyP}>
              Realtor.com&apos;s live Everett search page is newer and currently displays a median listing price of approximately $592,475 and 46 average days on market. The difference illustrates why buyers should date every market statistic and avoid treating a changing online number as a permanent description of Everett.
            </p>
            <div style={styles.callout}>
              <p style={{ ...styles.bodyP, marginBottom: 0 }}>
                The practical takeaway is simple: Everett does not have one meaningful home price. Price varies by property type, condition, lot, location and neighborhood. Citywide statistics are useful for understanding the broad market, but they are not a substitute for comparing similar homes in the part of Everett where you actually want to live.
              </p>
            </div>

            <h2 style={styles.h2}>What Types of Homes Will You Find in Everett?</h2>
            <p style={styles.bodyP}>
              Everett offers a mix of housing rather than one dominant option.
            </p>
            <p style={styles.bodyP}>
              The City&apos;s 2044 Comprehensive Plan identifies single-family homes, townhouses, multifamily housing and mixed-use development among Everett&apos;s housing types. City transportation planning also describes residential areas ranging from suburban-style single-family neighborhoods to apartment complexes and condominiums.
            </p>
            <p style={styles.bodyP}>
              Older architecture is also part of Everett&apos;s built environment. The city&apos;s historic register includes buildings dating from Everett&apos;s early development, including the Everett Theatre from 1901 and other structures from the late 1800s and early 1900s.
            </p>
            <p style={styles.bodyP}>
              For buyers, the better question is not simply what kind of homes Everett has. It is which part of Everett has the combination of home, lot, location and daily routine that works for you.
            </p>

            <h2 style={styles.h2}>Getting Around Everett and Commuting</h2>
            <p style={styles.bodyP}>
              Everett is served by several forms of public transportation, but access varies by neighborhood.
            </p>
            <p style={styles.bodyP}>
              Everett Transit operates local routes connecting locations including Everett Station, Everett Mall Station, Seaway Transit Center, College Station, the waterfront, Airport Road and other parts of the city.
            </p>
            <p style={styles.bodyP}>
              Community Transit&apos;s Swift Blue Line runs between Everett Station and Sound Transit&apos;s Shoreline North/185th Station, where riders can connect with regional light rail. Swift Green serves Seaway Transit Center near the Boeing-Everett area and runs toward Canyon Park in Bothell.
            </p>
            <p style={styles.bodyP}>
              Everett Station also provides Sounder commuter rail service. Under the published March 27 to August 28, 2026 schedule, weekday morning Sounder N Line trains travel from Everett to Seattle&apos;s King Street Station. Scheduled train time is about 59 minutes, although actual service can vary and schedules should always be checked before relying on them for a commute.
            </p>
            <p style={styles.bodyP}>
              Light rail does not currently reach Everett. Sound Transit&apos;s current plan calls for the Everett Link Extension to reach the SW Everett Industrial Center in 2037 and the SR 526/Evergreen and Everett Station stops in 2041. Those are future plans, not existing service.
            </p>
            <p style={styles.bodyP}>
              If commuting matters to your purchase, test the actual trip from any home you are considering. Do it at the time of day you normally travel rather than relying on a generic online commute estimate.
            </p>

            <h2 style={styles.h2}>Parks, Trails and Waterfront Recreation</h2>
            <p style={styles.bodyP}>
              Outdoor access is a major part of Everett&apos;s geography.
            </p>
            <p style={styles.bodyP}>
              The City says its park system contains nearly 1,000 acres of park land, including neighborhood parks, community parks, natural areas, trails and recreational facilities.
            </p>
            <p style={styles.bodyP}>
              Forest Park includes trails, a playground, picnic facilities, fields and recreational courts, although some sport facilities are currently affected by construction.
            </p>
            <p style={styles.bodyP}>
              Howarth Park provides trails, viewpoints, a playground and beach access by a pedestrian bridge over the railroad tracks. Part of the beach is designated for off-leash dogs.
            </p>
            <p style={styles.bodyP}>
              American Legion Memorial Park sits above Port Gardner Bay and includes trails, sports facilities, a playground, an arboretum and viewpoints toward the waterfront and islands.
            </p>
            <p style={styles.bodyP}>
              On the east side of the city, Lowell Riverfront Park connects to a 1.75-mile paved multi-use trail along the Snohomish River and includes fishing, an off-leash area and viewpoints. A portion of the trail is undergoing improvements during 2026, so current access should be checked before visiting.
            </p>
            <p style={styles.bodyP}>
              Everett&apos;s waterfront is also connected to the city by the Grand Avenue Park Bridge, which provides pedestrian access from Grand Avenue Park across West Marine View Drive and the railroad corridor to Port of Everett property.
            </p>
            <p style={styles.bodyP}>
              During the 2026 season, passenger ferry service to Jetty Island runs from July 8 through September 6 on specified Wednesdays through Sundays. Because that service is seasonal, buyers interested in Jetty Island should check the current year&apos;s schedule.
            </p>

            <h2 style={styles.h2}>Shopping, Dining and Everyday Conveniences</h2>
            <p style={styles.bodyP}>
              Everett&apos;s commercial areas are spread across the city rather than concentrated in one place.
            </p>
            <p style={styles.bodyP}>
              City planning documents identify Metro Everett, Broadway, Evergreen Way, Everett Mall Way and the Port of Everett among the city&apos;s commercial and mixed-use corridors.
            </p>
            <p style={styles.bodyP}>
              The Port of Everett waterfront also includes restaurants, offices and other visitor-oriented businesses, with additional mixed-use development planned and underway at Waterfront Place.
            </p>
            <p style={styles.bodyP}>
              This gives buyers choices, but it also makes location important. Before choosing a home, map the places you expect to use every week: groceries, medical care, work, parks, transit, restaurants and other services. Then drive the route yourself.
            </p>

            <h2 style={styles.h2}>What Should Buyers Know About Everett Schools?</h2>
            <p style={styles.bodyP}>
              Schools are an important consideration for many Everett home buyers. Everett Public Schools has several measurable indicators that may attract buyers who place a high priority on education.
            </p>
            <p style={styles.bodyP}>
              The district reported a 96.3% four-year graduation rate for the Class of 2025, the highest graduation rate in district history. Washington&apos;s Office of Superintendent of Public Instruction also reports the 96.3% rate in its 2025 student-outcomes data for Everett Public Schools.
            </p>
            <p style={styles.bodyP}>
              Individual schools within the district have also received statewide recognition. For the 2024 to 2025 school year, Cedar Wood Elementary, Mill Creek Elementary and Heatherwood Middle School were honored through the Washington School Recognition Program. Only 16% of Washington schools received recognition through the program that year.
            </p>
            <p style={styles.bodyP}>
              Everett Public Schools also offers a range of educational options, including choice programs and opportunities that require separate applications.
            </p>
            <p style={styles.bodyP}>
              However, school assignment varies by address. Everett Public Schools maintains official attendance-boundary information and notes that boundaries can change. Buyers should verify the exact property address directly with the applicable school district before making a purchase decision based on schools.
            </p>
            <p style={styles.bodyP}>
              Rather than relying on general school rankings, buyers may also want to review graduation rates, academic programs, extracurricular options, transportation, school size and other factors that matter to their household.
            </p>

            <h2 style={styles.h2}>Practical Advantages and Considerations</h2>
            <p style={styles.bodyP}>
              One advantage of searching in Everett is the range of settings available within one city. A buyer can compare established residential streets, denser urban areas, waterfront-oriented locations and neighborhoods near major commercial and employment corridors.
            </p>
            <p style={styles.bodyP}>
              The trade-off is that buyers need to investigate at the property level.
            </p>
            <p style={styles.bodyP}>
              Sidewalk coverage, for example, is not uniform. Everett&apos;s transportation planning documents specifically note that some neighborhoods are not well served by sidewalks, particularly parts of southwest Everett.
            </p>
            <p style={styles.bodyP}>
              Transportation access also differs. A home near Everett Station may create a very different transit routine from a home farther south or west.
            </p>
            <p style={styles.bodyP}>
              Water, slopes, railroads, traffic, future development and zoning can also matter depending on the property. Everett is actively planning for future housing, transportation and population growth through its 2044 Comprehensive Plan.
            </p>
            <p style={styles.bodyP}>
              None of these factors automatically makes one neighborhood better than another. They are reasons to investigate the particular home and location rather than buying from a neighborhood description alone.
            </p>

            <h2 style={styles.h2}>Questions to Investigate Before Buying</h2>
            <p style={styles.bodyP}>
              When I tour Everett homes with buyers, I recommend looking beyond the house itself.
            </p>
            <ul style={styles.list}>
              <li>Visit the neighborhood at more than one time of day.</li>
              <li>Drive your normal work route.</li>
              <li>Check street parking if you need it.</li>
              <li>Walk the blocks you would actually use.</li>
              <li>Listen for road, aircraft and railroad activity where relevant.</li>
              <li>Find your grocery store and preferred services.</li>
            </ul>
            <p style={styles.bodyP}>
              For the property itself, verify school assignment, zoning, permits, utilities, property boundaries, HOA documents when applicable, and any issues revealed by title, inspection or other due diligence.
            </p>
            <p style={styles.bodyP}>
              Most important, decide what your everyday life would look like there. A home can meet every item on a property checklist and still be in the wrong location for the way you actually live.
            </p>
            <p style={styles.bodyP}>
              If you want to go a level deeper on specific parts of the city, that guide is here:{' '}
              <Link href="/blog/everett-neighborhoods-buyers-guide" style={styles.link}>
                Best Neighborhoods in Everett WA: An Honest Buyer&apos;s Guide
              </Link>
              .
            </p>

            <h2 style={styles.h2}>Thinking About Buying a Home in Everett?</h2>
            <p style={styles.bodyP}>
              I have been in real estate for 17 years and a Snohomish County broker since 2015, and Everett is a market where looking at the details really matters. Two homes with an Everett address can offer very different daily lives.
            </p>
            <p style={styles.bodyP}>
              If you are considering Everett, I am happy to help you narrow the search, tour different parts of the city and understand what you are buying before you make an offer. No pressure. The goal is simply to find the home and location that make sense for you.
            </p>

            <div style={styles.sources}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-forest)', marginBottom: '14px' }}>
                Sources
              </p>
              {sources.map((s) => (
                <p key={s} style={styles.sourceItem}>{s}</p>
              ))}
            </div>

            <GuideGate
              guide="living-in-everett"
              title="Take the designed version with you"
              blurb="Everything above, laid out as an 8-page guide you can print: the market numbers with their dates, the transit comparison, the parks, the schools, and a pre-offer checklist with real checkboxes for the walkthrough."
            />

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Looking at Everett?
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                I take a maximum of two active buyers at a time, so you get my full attention while we compare parts of the city and figure out what fits your daily life.
              </p>
              <Link href="/buyers" style={styles.ctaButton}>
                Start a conversation
              </Link>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
                Or call or text me directly: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
              </p>
            </div>
          </div>
        </article>

        <FAQSection title="Living in Everett: quick answers" faqs={faqs} backgroundColor="var(--color-cream)" />
      </main>
      <Footer />
    </>
  );
}
