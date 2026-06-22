import CareerCtaSection from "@/components/career/CareerCtaSection";
import CareerHero from "@/components/career/CareerHero";
import CareerOpenRoles from "@/components/career/CareerOpenRoles";
import { CareerPageSection } from "@/components/career/CareerPageSection";
import { getCareerHeroStats } from "@/lib/careers/stats";

export default function CareerPage() {
  const stats = getCareerHeroStats();

  return (
    <main className="min-h-screen bg-black">
      <CareerPageSection className="py-[clamp(2.5rem,2.5rem+2vw,8rem)] lg:py-[clamp(3rem,3rem+4vw,5rem)]">
        <CareerHero stats={stats} />
      </CareerPageSection>

      <CareerOpenRoles />
      <CareerCtaSection />
    </main>
  );
}
