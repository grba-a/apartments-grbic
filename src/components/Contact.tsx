"use client";

import { useState } from "react";

// ── SVG icons ────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h5l2 5-2.5 1.5a11 11 0 0 0 6 6L15 13l5 2v5a1 1 0 0 1-1 1C9 21 3 15 3 4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,14 22,4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 8h5a2.5 2.5 0 0 1 0 5H8V8z" />
      <line x1="8" y1="13" x2="8" y2="18" />
    </svg>
  );
}

function TripadvisorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="14" r="3.5" />
      <circle cx="16.5" cy="14" r="3.5" />
      <path d="M3 9h18" />
      <path d="M7.5 9 Q12 3 16.5 9" />
    </svg>
  );
}

function MapsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,5 9,3 15,5 21,3 21,19 15,21 9,19 3,21" />
      <line x1="9" y1="3" x2="9" y2="19" />
      <line x1="15" y1="5" x2="15" y2="21" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-gold)" }}>
      <circle cx="32" cy="32" r="28" />
      <polyline points="20,32 28,40 44,24" />
    </svg>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] outline-none transition-all duration-200 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20";
const labelClass = "mb-1.5 block text-[13px] font-medium";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        className={labelClass}
        style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/grbicapartments/", label: "Instagram" },
  { icon: <BookingIcon />, href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html", label: "Booking" },
  { icon: <TripadvisorIcon />, href: "https://www.tripadvisor.com/Hotel_Review-g658382-d3831572", label: "Tripadvisor" },
  { icon: <MapsIcon />, href: "https://maps.app.goo.gl/79b8VsK1zgCx7ovY9", label: "Google Maps" },
];

// ── Main component ────────────────────────────────────────────────────────────

export default function Contact() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: "",
    apartment: "Svejedno",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-[1100px] px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            Kontakt
          </span>
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Upit / Rezervacija
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
          >
            Ispunite formu i javit ćemo Vam se u najkraćem mogućem roku.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-start">

          {/* ── Left — form ────────────────────────────────────────── */}
          <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                <CheckCircleIcon />
                <p
                  className="text-[28px] font-normal"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
                >
                  Hvala! Javit ćemo Vam se uskoro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name */}
                <Field label="Ime i prezime">
                  <input
                    type="text"
                    required
                    value={fields.name}
                    onChange={set("name")}
                    placeholder="Vaše ime i prezime"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </Field>

                {/* Email */}
                <Field label="Email">
                  <input
                    type="email"
                    required
                    value={fields.email}
                    onChange={set("email")}
                    placeholder="vasa@email.com"
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </Field>

                {/* Dates row */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Dolazak">
                    <input
                      type="date"
                      required
                      value={fields.checkin}
                      onChange={set("checkin")}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </Field>
                  <Field label="Odlazak">
                    <input
                      type="date"
                      required
                      value={fields.checkout}
                      onChange={set("checkout")}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </Field>
                </div>

                {/* Guests + apartment row */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Broj osoba">
                    <input
                      type="number"
                      required
                      min={1}
                      max={10}
                      value={fields.guests}
                      onChange={set("guests")}
                      placeholder="2"
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />
                  </Field>
                  <Field label="Preferirani apartman">
                    <select
                      value={fields.apartment}
                      onChange={set("apartment")}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {["Svejedno", "Apartman 1", "Apartman 2", "Apartman 3", "Apartman 4"].map(
                        (o) => <option key={o} value={o}>{o}</option>
                      )}
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <Field label="Poruka (nije obavezno)">
                  <textarea
                    rows={4}
                    value={fields.message}
                    onChange={set("message")}
                    placeholder="Eventualna pitanja ili posebni zahtjevi..."
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  className="contact-submit mt-1 w-full rounded-full py-4 text-[16px] font-medium text-white transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-navy)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  Pošalji upit →
                </button>
              </form>
            )}
          </div>

          {/* ── Right — contact info ───────────────────────────────── */}
          <div className="flex w-full flex-col md:w-[360px] md:shrink-0">

            {/* Contact cards */}
            <div className="flex flex-col gap-4">

              {/* Phone */}
              <a
                href="tel:+385989600088"
                className="flex items-center gap-4 rounded-2xl border bg-white p-6 transition-colors duration-200 hover:border-[var(--color-gold)]"
                style={{ borderColor: "#F3F4F6" }}
              >
                <span style={{ color: "var(--color-gold)" }}><PhoneIcon /></span>
                <div>
                  <p
                    className="text-[12px] uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    Telefon
                  </p>
                  <p
                    className="mt-0.5 text-[16px] font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
                  >
                    +385 98 96 000 88
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:apt.grbic.mlini@gmail.com"
                className="flex items-center gap-4 rounded-2xl border bg-white p-6 transition-colors duration-200 hover:border-[var(--color-gold)]"
                style={{ borderColor: "#F3F4F6" }}
              >
                <span style={{ color: "var(--color-gold)" }}><EmailIcon /></span>
                <div className="min-w-0">
                  <p
                    className="text-[12px] uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    Email
                  </p>
                  <p
                    className="mt-0.5 break-all text-[16px] font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
                  >
                    apt.grbic.mlini@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div
                className="flex items-center gap-4 rounded-2xl border bg-white p-6 transition-colors duration-200 hover:border-[var(--color-gold)]"
                style={{ borderColor: "#F3F4F6" }}
              >
                <span style={{ color: "var(--color-gold)" }}><PinIcon /></span>
                <div>
                  <p
                    className="text-[12px] uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
                  >
                    Adresa
                  </p>
                  <p
                    className="mt-0.5 text-[16px] font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
                  >
                    Mlini, Dubrovnik, Hrvatska
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="contact-social rounded-full border border-gray-200 p-3 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Response time note */}
            <div
              className="mt-8 rounded-xl p-4"
              style={{ backgroundColor: "#EFF6FF" }}
            >
              <p
                className="text-[14px]"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
              >
                ⚡ Odgovaramo unutar nekoliko sati
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
