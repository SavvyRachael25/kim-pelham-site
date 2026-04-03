'use client';

const items = [
  "Everett born & raised",
  "I stage it myself",
  "Two buyers max",
  "Boots not heels",
  "Your neighbor, not your salesperson",
  "14 years in Snohomish County",
  "I answer my own phone",
  "Let's find your home",
];

export default function Marquee() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#2F5233',
        padding: '40px 0',
        overflow: 'hidden',
        position: 'relative',
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'scroll 40s linear infinite',
          whiteSpace: 'nowrap',
          gap: '60px',
        }}
      >
        {/* First set */}
        {items.map((item, idx) => (
          <span
            key={`first-${idx}`}
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '24px',
              color: '#FFFFFF',
              flexShrink: 0,
              minWidth: 'max-content',
            }}
          >
            ✦ {item}
          </span>
        ))}

        {/* Duplicate for seamless loop */}
        {items.map((item, idx) => (
          <span
            key={`second-${idx}`}
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '24px',
              color: '#FFFFFF',
              flexShrink: 0,
              minWidth: 'max-content',
            }}
          >
            ✦ {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 30px));
          }
        }

        @media (max-width: 640px) {
          span {
            font-size: 16px;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
