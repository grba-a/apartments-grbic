import Link from "next/link";
import NavbarLightTheme from "@/src/components/NavbarLightTheme";

export const metadata = {
  title: "Page Not Found | Apartments Grbić",
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

      {/* Logo */}
      <div className="mt-[-32px] mb-6 flex items-baseline gap-1.5">
        <span
          className="text-lg leading-none"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500, color: "var(--color-navy)" }}
        >
          Apartments
        </span>
        <span
          className="text-xl leading-none"
          style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", fontWeight: 600, color: "var(--color-gold)" }}
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

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
          style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Back to Home
        </Link>
        <Link
          href="/#contact"
          className="rounded-full border px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
          style={{
            borderColor: "var(--color-navy)",
            color: "var(--color-navy)",
            fontFamily: "var(--font-montserrat), sans-serif",
          }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
