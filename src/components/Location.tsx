"use client";

import { useLang } from "@/src/i18n/LangContext";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }} className="mt-0.5 shrink-0">
      <circle cx="10" cy="10" r="9" />
      <polyline points="6,10 9,13 14,7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }}>
      <path d="M10 1a6 6 0 0 1 6 6c0 4-6 12-6 12S4 11 4 7a6 6 0 0 1 6-6z" />
      <circle cx="10" cy="7" r="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }}>
      <path d="M3 3h4l1.5 4-2 1.5a11 11 0 0 0 5 5L13 11l4 1.5V17a1 1 0 0 1-1 1C7 18 2 13 2 4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" style={{ color: "var(--color-gold)" }}>
      <rect x="2" y="4" width="16" height="12" rx="2" />
      <polyline points="2,4 10,12 18,4" />
    </svg>
  );
}

export default function Location() {
  const { t } = useLang();

  return (
    <section id="location" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            {t.location.eyebrow}
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            {t.location.h2}
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.location.subtitle}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-start">

          {/* Left column */}
          <div className="flex flex-1 flex-col">

            <ul className="flex flex-col gap-4">
              {t.location.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span
                    className="text-[15px] leading-snug"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Address card */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <PinIcon />
                  <div>
                    <span
                      className="block text-[15px] font-medium"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
                    >
                      Rivijera 10, 20207 Mlini
                    </span>
                    <span
                      className="text-[13px]"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                    >
                      {t.location.country}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon />
                  <a
                    href="tel:+385989600088"
                    className="text-[15px] transition-colors duration-200 hover:text-[var(--color-gold)]"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    +385 98 96 000 88
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <EmailIcon />
                  <a
                    href="mailto:apt.grbic.mlini@gmail.com"
                    className="break-all text-[15px] transition-colors duration-200 hover:text-[var(--color-gold)]"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    apt.grbic.mlini@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/79b8VsK1zgCx7ovY9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy"
              >
                {t.location.openMaps}
                <span className="btn-arrow">→</span>
              </a>
              <a
                href="https://wa.me/385989600088?text=Hello%2C%20I'm%20interested%20in%20apartment%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[4px_28px_28px_4px] inline-flex items-center gap-2.5 px-7 py-[13px] text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: "#25D366", fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {t.location.whatsapp}
                <span className="inline-block transition-transform duration-200 hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Right column — map */}
          <div className="w-full overflow-hidden rounded-2xl shadow-lg md:w-[520px] md:shrink-0">
            <div className="h-[300px] md:h-[450px]">
              <iframe
                src="https://maps.google.com/maps?q=42.623606,18.205885&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.location.mapTitle}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
