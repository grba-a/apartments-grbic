import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Apartments Grbić",
  description: "Privacy policy of Apartments Grbić — how we collect and use your personal data.",
};

const sections = [
  {
    title: "What data we collect",
    body: "We collect only the data you voluntarily provide through the contact form: your name, email address, and the content of your message. We do not automatically collect any personal data without your consent.",
  },
  {
    title: "How we use your data",
    body: "Your data is used solely to respond to your accommodation enquiry. We do not use it for marketing purposes, share it with third parties, or sell it in any form.",
  },
  {
    title: "Data storage",
    body: "We retain the data you send us only for as long as necessary to process your enquiry. After your stay concludes or an enquiry is declined, personal data is deleted within a reasonable time.",
  },
  {
    title: "Your rights",
    body: "You have the right at any time to request access to the data we hold about you, ask for corrections, or request deletion. Submit your request to: apt.grbic.mlini@gmail.com",
  },
  {
    title: "Cookies",
    body: "Our website uses only technical cookies that are strictly necessary for the site to function correctly. We do not use cookies for tracking or profiling visitors without prior consent.",
  },
  {
    title: "Contact",
    body: "For all questions related to data privacy, contact us at: apt.grbic.mlini@gmail.com or +385 98 96 000 88.",
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
            Legal
          </p>
          <span className="section-rule" />
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Privacy Policy
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
            ← Back to Home
          </Link>
        </div>
      </article>

    </main>
  );
}
