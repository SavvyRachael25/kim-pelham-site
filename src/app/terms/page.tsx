import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | The Pelham Group NW',
  description: 'Terms and Conditions for use of The Pelham Group NW website.',
};

const LEGAL_NAME = 'The Pelham Group NW';
const CONTACT_EMAIL = 'hello@thepelhamgroupnw.com';
const SITE_URL = 'https://thepelhamgroupnw.com';
const EFFECTIVE_DATE = 'April 17, 2026';

export default function TermsPage() {
  return (
    <>
      <Nav />

      {/* Page header */}
      <section
        style={{
          background: '#2F5233',
          padding: '120px 24px 60px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.375rem',
            color: '#B8845C',
            marginBottom: '10px',
          }}
        >
          legal
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#F8F5F0',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Terms &amp; Conditions
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'rgba(248,245,240,0.65)',
            marginTop: '14px',
          }}
        >
          Effective date: {EFFECTIVE_DATE}
        </p>
      </section>

      {/* Content */}
      <main
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          padding: '60px 24px 80px',
          fontFamily: 'var(--font-body)',
          color: '#333',
          lineHeight: 1.8,
        }}
      >
        <Section>
          <p>
            Welcome to {LEGAL_NAME}. By accessing or using{' '}
            <a href={SITE_URL} style={linkStyle}>{SITE_URL}</a> (the &ldquo;Site&rdquo;), you agree
            to be bound by these Terms &amp; Conditions (&ldquo;Terms&rdquo;). Please read them
            carefully before using the Site.
          </p>
        </Section>

        <Section title="1. Use of the Site">
          <p>
            This Site is provided for informational purposes related to real estate services in
            Snohomish County and surrounding areas of Washington State. You agree to use the Site
            only for lawful purposes and in a manner consistent with these Terms.
          </p>
          <p>You agree not to:</p>
          <ul style={ulStyle}>
            <li>Use the Site in any way that violates applicable federal, state, or local law.</li>
            <li>Transmit unsolicited commercial communications through the Site.</li>
            <li>Attempt to gain unauthorized access to any portion of the Site or its related systems.</li>
            <li>Use automated tools to scrape or collect data from the Site without our express written permission.</li>
          </ul>
        </Section>

        <Section title="2. Not Legal or Financial Advice">
          <p>
            The content on this Site is provided for general informational purposes only. Nothing on
            this Site constitutes legal, financial, investment, or professional real estate advice
            specific to your situation. You should consult a licensed professional before making any
            real estate, legal, or financial decision.
          </p>
        </Section>

        <Section title="3. Real Estate Information">
          <p>
            Real estate listings, market data, and other property information on this Site are
            believed to be accurate but are not guaranteed. Listing data may be sourced from the
            Northwest Multiple Listing Service (NWMLS) and is subject to change without notice.
            {LEGAL_NAME} makes no warranty as to the accuracy, completeness, or timeliness of any
            listing information.
          </p>
        </Section>

        <Section title="4. Intellectual Property">
          <p>
            All content on this Site, including text, photographs, graphics, logos, and design
            elements, is the property of {LEGAL_NAME} or its content suppliers and is protected by
            applicable copyright and trademark laws. You may not reproduce, distribute, or create
            derivative works from any Site content without our prior written permission.
          </p>
        </Section>

        <Section title="5. Text Message Communications">
          <p>
            If you opt in to receive text messages from us, you agree to the SMS terms described in
            our <a href="/privacy" style={linkStyle}>Privacy Policy</a>, including message frequency,
            applicable rates, and opt-out instructions. You can opt out at any time by replying{' '}
            <strong>STOP</strong>.
          </p>
        </Section>

        <Section title="6. Third-Party Links">
          <p>
            This Site may contain links to third-party websites (such as MLS listings or partner
            platforms). These links are provided for your convenience only. We have no control over
            the content of those sites and accept no responsibility for them or for any loss or
            damage that may arise from your use of them.
          </p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>
            THE SITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL
            BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {LEGAL_NAME.toUpperCase()} AND ITS
            AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THIS SITE OR ANY INFORMATION
            CONTAINED HEREIN, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms are governed by the laws of the State of Washington, without regard to its
            conflict of law provisions. Any dispute arising under these Terms shall be resolved
            exclusively in the state or federal courts located in Snohomish County, Washington.
          </p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this
            page with a revised effective date. Continued use of the Site after any changes
            constitutes your acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have questions about these Terms, please contact us:</p>
          <address style={{ fontStyle: 'normal', marginTop: '8px' }}>
            <strong>{LEGAL_NAME}</strong><br />
            Email: <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>
          </address>
        </Section>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      {title && (
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.35rem',
            fontWeight: 600,
            color: '#2F5233',
            marginBottom: '12px',
            paddingBottom: '8px',
            borderBottom: '1.5px solid #E8E3DA',
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

const linkStyle: React.CSSProperties = {
  color: '#2F5233',
  textDecoration: 'underline',
};

const ulStyle: React.CSSProperties = {
  paddingLeft: '20px',
  marginTop: '8px',
  marginBottom: '12px',
};
