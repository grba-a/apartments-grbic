import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import CookieBanner from "@/src/components/CookieBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Apartments Grbić | Mlini, Dubrovnik",
  description:
    "Mirni apartmani u Mlinima, 10 minuta od Dubrovnika. Balkoni s pogledom na more, besplatan parking i Wi-Fi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
