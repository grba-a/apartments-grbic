"use client";

import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D52] to-[#1A6B8A]" />

      <div className="hero-zoom absolute inset-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.35) 100%)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-28 pt-28 text-center text-white">

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
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
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

    </section>
  );
}
