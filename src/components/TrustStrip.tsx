"use client";

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 1l1.35 2.73L10.5 4.22l-2.25 2.19.53 3.1L6 7.96l-2.78 1.55.53-3.1L1.5 4.22l3.15-.49L6 1z" fill="var(--color-gold)" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="7" />
      <path d="M6 4.5h3.5a2.5 2.5 0 0 1 0 5H6V4.5z" />
      <line x1="6" y1="9.5" x2="6" y2="12.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 5.5a10 10 0 0 1 14 0" />
      <path d="M3.5 8a6.5 6.5 0 0 1 9 0" />
      <path d="M6 10.5a3 3 0 0 1 4 0" />
      <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DirectIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 8h12M9 4l5 4-5 4" />
    </svg>
  );
}

const items = [
  { icon: <StarIcon />, value: "8.7", label: "Booking.com", href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html" },
  { icon: <StarIcon />, value: "4.3", label: "Google",       href: "https://share.google/P6ZK6srMHdU72N4fk" },
  { icon: <StarIcon />, value: "4.5", label: "Agoda",        href: null },
  { icon: null,          value: "290+", label: "Reviews",    href: null },
  { icon: <ParkingIcon />, value: null, label: "Free Parking", href: null },
  { icon: <WifiIcon />,    value: null, label: "Free Wi-Fi",   href: null },
  { icon: <DirectIcon />,  value: null, label: "Book Direct",  href: null },
];

export default function TrustStrip() {
  return (
    <div style={{ backgroundColor: "var(--color-navy)" }} className="border-b border-white/5">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-wrap items-center justify-center gap-0 divide-x divide-white/10">
          {items.map((item, i) => {
            const inner = (
              <div className="flex items-center gap-1.5 px-4 py-3.5 md:px-6">
                {item.icon && (
                  <span style={{ color: "var(--color-gold)" }}>{item.icon}</span>
                )}
                {item.value && (
                  <span
                    className="text-[13px] font-medium text-white"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {item.value}
                  </span>
                )}
                <span
                  className="text-[11px] uppercase tracking-[0.12em] text-white/50"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
            );

            return item.href ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:bg-white/5"
              >
                {inner}
              </a>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
