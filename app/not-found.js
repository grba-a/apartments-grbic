import Link from "next/link";
import NavbarLightTheme from "@/src/components/NavbarLightTheme";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main
      className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "var(--color-sand)" }}
    >
      <NavbarLightTheme />
      {/* 404 number */}
      <p
        className="text-[120px] font-normal leading-none md:text-[160px]"
        style={{
          fontFamily: "var(--font-playfair), serif",
          color: "var(--color-gold)",
          opacity: 0.25,
        }}
      >
        404
      </p>

      {/* Logo — same lockup as the navbar */}
      <div className="mt-[-32px] mb-6 flex items-baseline gap-1">
        <span
          className="text-[15px] font-light uppercase tracking-[0.2em] leading-none"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-navy)" }}
        >
          Apartments
        </span>
        <span
          className="text-[20px] leading-none italic font-semibold"
          style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-gold)" }}
        >
          Grbić
        </span>
      </div>

      <h1
        className="mb-4 text-3xl font-normal md:text-[40px]"
        style={{ fontFamily: "var(--font-playfair), serif", color: "var(--color-navy)" }}
      >
        Page Not Found
      </h1>

      <p
        className="mb-10 max-w-[420px] text-[15px] leading-relaxed"
        style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Head back to the homepage to find everything you need.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to Home
          <span className="btn-arrow">→</span>
        </Link>
        <Link href="/#contact" className="btn-navy">
          Contact Us
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
