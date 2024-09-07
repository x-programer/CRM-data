import FeaturedCard from "@/components/FeaturedCard";
import HeroSection from "@/components/HeroSection";
import InfinityMovingCards from "@/components/InfinityMovingCards";
import { Main } from "next/document";
import Image from "next/image";

export default function Home() {
  return (

    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Herosection section */}
      <HeroSection/>

      {/* Featuredcard section */}
      <FeaturedCard/>

      {/* Infinity Moving cards */}
      <InfinityMovingCards/>
    </main>
  );
}
