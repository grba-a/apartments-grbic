import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Apartments Grbić",
  description: "Terms and conditions of stay at Apartments Grbić, Mlini, Dubrovnik.",
};

const sections = [
  {
    title: "General provisions",
    body: "These terms apply to all guests staying at Apartments Grbić (owner: Grbić family, Rivijera 10, 20207 Mlini, Croatia). By making a reservation, the guest confirms they have read and accepted these terms.",
  },
  {
    title: "Booking & payment",
    body: "A reservation is considered confirmed only upon receipt of written confirmation from the owner. Payment is made by agreement — in cash on arrival or by bank transfer as instructed. Prices include VAT, Wi-Fi, and parking.",
  },
  {
    title: "Check-in & check-out",
    body: "Check-in is available from 14:00. Check-out is by 10:00. Early arrival or late departure may be possible with advance notice, subject to availability, at no extra charge.",
  },
  {
    title: "Cancellation policy",
    body: "Cancellation more than 7 days before arrival: full refund. Cancellation within 7 days: 50% of the total amount is retained. No-show: full amount is retained. We recommend travel insurance.",
  },
  {
    title: "House rules",
    body: "Guests are required to maintain order and quiet, particularly between 22:00 and 08:00. Smoking inside the apartments is not permitted. Pets are not allowed without prior agreement. The owner reserves the right to charge for damage caused by negligence.",
  },
  {
    title: "Liability",
    body: "The owner is not liable for the loss or damage of guests' personal belongings. Guests stay at their own risk. The owner is not responsible for service interruptions caused by force majeure.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of the Republic of Croatia. Any disputes fall under the jurisdiction of the court in Dubrovnik.",
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
            Legal
          </p>
          <span className="section-rule" />
          <h1
            className="text-4xl font-normal leading-tight text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Terms & Conditions
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
