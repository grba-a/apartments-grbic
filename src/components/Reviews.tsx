"use client";

import { useState } from "react";
import { useId } from "react";
import { useLang } from "@/src/i18n/LangContext";

type Platform = "Google" | "Booking" | "Tripadvisor" | "Agoda";

type Review = {
  score: number;
  text: string;
  name: string;
  location: string;
  platform: Platform;
  date: string;
};

const platformStats = [
  { name: "Booking.com", score: 8.7, outOf: 10, stars: 4.4, reviews: 132 },
  { name: "Google",      score: 4.3, outOf: 5,  stars: 4.3, reviews: 27  },
  { name: "Agoda",       score: 4.5, outOf: 5,  stars: 4.5, reviews: 131 },
];

const reviews: Review[] = [
  {
    score: 10,
    text: "This is a gem — excellent value for money. Super comfy bed and a beautiful view of the bay. Ana was super helpful, she even offered to drive us back to the airport when our taxi was delayed.",
    name: "Gwendoline",
    location: "Francuska",
    platform: "Booking",
    date: "Rujan 2023",
  },
  {
    score: 10,
    text: "The apartment was spotlessly clean, comfortable and had everything we needed. 5 minutes to the beach, the steps are great exercise! Ana was a wonderful host — very friendly and helpful.",
    name: "Francine",
    location: "UK",
    platform: "Booking",
    date: "Svibanj 2024",
  },
  {
    score: 10,
    text: "How easy it is to get to Dubrovnik and Cavtat by water taxi. In my eyes this is a much better location than staying in Dubrovnik itself. Highly recommend.",
    name: "Lewis",
    location: "UK",
    platform: "Booking",
    date: "Kolovoz 2025",
  },
  {
    score: 10,
    text: "The apartment is excellent. Beautiful sea view, parking on the property, Ana is very friendly. We will definitely be back — there was no more availability to extend our stay!",
    name: "Alana",
    location: "Brazil",
    platform: "Booking",
    date: "Srpanj 2024",
  },
  {
    score: 10,
    text: "We loved Mlini — an ideal base for bus and water taxi to Dubrovnik and Cavtat. We had a fabulous holiday and would highly recommend Apartments Grbić.",
    name: "Margaret",
    location: "UK",
    platform: "Booking",
    date: "Kolovoz 2025",
  },
  {
    score: 9,
    text: "It's challenging to climb the stairs, but for that you receive a breathtaking view and complete silence — something you simply won't find in apartments next to the promenade.",
    name: "Elizaveta",
    location: "Rusija",
    platform: "Booking",
    date: "Srpanj 2023",
  },
];

const platformColors: Record<Platform, string> = {
  Google:      "#4285F4",
  Booking:     "#003580",
  Tripadvisor: "#34E0A1",
  Agoda:       "#D32F2F",
};

