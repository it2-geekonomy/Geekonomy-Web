import Banner from "@/components/case-studies/banner";
import Section from "@/components/case-studies/TextSection";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import LastSection from "@/components/case-studies/LastSection";
import { getStaticSEOData } from '@/seoData';
import type { Metadata } from 'next';

// ✅ Server-side SEO Metadata with dynamic URLs
export function generateMetadata(): Metadata {
  const data = getStaticSEOData('case-studies');
  
  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: data.canonical,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url,
      siteName: "Geekonomy",
      images: data.image ? [{ url: data.image }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
      creator: data.twitterHandle,
    },
  };
}

export default function Home() {
  return (
    <div>
<Banner />

{/* Section + Grid with shared background */}
<section className="relative">
  {/* Background Image */}
  <img
    src="/case-studies/Geekonomy Case Studies Page sample.webp"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
  />

  {/* Optional overlay for better readability */}
  {/* <div className="absolute inset-0 bg-black/30 z-10"></div> */}

  {/* Content container */}
  <div className="relative z-10  mx-auto px-4  ">
    <Section />
    <CaseStudiesGrid />

  </div>
</section>

<LastSection />


    </div>
  );
}