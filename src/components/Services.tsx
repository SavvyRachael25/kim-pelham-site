'use client';

import Link from 'next/link';

const services = [
  {
    icon: 'S',
    title: 'Staging',
    description: 'with my own two hands',
    href: '/services/staging',
  },
  {
    icon: 'B',
    title: 'Buying',
    description: "you're not a number",
    href: '/services/buying',
  },
  {
    icon: 'R',
    title: 'Repairs',
    description: "I've got contractor friends",
    href: '/services/repairs',
  },
  {
    icon: 'D',
    title: 'Downsizing',
    description: 'your pace, not mine',
    href: '/services/downsizing',
  },
];

export default function Services() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px',
        borderTop: '1px solid #E8E3DA',
        borderBottom: '1px solid #E8E3DA',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
        }}
      >
        {services.map((service, idx) => (
          <Link key={idx} href={service.href}>
            <div
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#2F5233',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '40px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                  }}
                >
                  {service.icon}
                </p>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#2C2C2C',
                  margin: '0 0 12px 0',
                  letterSpacing: '0.5px',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '16px',
                  color: '#B8845C',
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
