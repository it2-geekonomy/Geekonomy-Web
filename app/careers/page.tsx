import type { Metadata } from "next";
import { getDynamicSEODataFromHeaders } from "@/seoData";
import CareerCtaSection from "@/components/career/CareerCtaSection";
import CareerHero from "@/components/career/CareerHero";
import CareerOpenRoles from "@/components/career/CareerOpenRoles";
import { CareerPageSection } from "@/components/career/CareerPageSection";
import { getCareerHeroStats } from "@/lib/careers/stats";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getDynamicSEODataFromHeaders("careers");

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      images: seo.image ? [{ url: seo.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
    },
  };
}

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