import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Career } from "@/components/Career";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Career />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
