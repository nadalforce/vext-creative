import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ServiceShowcases } from "@/components/sections/ServiceShowcases";
import { About } from "@/components/sections/About";
import { CareersJoin } from "@/components/sections/CareersJoin";
import { Contact } from "@/components/sections/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({ path: "/" });

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <ServiceShowcases />
        <About />
        <CareersJoin />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
