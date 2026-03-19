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
    category: "Izleti",
    title: "Najbolji jednodnevni izleti iz Dubrovnika",
    description:
      "Mljet, Korčula, Mostar, Kotor — otkrijte što sve možete posjetiti u jednom danu iz Dubrovnika.",
    date: "Ožujak 2025",
    readTime: "5 min čitanja",
    href: "/blog/izleti-dubrovnik",
    imageSrc: "/assets/blog1.jpg",
  },
  {
    category: "Plaže",
    title: "Najljepše plaže u Mlinima i okolici",
    description:
      "Šljunčane uvale, kristalno more i mirne lokacije — vodič kroz najljepša mjesta za kupanje blizu Dubrovnika.",
    date: "Veljača 2025",
    readTime: "4 min čitanja",
    href: "/blog/plaze-mlini",
    imageSrc: "/assets/blog2.jpg",
  },
  {
    category: "Praktični savjeti",
    title: "Kako doći do Apartments Grbić — parking i transfer savjeti",
    description:
      "Sve što trebate znati o dolasku autom, transferu s aerodroma i parkingu u Mlinima.",
    date: "Siječanj 2025",
    readTime: "3 min čitanja",
    href: "/blog/dolazak-parking",
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
            fontFamily: "var(--font-inter), sans-serif",
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
            fontFamily: "var(--font-inter), sans-serif",
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
            fontFamily: "var(--font-inter), sans-serif",
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
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-text-muted)",
            }}
          >
            {post.date}
          </span>
          <span
            className="text-[13px] transition-all duration-200 group-hover:underline"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-gold)",
            }}
          >
            Pročitaj →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-[1240px] px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            Blog
          </span>
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Vodiči i savjeti
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
          >
            Kratki vodiči i ideje za izlete oko Dubrovnika.
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
          style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
        >
          Više savjeta i vodiča uskoro
        </p>

      </div>
    </section>
  );
}
