import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FirstStepSection from "@/components/sections/FirstStepSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <DisconnectSection />
      <ProcessSection />
      <IndustriesSection />
      <FirstStepSection />
    </main>
  );
}

