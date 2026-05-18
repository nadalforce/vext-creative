import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServiceShowcases } from "@/components/sections/ServiceShowcases";
import { VisualCollageSection } from "@/components/sections/VisualCollageSection";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { getMediaByCategory } from "@/lib/media-server";
import { MEDIA, mergeMedia } from "@/lib/media-manifest";

export default function Home() {
  const officeImages = mergeMedia(getMediaByCategory("ofis"), MEDIA.ofis);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceShowcases />
        <VisualCollageSection />
        <About />
        <Contact officeImages={officeImages} />
      </main>
      <Footer />
    </>
  );
}
