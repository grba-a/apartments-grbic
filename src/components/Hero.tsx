"use client";

import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M6 1l1.35 2.73L10.5 4.22l-2.25 2.19.53 3.1L6 7.96l-2.78 1.55.53-3.1L1.5 4.22l3.15-.49L6 1z"
        fill="var(--color-gold)"
      />
    </svg>
  );
}

const statBorders = [
  "border-b border-r border-white/15 md:border-b-0",
  "border-b border-white/15 md:border-b-0 md:border-r",
  "border-r border-white/15",
  "",
];

export default function Hero() {
  const { t } = useLang();

  const stats = [
    { value: "8.7", suffix: <Star />, label: t.hero.bookingLabel, href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html" },
    { value: "4.3", suffix: <Star />, label: t.hero.googleLabel,  href: "https://share.google/P6ZK6srMHdU72N4fk" },
    { value: "4.000+", suffix: null, label: t.hero.guestsLabel,    href: null },
    { value: "20+",    suffix: null, label: t.hero.experienceLabel, href: null },
  ];

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D52] to-[#1A6B8A]" />

      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-36 pt-28 text-center text-white">

        {/* Location badge */}
        <div
          className="mb-8 inline-flex items-center gap-2"
          style={{ animation: "fadeInUp 0.5s ease-out both", animationDelay: "0ms" }}
        >
          <span className="block h-px w-8 bg-[var(--color-gold)] opacity-80" />
          <span
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/75"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {t.hero.badge}
          </span>
          <span className="block h-px w-8 bg-[var(--color-gold)] opacity-80" />
        </div>

        {/* Heading */}
        <h1
          className="mb-6 leading-[1.08]"
          style={{ fontFamily: "var(--font-playfair), serif", animation: "fadeInUp 0.7s ease-out both", animationDelay: "140ms" }}
        >
          <span className="block text-[48px] font-normal md:text-[76px]">
            {t.hero.h1line1}
          </span>
          <span className="block text-[48px] font-normal italic md:text-[76px]" style={{ color: "var(--color-gold)" }}>
            {t.hero.h1line2}
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="mb-10 max-w-[480px] text-[16px] leading-relaxed text-white/70"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 400, animation: "fadeInUp 0.7s ease-out both", animationDelay: "260ms" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fadeInUp 0.7s ease-out both", animationDelay: "380ms" }}
        >
          <a href="#contact" className="btn-primary">
            {t.hero.cta1}
            <span className="btn-arrow">→</span>
          </a>
          <a href="#apartments" className="btn-ghost-light">
            {t.hero.cta2}
            <span className="btn-arrow">→</span>
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-[72px] left-1/2 z-10 -translate-x-1/2"
        style={{ animation: "fadeInUp 0.7s ease-out both", animationDelay: "520ms" }}
      >
        <a
          href="#apartments"
          aria-label={t.hero.scrollLabel}
          className="flex flex-col items-center gap-2 text-white/50 transition-colors duration-200 hover:text-white/80"
        >
          <span
            className="text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {t.hero.scroll}
          </span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M3 6l6 6 6-6" />
          </svg>
        </a>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/35 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => {
              const inner = (
                <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-3">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-[18px] font-normal leading-none text-white"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {stat.value}
                    </span>
                    {stat.suffix}
                  </div>
                  <span
                    className="text-[10px] uppercase tracking-[0.15em] text-white/50"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              );
              const cellClass = `${statBorders[i]} transition-colors duration-200`;
              return stat.href ? (
                <a key={i} href={stat.href} target="_blank" rel="noopener noreferrer" className={`${cellClass} hover:bg-white/5`}>
                  {inner}
                </a>
              ) : (
                <div key={i} className={cellClass}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
