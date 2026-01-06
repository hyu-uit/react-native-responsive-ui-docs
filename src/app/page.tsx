import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0F1B]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
