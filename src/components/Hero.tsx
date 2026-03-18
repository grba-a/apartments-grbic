"use client";

import Image from "next/image";

const stats = [
  { value: "8.8 ⭐", label: "Booking ocjena", href: "#" },
  { value: "4.3 ⭐", label: "Google ocjena", href: "#" },
  { value: "4.000+", label: "zadovoljnih gostiju", href: null },
  { value: "20+", label: "godina iskustva", href: null },
];

// Per-cell border classes for 2×2 mobile / 4×1 desktop grid
const statBorders = [
  "border-b border-r border-white/20 md:border-b-0",
  "border-b border-white/20 md:border-b-0 md:border-r",
  "border-r border-white/20",
  "",
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">

      {/* Gradient fallback (always rendered, image overlays on top) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D52] to-[#1A6B8A]" />

      {/* Background image — gradient shows if image is missing */}
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-24 text-center text-white">

        {/* Badge */}
        <div
          className="mb-7 inline-flex items-center rounded-full border border-white/40 px-4 py-1.5"
          style={{ animation: "fadeInUp 0.6s ease-out both", animationDelay: "0ms" }}
        >
          <span
            className="text-[13px] text-white/80"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Mlini • Dubrovnik
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-playfair), serif",
            animation: "fadeInUp 0.7s ease-out both",
            animationDelay: "120ms",
          }}
        >
          <span className="block text-5xl font-normal md:text-[72px]">
            Najbolji odabir
          </span>
          <span className="block text-5xl font-normal italic md:text-[72px]">
            za ljetovanje
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="mb-10 max-w-[520px] text-lg text-white/80"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            animation: "fadeInUp 0.8s ease-out both",
            animationDelay: "240ms",
          }}
        >
          Savršeno za parove i obitelji koji žele mirnu bazu za istraživanje Dubrovnika.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: "fadeInUp 0.9s ease-out both", animationDelay: "360ms" }}
        >
          <a
            href="#contact"
            className="rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: "var(--color-gold)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Provjeri dostupnost
          </a>
          <a
            href="#apartments"
            className="rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Pogledaj apartmane
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div className="relative z-10 flex justify-center pb-[92px]">
        <a
          href="#apartments"
          aria-label="Pomakni se prema dolje"
          className="animate-bounce text-white/60 transition-colors duration-200 hover:text-white/90"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 11l9 9 9-9" />
          </svg>
        </a>
      </div>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => {
              const inner = (
                <div className="flex flex-col items-center justify-center gap-1 py-5 px-3">
                  <span
                    className="text-base font-medium text-white"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs text-white/60"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              );

              const cellClass = `${statBorders[i]} transition-colors duration-200`;

              return stat.href ? (
                <a key={i} href={stat.href} className={`${cellClass} hover:bg-white/5`}>
                  {inner}
                </a>
              ) : (
                <div key={i} className={cellClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
