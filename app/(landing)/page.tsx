import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="dm-sans flex flex-col flex-grow w-full max-w-screen-2xl">
      <Navbar />
      <Hero />
    </main>
  );
}
