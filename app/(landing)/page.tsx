import Hero from "@/components/landing/Hero";
import LogoTicker from "@/components/landing/LogoTicker";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="dm-sans flex flex-col flex-grow w-full items-center">
      <Navbar />
      <Hero />
      <LogoTicker />
    </main>
  );
}
