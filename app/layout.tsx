import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { MobileActionDock } from "@/components/mobile-action-dock";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplashScreen } from "@/components/splash-screen";
import { siteSettings } from "@/data/site";
import { siteMeta } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: siteMeta.defaultTitle,
  description: siteMeta.defaultDescription,
  applicationName: siteSettings.title,
  keywords: [
    "dentist Kandy",
    "premium dental care Sri Lanka",
    "cosmetic dentistry Kandy",
    "Smile Hub"
  ]
};

export const viewport: Viewport = {
  themeColor: "#f6f0e8"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: siteSettings.title,
  url: siteMeta.siteUrl,
  telephone: siteSettings.phonePrimary,
  email: siteSettings.emailPrimary,
  address: {
    "@type": "PostalAddress",
    streetAddress: "951, 1st Floor, Art Lanka Building, Peradeniya Road",
    addressLocality: "Kandy",
    addressCountry: "LK"
  },
  openingHoursSpecification: siteSettings.serviceHours.map((item) => ({
    "@type": "OpeningHoursSpecification",
    description: `${item.label}: ${item.value}`
  })),
  sameAs: [siteSettings.facebookUrl, siteSettings.instagramUrl, siteSettings.googleMapsUrl]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SplashScreen />
        <div className="relative isolate min-h-screen">
          <SiteHeader />
          <main className="overflow-x-clip">{children}</main>
          <SiteFooter />
          <MobileActionDock />
        </div>
      </body>
    </html>
  );
}
