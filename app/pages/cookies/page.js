import Link from "next/link";

export const metadata = {
  title: "Politika kolačića | Apartments Grbić",
  description: "Informacije o korištenju kolačića na stranicama Apartments Grbić.",
};

const cookieTypes = [
  {
    name: "Nužni kolačići",
    required: true,
    desc: "Ovi kolačići su neophodni za ispravno funkcioniranje stranice. Bez njih određene funkcionalnosti neće raditi. Ne mogu se isključiti.",
  },
  {
    name: "Analitički kolačići",
    required: false,
    desc: "Koristimo ih kako bismo razumjeli kako posjetitelji koriste stranicu — koje stranice posjećuju i kako do njih dolaze. Sve informacije su anonimne.",
  },
  {
    name: "Funkcionalni kolačići",
    required: false,
    desc: "Omogućuju nam pamćenje Vaših preferencija (npr. jezik, regija) kako bi Vaše sljedeće posjete bile ugodnije.",
  },
];

export default function CookiesPage() {
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
            Politika kolačića
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

        <p
          className="mb-12 text-[16px] leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na Vašem uređaju kada
          posjetite našu stranicu. Koristimo ih kako bismo poboljšali Vaše iskustvo i razumjeli
          kako se stranica koristi.
        </p>

        {/* Cookie types */}
        <div className="flex flex-col gap-6 mb-12">
          {cookieTypes.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-7"
              style={{ backgroundColor: "#fff", border: "1px solid #E5E7EB" }}
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h2
                  className="text-[20px] font-normal"
                  style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
                >
                  {c.name}
                </h2>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider"
                  style={{
                    backgroundColor: c.required ? "var(--color-gold)" : "#E5E7EB",
                    color: c.required ? "#fff" : "var(--color-text-muted)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                  }}
                >
                  {c.required ? "Uvijek aktivno" : "Po izboru"}
                </span>
              </div>
              <p
                className="text-[15px] leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* How to manage */}
        <div
          className="mb-12 rounded-2xl p-7"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          <h2
            className="mb-3 text-[20px] font-normal text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Kako upravljati kolačićima
          </h2>
          <p
            className="text-[15px] leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Možete postaviti Vaš preglednik da odbija sve kolačiće ili da Vas obavijesti
            kada se kolačić šalje. Napominjemo da neke funkcije stranice mogu ne raditi
            ispravno ako onemogućite kolačiće. Detaljne upute za upravljanje kolačićima
            pronađite u postavkama Vašeg preglednika.
          </p>
        </div>

        <div>
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
