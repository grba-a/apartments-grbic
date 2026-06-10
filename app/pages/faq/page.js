"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How does booking work?",
    answer: "Send an enquiry with your arrival and departure dates and number of guests — via the contact form, WhatsApp or email. We'll confirm availability and send you an offer with payment instructions as soon as possible. We aim to respond within a few hours.",
  },
  {
    question: "How many steps to the beach — is it a problem?",
    answer: "There are about 240 steps down to the beach — and that's precisely why you get a breathtaking sea view that apartments on the promenade simply cannot offer. Guests often say the steps become their favourite morning workout. If you have mobility difficulties, please contact us in advance — we'll be happy to find a solution.",
  },
  {
    question: "Is there a boat service to Dubrovnik?",
    answer: "Yes! A water taxi runs directly from Mlini to Dubrovnik Old Town from April to November — up to 5 departures per day in season. Journey time: 15–30 minutes, and the experience of sailing along the Dubrovnik Riviera is unforgettable. Alternative: bus line 10 every 30 minutes (€3), Uber max €20.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 14:00, check-out by 10:00. With advance notice and subject to availability, we are happy to try and be flexible — just let us know your travel schedule when you enquire.",
  },
  {
    question: "Is parking free?",
    answer: "Yes, parking is free and available for all guests — a genuine rarity throughout Dalmatia. The parking space is directly beside the property and included at no extra cost.",
  },
  {
    question: "Which apartments have a sea-view balcony?",
    answer: "Apartment 2 and Apartment 4 both have sea-view balconies. Both are excellent for couples and families who want to enjoy panoramic views of the Adriatic. Mention your preference in your enquiry and we'll do our best to accommodate it.",
  },
  {
    question: "Are Wi-Fi and air conditioning included in the price?",
    answer: "Yes, fast Wi-Fi and air conditioning are completely free and available in all apartments. There are no hidden extra charges.",
  },
  {
    question: "Is the location suitable for families with children?",
    answer: "Absolutely. Mlini is a peaceful and safe authentic Dalmatian village, ideal for families. The beach is a 5-minute walk away, and host Ana — a mother of three herself — pays special attention to safety, cleanliness and a comfortable stay for guests of all ages.",
  },
  {
    question: "Can I request a specific apartment?",
    answer: "Yes, absolutely. When sending your enquiry, simply mention which apartment you prefer. We'll do our best to accommodate your choice — subject to availability.",
  },
  {
    question: "Is there a minimum stay?",
    answer: "In high season (July–August) we typically require a minimum of 3 nights. Outside of peak season, shorter stays are usually possible. Contact us to check availability for your specific dates.",
  },
  {
    question: "Do you offer airport transfers?",
    answer: "We can arrange or recommend reliable airport transfers — Dubrovnik Airport is just 7 km from Mlini (approximately 15 minutes). Contact us when booking and we'll help organise your arrival.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation conditions depend on the booking platform and season. Direct bookings generally offer the most flexibility. Contact us for full details — we always try to work with guests in good faith.",
  },
];

function AccordionItem({ faq, index, isOpen, onToggle }) {
  return (
    <div
      className="mb-3 overflow-hidden rounded-lg border bg-white transition-colors duration-200"
      style={{ borderColor: isOpen ? "var(--color-gold)" : "#F3F4F6" }}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between px-8 py-5 text-left"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span
          className="pr-4 text-[16px] font-medium"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
        >
          {faq.question}
        </span>
        <span
          className="shrink-0 text-2xl leading-none transition-transform duration-300"
          style={{ color: "var(--color-gold)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <div
          className="border-t px-8 pb-6 pt-4 text-[15px] leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)", borderColor: "#F3F4F6" }}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <main>

      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ backgroundColor: "var(--color-navy)" }}
      >
        <div className="mx-auto max-w-[860px] px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ← Back to Home
          </Link>
          <p
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            FAQ
          </p>
          <h1
            className="mb-4 text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Everything you need to know before your stay. Can't find your answer? Just ask.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-20" style={{ backgroundColor: "var(--color-sand)" }}>
        <div className="mx-auto max-w-[780px] px-6">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--color-navy)" }}>
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <span
            className="mb-3 block text-[12px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Ready to Book?
          </span>
          <h2
            className="mb-4 text-3xl font-normal text-white md:text-[40px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Still have questions?
          </h2>
          <p
            className="mb-10 text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            We respond to every message within a few hours. Reach out via the contact form,
            WhatsApp, or email — whichever suits you best.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="btn-primary btn-lg">
              Send an Enquiry
              <span className="btn-arrow">→</span>
            </a>
            <a
              href="https://wa.me/385989600088?text=Hello%2C%20I%20have%20a%20question%20about%20the%20apartments."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light btn-lg"
            >
              WhatsApp Us
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
