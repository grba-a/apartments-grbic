"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-lg">
      <div className="flex flex-col items-center gap-6 px-6 py-5 text-center md:flex-row md:items-center md:justify-between md:px-12 md:text-left">

        {/* Text */}
        <div className="max-w-[600px]">
          <p
            className="mb-1 text-[16px] font-medium"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-navy)" }}
          >
            Kolačići (Cookies)
          </p>
          <p
            className="text-[14px] leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--color-text)" }}
          >
            Koristimo kolačiće kako bismo poboljšali Vaše iskustvo na stranici. Nastavkom
            korištenja slažete se s našom{" "}
            <a
              href="/pages/privacy"
              className="underline transition-opacity duration-200 hover:opacity-75"
              style={{ color: "var(--color-gold)" }}
            >
              Politikom privatnosti
            </a>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => respond("rejected")}
            className="cookie-reject rounded-full px-6 py-2.5 text-[14px] font-medium transition-colors duration-200"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              border: "1.5px solid var(--color-gold)",
              color: "var(--color-gold)",
              backgroundColor: "white",
            }}
          >
            Odbij sve
          </button>
          <button
            onClick={() => respond("accepted")}
            className="rounded-full px-6 py-2.5 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-[#b8963e]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              backgroundColor: "var(--color-gold)",
              border: "1.5px solid var(--color-gold)",
            }}
          >
            Prihvati sve
          </button>
        </div>

      </div>
    </div>
  );
}
