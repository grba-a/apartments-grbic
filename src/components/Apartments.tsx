"use client";

import Image from "next/image";

type Feature = {
  icon: string;
  label: string;
};

type Apartment = {
  id: number;
  name: string;
  badge: "Balkon + pogled" | "Standard";
  price: number;
  imageSrc: string;
  features: Feature[];
};

const apartments: Apartment[] = [
  {
    id: 1,
    name: "Apartman 1",
    badge: "Standard",
    price: 85,
    imageSrc: "/assets/apt1-1.jpg",
    features: [
      { icon: "📐", label: "32 m²" },
      { icon: "👥", label: "2+1 gosta" },
      { icon: "📶", label: "Wi-Fi" },
    ],
  },
  {
    id: 2,
    name: "Apartman 2",
    badge: "Balkon + pogled",
    price: 110,
    imageSrc: "/assets/apt2-1.jpg",
    features: [
      { icon: "📐", label: "40 m²" },
      { icon: "👥", label: "4 gosta" },
      { icon: "📶", label: "Wi-Fi" },
      { icon: "🌊", label: "Pogled na more" },
    ],
  },
  {
    id: 3,
    name: "Apartman 3",
    badge: "Standard",
    price: 80,
    imageSrc: "/assets/apt3-1.jpg",
    features: [
      { icon: "📐", label: "30 m²" },
      { icon: "👥", label: "2 gosta" },
      { icon: "📶", label: "Wi-Fi" },
      { icon: "🅿️", label: "Parking" },
    ],
  },
  {
    id: 4,
    name: "Apartman 4",
    badge: "Balkon + pogled",
    price: 125,
    imageSrc: "/assets/apt4-1.jpg",
    features: [
      { icon: "📐", label: "45 m²" },
      { icon: "👥", label: "4+1 gosta" },
      { icon: "📶", label: "Wi-Fi" },
      { icon: "🌊", label: "Pogled na more" },
    ],
  },
];

function ApartmentCard({ apt }: { apt: Apartment }) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-gray-200">
        <Image
          src={apt.imageSrc}
          alt={apt.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          onError={() => {}}
        />

        {/* Top-left badge */}
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-medium text-white"
          style={{
            backgroundColor: "var(--color-gold)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {apt.badge}
        </span>

        {/* Top-right price pill */}
        <span
          className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium"
          style={{
            color: "var(--color-navy)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          od {apt.price} €
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Name */}
        <h3
          className="mb-4 text-[22px] font-normal leading-tight"
          style={{
            fontFamily: "var(--font-playfair), serif",
            color: "var(--color-navy)",
          }}
        >
          {apt.name}
        </h3>

        {/* Features */}
        <ul className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
          {apt.features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-1.5 text-[14px]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "var(--color-text-muted)",
              }}
            >
              <span aria-hidden="true">{f.icon}</span>
              {f.label}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <hr className="mb-5 border-gray-100" />

        {/* Bottom row */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <span
            className="text-[15px] font-medium"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-navy)",
            }}
          >
            od {apt.price} € <span className="font-normal text-[var(--color-text-muted)]">/ noć</span>
          </span>

          <a
            href="#contact"
            className="apt-cta rounded-full border px-5 py-2 text-[13px] font-medium transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Upit / rezervacija
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Apartments() {
  return (
    <section id="apartments" className="bg-white py-24">
      <div className="mx-auto max-w-[1100px] px-6">

        {/* Section header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-gold)",
            }}
          >
            Smještaj
          </span>
          <h2
            className="mb-4 text-4xl md:text-[48px] font-normal leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Naši apartmani
          </h2>
          <p
            className="max-w-[480px] text-base"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-text-muted)",
            }}
          >
            Svaki apartman opremljen je svim potrebnim za ugodan boravak.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apt={apt} />
          ))}
        </div>
      </div>
    </section>
  );
}
