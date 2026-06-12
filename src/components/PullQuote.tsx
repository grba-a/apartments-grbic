"use client";

export default function PullQuote() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      {/* Soft gold glow behind the quote */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.10) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Decorative large quotation mark */}
      <span
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none text-[220px] leading-none"
        style={{
          fontFamily: "var(--font-playfair), serif",
          color: "var(--color-gold)",
          opacity: 0.06,
        }}
        aria-hidden="true"
      >
        "
      </span>

      <div className="relative mx-auto max-w-[860px] px-6 text-center">

        {/* Gold rule */}
        <span
          className="mx-auto mb-10 block h-0.5 w-10 rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
        />

        {/* Quote */}
        <blockquote
          className="text-[26px] font-normal italic leading-relaxed text-white md:text-[36px]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          "The sea, the steps, the silence — and Ana's incredible hospitality
          makes you feel at home from the very first moment."
        </blockquote>

        {/* Stars */}
        <div className="mt-8 flex items-center justify-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <svg key={n} width="16" height="16" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M6 1l1.35 2.73L10.5 4.22l-2.25 2.19.53 3.1L6 7.96l-2.78 1.55.53-3.1L1.5 4.22l3.15-.49L6 1z" fill="var(--color-gold)" />
            </svg>
          ))}
        </div>

        {/* Attribution */}
        <p
          className="mt-4 text-[12px] uppercase tracking-[0.2em] text-white/40"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Gwendoline &nbsp;·&nbsp; France &nbsp;·&nbsp; Booking.com
        </p>

        {/* Gold rule */}
        <span
          className="mx-auto mt-10 block h-0.5 w-10 rounded-full"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </div>
    </section>
  );
}
