"use client";

import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

// ── Feature icon SVGs ────────────────────────────────────────────────────────

function AreaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="2" />
      <path d="M1 5h14M5 1v14" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

function GuestsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="4.5" r="2.5" />
      <path d="M1 14c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle cx="12.5" cy="5" r="2" />
      <path d="M10.5 14c0-1.8.9-3.4 2.3-4.3" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 5.5a10 10 0 0 1 14 0" />
      <path d="M3.5 8a6.5 6.5 0 0 1 9 0" />
      <path d="M6 10.5a3 3 0 0 1 4 0" />
      <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SeaIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 9 Q4 6.5 7 9 Q10 11.5 13 9 Q14.5 7.75 16 9" />
      <path d="M1 12.5 Q4 10 7 12.5 Q10 15 13 12.5 Q14.5 11.25 16 12.5" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  price: number;
  imageSrc: string;
  features: Feature[];
};

const apartments: Apartment[] = [
  {
    id: 1,
    name: "Apartment 1",
    subtitle: "Classic Comfort",
    badge: "Standard",
    price: 85,
    imageSrc: "/assets/apt1-1.jpg",
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
    price: 110,
    imageSrc: "/assets/apt2-1.jpg",
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
    price: 80,
    imageSrc: "/assets/apt3-1.jpg",
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
    price: 125,
    imageSrc: "/assets/apt4-1.jpg",
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
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--color-gold)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
        <Image
          src={apt.imageSrc}
          alt={apt.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={() => {}}
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium text-white"
          style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {badgeLabel}
        </span>
        <span
          className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium"
          style={{ color: "var(--color-navy)", fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {t.apartments.from} {apt.price} €
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="mb-1 text-[22px] font-normal leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
        >
          {apt.name}
        </h3>
        <p
          className="mb-4 text-[12px] uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
        >
          {apt.subtitle}
        </p>

        <ul className="mb-5 flex flex-wrap gap-x-4 gap-y-2.5">
          {apt.features.map((f) => (
            <li
              key={f.key}
              className="flex items-center gap-1.5 text-[13px]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              <span style={{ color: "var(--color-navy)", opacity: 0.6 }}>
                {featureIcons[f.key]}
              </span>
              {getFeatureLabel(f.key, f.label)}
            </li>
          ))}
        </ul>

        <hr className="mb-5 border-gray-100" />

        <div className="mt-auto flex items-center justify-between gap-4">
          <span
            className="text-[15px] font-medium"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
          >
            {t.apartments.from} {apt.price} €{" "}
            <span className="font-normal text-[var(--color-text-muted)]">{t.apartments.perNight}</span>
          </span>

          <a
            href="#contact"
            className="apt-cta cursor-pointer rounded-full border px-5 py-2 text-[13px] font-medium transition-colors duration-200"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {t.apartments.cta}
          </a>
        </div>
      </div>
    </article>
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
