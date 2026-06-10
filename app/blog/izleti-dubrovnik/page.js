import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Best Day Trips from Dubrovnik | Apartments Grbić",
  description:
    "Discover the best day trips from Dubrovnik — Korčula, Mljet, Kotor, Mostar and more. Tips for planning excursions with your base in Mlini.",
};

const sections = [
  {
    heading: "Korčula Island — Birthplace of Marco Polo",
    body: "Just an hour and a half by boat from Dubrovnik, Korčula welcomes you with narrow stone lanes and an authentic Mediterranean atmosphere. Visit the old town, taste the local Pošip white wine, and on the way back enjoy the sunset from the catamaran deck. We recommend the morning departure from Gruž harbour.",
  },
  {
    heading: "Mljet National Park — A Green Gem of the Adriatic",
    body: "Mljet is one of the greenest islands in the Mediterranean — 72% of its surface is covered in dense forest. At the heart of the island lie two saltwater lakes, and on a small islet in the middle of the Great Lake stands a 12th-century Benedictine monastery. The ideal trip for nature lovers and swimmers seeking crystal-clear water.",
  },
  {
    heading: "Kotor, Montenegro — The Bay of Boka",
    body: "Just an hour and a half by car (or fast catamaran) lies one of the best-preserved medieval towns in the Mediterranean. Kotor's ancient walls, Venetian architecture, and the dramatic fjord of the Bay of Boka create a breathtaking scene. Don't miss the climb to the Fortress of Saint John — the panorama is unparalleled.",
  },
  {
    heading: "Mostar — The Old Bridge & Bosnian Cuisine",
    body: "A little over two hours by road takes you to Mostar and the iconic 16th-century Stari Most bridge. Stroll through the old bazaar, try the ćevapi and baklava, and if you're lucky you'll catch a diver leaping from the bridge — still an active local tradition. A truly rewarding day trip.",
  },
  {
    heading: "The Elafiti Islands — Escape the Crowds",
    body: "Koločep, Lopud and Šipan — three peaceful islands just a short ferry ride from Gruž. No cars, no crowds — just bicycles, olive groves, and crystal-clear coves. Šipan is especially beloved by guests who seek authentic Dalmatian tranquility. A half-day trip that stays with you long after.",
  },
];

export default function BlogDayTrips() {
  return (
    <main style={{ backgroundColor: "#fff" }}>

      {/* Hero */}
      <section className="relative flex items-end" style={{ minHeight: "480px" }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/blog1.jpg"
            alt="View over Dubrovnik from the sea"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(11,61,82,0.35) 0%, rgba(11,61,82,0.75) 100%)" }}
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
            Excursions & Adventures
          </p>
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            The Best Day Trips from Dubrovnik
          </h1>
          <p
            className="mt-5 max-w-[580px] text-[15px] leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Dubrovnik is the perfect base for discovering the most beautiful destinations on
            the Adriatic and beyond — and with Mlini just 10 minutes away, everything is within easy reach.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[760px] px-6 py-20">
        <p
          className="mb-12 text-[16px] leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          Located in Mlini, just 10 minutes from Dubrovnik, guests at Apartments Grbić have the
          perfect base for exploring the region. Whether you prefer island experiences, nature,
          history or gastronomy — here are five excursions we highly recommend.
        </p>

        {sections.map((s, i) => (
          <section key={i} className="mb-12">
            <h2
              className="mb-4 text-2xl font-normal md:text-[28px]"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
            >
              {s.heading}
            </h2>
            <p
              className="text-[15px] leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              {s.body}
            </p>
          </section>
        ))}

        {/* Divider */}
        <div className="my-12 h-px w-full" style={{ backgroundColor: "var(--color-gold)", opacity: 0.3 }} />

        {/* Tip box */}
        <div className="rounded-2xl p-7" style={{ backgroundColor: "var(--color-sand)" }}>
          <p
            className="mb-1 text-[12px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Host's Tip
          </p>
          <p
            className="text-[15px] leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
          >
            Ana and the Grbić family are happy to recommend ferry operators, boat schedules, and
            local restaurants — ask them about current timetables and prices on arrival. Local
            knowledge is invaluable when planning the perfect day away from Dubrovnik.
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
