"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/src/i18n/LangContext";
import { photoSets } from "@/src/components/GalleryFull";

export default function Gallery() {
  const { t } = useLang();
  // Highlights = the curated "All" set (6 images)
  const items = photoSets[0];
  const [lightbox, setLightbox] = useState<number | null>(null);

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
      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-[1240px] px-6">

          <div className="reveal flex flex-col items-center text-center">
            <span
              className="mb-3 text-[13px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
            >
              {t.gallery.eyebrow}
            </span>
            <span className="section-rule" />
            <h2
              className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
            >
              {t.gallery.h2}
            </h2>
            <p
              className="text-base"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
            >
              {t.gallery.subtitle}
            </p>
          </div>

          {/* Highlights carousel */}
          <div className="relative mt-12">
            <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2">
              {items.map((item, i) => (
                <button
                  key={item.src}
                  data-card
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-[4/3] w-[82%] shrink-0 snap-center cursor-pointer overflow-hidden rounded-xl bg-gray-200 sm:w-[60%] lg:w-[calc((100%-2rem)/3)]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </button>
              ))}
            </div>
          </div>

          {/* View full gallery CTA */}
          <div className="mt-10 flex justify-center">
            <Link href="/gallery" className="btn-navy btn-lg">
              {t.gallery.viewMore}
              <span className="btn-arrow">→</span>
            </Link>
          </div>

        </div>
      </section>

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
          <button className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-white transition-opacity hover:opacity-70" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label={t.gallery.prev}>
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="25,8 13,20 25,32" />
            </svg>
          </button>
          <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[lightbox].src} alt={items[lightbox].alt} className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl" />
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-white transition-opacity hover:opacity-70" onClick={(e) => { e.stopPropagation(); next(); }} aria-label={t.gallery.next}>
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15,8 27,20 15,32" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[14px] text-white" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontVariantNumeric: "tabular-nums" }}>
            {lightbox + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  );
}
