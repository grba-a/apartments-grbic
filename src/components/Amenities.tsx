"use client";

const amenities = [
  {
    label: "Besplatan Wi-Fi",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer arc */}
        <path d="M6 20a25.6 25.6 0 0 1 36 0" />
        {/* Middle arc */}
        <path d="M12 26a17 17 0 0 1 24 0" />
        {/* Inner arc */}
        <path d="M18 32a8.5 8.5 0 0 1 12 0" />
        {/* Dot */}
        <circle cx="24" cy="38" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Klima uređaj",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Vertical stem */}
        <line x1="24" y1="8" x2="24" y2="40" />
        {/* Horizontal stem */}
        <line x1="8" y1="24" x2="40" y2="24" />
        {/* Diagonal stems */}
        <line x1="12.7" y1="12.7" x2="35.3" y2="35.3" />
        <line x1="35.3" y1="12.7" x2="12.7" y2="35.3" />
        {/* Tips on vertical */}
        <polyline points="20,13 24,8 28,13" />
        <polyline points="20,35 24,40 28,35" />
        {/* Tips on horizontal */}
        <polyline points="13,20 8,24 13,28" />
        <polyline points="35,20 40,24 35,28" />
        {/* Center circle */}
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
  {
    label: "Parking",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="32" height="32" rx="16" />
        <path d="M19 16h7a5 5 0 0 1 0 10h-7V16z" />
        <line x1="19" y1="26" x2="19" y2="34" />
      </svg>
    ),
  },
  {
    label: "Blizu plaže",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Wave 1 */}
        <path d="M6 28 Q12 22 18 28 Q24 34 30 28 Q36 22 42 28" />
        {/* Wave 2 */}
        <path d="M6 35 Q12 29 18 35 Q24 41 30 35 Q36 29 42 35" />
        {/* Sun */}
        <circle cx="24" cy="14" r="5" />
        <line x1="24" y1="6" x2="24" y2="4" />
        <line x1="24" y1="24" x2="24" y2="22" strokeWidth="1.5" />
        <line x1="32.5" y1="8.5" x2="34" y2="7" />
        <line x1="15.5" y1="8.5" x2="14" y2="7" />
        <line x1="35" y1="14" x2="37" y2="14" />
        <line x1="11" y1="14" x2="13" y2="14" />
      </svg>
    ),
  },
  {
    label: "Mirna lokacija",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground line */}
        <line x1="4" y1="38" x2="44" y2="38" />
        {/* Left mountain */}
        <polyline points="4,38 16,18 28,38" />
        {/* Right mountain (taller) */}
        <polyline points="18,38 32,10 46,38" />
        {/* Snow cap */}
        <polyline points="27,18 32,10 37,18" />
      </svg>
    ),
  },
  {
    label: "Family friendly",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* House outline */}
        <polyline points="8,22 24,8 40,22" />
        <rect x="10" y="22" width="28" height="20" rx="1" />
        {/* Door */}
        <rect x="20" y="30" width="8" height="12" rx="1" />
        {/* Heart inside */}
        <path d="M21 19 Q24 15 27 19 Q30 22 24 27 Q18 22 21 19z" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Podrška domaćina",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Person head */}
        <circle cx="18" cy="14" r="6" />
        {/* Person body */}
        <path d="M6 40 Q6 28 18 28 Q30 28 30 40" />
        {/* Speech bubble */}
        <rect x="28" y="8" width="16" height="12" rx="3" />
        <path d="M31 20 L28 24 L34 20" />
        {/* Dots in bubble */}
        <circle cx="33" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="36" cy="14" r="1" fill="currentColor" stroke="none" />
        <circle cx="39" cy="14" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Balkon",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Floor */}
        <line x1="8" y1="38" x2="40" y2="38" />
        {/* Top rail */}
        <line x1="8" y1="22" x2="40" y2="22" />
        {/* Side posts */}
        <line x1="8" y1="22" x2="8" y2="38" />
        <line x1="40" y1="22" x2="40" y2="38" />
        {/* Vertical balusters */}
        <line x1="16" y1="22" x2="16" y2="38" />
        <line x1="24" y1="22" x2="24" y2="38" />
        <line x1="32" y1="22" x2="32" y2="38" />
        {/* Wall above */}
        <line x1="8" y1="22" x2="8" y2="10" />
        <line x1="40" y1="22" x2="40" y2="10" />
        <line x1="8" y1="10" x2="40" y2="10" />
        {/* Door/opening */}
        <rect x="16" y="10" width="16" height="12" rx="1" />
      </svg>
    ),
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-24">
      <div className="mx-auto max-w-[900px] px-6">

        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-3 text-[13px] uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-gold)",
            }}
          >
            Što nudimo
          </span>
          <h2
            className="mb-4 text-4xl font-normal leading-tight md:text-[48px]"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--color-navy)",
            }}
          >
            Sadržaji
          </h2>
          <p
            className="text-base"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--color-text-muted)",
            }}
          >
            Sve što trebate za ugodan odmor — uključeno u cijenu.
          </p>
        </div>

        {/* Amenities grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.label}
              className="amenity-card group flex flex-col items-center rounded-2xl p-8 transition-colors duration-300"
              style={{ backgroundColor: "var(--color-sand)" }}
            >
              <span
                className="amenity-icon transition-colors duration-300"
                style={{ color: "var(--color-navy)" }}
              >
                {item.icon}
              </span>
              <span
                className="amenity-label mt-3 text-center text-[15px] font-medium transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "var(--color-navy)",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-16 rounded-2xl px-8 py-8 text-center md:px-12"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          <p
            className="text-base text-white/80"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <span>5 minuta do plaže</span>
            <span className="mx-3 font-semibold" style={{ color: "var(--color-gold)" }}>·</span>
            <span>10 minuta do Dubrovnika</span>
            <span className="mx-3 font-semibold" style={{ color: "var(--color-gold)" }}>·</span>
            <span>Besplatan parking</span>
          </p>
        </div>

      </div>
    </section>
  );
}
