"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLang } from "@/src/i18n/LangContext";

type AspectRatio = "4/3" | "3/4" | "1/1";
export type GalleryItem = { src: string; alt: string };

// ── Dodaj nove slike ovdje — svaki tab ima vlastiti popis fotografija ─────────
export const photoSets: GalleryItem[][] = [
  // Sve / All
  [
    { src: "/assets/gallery1.jpg", alt: "Gallery 1" },
    { src: "/assets/gallery2.jpg", alt: "Gallery 2" },
    { src: "/assets/gallery3.jpg", alt: "Gallery 3" },
    { src: "/assets/gallery4.jpg", alt: "Gallery 4" },
    { src: "/assets/gallery5.jpg", alt: "Gallery 5" },
    { src: "/assets/gallery6.jpg", alt: "Gallery 6" },
  ],
  // Apartman 1
  [
    { src: "/assets/apt1-1.jpg", alt: "Apartment 1" },
    { src: "/assets/apt1-2.jpg", alt: "Apartment 1" },
    { src: "/assets/apt1-3.jpg", alt: "Apartment 1" },
  ],
  // Apartman 2
  [
    { src: "/assets/apt2-1.jpg", alt: "Apartment 2" },
    { src: "/assets/apt2-2.jpg", alt: "Apartment 2" },
    { src: "/assets/apt2-3.jpg", alt: "Apartment 2" },
    { src: "/assets/apt2-4.jpg", alt: "Apartment 2" },
  ],
  // Apartman 3
  [
    { src: "/assets/apt3-1.jpg", alt: "Apartment 3" },
  ],
  // Apartman 4
  [
    { src: "/assets/apt4-1.jpg", alt: "Apartment 4" },
    { src: "/assets/apt4-2.jpg", alt: "Apartment 4" },
    { src: "/assets/apt4-3.jpg", alt: "Apartment 4" },
    { src: "/assets/apt4-4.jpg", alt: "Apartment 4" },
  ],
];

// Pattern se ponavlja: landscape → portrait → square → landscape → ...
const ASPECT_PATTERN: AspectRatio[] = ["4/3", "3/4", "1/1"];

const aspectClasses: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
};

export default function GalleryFull() {
  const { t } = useLang();
  // First tab comes from translations; the rest match the apartment names
  const tabs = [t.gallery.tabAll, "Apartment 1", "Apartment 2", "Apartment 3", "Apartment 4"];
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = photoSets[activeIdx];

  const close = useCallback(() => setLightbox(null), []);
  const prev  = useCallback(() => setLightbox((i) => (i === null ? null : (i - 1 + items.length) % items.length)), [items.length]);
  const next  = useCallback(() => setLightbox((i) => (i === null ? null : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <div className="mx-auto max-w-[1240px] px-6">

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2" role="tablist">
          {tabs.map((tab, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={isActive}
                onClick={() => { setActiveIdx(idx); setLightbox(null); }}
                className="cursor-pointer rounded-full border px-5 py-2 text-[13px] font-medium transition-all duration-200 hover:-translate-y-px"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  backgroundColor: isActive ? "var(--color-gold)" : "transparent",
                  borderColor: "var(--color-gold)",
                  color: isActive ? "#ffffff" : "var(--color-gold)",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Grid — keyed by tab so the fade-in replays on filter change */}
        <div key={activeIdx} className="columns-2 gap-2 md:columns-3 lg:gap-4">
          {items.map((item, i) => (
            <div
              key={item.src}
              className="gallery-fade group relative mb-2 lg:mb-4 cursor-pointer overflow-hidden rounded-lg lg:rounded-xl bg-gray-200 break-inside-avoid"
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => setLightbox(i)}
            >
              <div className={`relative ${aspectClasses[ASPECT_PATTERN[i % ASPECT_PATTERN.length]]}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <circle cx="14" cy="14" r="8" />
                  <line x1="20" y1="20" x2="28" y2="28" />
                  <line x1="11" y1="14" x2="17" y2="14" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label={items[lightbox].alt}
          onClick={close}
        >
          <button className="absolute right-5 top-5 cursor-pointer p-2 text-white transition-opacity hover:opacity-70" onClick={close} aria-label={t.gallery.close}>
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="26" y2="26" />
              <line x1="26" y1="6" x2="6" y2="26" />
            </svg>
          </button>
          {items.length > 1 && (
            <button className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-white transition-opacity hover:opacity-70" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label={t.gallery.prev}>
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="25,8 13,20 25,32" />
              </svg>
            </button>
          )}
          <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[lightbox].src} alt={items[lightbox].alt} className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl" />
          </div>
          {items.length > 1 && (
            <button className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-white transition-opacity hover:opacity-70" onClick={(e) => { e.stopPropagation(); next(); }} aria-label={t.gallery.next}>
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,8 27,20 15,32" />
              </svg>
            </button>
          )}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[14px] text-white" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontVariantNumeric: "tabular-nums" }}>
            {lightbox + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
