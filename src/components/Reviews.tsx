"use client";

import { useId } from "react";
import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

type Platform = "Google" | "Booking" | "Tripadvisor" | "Agoda";

type Review = {
  score: number;
  text: string;
  name: string;
  location?: string;
  platform: Platform;
  date?: string;
};

// Real aggregate ratings (verified June 2026: Booking.com, Agoda, Google).
const platformStats = [
  { name: "Booking.com", platform: "Booking" as Platform, logo: { src: "/logos/booking-logo.png", w: 2000, h: 340 }, score: "8.7", scale: "/10", stars: 4.35, reviews: 144, href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html" },
  { name: "Agoda",       platform: "Agoda" as Platform,   logo: { src: "/logos/agoda-logo.png",   w: 934,  h: 478 }, score: "8.7", scale: "/10", stars: 4.35, reviews: 134, href: "https://www.agoda.com/apartments-grbic/hotel/mlini-hr.html" },
  { name: "Google",      platform: "Google" as Platform,  logo: { src: "/logos/google-logo.png",  w: 1275, h: 424 }, score: "4.4", scale: "/5",  stars: 4.4,  reviews: 28,  href: "https://share.google/P6ZK6srMHdU72N4fk" },
];

// Real, verified guest reviews — 3 each from Booking.com, Agoda and Google.
const reviews: Review[] = [
  {
    score: 10,
    text: "This is a gem — excellent value for money. Super comfy bed and a beautiful view of the bay. Ana was super helpful, she even offered to drive us back to the airport when our taxi was delayed.",
    name: "Gwendoline",
    location: "France",
    platform: "Booking",
    date: "September 2023",
  },
  {
    score: 10,
    text: "The apartment was spotlessly clean, comfortable and had everything we needed. 5 minutes to the beach, the steps are great exercise! Ana was a wonderful host — very friendly and helpful.",
    name: "Francine",
    location: "UK",
    platform: "Booking",
    date: "May 2024",
  },
  {
    score: 10,
    text: "We loved Mlini — an ideal base for bus and water taxi to Dubrovnik and Cavtat. We had a fabulous holiday and would highly recommend Apartments Grbić.",
    name: "Margaret",
    location: "UK",
    platform: "Booking",
    date: "August 2025",
  },
  {
    score: 8,
    text: "Location — 3 minutes' walk to the beach front with lots of food options, and calm, away from the city hustle.",
    name: "Deepak",
    location: "India",
    platform: "Agoda",
    date: "June 2026",
  },
  {
    score: 9,
    text: "Friendly staff, comfortable beds, location is good. You're close to the road with car access, and a few steps down take you to the beach.",
    name: "Stefan",
    location: "Serbia",
    platform: "Agoda",
    date: "September 2024",
  },
  {
    score: 10,
    text: "Croatia is a beautiful place and this is a lovely place to stay while visiting. Clean, very comfortable, and great communication with the host.",
    name: "Bethany",
    location: "USA",
    platform: "Agoda",
    date: "July 2024",
  },
  {
    score: 5,
    text: "We had a beautiful stay, would like to go back there one day. Such a lovely and helpful owner, spacious room — they had even left some sun cream in the room. Definitely recommend!",
    name: "Paula",
    platform: "Google",
  },
  {
    score: 5,
    text: "Everything is on the level. The hosts are very friendly. Even the stairs to the beach are cute and good for fitness. A very nice experience.",
    name: "Kristijan",
    platform: "Google",
  },
  {
    score: 5,
    text: "Cleanliness, kindness, and attentiveness. I highly recommend it for a stay in Croatia — they welcomed us with a fruit platter and a latte. Very kind hosts.",
    name: "Luigi",
    platform: "Google",
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
      className="w-fit rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white"
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

function ReviewCard({ r, t }: { r: Review; t: ReturnType<typeof useLang>["t"] }) {
  const date = r.date ? (t.reviews.dates[r.date] ?? r.date) : null;
  const location = r.location ? (t.reviews.locations[r.location] ?? r.location) : null;
  return (
    <div className="relative flex h-[224px] flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-md">
      <span
        className="pointer-events-none absolute -top-1 left-5 select-none text-[72px] leading-none"
        style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)", opacity: 0.12 }}
        aria-hidden="true"
      >&ldquo;</span>

      <div className="relative mb-3 flex items-center justify-between">
        <StarRow score={r.score} outOf={r.platform === "Google" ? 5 : 10} size={15} />
        {date && (
          <span
            className="text-[12px] font-medium"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {date}
          </span>
        )}
      </div>

      <p
        className="relative line-clamp-4 text-[14px] leading-[1.7] italic"
        style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
      >
        &ldquo;{r.text}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-3 border-t pt-4" style={{ borderColor: "#F3F4F6" }}>
        <Initials name={r.name} />
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span
              className="text-[13px] font-semibold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
            >
              {r.name}
            </span>
            {location && (
              <span
                className="text-[11px]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                · {location}
              </span>
            )}
          </div>
          <PlatformBadge platform={r.platform} />
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ p, t, className = "" }: { p: (typeof platformStats)[number]; t: ReturnType<typeof useLang>["t"]; className?: string }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-5 ${className}`}
    >
      {/* Fixed bounding box keeps all logos to the same visual footprint (no overflow) */}
      <span className="relative block h-6 w-[96px] md:h-7 md:w-[104px]">
        <Image
          src={p.logo.src}
          alt={p.name}
          fill
          sizes="110px"
          className="object-contain"
        />
      </span>
      <span
        className="flex items-baseline leading-none"
        style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
      >
        <span className="text-[34px] font-normal md:text-[40px]">{p.score}</span>
        <span className="ml-0.5 text-[14px] text-[var(--color-text-muted)] md:text-[15px]">{p.scale}</span>
      </span>
      <StarRow score={p.stars} outOf={5} size={14} />
      <span
        className="text-[10px]"
        style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
      >
        {p.reviews} {t.reviews.reviewsLabel}
      </span>
    </a>
  );
}

function ReviewRow({
  items,
  t,
  reverse,
}: {
  items: Review[];
  t: ReturnType<typeof useLang>["t"];
  reverse: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10"
        style={{ background: "linear-gradient(to right, var(--color-navy), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10"
        style={{ background: "linear-gradient(to left, var(--color-navy), transparent)" }}
        aria-hidden="true"
      />
      <div className={`reviews-marquee items-stretch py-1${reverse ? " reverse" : ""}`}>
        {loop.map((r, i) => (
          <div
            key={`${r.platform}-${r.name}-${i}`}
            className={`w-[300px] shrink-0 pr-5${i >= items.length ? " reviews-marquee-dup" : ""}`}
            aria-hidden={i >= items.length}
          >
            <ReviewCard r={r} t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const { t } = useLang();
  // One infinite-loop row per platform category.
  const reviewRows = (["Booking", "Agoda", "Google"] as Platform[])
    .map((platform) => ({ platform, items: reviews.filter((r) => r.platform === platform) }))
    .filter((row) => row.items.length > 0);

  return (
    <section id="reviews" className="relative overflow-hidden py-24" style={{ backgroundColor: "var(--color-navy)" }}>
      {/* Subtle gold glow anchoring the section */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.16), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1240px] px-6">

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
            className="mb-4 text-4xl font-normal leading-tight text-white md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t.reviews.h2}
          </h2>
          <p
            className="max-w-[480px] text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {t.reviews.subtitle}
          </p>
        </div>

        {/* ── Mobile (<md): stat cards + one infinite-loop row per category ── */}
        <div className="md:hidden">
          <div className="reveal reveal-delay-1 mx-auto mt-14 mb-10 grid max-w-[680px] grid-cols-3 gap-4">
            {platformStats.map((p) => (
              <PlatformCard key={p.name} p={p} t={t} />
            ))}
          </div>
          <div className="reveal flex flex-col gap-4">
            {reviewRows.map((row, idx) => (
              <ReviewRow key={row.platform} items={row.items} t={t} reverse={idx % 2 === 1} />
            ))}
          </div>
        </div>

        {/* ── Desktop (md+): each category card in line with its own infinite-loop row ── */}
        <style>{`
          @keyframes reviewsMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .reviews-marquee { display: flex; width: max-content; animation: reviewsMarquee 44s linear infinite; will-change: transform; }
          .reviews-marquee.reverse { animation-direction: reverse; }
          .reviews-marquee:hover { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) {
            .reviews-marquee { animation: none; width: 100%; overflow-x: auto; }
            .reviews-marquee-dup { display: none; }
          }
        `}</style>
        <div className="reveal reveal-delay-2 mt-14 hidden flex-col gap-5 md:flex">
          {reviewRows.map((row, idx) => {
            const p = platformStats.find((ps) => ps.platform === row.platform)!;
            return (
              <div key={row.platform} className="flex items-stretch gap-6">
                {/* Left — category card, height matches its row */}
                <div className="w-[176px] shrink-0 lg:w-[196px]">
                  <PlatformCard p={p} t={t} className="h-full w-full" />
                </div>
                {/* Right — infinite-loop row of that category's reviews */}
                <div className="min-w-0 flex-1">
                  <ReviewRow items={row.items} t={t} reverse={idx % 2 === 1} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 flex flex-wrap items-center justify-center gap-2 text-[14px]">
          <span className="text-white/60" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
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
          <span className="text-white/40">·</span>
          <a
            href="https://www.agoda.com/apartments-grbic/hotel/mlini-hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-200 hover:underline"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Agoda
          </a>
          <span className="text-white/40">{t.reviews.and}</span>
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
