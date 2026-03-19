"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Koje je vrijeme check-in i check-out?",
    answer:
      "Check-in je od 14:00, check-out do 10:00. Uz prethodnu najavu i dostupnost, rado ćemo pokušati biti fleksibilni.",
  },
  {
    question: "Je li parking besplatan?",
    answer:
      "Da, parking je besplatan i dostupan svim gostima. Mlini je mirno mjesto s dovoljno prostora za parkiranje.",
  },
  {
    question: "Je li Wi-Fi uključen u cijenu?",
    answer:
      "Da, brzi Wi-Fi je potpuno besplatan i dostupan u svim apartmanima.",
  },
  {
    question: "Imaju li svi apartmani klimu?",
    answer:
      "Da, svi apartmani opremljeni su klima uređajem za ugodan boravak bez obzira na vremenske uvjete.",
  },
  {
    question: "Koji apartmani imaju balkon s pogledom na more?",
    answer:
      "Balkon s pogledom na more imaju Apartman 2 i Apartman 4. Oba su odlična za parove i obitelji koje žele uživati u pogledu.",
  },
  {
    question: "Kako funkcionira rezervacija?",
    answer:
      "Pošaljite upit s datumima dolaska i odlaska te brojem osoba. Mi ćemo potvrditi dostupnost i poslati vam ponudu s uputama za plaćanje.",
  },
  {
    question: "Je li lokacija pogodna za obitelji s djecom?",
    answer:
      "Apsolutno. Mlini je mirno i sigurno mjesto, idealno za obitelji s djecom. Plaža je na 5 minuta pješice, a domaćica Ana posebno vodi brigu o sigurnosti i čistoći.",
  },
  {
    question: "Kako mogu doći do Dubrovnika?",
    answer:
      "Dubrovnik je udaljen svega 10 minuta vožnje. Možete koristiti Uber (max 20€), lokalni autobus (3€ u jednom smjeru) ili vlastiti automobil uz besplatan parking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1240px] px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            FAQ
          </span>
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
          >
            Često postavljana pitanja
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
          >
            Sve što trebate znati prije dolaska.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto mt-16 max-w-[780px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="mb-3 overflow-hidden rounded-2xl border bg-white transition-colors duration-200"
                style={{ borderColor: isOpen ? "var(--color-gold)" : "#F3F4F6" }}
              >
                {/* Question row */}
                <button
                  className="flex w-full cursor-pointer items-center justify-between px-8 py-5 text-left"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[16px] font-medium pr-4"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 text-2xl leading-none transition-transform duration-300"
                    style={{
                      color: "var(--color-gold)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <div
                    className="border-t px-8 pb-6 pt-4 text-[15px] leading-relaxed"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      color: "var(--color-text-muted)",
                      borderColor: "#F3F4F6",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom nudge */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-base">
          <span
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text-muted)" }}
          >
            Niste pronašli odgovor?
          </span>
          <a
            href="#contact"
            className="hover:underline"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-gold)" }}
          >
            Kontaktirajte nas →
          </a>
        </div>

      </div>
    </section>
  );
}
