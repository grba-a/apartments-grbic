import Link from "next/link";

export const metadata = {
  title: "Cookie Policy",
  alternates: { canonical: "/cookies" },
  description: "Information about the use of cookies on the Apartments Grbić website.",
};

const cookieTypes = [
  {
    name: "Essential cookies",
    required: true,
    desc: "These cookies are necessary for the website to function correctly. Without them, certain features will not work. They cannot be disabled.",
  },
  {
    name: "Analytics cookies",
    required: false,
    desc: "We use these to understand how visitors use the site — which pages they visit and how they arrive. All information is anonymous.",
  },
  {
    name: "Functional cookies",
    required: false,
    desc: "These allow us to remember your preferences (e.g. language, region) to make future visits more convenient.",
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
            Legal
          </p>
          <span className="section-rule" />
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Cookie Policy
          </h1>
          <p
            className="mt-5 text-[15px] text-white/60"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[760px] px-6 py-20">

        <p
          className="mb-12 text-[16px] leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "var(--color-text-muted)" }}
        >
          Cookies are small text files stored on your device when you visit our website.
          We use them to improve your experience and understand how the site is used.
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
                  {c.required ? "Always active" : "Optional"}
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
            How to manage cookies
          </h2>
          <p
            className="text-[15px] leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            You can set your browser to refuse all cookies or to notify you when a cookie
            is being sent. Please note that some features of the site may not function
            correctly if cookies are disabled. For detailed instructions, refer to your
            browser&apos;s settings.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-block rounded-full px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--color-gold)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ← Back to Home
          </Link>
        </div>
      </article>

    </main>
  );
}
