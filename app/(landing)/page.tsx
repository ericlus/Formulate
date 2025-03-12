import Features from "@/components/landing/Features";
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
    </main>
  );
}
