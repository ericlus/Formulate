import CTA from "@/components/landing/CTA";
import FAQs from "@/components/landing/FAQs";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import LogoTicker from "@/components/landing/LogoTicker";
import Navbar from "@/components/landing/Navbar";
import ProductShowcase from "@/components/landing/ProductShowcase";

export default function Home() {
  return (
    <main className="dm-sans flex flex-col flex-grow w-full items-center">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}
