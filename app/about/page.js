import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Ana Grbić | Apartments Grbić Mlini",
  description:
    "Meet Ana Grbić — host with over 20 years of experience welcoming guests to Mlini, Dubrovnik. A family story, a passion for hospitality, and a beautiful place to stay.",
};

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "4,000+", label: "Satisfied guests" },
  { value: "290+", label: "Online reviews" },
  { value: "8.7", label: "Booking.com score" },
];

const reviews = [
  {
    quote: "Ana was super helpful — she even offered to drive us to the airport. The apartment was spotless.",
    author: "Gwendoline",
    origin: "France",
  },
  {
    quote: "We've come back three years in a row. Ana and her family make you feel completely at home.",
    author: "James",
    origin: "United Kingdom",
  },
  {
    quote: "The view from the balcony was worth every step. Mlini is a gem — quiet, authentic, and beautiful.",
    author: "Carlos",
    origin: "Brazil",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ← Back to Home
          </Link>

          <div className="flex flex-col gap-12 md:flex-row md:items-end">
            <div className="md:flex-1">
              <p
                className="mb-3 text-[13px] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
              >
                About Us
              </p>
              <span
                className="mb-5 block h-0.5 w-10 rounded-full"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <h1
                className="mb-4 text-5xl font-normal leading-tight text-white md:text-[64px]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Ana Grbić
              </h1>
              <p
                className="text-2xl italic text-white/60"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Hosting with heart, since 2004
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 md:gap-12">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span
                    className="text-[38px] font-normal leading-none"
                    style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[12px] uppercase tracking-wider text-white/50"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ backgroundColor: "var(--color-sand)" }}>
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col gap-16 md:flex-row md:items-start">

            {/* Photo */}
            <div className="w-full md:w-[400px] md:shrink-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/about.jpg"
                  alt="Ana Grbić — host at Apartments Grbić"
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-1 flex-col justify-center">
              <h2
                className="mb-6 text-3xl font-normal md:text-[38px]"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
              >
                A family home, open to the world
              </h2>

              <div
                className="space-y-5 text-[15px] leading-[1.85]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                <p>
                  Ana Grbić has been welcoming guests to Mlini since 2004 — long before the Dubrovnik
                  riviera became the destination it is today. What began as a small family business
                  has grown into something she is truly proud of: over 4,000 guests from more than
                  40 countries, and friendships that outlast the holiday.
                </p>
                <p>
                  Born and raised in Mlini, Ana knows this stretch of coastline in a way that no
                  guidebook can replicate. She knows which restaurant to skip, which cove is quietest
                  in August, which boat captain to trust for the crossing to Korčula. That local
                  knowledge is yours to use freely.
                </p>
                <p>
                  As a mother of three, Ana brings a particular care to cleanliness, safety, and
                  making sure every guest — from solo travellers to large families — feels genuinely
                  at home. She is available throughout your stay, responds quickly, and goes out of
                  her way to make small things happen: a late check-in, a restaurant reservation,
                  a lift to the bus stop.
                </p>
                <p>
                  The apartments themselves are fully owned and managed by the family. No
                  management company, no automated systems — just real people who care about
                  your experience and are invested in your stay going well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <p
            className="mb-3 text-center text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Guest Voices
          </p>
          <h2
            className="mb-14 text-center text-3xl font-normal md:text-[40px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            What guests say about Ana
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.author}
                className="flex flex-col rounded-lg border border-gray-100 bg-white p-8 shadow-sm"
              >
                <p
                  className="flex-1 text-[16px] font-normal italic leading-relaxed"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
                >
                  "{r.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: "var(--color-sand)" }} />
                  <div>
                    <p
                      className="text-[13px] font-medium"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
                    >
                      {r.author}
                    </p>
                    <p
                      className="text-[12px]"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                    >
                      {r.origin}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <span
            className="mb-3 block text-[12px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Book Direct
          </span>
          <h2
            className="mb-4 text-3xl font-normal text-white md:text-[42px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Come and meet us in Mlini
          </h2>
          <p
            className="mb-10 text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Book directly with us for the best rate, personal service, and the warmth
            of a family-run stay — not a hotel chain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="btn-primary btn-lg">
              Send an Enquiry
              <span className="btn-arrow">→</span>
            </a>
            <a href="/#apartments" className="btn-ghost-light btn-lg">
              View Apartments
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
