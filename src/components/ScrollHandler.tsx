"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("scrollTo");
    if (!section) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return null;
}
