import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Most Beautiful Beaches Near Mlini | Apartments Grbić",
  description:
    "A guide to the best beaches in Mlini and along the Dubrovnik riviera — pebble coves, family beaches, and hidden swimming spots.",
};

const beaches = [
  {
    name: "Mlini Beach",
    time: "5 min walk",
    desc: "The main beach in Mlini is pebbly, peaceful, and well-equipped — showers, sun umbrella rentals, and a restaurant right on the waterfront. The clarity of the water in this stretch of the riviera is exceptional, with visibility often exceeding 10 metres. Perfect for families with children.",
  },
  {
    name: "Srebreno Beach",
    time: "10 min walk",
    desc: "Srebreno is a slightly more popular beach with more facilities — an aqua park, a café-bar, and more sunbeds. Perfect if you prefer a bit more going on alongside your swimming. The promenade connecting Mlini and Srebreno is one of the most beautiful evening walks on the riviera.",
  },
  {
    name: "Kupari Cove",
    time: "15 min by car",
    desc: "The abandoned Kupari resort was long a 'secret' swimming spot for locals. A calm cove, a beautiful pebble beach, and the atmospheric ruins of old hotels give this location a truly unique character. The view across the bay is simply unmatched.",
  },
  {
    name: "Cavtat Beaches",
    time: "20 min by car",
    desc: "Cavtat is a quiet harbour town with a string of small coves and coastal promenades. Several fine-pebble beaches with clear water and far fewer crowds than Dubrovnik make it a favourite for those seeking peace. Cavtat also has an excellent dining scene.",
  },
  {
    name: "Dubrovnik — Banje Beach",
    time: "10 min by car/boat",
    desc: "The most photogenic beach in the region — the view of the city walls straight from your sun lounger is priceless. Banje is a paid beach with equipment for hire, but access to the pebbles is free. Come early in the morning — crowds are guaranteed by the afternoon.",
  },
];

export default function BlogBeaches() {
  return (
    <main style={{ backgroundColor: "#fff" }}>

      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: "480px" }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/blog2.jpg"
            alt="Beach in Mlini with sea view"
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
            Sea & Beaches
          </p>
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The Most Beautiful Beaches Near Mlini
          </h1>
          <p
            className="mt-5 max-w-[580px] text-[15px] leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Mlini sits on one of the most beautiful stretches of the Dubrovnik riviera.
            Here's your guide to every beach worth visiting — from right outside the door
            to an hour's drive away.
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
          One of the greatest advantages of staying in Mlini is being steps from the sea. No
          traffic, no expensive car parks — the beach is literally around the corner. And if
          you're in the mood to explore, the Dubrovnik riviera offers dozens of swimming spots,
          each with its own character.
        </p>

        {/* Beach cards */}
        <div className="flex flex-col gap-8">
          {beaches.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: i % 2 === 0 ? "var(--color-sand)" : "#fff",
                border: i % 2 !== 0 ? "1px solid #F3F4F6" : "none",
              }}
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h2
                  className="text-[20px] font-normal"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
                >
                  {b.name}
                </h2>
                <span
                  className="rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-white"
                  style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {b.time}
                </span>
              </div>
              <p
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full" style={{ backgroundColor: "var(--color-gold)", opacity: 0.3 }} />

        {/* Tip box */}
        <div className="rounded-2xl p-7" style={{ backgroundColor: "var(--color-navy)" }}>
          <p
            className="mb-1 text-[12px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Host's Tip
          </p>
          <p
            className="text-[15px] leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            The best time at Mlini beach is between 7:00 and 9:00 — the sea is mirror-calm, the
            beach almost empty, and water temperatures in July and August reach 26–28°C. Pick up
            fresh pastries from the Mlini bakery for the perfect start to the day.
          </p>
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
