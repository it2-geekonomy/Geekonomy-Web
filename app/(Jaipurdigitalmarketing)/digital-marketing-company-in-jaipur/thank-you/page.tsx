import type { Metadata } from "next";
import LandingThankYou from "@/components/shared/LandingThankYou";

export const metadata: Metadata = {
  title: "Thank You | Geekonomy",
  description: "Thanks for reaching out. Our team will get back to you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return <LandingThankYou landingPageSlug="digital-marketing-company-in-jaipur" />;
}
