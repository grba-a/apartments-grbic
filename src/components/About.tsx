"use client";

import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

export default function About() {
  const { t } = useLang();

  // "20+ years" lives on the photo badge, so the stat row only carries the rest
  const stats = [
    { value: "4.000+", label: t.about.guestsLabel },
    { value: "3",      label: t.about.childrenLabel },
  ];

  return (
    <section id="about" className="overflow-hidden py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col gap-16 md:flex-row md:items-center">

          {/* Left — image */}
          <div className="reveal reveal-left w-full md:w-[420px] md:shrink-0">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-300 shadow-lg">
                <Image
                  src="/assets/about.jpg"
                  alt="Ana Grbić"
                  fill
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Floating experience badge — pops out over the bottom-left corner */}
              <div
                className="absolute -bottom-6 -left-3 flex items-baseline gap-2 rounded-xl bg-white px-5 py-4 shadow-lg md:-left-5"
              >
                <span
                  className="text-[32px] leading-none"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
                >
                  20+
                </span>
                <span
                  className="text-[12px] leading-tight"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                >
                  {t.about.experienceLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="reveal reveal-right reveal-delay-1 flex flex-1 flex-col justify-center pt-8 md:pt-0">

            <span
              className="mb-3 text-[13px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
            >
              {t.about.eyebrow}
            </span>
            <span className="mb-4 block h-0.5 w-10 rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />

            <h2
              className="mb-2 text-4xl font-normal leading-tight md:text-[48px]"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
            >
              Ana Grbić
            </h2>
            <p
              className="mb-7 text-2xl italic"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-text-muted)" }}
            >
              {t.about.tagline}
            </p>

            <p
              className="text-[15px] leading-[1.8]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              {t.about.p1}
            </p>
            <p
              className="mt-4 text-[15px] leading-[1.8]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              {t.about.p2}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-stretch gap-x-8 gap-y-4">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-stretch gap-8">
                  {i > 0 && <span className="hidden w-px self-stretch sm:block" style={{ backgroundColor: "var(--color-gold)", opacity: 0.3 }} aria-hidden="true" />}
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[36px] font-normal leading-none"
                      style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)", fontVariantNumeric: "tabular-nums" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="max-w-[160px] text-[13px]"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                {t.about.cta1}
                <span className="btn-arrow">→</span>
              </a>
              <a href="/about" className="btn-navy">
                Our Full Story
                <span className="btn-arrow">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
