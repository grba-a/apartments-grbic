"use client";

import { useState, useEffect } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 8h5a2.5 2.5 0 0 1 0 5H8V8z" />
      <line x1="8" y1="13" x2="8" y2="18" />
    </svg>
  );
}

function TripadvisorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="14" r="3.5" />
      <circle cx="16.5" cy="14" r="3.5" />
      <path d="M3 9h18" />
      <path d="M7.5 9 Q12 3 16.5 9" />
    </svg>
  );
}

function MapsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,5 9,3 15,5 21,3 21,19 15,21 9,19 3,21" />
      <line x1="9" y1="3" x2="9" y2="19" />
      <line x1="15" y1="5" x2="15" y2="21" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Apartmani", href: "#apartments" },
  { label: "O nama", href: "#about" },
  { label: "Galerija", href: "#gallery" },
  { label: "Lokacija", href: "#location" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#contact" },
];

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/grbicapartments/", label: "Instagram" },
  { icon: <BookingIcon />, href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html", label: "Booking" },
  { icon: <TripadvisorIcon />, href: "https://www.tripadvisor.com/Hotel_Review-g658382-d3831572", label: "Tripadvisor" },
  { icon: <MapsIcon />, href: "https://maps.app.goo.gl/79b8VsK1zgCx7ovY9", label: "Google Maps" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer style={{ backgroundColor: "var(--color-navy)" }} className="pt-16 pb-8 text-white">
        <div className="mx-auto max-w-[1240px] px-6">

          {/* Top 3-column grid */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {/* Column 1 — Brand */}
            <div>
              <a href="#top" className="flex items-baseline gap-1.5">
                <span
                  className="text-lg leading-none text-white"
                  style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
                >
                  Apartments
                </span>
                <span
                  className="text-xl leading-none text-white"
                  style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 600 }}
                >
                  Grbić
                </span>
              </a>
              <p
                className="mt-3 max-w-[260px] text-[14px] leading-relaxed text-white/60"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Mirni apartmani u Mlinima, 10 minuta od Dubrovnika.
              </p>
              <div className="mt-6 flex gap-4">
                {[
                  { label: "Booking 8.8 ⭐", href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html" },
                  { label: "Google 4.3 ⭐", href: "https://share.google/P6ZK6srMHdU72N4fk" },
                ].map((r) => (
                  <a
                    key={r.label}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/70 transition-colors duration-200 hover:text-white"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <p
                className="mb-4 text-[12px] uppercase tracking-widest text-white/40"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Stranica
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact */}
            <div>
              <p
                className="mb-4 text-[12px] uppercase tracking-widest text-white/40"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Kontakt
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+385989600088"
                  className="text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  +385 98 96 000 88
                </a>
                <a
                  href="mailto:apt.grbic.mlini@gmail.com"
                  className="break-all text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  apt.grbic.mlini@gmail.com
                </a>
                <span
                  className="text-[14px] text-white/60"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Mlini, Dubrovnik, Hrvatska
                </span>
              </div>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="footer-social rounded-full border border-white/20 p-2 text-white/70 transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/10" />

          {/* Bottom bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <span
              className="text-[13px] text-white/40"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              © 2025 Apartments Grbić. Sva prava pridržana.
            </span>
            <span
              className="text-[13px] text-white/30"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Mlini • Dubrovnik • Hrvatska
            </span>
            <div className="flex gap-4">
              {[
                { label: "Privatnost", href: "/pages/privacy" },
                { label: "Uvjeti", href: "/pages/terms" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white/80"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Povratak na vrh"
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-all duration-300"
        style={{
          backgroundColor: "var(--color-gold)",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
          transform: showTop ? "translateY(0)" : "translateY(12px)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4,13 10,7 16,13" />
        </svg>
      </button>
    </>
  );
}
