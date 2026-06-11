"use client";

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L4 6v6c0 5 3.5 9.3 8 10.3C16.5 21.3 20 17 20 12V6L12 2z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M16 11.5c1.5.8 2.5 2.4 2.5 4.5" strokeDasharray="2 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <path d="M8 14h2M13 14h3M8 18h5" />
    </svg>
  );
}

const pillars = [
  {
    Icon: ShieldIcon,
    title: "Best Rate Guaranteed",
    bullets: [
      "No platform fees or middleman markup",
      "Lowest rate — price-match guaranteed",
      "Pay directly, save more",
    ],
  },
  {
    Icon: PersonIcon,
    title: "Personal Service",
    bullets: [
      "Direct contact with the owners",
      "Local expertise & recommendations",
      "Real people — response within hours",
    ],
  },
  {
    Icon: CalendarIcon,
    title: "Full Flexibility",
    bullets: [
      "Late check-in or early arrival",
      "Special requests welcome",
      "We'll always do our best to accommodate",
    ],
  },
];

export default function WhyBookDirect() {
  return (
    <section className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Why Book Direct
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Skip the Middleman
          </h2>
          <p
            className="max-w-[500px] text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            Booking directly with us means a better price, a personal touch, and none of the platform fees passed on to you.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map(({ Icon, title, bullets }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm"
            >
              <span
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-navy)", color: "var(--color-gold)" }}
              >
                <Icon />
              </span>
              <h3
                className="mb-4 text-[22px] font-normal leading-snug"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-2">
                {bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[14px] leading-snug"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    <span className="mt-[3px] shrink-0 text-[var(--color-gold)]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <a href="#contact" className="btn-primary">
            Book Direct Now
            <span className="btn-arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
