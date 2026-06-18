"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const GTM_ID = "GTM-M3Q4PZ6K";
const GA_ID = "G-7TEJ12KL1L";

/**
 * Loads Google Tag Manager only after the visitor has accepted cookies.
 * Until then, no GTM script or network request is fired (GDPR-friendly).
 * Listens for the "cookie-consent-changed" event dispatched by CookieBanner
 * so consent given in the current session takes effect without a reload.
 */
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => {
      setEnabled(localStorage.getItem("cookie_consent") === "accepted");
    };

    sync();
    window.addEventListener("cookie-consent-changed", sync);
    return () => window.removeEventListener("cookie-consent-changed", sync);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
      <GoogleAnalytics gaId={GA_ID} />
    </>
  );
}
