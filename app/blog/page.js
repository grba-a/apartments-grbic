import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog — Guides & Travel Tips | Apartments Grbić",
  description:
    "Travel guides and tips for your stay near Dubrovnik — day trips, beaches, getting around, and local recommendations from the Grbić family.",
};

const posts = [
  {
    category: "Day Trips",
    title: "The Best Day Trips from Dubrovnik",
    description:
      "Mljet, Korčula, Mostar, Kotor — discover everything you can visit in a single day from Dubrovnik.",
    date: "March 2025",
    readTime: "5 min read",
    href: "/blog/izleti-dubrovnik",
    imageSrc: "/assets/blog1.jpg",
    live: true,
  },
  {
    category: "Beaches",
    title: "The Most Beautiful Beaches Near Mlini",
    description:
      "Pebble coves, crystal-clear water, and peaceful spots — a guide to the best swimming near Dubrovnik.",
    date: "February 2025",
    readTime: "4 min read",
    href: "/blog/plaze-mlini",
    imageSrc: "/assets/blog2.jpg",
    live: true,
  },
  {
    category: "Travel Tips",
    title: "Getting to Apartments Grbić — Parking & Transfer Guide",
    description:
      "Everything you need to know about arriving by car, airport transfer, and parking in Mlini.",
    date: "January 2025",
    readTime: "3 min read",
    href: "/blog/dolazak-parking",
    imageSrc: "/assets/blog3.jpg",
    live: true,
  },
  {
    category: "Restaurants",
    title: "Where to Eat in Mlini — Local Favourites",
    description:
      "From fresh catch on the waterfront to hidden konobas off the promenade — Ana's personal restaurant guide.",
    date: "Coming soon",
    readTime: null,
    href: null,
    imageSrc: "/assets/blog1.jpg",
    live: false,
  },
  {
    category: "Dubrovnik",
    title: "Dubrovnik Without the Crowds — Insider Tips",
    description:
      "How to enjoy the Old City when the cruise ships have gone. Morning walks, quiet corners, and the best views without the queues.",
    date: "Coming soon",
    readTime: null,
    href: null,
    imageSrc: "/assets/blog2.jpg",
    live: false,
  },
  {
    category: "Family Travel",
    title: "Mlini with Kids — Everything You Need to Know",
    description:
      "Shallow beaches, safe promenades, ice cream stops, and everything a family needs for a perfect Adriatic holiday.",
    date: "Coming soon",
    readTime: null,
    href: null,
    imageSrc: "/assets/blog3.jpg",
    live: false,
  },
];

function BlogCard({ post }) {
  const card = (
    <div className={`group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 ${post.live ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "opacity-60"}`} style={{ borderColor: "#F3F4F6" }}>
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-200">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover ${post.live ? "transition-transform duration-500 group-hover:scale-105" : "grayscale"}`}
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium text-white"
          style={{ backgroundColor: post.live ? "var(--color-gold)" : "#9CA3AF", fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {post.category}
        </span>
        {!post.live && (
          <span
            className="absolute inset-0 flex items-center justify-center text-[11px] font-medium uppercase tracking-[0.2em] text-white"
            style={{ backgroundColor: "rgba(11,61,82,0.55)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Coming Soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span
          className="text-[12px] uppercase tracking-wider"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          {post.category}{post.readTime ? ` · ${post.readTime}` : ""}
        </span>

        <h2
          className={`mt-2 text-[20px] font-normal leading-snug ${post.live ? "transition-colors duration-200 group-hover:text-[var(--color-gold)]" : ""}`}
          style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
        >
          {post.title}
        </h2>

        <p
          className="mt-3 line-clamp-2 text-[14px] leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          {post.description}
        </p>

        {post.live && (
          <div className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: "#F3F4F6" }}>
            <span
              className="text-[12px]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              {post.date}
            </span>
            <span
              className="flex items-center gap-1.5 text-[13px]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
            >
              Read more
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return post.live && post.href ? (
    <Link href={post.href}>{card}</Link>
  ) : (
    <div>{card}</div>
  );
}

export default function BlogPage() {
  return (
    <main>

      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-[680px] px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ← Back to Home
          </Link>
          <p
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Blog
          </p>
          <h1
            className="mb-4 text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Guides & Travel Tips
          </h1>
          <p
            className="text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Local knowledge from the Grbić family — to help you make the most of your stay near Dubrovnik.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--color-sand)" }}>
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <h2
            className="mb-4 text-3xl font-normal md:text-[38px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Ready to make the trip?
          </h2>
          <p
            className="mb-10 text-[15px] leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            All the guides in the world can't replace the view from the balcony.
            Book your stay in Mlini and experience the Dubrovnik riviera properly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#apartments" className="btn-primary btn-lg">
              View Apartments
              <span className="btn-arrow">→</span>
            </a>
            <a href="/#contact" className="btn-navy btn-lg">
              Send an Enquiry
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
