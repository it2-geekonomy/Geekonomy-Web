
import TermsAndConditions from "@/components/termsandconditions/Herosection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Geekonomy",
  description:
    "Read Geekonomy’s Terms & Conditions to understand the rules, responsibilities, and terms that apply when using our website and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Geekonomy",
    description:
      "Read Geekonomy’s Terms & Conditions to understand the rules, responsibilities, and terms that apply when using our website and services.",
    url: "https://thegeekonomy.com/terms-and-conditions",
    type: "website",
  },
 
}; 

export default function PrivacyPolicy() {
  return (
    <main className="bg-black">
      
  <TermsAndConditions/>

      </main>
  );
}

