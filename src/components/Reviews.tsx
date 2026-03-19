"use client";

type Platform = "Google" | "Booking" | "Tripadvisor";

type Review = {
  score: number;
  text: string;
  name: string;
  platform: Platform;
};

const platformStats = [
  { name: "Booking", score: 8.8, outOf: 10, stars: 4.5 },
  { name: "Google", score: 4.3, outOf: 5, stars: 4.3 },
  { name: "Tripadvisor", score: 4.6, outOf: 5, stars: 4.6 },
];

const reviews: Review[] = [
  {
    score: 5.0,
    text: "Čisto, mirno i odlična lokacija. Sve jednostavno i bez stresa.",
    name: "Jack",
    platform: "Google",
  },
  {
    score: 4.8,
    text: "Balkon i pogled na more su top. Sve uredno i domaćin brz na odgovoru.",
    name: "Ana",
    platform: "Booking",
  },
  {
    score: 4.6,
    text: "Parking je stvarno plus. Super baza za Dubrovnik i izlete.",
    name: "Karlo",
    platform: "Tripadvisor",
  },
];

const platformColors: Record<Platform, string> = {
  Google: "#4285F4",
  Booking: "#003580",
  Tripadvisor: "#34E0A1",
};

function StarRow({ score, outOf = 5, size = 16 }: { score: number; outOf?: number; size?: number }) {
  // Normalise to 0–5
  const normalised = outOf === 10 ? (score / 10) * 5 : score;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = normalised >= n ? 1 : normalised >= n - 0.5 ? 0.5 : 0;
        return (
          <svg key={n} width={size} height={size} viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`star-${n}-${size}`}>
                <stop offset={`${fill * 100}%`} stopColor="#C9A84C" />
                <stop offset={`${fill * 100}%`} stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              d="M10 1l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.3l-5.2 2.7 1-5.8L1.6 7.1l5.8-.8z"
              fill={`url(#star-${n}-${size})`}
            />
          </svg>
        );
      })}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: Platform }) {
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white"
      style={{
        backgroundColor: platformColors[platform],
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      {platform}
    </span>
  );
}

function Initials({ name }: { name: string }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
      style={{
        backgroundColor: "var(--color-gold)",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            Recenzije
          </span>
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Što kažu naši gosti
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
          >
            Iskustva gostiju koji su boravili u Apartments Grbić.
          </p>
        </div>

        {/* Platform stats bar */}
        <div className="mt-12 mb-16 flex flex-wrap items-start justify-center gap-12">
          {platformStats.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2">
              <span
                className="text-[13px] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
              >
                {p.name}
              </span>
              <span
                className="text-[48px] font-normal leading-none"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
              >
                {p.score}
              </span>
              <StarRow score={p.stars} outOf={5} size={18} />
              <span
                className="text-[12px]"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
              >
                od {p.outOf}
              </span>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Decorative quote mark */}
              <span
                className="pointer-events-none absolute -top-2 left-5 select-none text-[80px] leading-none opacity-20"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)" }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Stars + score */}
              <div className="relative flex items-center justify-between">
                <StarRow score={r.score} size={16} />
                <span
                  className="text-[13px] font-medium"
                  style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
                >
                  {r.score.toFixed(1)}
                </span>
              </div>

              {/* Quote text */}
              <p
                className="relative mt-4 flex-1 text-base italic leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
              >
                {r.text}
              </p>

              {/* Reviewer row */}
              <div
                className="mt-6 flex items-center gap-3 border-t pt-4"
                style={{ borderColor: "#F3F4F6" }}
              >
                <Initials name={r.name} />
                <div className="flex flex-1 flex-col gap-1">
                  <span
                    className="text-[14px] font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
                  >
                    {r.name}
                  </span>
                  <PlatformBadge platform={r.platform} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 text-base">
          <span
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
          >
            Pročitajte sve recenzije na
          </span>
          <a
            href="https://www.booking.com/hotel/hr/apartmani-grbia.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            Booking.com
          </a>
          <span style={{ color: "var(--color-text-muted)" }}>i</span>
          <a
            href="https://share.google/P6ZK6srMHdU72N4fk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            Google
          </a>
        </div>

      </div>
    </section>
  );
}
