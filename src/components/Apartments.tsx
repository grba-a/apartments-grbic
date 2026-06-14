"use client";

import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

// ── Feature icon SVGs ────────────────────────────────────────────────────────

function AreaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="2" />
      <path d="M1 5h14M5 1v14" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

function GuestsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="4.5" r="2.5" />
      <path d="M1 14c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle cx="12.5" cy="5" r="2" />
      <path d="M10.5 14c0-1.8.9-3.4 2.3-4.3" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 5.5a10 10 0 0 1 14 0" />
      <path d="M3.5 8a6.5 6.5 0 0 1 9 0" />
      <path d="M6 10.5a3 3 0 0 1 4 0" />
      <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SeaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 9 Q4 6.5 7 9 Q10 11.5 13 9 Q14.5 7.75 16 9" />
      <path d="M1 12.5 Q4 10 7 12.5 Q10 15 13 12.5 Q14.5 11.25 16 12.5" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="7" />
      <path d="M6 4.5h3.5a2.5 2.5 0 0 1 0 5H6V4.5z" />
      <line x1="6" y1="9.5" x2="6" y2="12.5" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

type FeatureKey = "area" | "guests" | "wifi" | "sea" | "parking";

const featureIcons: Record<FeatureKey, React.ReactNode> = {
  area: <AreaIcon />,
  guests: <GuestsIcon />,
  wifi: <WifiIcon />,
  sea: <SeaIcon />,
  parking: <ParkingIcon />,
};

type Feature = { key: FeatureKey; label: string };
type BadgeType = "Balkon + pogled" | "Standard";

type Apartment = {
  id: number;
  name: string;
  subtitle: string;
  badge: BadgeType;
  images: string[];
  features: Feature[];
};

const apartments: Apartment[] = [
  {
    id: 1,
    name: "Apartment 1",
    subtitle: "Classic Comfort",
    badge: "Standard",
    images: ["/assets/apt1-1.jpg", "/assets/apt1-2.jpg"],
    features: [
      { key: "area",    label: "32 m²" },
      { key: "guests",  label: "2+1" },
      { key: "wifi",    label: "Wi-Fi" },
    ],
  },
  {
    id: 2,
    name: "Apartment 2",
    subtitle: "Adriatic Vista",
    badge: "Balkon + pogled",
    images: ["/assets/apt2-1.jpg", "/assets/apt2-2.jpg"],
    features: [
      { key: "area",    label: "40 m²" },
      { key: "guests",  label: "2" },
      { key: "wifi",    label: "Wi-Fi" },
      { key: "sea",     label: "" },
    ],
  },
  {
    id: 3,
    name: "Apartment 3",
    subtitle: "Coastal Hideaway",
    badge: "Standard",
    images: ["/assets/apt3-1.jpg"],
    features: [
      { key: "area",    label: "30 m²" },
      { key: "guests",  label: "2" },
      { key: "wifi",    label: "Wi-Fi" },
      { key: "parking", label: "" },
    ],
  },
  {
    id: 4,
    name: "Apartment 4",
    subtitle: "Premium Panorama",
    badge: "Balkon + pogled",
    images: ["/assets/apt4-1.jpg", "/assets/apt4-2.jpg"],
    features: [
      { key: "area",    label: "45 m²" },
      { key: "guests",  label: "4+1" },
      { key: "wifi",    label: "Wi-Fi" },
      { key: "sea",     label: "" },
    ],
  },
];

// ── Card ─────────────────────────────────────────────────────────────────────

function ApartmentCard({ apt, delay }: { apt: Apartment; delay: number }) {
  const { t } = useLang();

  const badgeLabel = apt.badge === "Balkon + pogled"
    ? t.apartments.badgeSeaview
    : t.apartments.badgeStandard;

  const getFeatureLabel = (key: FeatureKey, rawValue: string): string => {
    switch (key) {
      case "area":    return rawValue;
      case "guests":  return `${rawValue} ${t.apartments.guestsSuffix}`;
      case "wifi":    return "Wi-Fi";
      case "sea":     return t.apartments.seaLabel;
      case "parking": return "Parking";
    }
  };

  return (
    <a
      href="#contact"
      className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-[var(--color-gold)]/50 cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image with overlaid identity */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
        <Image
          src={apt.images[0]}
          alt={apt.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-all duration-700 group-hover:scale-[1.05]"
        />
        {apt.images[1] && (
          <Image
            src={apt.images[1]}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        )}

        {/* Scrim for legible overlay text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        {/* Badge */}
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium text-white shadow-sm"
          style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {badgeLabel}
        </span>

        {/* Name + subtitle on image */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p
            className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/80"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {apt.subtitle}
          </p>
          <h3
            className="text-[26px] font-normal leading-tight text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {apt.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <ul className="mb-6 flex flex-wrap gap-2">
          {apt.features.map((f) => (
            <li
              key={f.key}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                backgroundColor: "var(--color-sand)",
                color: "var(--color-navy)",
              }}
            >
              <span style={{ color: "var(--color-azure)" }}>
                {featureIcons[f.key]}
              </span>
              {getFeatureLabel(f.key, f.label)}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span
            className="text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 group-hover:text-[var(--color-gold)]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.apartments.cta}
          </span>
          <span
            className="text-[16px] transition-all duration-200 group-hover:translate-x-1"
            style={{ color: "var(--color-gold)" }}
          >
            →
          </span>
        </div>
      </div>
    </a>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Apartments() {
  const { t } = useLang();

  return (
    <section id="apartments" className="bg-white py-24">
      <div className="mx-auto max-w-[1240px] px-6">

        <div className="reveal mb-14 flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            {t.apartments.eyebrow}
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl md:text-[48px] font-normal leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t.apartments.h2}
          </h2>
          <p
            className="max-w-[480px] text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.apartments.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {apartments.map((apt, i) => (
            <ApartmentCard key={apt.id} apt={apt} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
