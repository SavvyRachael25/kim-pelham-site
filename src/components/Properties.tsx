'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const properties = [
  {
    id: 1,
    image: '/images/property-01-everett-home-exterior.jpg',
    tag: 'Just Listed!',
    title: 'Updated Craftsman in Everett',
    details: '4 bed / 2.5 bath — Original millwork meets modern kitchen.',
    annotation: 'I love the porch on this one — perfect for coffee mornings',
  },
  {
    id: 2,
    image: '/images/property-02-mill-creek-home.jpg',
    tag: 'Open House Sat!',
    title: 'Forest-Backed in Mill Creek',
    details: '3 bed / 2 bath — Private wooded lot, updated bathrooms.',
    annotation: "The backyard backs up to trails — you'll never get bored",
  },
  {
    id: 3,
    image: '/images/property-03-lake-stevens-waterfront.jpg',
    tag: 'Under Contract',
    tagBg: '#2F5233',
    title: 'Lake Stevens Waterfront',
    details: '5 bed / 3 bath — 80ft of lakefront, dock, boat lift.',
    annotation: 'Went under contract in 9 days. That dock, though.',
  },
];

interface PropertyCardProps {
  property: (typeof properties)[0];
}

function PropertyCard({ property }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden',
        }}
      >
        <Image
          src={property.image}
          alt={property.title}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        />

        {/* Tag */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: property.tagBg || '#B8845C',
            color: '#FFFFFF',
            padding: '8px 12px',
            borderRadius: '3px',
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {property.tag}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', backgroundColor: '#FFFFFF' }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: '0 0 8px 0',
          }}
        >
          {property.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            color: '#9B9B9B',
            margin: '0 0 16px 0',
            lineHeight: 1.6,
          }}
        >
          {property.details}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '14px',
            color: '#B8845C',
            margin: 0,
          }}
        >
          {property.annotation}
        </p>
      </div>
    </div>
  );
}

export default function Properties() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-handwritten)',
                fontSize: '18px',
                color: '#B8845C',
                margin: '0 0 8px 0',
              }}
            >
              recently listed
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '40px',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: 0,
              }}
            >
              Featured Properties
            </h2>
          </div>
          <Link href="/properties">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#B8845C',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              View All Listings
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
