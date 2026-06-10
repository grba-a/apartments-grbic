import Link from "next/link";

export const metadata = {
  title: "Privatnost | Apartments Grbić",
  description: "Politika privatnosti Apartments Grbić — kako prikupljamo i koristimo Vaše podatke.",
};

const sections = [
  {
    title: "Koje podatke prikupljamo",
    body: "Prikupljamo isključivo podatke koje nam Vi dobrovoljno pružate putem kontakt forme: ime i prezime, e-mail adresu i sadržaj poruke. Ne prikupljamo automatski nikakve osobne podatke bez Vaše suglasnosti.",
  },
  {
    title: "Kako koristimo Vaše podatke",
    body: "Vaše podatke koristimo isključivo u svrhu odgovora na Vaš upit o rezervaciji smještaja. Ne koristimo ih u marketinške svrhe, ne dijeljimo ih s trećim stranama niti ih prodajemo.",
  },
  {
    title: "Pohrana podataka",
    body: "Podatke koje nam pošaljete čuvamo samo onoliko dugo koliko je potrebno za obradu Vašeg upita. Nakon završenog boravka ili odbijenijeg upita, osobne podatke brišemo u razumnom roku.",
  },
  {
    title: "Vaša prava",
    body: "U svakom trenutku imate pravo zatražiti uvid u podatke koje o Vama čuvamo, zatražiti njihovu ispravku ili brisanje. Zahtjev možete uputiti na: apt.grbic.mlini@gmail.com",
  },
  {
    title: "Kolačići (cookies)",
    body: "Naša web stranica koristi isključivo tehničke kolačiće neophodne za ispravno funkcioniranje stranice. Ne koristimo kolačiće za praćenje ili profiliranje posjetitelja bez prethodne suglasnosti.",
  },
  {
    title: "Kontakt",
    body: "Za sva pitanja vezana uz privatnost podataka obratite nam se na: apt.grbic.mlini@gmail.com ili +385 98 96 000 88.",
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: "var(--color-sand)" }}>

      {/* Header */}
      <section style={{ backgroundColor: "var(--color-navy)" }} className="py-24">
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <p
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-gold)" }}
          >
            Pravni dokumenti
          </p>
          <span className="section-rule" />
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Politika privatnosti
          </h1>
          <p
            className="mt-5 text-[15px] text-white/60"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Zadnja izmjena: lipanj 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[760px] px-6 py-20">
        <div className="flex flex-col gap-10">
          {sections.map((s, i) => (
            <div key={i}>
              <h2
                className="mb-3 text-[22px] font-normal"
                style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
              >
                {s.title}
              </h2>
              <p
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/"
            className="inline-block rounded-full px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ← Povratak na početnu
          </Link>
        </div>
      </article>

    </main>
  );
}