function StarRow({ score, outOf = 5, size = 15 }: { score: number; outOf?: number; size?: number }) {
  const normalised = outOf === 10 ? (score / 10) * 5 : score;
  const uid = useId().replace(/:/g, "");
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = normalised >= n ? 1 : normalised >= n - 0.5 ? 0.5 : 0;
        const gradId = `star-${uid}-${n}`;
        return (
          <svg key={n} width={size} height={size} viewBox="0 0 20 20">
            <defs>
              <linearGradient id={gradId}>
                <stop offset={`${fill * 100}%`} stopColor="#C9A84C" />
                <stop offset={`${fill * 100}%`} stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path d="M10 1l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.3l-5.2 2.7 1-5.8L1.6 7.1l5.8-.8z" fill={`url(#${gradId})`} />
          </svg>
        );
      })}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: Platform }) {
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white"
      style={{ backgroundColor: platformColors[platform], fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      {platform}
    </span>
  );
}

function Initials({ name }: { name: string }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
      style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ReviewCard({ r, t }: { r: Review; t: any }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-md h-full">
      <span
        className="pointer-events-none absolute -top-1 left-5 select-none text-[72px] leading-none"
        style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)", opacity: 0.12 }}
        aria-hidden="true"
      >"</span>

      <div className="relative mb-4 flex items-center justify-between">
        <StarRow score={r.score} size={15} />
        <span
          className="text-[12px] font-medium"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          {t.reviews.dates[r.date] ?? r.date}
        </span>
      </div>

      <p
        className="relative flex-1 text-[14px] leading-[1.75] italic"
        style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
      >
        "{r.text}"
      </p>

      <div className="mt-5 flex items-center gap-3 border-t pt-4" style={{ borderColor: "#F3F4F6" }}>
        <Initials name={r.name} />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="text-[13px] font-semibold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
            >
              {r.name}
            </span>
            <span
              className="text-[11px]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              · {t.reviews.locations[r.location] ?? r.location}
            </span>
          </div>
          <PlatformBadge platform={r.platform} />
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);

  // Distance between card centers in the 3D scene
  const OFFSET = 308;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(reviews.length - 1, c + 1));

  return (
    <section id="reviews" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        {/* Header */}
        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[11px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            {t.reviews.eyebrow}
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            {t.reviews.h2}
          </h2>
          <p
            className="max-w-[480px] text-[15px] leading-relaxed"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Platform stats */}
        <div className="reveal reveal-delay-1 mt-14 mb-16 grid grid-cols-3 gap-4 md:gap-8 max-w-[680px] mx-auto">
          {platformStats.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 shadow-sm">
              <span
                className="text-[10px] uppercase tracking-[0.15em] text-center"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                {p.name}
              </span>
              <span
                className="text-[40px] font-normal leading-none"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
              >
                {p.score}
              </span>
              <StarRow score={p.stars} outOf={5} size={14} />
              <span
                className="text-[10px]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                {p.reviews} {t.reviews.reviewsLabel}
              </span>
            </div>
          ))}
        </div>

        {/* ── Tablet: simple 2-col grid (md only) ──────────────────────────── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} t={t} />
          ))}
        </div>

        {/* ── Desktop: 3D coverflow carousel (lg+) ─────────────────────────── */}
        <div className="hidden lg:block">
          {/* Stage */}
          <div className="relative mx-auto" style={{ height: "370px" }}>
            {reviews.map((r, idx) => {
              const rel = idx - current;
              const abs = Math.abs(rel);
              if (abs > 2) return null;

              const isSide = abs === 1;
              const isFar  = abs === 2;

              return (
                <div
                  key={r.name}
                  onClick={() => isSide && setCurrent(idx)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: "380px",
                    height: "360px",
                    transform: `perspective(1100px) translateX(calc(-50% + ${rel * OFFSET}px)) scale(${abs === 0 ? 1 : 0.78}) rotateY(${-rel * 20}deg)`,
                    opacity: abs === 0 ? 1 : abs === 1 ? 0.68 : 0,
                    zIndex: 10 - abs * 3,
                    transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
                    willChange: "transform, opacity",
                    cursor: isSide ? "pointer" : "default",
                    transformOrigin: rel < 0 ? "right center" : rel > 0 ? "left center" : "center center",
                  }}
                >
                  {/* Hover glow on side cards */}
                  {isSide && (
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 hover:opacity-100 z-10 pointer-events-none"
                      style={{ boxShadow: "inset 0 0 0 2px var(--color-gold)" }}
                    />
                  )}
                  {/* Dim overlay on far cards */}
                  {isFar && (
                    <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none" style={{ background: "rgba(0,0,0,0.15)" }} />
                  )}
                  <ReviewCard r={r} t={t} />
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: i === current ? "28px" : "8px",
                  backgroundColor: i === current ? "var(--color-gold)" : "#CBD5E1",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical snap scroll (<md) ────────────────────────────── */}
        <div
          className="md:hidden overflow-y-scroll"
          style={{
            height: "72vh",
            scrollSnapType: "y mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          } as React.CSSProperties}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="px-1 pb-4"
              style={{ scrollSnapAlign: "start" }}
            >
              <ReviewCard r={r} t={t} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-[14px]">
          <span style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}>
            {t.reviews.readAllOn}
          </span>
          <a
            href="https://www.booking.com/hotel/hr/apartmani-grbia.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-200 hover:underline"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Booking.com
          </a>
          <span style={{ color: "var(--color-text-muted)" }}>{t.reviews.and}</span>
          <a
            href="https://share.google/P6ZK6srMHdU72N4fk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-200 hover:underline"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Google
          </a>
        </div>

      </div>
    </section>
  );
}
