"use client";

import { useState } from "react";
import { useLang } from "@/src/i18n/LangContext";

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        <div className="reveal flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            {t.faq.eyebrow}
          </span>
          <span className="section-rule" />
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            {t.faq.h2}
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
          >
            {t.faq.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-[780px]">
          {t.faq.items.slice(0, 3).map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="mb-3 overflow-hidden rounded-2xl border bg-white transition-colors duration-200"
                style={{ borderColor: isOpen ? "var(--color-gold)" : "#F3F4F6" }}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between px-8 py-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[16px] font-medium pr-4"
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
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <a href="/pages/faq" className="btn-navy">
            View All FAQs
            <span className="btn-arrow">→</span>
          </a>
          <span style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)", fontSize: "14px" }}>
            {t.faq.notFound}{" "}
            <a href="#contact" className="hover:underline" style={{ color: "var(--color-gold)" }}>
              {t.faq.contactUs}
            </a>
          </span>
        </div>

      </div>
    </section>
  );
}
