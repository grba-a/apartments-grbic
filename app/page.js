import Hero from "@/src/components/Hero";
import Apartments from "@/src/components/Apartments";
import About from "@/src/components/About";
import Amenities from "@/src/components/Amenities";
import Reviews from "@/src/components/Reviews";
import Gallery from "@/src/components/Gallery";
import Location from "@/src/components/Location";
import Blog from "@/src/components/Blog";
import FAQ from "@/src/components/FAQ";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Apartments />
      <About />
      <Amenities />
      <Reviews />
      <Gallery />
      <Location />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}
