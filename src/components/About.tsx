"use client";

import Image from "next/image";

const stats = [
  { value: "20+", label: "godina iskustva" },
  { value: "4.000+", label: "zadovoljnih gostiju" },
  { value: "3", label: "djece — čistoća zajamčena 😄" },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col gap-16 md:flex-row md:items-center">

          {/* Left — image */}
          <div className="w-full md:w-[420px] md:shrink-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-300 shadow-lg">
              <Image
                src="/assets/about.jpg"
                alt="Ana Grbić"
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover"
                onError={() => {}}
              />
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-1 flex-col justify-center">

            {/* Label */}
            <span
              className="mb-4 text-[13px] uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "var(--color-gold)",
              }}
            >
              O nama
            </span>

            {/* Heading */}
            <h2
              className="mb-2 text-4xl font-normal leading-tight md:text-[48px]"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--color-navy)",
              }}
            >
              Ana Grbić
            </h2>
            <p
              className="mb-7 text-2xl italic"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--color-text-muted)",
              }}
            >
              Domaćin s dušom
            </p>

            {/* Body text */}
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "var(--color-text-muted)",
              }}
            >
              <p>
                Ana Grbić je domaćin s više od 20 godina iskustva u iznajmljivanju
                i preko 4.000 zadovoljnih gostiju.
              </p>
              <p>
                Kao majka troje djece, posebnu pažnju posvećuje čistoći, sigurnosti
                i ugodnom boravku. Tu je za preporuke, pomoć i sve što Vam treba
                tijekom odmora.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span
                    className="text-[36px] font-normal leading-none"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      color: "var(--color-navy)",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[13px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full px-8 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
                style={{
                  backgroundColor: "var(--color-navy)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                Pošalji upit
              </a>
              <a
                href="#reviews"
                className="rounded-full border px-8 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[var(--color-navy)] hover:text-white"
                style={{
                  borderColor: "var(--color-navy)",
                  color: "var(--color-navy)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                Pogledaj recenzije
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
