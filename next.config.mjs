/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "apartments-grbic.vercel.app" },
      { protocol: "https", hostname: "apartmentsgrbic.com" },
    ],
  },

  async redirects() {
    return [
      // ── Old /pages/* routes (internal cleanup) ───────────────────────────
      { source: "/pages/faq",     destination: "/faq",     permanent: true },
      { source: "/pages/privacy", destination: "/privacy", permanent: true },
      { source: "/pages/terms",   destination: "/terms",   permanent: true },
      { source: "/pages/cookies", destination: "/cookies", permanent: true },

      // ── Old Croatian blog slugs ───────────────────────────────────────────
      { source: "/blog/izleti-dubrovnik", destination: "/blog/day-trips-dubrovnik", permanent: true },
      { source: "/blog/plaze-mlini",      destination: "/blog/beaches-mlini",       permanent: true },
      { source: "/blog/dolazak-parking",  destination: "/blog/getting-here",        permanent: true },

      // ── Old WordPress Croatian URLs → new Next.js equivalents ────────────
      // Pages
      { source: "/o-nama",              destination: "/about",   permanent: true },
      { source: "/o-nama/",             destination: "/about",   permanent: true },
      { source: "/apartmani",           destination: "/?scrollTo=apartments", permanent: true },
      { source: "/apartmani/",          destination: "/?scrollTo=apartments", permanent: true },
      { source: "/kontakt",             destination: "/?scrollTo=contact", permanent: true },
      { source: "/kontakt/",            destination: "/?scrollTo=contact", permanent: true },
      { source: "/kontaktirajte-nas",   destination: "/?scrollTo=contact", permanent: true },
      { source: "/lokacija",            destination: "/?scrollTo=location", permanent: true },
      { source: "/galerija",            destination: "/?scrollTo=gallery", permanent: true },
      { source: "/cesta-pitanja",       destination: "/faq",     permanent: true },
      { source: "/cesta-pitanja/",      destination: "/faq",     permanent: true },
      { source: "/najcesca-pitanja",    destination: "/faq",     permanent: true },
      { source: "/blog/",               destination: "/blog",    permanent: true },

      // Legal pages (common WordPress slugs)
      { source: "/privatna-politika",    destination: "/privacy", permanent: true },
      { source: "/privatnost",           destination: "/privacy", permanent: true },
      { source: "/politika-privatnosti", destination: "/privacy", permanent: true },
      { source: "/uvjeti-koristenja",    destination: "/terms",   permanent: true },
      { source: "/uvjeti",               destination: "/terms",   permanent: true },
      { source: "/politika-kolacica",    destination: "/cookies", permanent: true },
      { source: "/kolacici",             destination: "/cookies", permanent: true },

      // WordPress sample page / default pages
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/pocetna",     destination: "/", permanent: true },
      { source: "/home",        destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
