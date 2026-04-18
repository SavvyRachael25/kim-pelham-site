import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | The Pelham Group NW',
  description: 'Privacy Policy for The Pelham Group NW — how we collect, use, and protect your personal information.',
};

const LEGAL_NAME = 'The Pelham Group NW';
const CONTACT_EMAIL = 'hello@thepelhamgroupnw.com';
const CONTACT_PHONE = '(425) 472-3623';
const SITE_URL = 'https://thepelhamgroupnw.com';
const EFFECTIVE_DATE = 'April 17, 2026';

export default function PrivacyPage() {
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
          Privacy Policy
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
            {LEGAL_NAME} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{' '}
            <a href={SITE_URL} style={linkStyle}>{SITE_URL}</a> (the &ldquo;Site&rdquo;). This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our Site or contact us. Please read it carefully.
          </p>
        </Section>

        <Section title="1. Information We Collect">
          <p>We may collect the following categories of personal information:</p>
          <ul style={ulStyle}>
            <li><strong>Contact information:</strong> name, email address, phone number, and mailing address you provide via our contact form or newsletter signup.</li>
            <li><strong>Inquiry details:</strong> information about your real estate needs that you voluntarily share with us.</li>
            <li><strong>Consent records:</strong> when you opt in to receive text messages, we record your consent language, the date and time of opt-in, and your IP address at the time of submission to comply with federal telecommunications regulations.</li>
            <li><strong>Usage data:</strong> pages visited, browser type, device type, referring URL, and other standard web analytics data collected automatically.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul style={ulStyle}>
            <li>Respond to your inquiries and provide real estate services.</li>
            <li>Send you property updates, market reports, and other communications you have requested.</li>
            <li>Send marketing and transactional text messages if you have provided explicit SMS consent (see Section 4).</li>
            <li>Improve our Site and services.</li>
            <li>Comply with applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and A2P 10DLC carrier requirements.</li>
          </ul>
        </Section>

        <Section title="3. Sharing Your Information">
          <p>
            We do not sell, rent, or trade your personal information to third parties for their marketing
            purposes. We may share your information with:
          </p>
          <ul style={ulStyle}>
            <li><strong>Service providers:</strong> trusted platforms (including our CRM provider, GoHighLevel) that help us manage contacts and communications. These providers are contractually obligated to protect your data.</li>
            <li><strong>Real estate platforms:</strong> as required in connection with property transactions you initiate.</li>
            <li><strong>Legal compliance:</strong> when required by law, court order, or governmental authority.</li>
          </ul>
          <p>
            <strong>No mobile information</strong> (including phone numbers and SMS consent data) will be
            shared with third parties or affiliates for marketing or promotional purposes. SMS opt-in data
            and consent are not shared with any third party.
          </p>
        </Section>

        <Section title="4. Text Message Communications (SMS/TCPA)">
          <p>
            If you provide your phone number and check the SMS consent box on our contact form, you agree
            to receive text messages from {LEGAL_NAME} at the number you provide. Specifically:
          </p>
          <ul style={ulStyle}>
            <li><strong>Marketing messages:</strong> property updates, market news, promotional content. Message frequency varies.</li>
            <li><strong>Transactional messages:</strong> appointment reminders, service updates, and account-related notifications.</li>
          </ul>
          <p><strong>SMS consent is not required</strong> to receive our real estate services or any other benefit.</p>
          <p>
            <strong>Message &amp; data rates may apply.</strong> Carrier fees may apply depending on your
            mobile plan.
          </p>
          <p>
            <strong>To opt out:</strong> reply <strong>STOP</strong> to any text message at any time. You
            will receive a one-time confirmation and no further messages will be sent.
          </p>
          <p>
            <strong>For help:</strong> reply <strong>HELP</strong> or contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.
          </p>
          <p>
            We maintain records of all SMS opt-in consents, including the timestamp, IP address, and the
            exact consent language displayed at the time of opt-in, as required by the TCPA and carrier
            A2P 10DLC regulations.
          </p>
        </Section>

        <Section title="5. Cookies and Analytics">
          <p>
            Our Site may use cookies and similar tracking technologies for analytics and functionality
            purposes. You can control cookie settings through your browser. We do not use cookies to
            serve third-party advertising.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain your personal information for as long as necessary to provide services, comply with
            our legal obligations, resolve disputes, and enforce our agreements. SMS consent records are
            retained for a minimum of four (4) years as required by TCPA regulations.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul style={ulStyle}>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your information (subject to legal retention requirements).</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your
            personal information. However, no internet transmission is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our Site is not directed to individuals under the age of 18. We do not knowingly collect
            personal information from minors.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with
            an updated effective date. We encourage you to review this policy periodically.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <address style={{ fontStyle: 'normal', marginTop: '8px' }}>
            <strong>{LEGAL_NAME}</strong><br />
            Email: <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a><br />
            Phone: <a href={`tel:${CONTACT_PHONE.replace(/\D/g, '')}`} style={linkStyle}>{CONTACT_PHONE}</a>
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
