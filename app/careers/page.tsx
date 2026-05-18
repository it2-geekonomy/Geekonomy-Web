import CareerCtaSection from "@/components/career/CareerCtaSection";
import CareerHero from "@/components/career/CareerHero";
import CareerOpenRoles from "@/components/career/CareerOpenRoles";
import { CareerPageSection } from "@/components/career/CareerPageSection";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-black">
      <CareerPageSection className="py-[clamp(2.5rem,2.5rem+2vw,8rem)] lg:py-[clamp(3rem,3rem+4vw,10rem)]">
        <CareerHero />
      </CareerPageSection>

      <CareerOpenRoles />
      <CareerCtaSection />
    </main>
  );
}
