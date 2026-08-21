'use client';

import { useEffect } from 'react';

/*
  Site-wide Umami custom events via one delegated click listener.

  Events (names are the dashboard's vocabulary — keep them stable):
    call-click     — any tel: link (Kim's click-to-call, the #1 conversion)
    sms-click      — any sms: link
    email-click    — any mailto: link
    sellers-cta    — internal link to /sellers (equity report funnel entry)
    buyers-cta     — internal link to /buyers
    outbound-click — link leaving the site (Zillow, GBP, event links, etc.)

  Uses capture phase so events fire before navigation. umami loads
  lazyOnload, so every call is guarded; clicks before it loads are dropped
  (acceptable — they're within the first seconds of the first pageview).
*/

type UmamiGlobal = { track: (event: string, data?: Record<string, string>) => void };

function track(event: string, data?: Record<string, string>) {
  const umami = (window as unknown as { umami?: UmamiGlobal }).umami;
  umami?.track(event, data);
}

export default function UmamiEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      const page = window.location.pathname;

      if (href.startsWith('tel:')) {
        track('call-click', { page });
      } else if (href.startsWith('sms:')) {
        track('sms-click', { page });
      } else if (href.startsWith('mailto:')) {
        track('email-click', { page });
      } else if (href === '/sellers' || href.startsWith('/sellers?') || href.startsWith('/sellers#')) {
        track('sellers-cta', { page });
      } else if (href === '/buyers' || href.startsWith('/buyers?') || href.startsWith('/buyers#')) {
        track('buyers-cta', { page });
      } else if (/^https?:\/\//.test(href)) {
        try {
          const url = new URL(href);
          if (url.hostname !== window.location.hostname) {
            track('outbound-click', { page, to: url.hostname });
          }
        } catch {
          /* malformed href — ignore */
        }
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
