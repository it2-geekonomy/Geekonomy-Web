import HeroSection from "@/components/sections/HeroSection";
import DisconnectSection from "@/components/sections/DisconnectSection";
import FirstStepSection from "@/components/sections/FirstStepSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <DisconnectSection />
      <FirstStepSection />
    </main>
  );
}

