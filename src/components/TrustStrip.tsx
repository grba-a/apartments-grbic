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

function TrustItem({ item }: { item: (typeof items)[number] }) {
  const inner = (
    <div className="flex items-center gap-1.5 px-5 py-3 md:px-7 md:py-3.5">
      {item.icon && <span style={{ color: "var(--color-gold)" }}>{item.icon}</span>}
      {item.value && (
        <span
          className="text-[12px] font-medium text-white md:text-[13px]"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {item.value}
        </span>
      )}
      <span
        className="text-[10px] uppercase tracking-[0.12em] text-white/50 md:text-[11px]"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        {item.label}
      </span>
    </div>
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 border-l border-white/10 transition-colors duration-200 hover:bg-white/5"
    >
      {inner}
    </a>
  ) : (
    <div className="shrink-0 border-l border-white/10">{inner}</div>
  );
}

export default function TrustStrip() {
  return (
    <div
      style={{ backgroundColor: "var(--color-navy)" }}
      className="hidden border-b border-white/5 md:block"
    >
      {/* Edge fade masks for a clean marquee entry/exit */}
      <div className="group relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20"
          style={{ background: "linear-gradient(to right, var(--color-navy), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20"
          style={{ background: "linear-gradient(to left, var(--color-navy), transparent)" }}
        />
        <div className="trust-marquee">
          {items.map((item, i) => (
            <TrustItem key={`a-${i}`} item={item} />
          ))}
          {/* Duplicate set for a seamless -50% loop; hidden under reduced-motion */}
          <div className="trust-marquee-dup flex flex-nowrap" aria-hidden="true">
            {items.map((item, i) => (
              <TrustItem key={`b-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
