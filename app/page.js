import { Suspense } from "react";
import Hero from "@/src/components/Hero";
import TrustStrip from "@/src/components/TrustStrip";
import Apartments from "@/src/components/Apartments";
import About from "@/src/components/About";
import PullQuote from "@/src/components/PullQuote";
import Amenities from "@/src/components/Amenities";
import Reviews from "@/src/components/Reviews";
import Gallery from "@/src/components/Gallery";
import WhyBookDirect from "@/src/components/WhyBookDirect";
import Location from "@/src/components/Location";
import FAQ from "@/src/components/FAQ";
import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import ScrollHandler from "@/src/components/ScrollHandler";

export default function Home() {
  return (
    <main>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Hero />
      <TrustStrip />
      <Apartments />
      <About />
      <PullQuote />
      <Amenities />
      <Reviews />
      <Gallery />
      <WhyBookDirect />
      <Location />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  );
}
