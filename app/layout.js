import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import CookieBanner from "@/src/components/CookieBanner";
import RevealObserver from "@/src/components/RevealObserver";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { LangProvider } from "@/src/i18n/LangContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Apartments Grbić | Mlini, Dubrovnik",
  description:
    "Mirni apartmani u Mlinima, 10 minuta od Dubrovnika. Balkoni s pogledom na more, besplatan parking i Wi-Fi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <LangProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
          <RevealObserver />
        </LangProvider>
      </body>
    </html>
  );
}
