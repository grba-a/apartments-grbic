"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Apartmani", href: "#apartments" },
  { label: "O nama", href: "#about" },
  { label: "Galerija", href: "#gallery" },
  { label: "Lokacija", href: "#location" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const textColor = scrolled
    ? "text-[var(--color-navy)]"
    : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-navy)]/10"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-8">

          {/* Logo */}
          <a href="#top" className="flex items-baseline gap-1.5">
            <span
              className={`text-lg leading-none transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
            >
              Apartments
            </span>
            <span
              className={`text-xl leading-none transition-colors duration-300 ${textColor}`}
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              Grbić
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative text-[14px] tracking-wider transition-colors duration-300 ${textColor}
                    after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-full
                    after:origin-left after:scale-x-0 after:bg-current
                    after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-5">
            <span
              className={`text-[13px] cursor-pointer select-none transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              HR | EN
            </span>
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
              style={{
                backgroundColor: "var(--color-gold)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Rezervacija
            </a>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Otvori izbornik"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white"
            aria-label="Zatvori izbornik"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="24" y2="24" />
              <line x1="24" y1="4" x2="4" y2="24" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-9">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl tracking-wide transition-colors duration-200 hover:text-[var(--color-gold)]"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 500,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="flex justify-center pb-16">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-full px-8 py-3 text-base font-medium text-white transition-opacity duration-200 hover:opacity-85"
            style={{
              backgroundColor: "var(--color-gold)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Rezervacija
          </a>
        </div>
      </div>
    </>
  );
}
