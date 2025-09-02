import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
