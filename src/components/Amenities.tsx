"use client";

import { useLang } from "@/src/i18n/LangContext";

const amenityKeys = [
  "Besplatan Wi-Fi",
  "Klima uređaj",
  "Parking",
  "Blizu plaže",
  "Mirna lokacija",
  "Family friendly",
  "Podrška domaćina",
  "Balkon",
];

const amenityIcons: Record<string, React.ReactNode> = {
  "Besplatan Wi-Fi": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 20a25.6 25.6 0 0 1 36 0" />
      <path d="M12 26a17 17 0 0 1 24 0" />
      <path d="M18 32a8.5 8.5 0 0 1 12 0" />
      <circle cx="24" cy="38" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  "Klima uređaj": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="24" y1="8" x2="24" y2="40" />
      <line x1="8" y1="24" x2="40" y2="24" />
      <line x1="12.7" y1="12.7" x2="35.3" y2="35.3" />
      <line x1="35.3" y1="12.7" x2="12.7" y2="35.3" />
      <polyline points="20,13 24,8 28,13" />
      <polyline points="20,35 24,40 28,35" />
      <polyline points="13,20 8,24 13,28" />
      <polyline points="35,20 40,24 35,28" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  ),
  "Parking": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="32" height="32" rx="16" />
      <path d="M19 16h7a5 5 0 0 1 0 10h-7V16z" />
      <line x1="19" y1="26" x2="19" y2="34" />
    </svg>
  ),
  "Blizu plaže": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 28 Q12 22 18 28 Q24 34 30 28 Q36 22 42 28" />
      <path d="M6 35 Q12 29 18 35 Q24 41 30 35 Q36 29 42 35" />
      <circle cx="24" cy="14" r="5" />
      <line x1="24" y1="6" x2="24" y2="4" />
      <line x1="24" y1="24" x2="24" y2="22" strokeWidth="1.5" />
      <line x1="32.5" y1="8.5" x2="34" y2="7" />
      <line x1="15.5" y1="8.5" x2="14" y2="7" />
      <line x1="35" y1="14" x2="37" y2="14" />
      <line x1="11" y1="14" x2="13" y2="14" />
    </svg>
  ),
  "Mirna lokacija": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="38" x2="44" y2="38" />
      <polyline points="4,38 16,18 28,38" />
      <polyline points="18,38 32,10 46,38" />
      <polyline points="27,18 32,10 37,18" />
    </svg>
  ),
  "Family friendly": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8,22 24,8 40,22" />
      <rect x="10" y="22" width="28" height="20" rx="1" />
      <rect x="20" y="30" width="8" height="12" rx="1" />
      <path d="M21 19 Q24 15 27 19 Q30 22 24 27 Q18 22 21 19z" strokeWidth="1.5" />
    </svg>
  ),
  "Podrška domaćina": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="14" r="6" />
      <path d="M6 40 Q6 28 18 28 Q30 28 30 40" />
      <rect x="28" y="8" width="16" height="12" rx="3" />
      <path d="M31 20 L28 24 L34 20" />
      <circle cx="33" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="36" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="39" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  "Balkon": (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="38" x2="40" y2="38" />
      <line x1="8" y1="22" x2="40" y2="22" />
      <line x1="8" y1="22" x2="8" y2="38" />
      <line x1="40" y1="22" x2="40" y2="38" />
      <line x1="16" y1="22" x2="16" y2="38" />
      <line x1="24" y1="22" x2="24" y2="38" />
      <line x1="32" y1="22" x2="32" y2="38" />
      <line x1="8" y1="22" x2="8" y2="10" />
      <line x1="40" y1="22" x2="40" y2="10" />
      <line x1="8" y1="10" x2="40" y2="10" />
      <rect x="16" y="10" width="16" height="12" rx="1" />
    </svg>
  ),
};

export default function Amenities() {
  const { t } = useLang();

  return (
    <section id="amenities" className="bg-white py-24">
      <div className="mx-auto max-w-[900px] px-6">

        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            {t.amenities.eyebrow}
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            {t.amenities.h2}
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.amenities.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {amenityKeys.map((key, i) => (
            <div
              key={key}
              className={`amenity-card reveal reveal-delay-${(i % 4) % 3 + 1} group flex flex-col items-center rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              style={{ backgroundColor: "var(--color-sand)" }}
            >
              <span
                className="amenity-icon transition-all duration-300 group-hover:scale-110"
                style={{ color: "var(--color-navy)" }}
              >
                {amenityIcons[key]}
              </span>
              <span
                className="amenity-label mt-3 text-center text-[15px] font-medium transition-colors duration-300"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
              >
                {t.amenities.items[key] ?? key}
              </span>
            </div>
          ))}
        </div>

        <div
          className="reveal mt-16 rounded-2xl px-8 py-8 text-center md:px-12"
          style={{ background: "linear-gradient(120deg, var(--color-navy) 0%, var(--color-azure) 100%)" }}
        >
          <p className="text-base text-white/85" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            {t.amenities.banner}
          </p>
        </div>

      </div>
    </section>
  );
}
