"use client";

import Link from "next/link";
import Image from "next/image";

type Post = {
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  imageSrc: string;
};

const posts: Post[] = [
  {
    category: "Day Trips",
    title: "The Best Day Trips from Dubrovnik",
    description:
      "Mljet, Korčula, Mostar, Kotor — discover everything you can visit in a single day from Dubrovnik.",
    date: "March 2025",
    readTime: "5 min read",
    href: "/blog/day-trips-dubrovnik",
    imageSrc: "/assets/blog1.jpg",
  },
  {
    category: "Beaches",
    title: "The Most Beautiful Beaches Near Mlini",
    description:
      "Pebble coves, crystal-clear water, and peaceful spots — a guide to the best swimming near Dubrovnik.",
    date: "February 2025",
    readTime: "4 min read",
    href: "/blog/beaches-mlini",
    imageSrc: "/assets/blog2.jpg",
  },
  {
    category: "Travel Tips",
    title: "Getting to Apartments Grbić — Parking & Transfer Guide",
    description:
      "Everything you need to know about arriving by car, airport transfer, and parking in Mlini.",
    date: "January 2025",
    readTime: "3 min read",
    href: "/blog/getting-here",
    imageSrc: "/assets/blog3.jpg",
  },
];

function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={post.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Image area */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-200">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium text-white"
          style={{
            backgroundColor: "var(--color-gold)",
            fontFamily: "var(--font-montserrat), sans-serif",
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta row */}
        <span
          className="text-[12px] uppercase tracking-wider"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--color-text-muted)",
          }}
        >
          {post.category} · {post.readTime}
        </span>

        {/* Title */}
        <h3
          className="mt-2 text-[22px] font-normal leading-snug transition-colors duration-200 group-hover:text-[var(--color-gold)]"
          style={{
            fontFamily: "var(--font-playfair), serif",
            color: "var(--color-navy)",
          }}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          className="mt-3 line-clamp-3 text-[14px] leading-relaxed"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "var(--color-text-muted)",
          }}
        >
          {post.description}
        </p>

        {/* Bottom row */}
        <div
          className="mt-6 flex items-center justify-between border-t pt-4"
          style={{ borderColor: "#F3F4F6" }}
        >
          <span
            className="text-[12px]"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--color-text-muted)",
            }}
          >
            {post.date}
          </span>
          <span
            className="flex items-center gap-1.5 text-[13px] transition-all duration-200"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: "var(--color-gold)",
            }}
          >
            Read more
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        {/* Header */}
        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Blog
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Guides & Tips
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            Short guides and ideas for exploring Dubrovnik and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </div>

        {/* Bottom CTA */}
        <p
          className="mt-12 text-center text-base italic"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          More guides and tips coming soon
        </p>

      </div>
    </section>
  );
}
