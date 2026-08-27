

import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/privacypolicy/Herosection";



export const metadata: Metadata = {
  title: "Privacy Policy | Geekonomy",
  description:
    "Learn how Geekonomy collects, uses, protects, and manages your personal information when you use our website and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Geekonomy",
    description:
      "Learn how Geekonomy collects, uses, protects, and manages your personal information when you use our website and services.",
    url: "https://thegeekonomy.com/privacy-policy",
    type: "website",
  },
 
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-black">

    {/* <Hero /> */}
    <PrivacyPolicyPage/>
  

      </main>
  );
}

