"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

function AccordionItem({ faq, index, isOpen, onToggle }: {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: (i: number) => void;
}) {
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

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div>
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          faq={faq}
          index={i}
          isOpen={openIndex === i}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}
