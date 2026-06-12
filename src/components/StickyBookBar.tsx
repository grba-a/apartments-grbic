"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "@/src/i18n/LangContext";

const MIN_PRICE = 80;

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Mobile-only conversion bar pinned to the bottom of the viewport.
 * Appears after the visitor scrolls past the hero and hides while the
 * contact form or footer is on screen so it never covers them.
 */
export default function StickyBookBar() {
  const { t } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);
  const [overlapping, setOverlapping] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const targets = [document.getElementById("contact"), document.querySelector("footer")]
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        });
        setOverlapping(visible.size > 0);
      },
      { threshold: 0.05 }
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const show = pastHero && !overlapping;
  const ctaHref = isHome ? "#contact" : "/?scrollTo=contact";

  return (
    <div
      className="sticky-book-bar fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 md:hidden"
      style={{ transform: show ? "translateY(0)" : "translateY(110%)" }}
      aria-hidden={!show}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 flex-col">
          <span
            className="truncate text-[9px] uppercase tracking-[0.12em]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            Apartments Grbić
          </span>
          <span
            className="whitespace-nowrap text-[16px] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            {t.apartments.from} {MIN_PRICE} €{" "}
            <span className="text-[12px]" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}>
              {t.apartments.perNight}
            </span>
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="https://wa.me/385989600088?text=Hello%2C%20I'm%20interested%20in%20apartment%20availability."
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.whatsapp.ariaLabel}
            tabIndex={show ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-opacity duration-200 active:opacity-80"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon />
          </a>
          <a
            href={ctaHref}
            tabIndex={show ? 0 : -1}
            className="whitespace-nowrap rounded-full px-4 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-white transition-opacity duration-200 active:opacity-80"
            style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {t.hero.cta1}
          </a>
        </div>
      </div>
    </div>
  );
}
