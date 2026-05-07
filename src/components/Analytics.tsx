/**
 * Analytics & attribution integrations.
 *
 * GA4: hardcoded to the Savvy Digital Co. master property for Pelham
 * (G-JYJWQD57VV). This is the system of record for traffic + attribution
 * going forward. Public measurement IDs are not secrets, so committing the
 * value is fine and removes a fragile env-var setup step from every deploy.
 * To change the GA4 property in the future, edit GA4_ID below.
 *
 * Clarity + CallRail remain env-gated. Set in Vercel Project Settings:
 *   NEXT_PUBLIC_CLARITY_PROJECT_ID    e.g. "abc123def4"
 *   NEXT_PUBLIC_CALLRAIL_SWAP_PATH    e.g. "companies/123456789/abcdef0123/12/swap.js"
 *
 * GSC verification is handled via the metadata.verification field in
 * src/app/layout.tsx via NEXT_PUBLIC_GSC_VERIFICATION_CODE.
 */

import Script from 'next/script';

const GA4_ID = 'G-JYJWQD57VV';

export default function Analytics() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const CALLRAIL_PATH = process.env.NEXT_PUBLIC_CALLRAIL_SWAP_PATH;

  return (
    <>
      {/* Google Analytics 4 — primary traffic + behavior + conversion attribution.
          GA4's Enhanced Measurement auto-tracks tel: and sms: outbound clicks,
          which is exactly the click-to-call signal Kim needs. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', {
            send_page_view: true,
            allow_google_signals: true
          });
        `}
      </Script>

      {/* Microsoft Clarity — free heatmaps + session recordings. Shows you
          exactly where buyers click, scroll, rage-click, or rage-quit. */}
      {CLARITY_ID ? (
        <Script id="ms-clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      ) : null}

      {/* CallRail — phone-call attribution. Swaps Kim's number on the page
          with a tracking number so we can see which channel drove each call. */}
      {CALLRAIL_PATH ? (
        <Script
          src={`//cdn.callrail.com/${CALLRAIL_PATH}`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
