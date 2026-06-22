import Link from "next/link";
import GalleryFull from "@/src/components/GalleryFull";

export const metadata = {
  title: "Photo Gallery",
  description:
    "Browse the full photo gallery of Apartments Grbić in Mlini, Dubrovnik — sea-view apartments, balconies, interiors and the surroundings of the Dubrovnik Riviera.",
  alternates: {
    canonical: "https://apartmentsgrbic.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Apartments Grbić — Mlini, Dubrovnik",
    description:
      "Sea-view apartments, balconies and interiors in Mlini on the Dubrovnik Riviera. Explore the full photo gallery of Apartments Grbić.",
  },
};

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{ backgroundColor: "var(--color-navy)" }}>
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
            Gallery
          </p>
          <h1
            className="mb-4 text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Photo Gallery
          </h1>
          <p
            className="text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Explore every apartment, the sea views and the surroundings of Mlini.
          </p>
        </div>
      </section>

      {/* Full gallery */}
      <section className="bg-white py-20">
        <GalleryFull />
      </section>

      {/* CTA */}
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
            Make these views yours
          </h2>
          <p
            className="mb-10 text-[15px] leading-relaxed text-white/65"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            We respond to every message within a few hours. Send an enquiry and we&apos;ll
            confirm availability for your dates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="btn-primary btn-lg">
              Send an Enquiry
              <span className="btn-arrow">→</span>
            </Link>
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
