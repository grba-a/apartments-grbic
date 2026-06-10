import Link from "next/link";

export const metadata = {
  title: "Uvjeti korištenja | Apartments Grbić",
  description: "Uvjeti korištenja i opći uvjeti rezervacije Apartments Grbić, Mlini, Dubrovnik.",
};

const sections = [
  {
    title: "Opće odredbe",
    body: "Ovi uvjeti primjenjuju se na sve goste koji borave u Apartments Grbić (vlasnik: obitelj Grbić, Rivijera 10, 20207 Mlini, Hrvatska). Rezervacijom smještaja gost potvrđuje da je pročitao i prihvatio ove uvjete.",
  },
  {
    title: "Rezervacija i plaćanje",
    body: "Rezervacija se smatra potvrđenom tek po primitku pisane potvrde od strane vlasnika. Uplate se vrše prema dogovoru — gotovinom pri dolasku ili bankovnim transferom prema uputi. Cijene uključuju PDV, Wi-Fi i parking.",
  },
  {
    title: "Check-in i check-out",
    body: "Check-in je moguć od 14:00 sati. Check-out je do 10:00 sati. Rani dolazak ili kasni odlazak mogući su uz prethodnu najavu i ovisno o dostupnosti, bez naknade.",
  },
  {
    title: "Otkazivanje rezervacije",
    body: "Otkazivanje do 7 dana prije dolaska: povrat uplate u cijelosti. Otkazivanje unutar 7 dana: zadržava se 50% iznosa. Nepojavljivanje (no-show): zadržava se puni iznos. Preporučamo putno osiguranje.",
  },
  {
    title: "Kućni red",
    body: "Gosti su dužni čuvati red i tišinu, posebno između 22:00 i 08:00 sati. Pušenje u apartmanima nije dopušteno. Kućni ljubimci nisu dopušteni bez prethodnog dogovora. Vlasnik zadržava pravo naplate štete uzrokovane nemarom.",
  },
  {
    title: "Odgovornost",
    body: "Vlasnik ne odgovara za gubitak ili oštećenje osobnih predmeta gostiju. Gosti borave u apartmanima na vlastitu odgovornost. Vlasnik ne odgovara za prekide usluga uzrokovane višom silom.",
  },
  {
    title: "Mjerodavno pravo",
    body: "Na ove uvjete primjenjuje se pravo Republike Hrvatske. Za rješavanje sporova nadležan je sud u Dubrovniku.",
  },
];

export default function TermsPage() {
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
            Uvjeti korištenja
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
