'use client';

/**
 * A2PConsent — Reusable SMS consent block for A2P 10DLC carrier compliance.
 *
 * CARRIER REQUIREMENT: Checkbox text is verbatim from TCR/carrier regulations.
 * DO NOT edit the checkbox copy without re-verifying against current A2P rules.
 * Both checkboxes must be optional (no `required` attribute) per spec.
 *
 * Usage:
 *   <A2PConsent onChange={({ marketing, transactional }) => setState(...)} />
 *
 * For email-only forms (no phone capture), set variant="email-only" to render
 * a single marketing checkbox instead of two.
 */

export interface A2PConsentState {
  marketing: boolean;
  transactional: boolean;
}

interface A2PConsentProps {
  onChange: (consent: A2PConsentState) => void;
  variant?: 'full' | 'email-only';
  value?: A2PConsentState;
}

const LEGAL_NAME = process.env.NEXT_PUBLIC_LEGAL_BUSINESS_NAME ?? 'The Pelham Group NW';
const PRIVACY_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL ?? '/privacy';
const TERMS_URL = process.env.NEXT_PUBLIC_TERMS_URL ?? '/terms';

/** Verbatim from TCR carrier requirements — do not alter copy */
const MARKETING_TEXT = `I consent to receive marketing text messages from ${LEGAL_NAME} at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.`;

/** Verbatim from TCR carrier requirements — do not alter copy */
const TRANSACTIONAL_TEXT = `I consent to receive non-marketing text messages from ${LEGAL_NAME} related to transactional messages on your account, orders, services, appointment reminders, order confirmations, account notifications, including special offers, discounts, and new product updates. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.`;

const checkboxStyle: React.CSSProperties = {
  width: '18px',
  height: '18px',
  minWidth: '18px',
  accentColor: '#2F5233',
  cursor: 'pointer',
  marginTop: '2px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '14px',
  color: '#444',
  lineHeight: 1.6,
  cursor: 'pointer',
};

const dividerStyle: React.CSSProperties = {
  borderTop: '1px solid #E8E3DA',
  margin: '16px 0',
};

export default function A2PConsent({ onChange, variant = 'full', value }: A2PConsentProps) {
  const marketing = value?.marketing ?? false;
  const transactional = value?.transactional ?? false;

  const handleMarketing = (checked: boolean) => {
    onChange({ marketing: checked, transactional: variant === 'email-only' ? false : transactional });
  };

  const handleTransactional = (checked: boolean) => {
    onChange({ marketing, transactional: checked });
  };

  return (
    <div
      style={{
        background: '#FAFAF8',
        border: '1px solid #E8E3DA',
        borderRadius: '4px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
      role="group"
      aria-label="SMS and marketing consent"
    >
      {/* Marketing consent checkbox */}
      <label
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start',
        }}
      >
        <input
          type="checkbox"
          id="consent-marketing"
          checked={marketing}
          onChange={(e) => handleMarketing(e.target.checked)}
          style={checkboxStyle}
          // NOT required — A2P spec mandates optional consent
        />
        <span style={labelStyle}>
          {MARKETING_TEXT}
        </span>
      </label>

      {/* Transactional consent checkbox — full variant only */}
      {variant === 'full' && (
        <>
          <div style={dividerStyle} />
          <label
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
            }}
          >
            <input
              type="checkbox"
              id="consent-transactional"
              checked={transactional}
              onChange={(e) => handleTransactional(e.target.checked)}
              style={checkboxStyle}
              // NOT required — A2P spec mandates optional consent
            />
            <span style={labelStyle}>
              {TRANSACTIONAL_TEXT}
            </span>
          </label>
        </>
      )}

      {/* Legal links — must be visible on render, not behind a toggle */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: '#666',
          margin: '4px 0 0 0',
          lineHeight: 1.5,
        }}
      >
        By submitting this form, you agree to our{' '}
        <a
          href={PRIVACY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2F5233', textDecoration: 'underline' }}
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href={TERMS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2F5233', textDecoration: 'underline' }}
        >
          Terms &amp; Conditions
        </a>
        .
      </p>
    </div>
  );
}

/** Export verbatim checkbox text for server-side consent-record logging */
export { MARKETING_TEXT, TRANSACTIONAL_TEXT, LEGAL_NAME };
