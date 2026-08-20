import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Digital Marketing for Pool Companies in San Diego",
  description:
    "Grow your pool business with a digital marketing agency in San Diego. Get more local visibility, qualified leads, and pool customers.",
  alternates: {
    canonical: "/digital-marketing-for-pool-companies-san-diego",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}

    </>
  );
}