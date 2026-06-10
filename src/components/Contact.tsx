"use client";

import { useState } from "react";
import { useLang } from "@/src/i18n/LangContext";

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

const inputClass =
  "w-full rounded-xl border border-gray-200 px-4 py-3 text-[15px] outline-none transition-all duration-200 focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/20";
const labelClass = "mb-1.5 block text-[13px] font-medium";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelClass} style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/apartments_grbic/", label: "Instagram" },
  { icon: <BookingIcon />, href: "https://www.booking.com/hotel/hr/apartmani-grbia.hr.html", label: "Booking" },
  { icon: <TripadvisorIcon />, href: "https://www.tripadvisor.com/Hotel_Review-g658382-d3831572", label: "Tripadvisor" },
  { icon: <MapsIcon />, href: "https://maps.app.goo.gl/79b8VsK1zgCx7ovY9", label: "Google Maps" },
];

export default function Contact() {
  const { t } = useLang();
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-[1240px] px-6">

        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            {t.contact.eyebrow}
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            {t.contact.h2}
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="reveal mt-16 flex flex-col gap-12 md:flex-row md:items-start">

          {/* Left — form */}
          <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
                <CheckCircleIcon />
                <p className="text-[28px] font-normal" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}>
                  {t.contact.successTitle}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <Field label={t.contact.nameLabel}>
                  <input
                    type="text"
                    required
                    value={fields.name}
                    onChange={set("name")}
                    placeholder={t.contact.namePlaceholder}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  />
                </Field>
                <Field label={t.contact.emailLabel}>
                  <input
                    type="email"
                    required
                    value={fields.email}
                    onChange={set("email")}
                    placeholder={t.contact.emailPlaceholder}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  />
                </Field>
                <Field label={t.contact.messageLabel}>
                  <textarea
                    rows={6}
                    required
                    value={fields.message}
                    onChange={set("message")}
                    placeholder={t.contact.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  />
                </Field>
                <button
                  type="submit"
                  className="cursor-pointer mt-1 w-full rounded-full py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-opacity duration-200 hover:opacity-85"
                  style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>

          {/* Right — contact info */}
          <div className="flex w-full flex-col md:w-[360px] md:shrink-0">

            <div className="flex flex-col gap-4">
              <a
                href="tel:+385989600088"
                className="flex items-center gap-4 rounded-2xl border bg-white p-6 transition-colors duration-200 hover:border-[var(--color-gold)]"
                style={{ borderColor: "#F3F4F6" }}
              >
                <span style={{ color: "var(--color-gold)" }}><PhoneIcon /></span>
                <div>
                  <p className="text-[12px] uppercase tracking-wide" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}>
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-0.5 text-[16px] font-medium" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}>
                    +385 98 96 000 88
                  </p>
                </div>
              </a>

              <a
                href="mailto:apt.grbic.mlini@gmail.com"
                className="flex items-center gap-4 rounded-2xl border bg-white p-6 transition-colors duration-200 hover:border-[var(--color-gold)]"
                style={{ borderColor: "#F3F4F6" }}
              >
                <span style={{ color: "var(--color-gold)" }}><EmailIcon /></span>
                <div className="min-w-0">
                  <p className="text-[12px] uppercase tracking-wide" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}>
                    {t.contact.contactEmailLabel}
                  </p>
                  <p className="mt-0.5 break-all text-[16px] font-medium" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}>
                    apt.grbic.mlini@gmail.com
                  </p>
                </div>
              </a>

              <div
                className="flex items-center gap-4 rounded-2xl border bg-white p-6"
                style={{ borderColor: "#F3F4F6" }}
              >
                <span style={{ color: "var(--color-gold)" }}><PinIcon /></span>
                <div>
                  <p className="text-[12px] uppercase tracking-wide" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}>
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-0.5 text-[16px] font-medium" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}>
                    {t.contact.addressValue}
                  </p>
                </div>
              </div>
            </div>

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

            <div className="mt-8 rounded-xl p-4" style={{ backgroundColor: "#EFF6FF" }}>
              <p className="text-[14px]" style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}>
                {t.contact.responseTime}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
