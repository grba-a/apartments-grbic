import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import CookieBanner from "@/src/components/CookieBanner";
import RevealObserver from "@/src/components/RevealObserver";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import Analytics from "@/src/components/Analytics";
import { LangProvider } from "@/src/i18n/LangContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://apartmentsgrbic.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apartments Grbić | Sea-View Apartments in Mlini, Dubrovnik",
    template: "%s | Apartments Grbić",
  },
  description:
    "Family-run holiday apartments in Mlini, 10 minutes from Dubrovnik Old Town. Sea-view balconies, free parking, free Wi-Fi. Rated 8.7 on Booking.com · 290+ reviews. Book direct — best price guaranteed.",
  keywords: [
    "apartments Mlini",
    "Dubrovnik apartments",
    "holiday apartments near Dubrovnik",
    "Mlini accommodation",
    "sea view apartments Croatia",
    "Apartments Grbić",
    "Mlini Dubrovnik holiday",
    "vacation rental Dubrovnik riviera",
    "apartmani Mlini",
  ],
  authors: [{ name: "Apartments Grbić", url: SITE_URL }],
  creator: "Apartments Grbić",
  publisher: "Apartments Grbić",
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Apartments Grbić",
    title: "Apartments Grbić | Sea-View Apartments in Mlini, Dubrovnik",
    description:
      "Family-run holiday apartments in Mlini, 10 minutes from Dubrovnik Old Town. Sea-view balconies, free parking, free Wi-Fi. 8.7 on Booking.com · 290+ reviews.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apartments Grbić — sea view apartments in Mlini, Dubrovnik Riviera, Croatia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartments Grbić | Mlini, Dubrovnik",
    description:
      "Family-run holiday apartments in Mlini, 10 minutes from Dubrovnik. Sea-view balconies, free parking, free Wi-Fi.",
    images: ["/assets/og-image.jpg"],
  },
  manifest: "/site.webmanifest",
  // Canonical is set per-page (a root canonical would mark every subpage
  // as a duplicate of the homepage).
  verification: {
    // google: "add-your-google-search-console-token-here",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Apartments Grbić",
      alternateName: "Apartmani Grbić",
      description:
        "Family-run holiday apartments in Mlini on the Dubrovnik Riviera. Sea-view balconies, free parking, free Wi-Fi. 4 apartments for 2–5 guests, from €80/night. Direct booking — best price guaranteed.",
      url: SITE_URL,
      telephone: "+385989600088",
      email: "apt.grbic.mlini@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rivijera 10",
        addressLocality: "Mlini",
        addressRegion: "Dubrovnik-Neretva County",
        postalCode: "20207",
        addressCountry: "HR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.623606,
        longitude: 18.205885,
      },
      hasMap: "https://maps.app.goo.gl/79b8VsK1zgCx7ovY9",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "8.7",
        bestRating: "10",
        worstRating: "1",
        reviewCount: "290",
      },
      priceRange: "€80–€125 per night",
      currenciesAccepted: "EUR",
      checkinTime: "14:00",
      checkoutTime: "10:00",
      numberOfRooms: 4,
      petsAllowed: false,
      smokingAllowed: false,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Sea View Balcony", value: true },
        { "@type": "LocationFeatureSpecification", name: "Beach (5 min walk)", value: true },
        { "@type": "LocationFeatureSpecification", name: "Family Friendly", value: true },
        { "@type": "LocationFeatureSpecification", name: "Water Taxi to Dubrovnik", value: true },
      ],
      image: [
        `${SITE_URL}/assets/hero-bg.jpg`,
        `${SITE_URL}/assets/about.jpg`,
      ],
      sameAs: [
        "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html",
        "https://www.instagram.com/apartments_grbic/",
        "https://www.tripadvisor.com/Hotel_Review-g658382-d3831572",
        "https://share.google/P6ZK6srMHdU72N4fk",
      ],
      founder: {
        "@type": "Person",
        name: "Ana Grbić",
        jobTitle: "Host & Owner",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Apartments Grbić",
      description: "Official website of Apartments Grbić — holiday apartments in Mlini, Dubrovnik, Croatia.",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <LangProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
          <RevealObserver />
          <Analytics />
        </LangProvider>
      </body>
    </html>
  );
}
