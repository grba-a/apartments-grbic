"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/src/i18n/LangContext";

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [lightBg, setLightBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section currently in view
  useEffect(() => {
    if (pathname !== "/") { setActiveSection(null); return; }
    const ids = t.nav.links
      .filter(({ href }) => href.startsWith("#"))
      .map(({ href }) => href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, t.nav.links]);

  useEffect(() => {
    const check = () => setLightBg("navLight" in document.body.dataset);
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.body, { attributes: true, attributeFilter: ["data-nav-light"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textColor = (scrolled || lightBg) ? "text-[var(--color-navy)]" : "text-white";
  const isHome = pathname === "/";

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    const sectionId = href.replace("#", "");
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scrollTo=${sectionId}`);
    }
  };

  const getHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    const sectionId = href.replace("#", "");
    return isHome ? href : `/?scrollTo=${sectionId}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1">
            <span
              className={`text-[15px] font-light uppercase tracking-[0.2em] leading-none transition-colors duration-300 ${textColor}`}
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Apartments
            </span>
            <span
              className="text-[20px] leading-none italic font-semibold"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)" }}
            >
              Grbić
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {t.nav.links.map(({ label, href }) => {
              const isActive = href.startsWith("#")
                ? activeSection === href.slice(1)
                : pathname.startsWith(href);
              return (
                <li key={href}>
                  <a
                    href={getHref(href)}
                    onClick={(e) => handleSectionClick(e, href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${isActive ? "text-[var(--color-gold)]" : textColor}
                      after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-full
                      after:origin-left after:bg-[var(--color-gold)]
                      after:transition-transform after:duration-300 hover:after:scale-x-100
                      ${isActive ? "after:scale-x-100" : "after:scale-x-0"}`}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-5">
            <style>{`
              .nav-book-btn {
                box-shadow: 3px 3px 0 var(--color-navy);
                transition: transform 150ms ease, box-shadow 150ms ease;
              }
              .nav-book-btn:hover {
                transform: translate(2px, 2px);
                box-shadow: 1px 1px 0 var(--color-navy);
              }
              .nav-book-btn:active {
                transform: translate(3px, 3px);
                box-shadow: none;
              }
            `}</style>
            <a
              href={getHref("#contact")}
              onClick={(e) => handleSectionClick(e, "#contact")}
              className="nav-book-btn rounded-full px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white"
              style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className={`md:hidden p-2 -mr-2 cursor-pointer transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label={t.nav.openMenu}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-baseline gap-1">
            <span
              className="text-[14px] font-light uppercase tracking-[0.2em] leading-none text-white"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Apartments
            </span>
            <span
              className="text-[18px] leading-none italic font-semibold"
              style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)" }}
            >
              Grbić
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer p-2 text-white/70 hover:text-white transition-colors duration-200"
            aria-label={t.nav.closeMenu}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>

        <div className="mx-6 h-px bg-white/10" />

        {/* Nav links */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-7">
          {t.nav.links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={getHref(href)}
                onClick={(e) => handleSectionClick(e, href)}
                className="text-white/80 text-[13px] font-medium uppercase tracking-[0.25em] transition-colors duration-200 hover:text-[var(--color-gold)]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 pb-14">
          <a
            href={getHref("#contact")}
            onClick={(e) => handleSectionClick(e, "#contact")}
            className="rounded-full px-10 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}
