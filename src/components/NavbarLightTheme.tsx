"use client";

import { useEffect } from "react";

// Renders nothing — only sets a body attribute so the Navbar knows
// it's on a light-background page and should start with navy text.
export default function NavbarLightTheme() {
  useEffect(() => {
    document.body.dataset.navLight = "1";
    return () => { delete document.body.dataset.navLight; };
  }, []);
  return null;
}
