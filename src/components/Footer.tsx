"use client";


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

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Apartments", href: "#apartments" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/apartments_grbic/", label: "Instagram" },
  { icon: <BookingIcon />, href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html", label: "Booking" },
  { icon: <TripadvisorIcon />, href: "https://www.tripadvisor.com/Hotel_Review-g658382-d3831572", label: "Tripadvisor" },
  { icon: <MapsIcon />, href: "https://maps.app.goo.gl/79b8VsK1zgCx7ovY9", label: "Google Maps" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/385989600088", label: "WhatsApp" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Footer() {

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
                  style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500 }}
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
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Peaceful apartments in Mlini, 10 minutes from Dubrovnik — on the Adriatic coast.
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
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <p
                className="mb-4 text-[12px] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
              >
                Pages
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[11px] uppercase tracking-[0.15em] text-white/70 transition-colors duration-200 hover:text-[var(--color-gold)]"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
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
                className="mb-4 text-[12px] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
              >
                Contact
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+385989600088"
                  className="text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  +385 98 96 000 88
                </a>
                <a
                  href="mailto:apt.grbic.mlini@gmail.com"
                  className="break-all text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  apt.grbic.mlini@gmail.com
                </a>
                <span
                  className="text-[14px] text-white/60"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Mlini, Dubrovnik, Croatia
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
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              © 2025 Apartments Grbić. All rights reserved.
            </span>
            <span
              className="text-[13px] text-white/30"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Mlini · Dubrovnik · Croatia
            </span>
            <div className="flex gap-4">
              {[
                { label: "Privacy", href: "/pages/privacy" },
                { label: "Terms", href: "/pages/terms" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[13px] text-white/40 transition-colors duration-200 hover:text-white/80"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

    </>
  );
}
