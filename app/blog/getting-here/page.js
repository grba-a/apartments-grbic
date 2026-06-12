import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "How to Get Here — Parking & Transfer Guide",
  alternates: { canonical: "/blog/getting-here" },
  description:
    "Practical guide for arriving at Apartments Grbić in Mlini — by car, plane, bus, and water taxi. Free parking available on site.",
};

const options = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="26" height="14" rx="3" />
        <path d="M5 11 L9 5 L23 5 L27 11" />
        <circle cx="9" cy="25" r="2.5" />
        <circle cx="23" cy="25" r="2.5" />
        <line x1="9" y1="18" x2="23" y2="18" />
      </svg>
    ),
    title: "By Car",
    badge: "Recommended",
    badgeColor: "var(--color-gold)",
    body: "From Dubrovnik, follow the coastal road south-east (D8) — Mlini is 10 km from the city centre. GPS address: Rivijera 10, 20207 Mlini. Free parking is available for all guests directly beside the property — a genuine rarity anywhere along the Dalmatian coast.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22 Q8 14 16 14 Q24 14 28 22" />
        <path d="M8 22 Q10 18 16 18 Q22 18 24 22" />
        <line x1="16" y1="14" x2="16" y2="8" />
        <path d="M10 10 Q16 4 22 10" />
      </svg>
    ),
    title: "By Plane",
    badge: "Airport 7 km",
    badgeColor: "var(--color-navy)",
    body: "Dubrovnik Airport is just 7 km from Mlini — under 15 minutes by car. A taxi to Apartments Grbić costs around 25–35€. Uber is available and usually slightly cheaper. For groups, we recommend arranging a transfer in advance — contact us and we'll take care of it.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="24" height="16" rx="2" />
        <line x1="4" y1="14" x2="28" y2="14" />
        <circle cx="9" cy="24" r="2" />
        <circle cx="23" cy="24" r="2" />
        <line x1="11" y1="11" x2="11" y2="14" />
        <line x1="16" y1="11" x2="16" y2="14" />
        <line x1="21" y1="11" x2="21" y2="14" />
      </svg>
    ),
    title: "By Bus",
    badge: "3€",
    badgeColor: "#16a34a",
    body: "Line 10 (Dubrovnik–Cavtat) passes through Mlini and stops directly in front of the apartments. It departs every 30 minutes from Dubrovnik Bus Station (Gruž). The ticket costs 3€, payable in cash to the driver. Ideal for day trips into Dubrovnik without worrying about parking.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20 L16 8 L28 20" />
        <path d="M8 20 L8 26 L14 26 L14 20" />
        <path d="M18 20 L18 26 L24 26 L24 20" />
        <path d="M13 20 Q16 14 19 20" />
      </svg>
    ),
    title: "By Water Taxi",
    badge: "April – November",
    badgeColor: "#0ea5e9",
    body: "A seasonal water taxi runs directly from Mlini to Dubrovnik's Old Harbour — the journey takes 15–30 minutes and is an experience in itself, one of the most beautiful ways to arrive in the city. Up to 5 departures daily in season. Prices and timetables are available at the Mlini pier.",
  },
];

export default function BlogGettingHere() {
  return (
    <main style={{ backgroundColor: "#fff" }}>

      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: "480px" }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/blog3.jpg"
            alt="Coastal road and sea approaching Mlini"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(11,61,82,0.3) 0%, rgba(11,61,82,0.72) 100%)" }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-[860px] px-6 pb-16 pt-32">
          <Link
            href="/#blog"
            className="mb-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ← Blog
          </Link>
          <p
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Travel Tips
          </p>
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Getting to Apartments Grbić
          </h1>
          <p
            className="mt-5 max-w-[580px] text-[15px] leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Mlini, Dubrovnik, Croatia — parking, transfer, bus and water taxi.
            Everything you need to know for a worry-free arrival.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[760px] px-6 py-20">

        {/* Intro */}
        <p
          className="mb-12 text-[16px] leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          Apartments Grbić is located at Rivijera 10, 20207 Mlini — a peaceful coastal village
          10 km south-east of Dubrovnik. Getting here is straightforward regardless of how
          you're travelling, and parking is completely free for all guests.
        </p>

        {/* Transport options */}
        <div className="flex flex-col gap-6">
          {options.map((o, i) => (
            <div key={i} className="flex gap-6 rounded-2xl p-7" style={{ backgroundColor: "var(--color-sand)" }}>
              <div className="mt-1 shrink-0" style={{ color: "var(--color-navy)" }}>
                {o.icon}
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h2
                    className="text-[20px] font-normal"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
                  >
                    {o.title}
                  </h2>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white"
                    style={{ backgroundColor: o.badgeColor, fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {o.badge}
                  </span>
                </div>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                >
                  {o.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* GPS box */}
        <div className="mt-12 rounded-2xl p-7" style={{ backgroundColor: "var(--color-navy)" }}>
          <p
            className="mb-1 text-[12px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            GPS Coordinates
          </p>
          <p
            className="mb-6 text-[15px] leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Rivijera 10, 20207 Mlini, Croatia<br />
            42.623606, 18.205885
          </p>
          <a
            href="https://maps.app.goo.gl/79b8VsK1zgCx7ovY9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Google Maps
            <span className="btn-arrow">→</span>
          </a>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap gap-4">
          <a href="/#contact" className="btn-primary">
            Book Your Stay
            <span className="btn-arrow">→</span>
          </a>
          <Link href="/#blog" className="btn-navy">
            More Articles
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </article>

    </main>
  );
}
