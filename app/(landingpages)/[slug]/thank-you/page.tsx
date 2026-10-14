// app/(landing-page)/[slug]/thank-you/page.tsx
import type { Metadata } from "next";
import LandingThankYou from "@/components/shared/LandingThankYou";
import { ThankYou_PAGE_SLUGS } from "@/lib/constants/LandingThankYouPages";

export const metadata: Metadata = {
    title: "Thank You | Geekonomy",
    description: "Thanks for reaching out. Our team will get back to you shortly.",
    robots: {
        index: false,
        follow: false,
    },
};

// Only slugs in the list are valid; anything else returns 404
export const dynamicParams = false;

export function generateStaticParams() {
    return ThankYou_PAGE_SLUGS.map((slug) => ({ slug }));
}

export default async function ThankYouPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return <LandingThankYou landingPageSlug={slug} />;  
}