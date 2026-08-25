import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "",
  description:
    "",
  alternates: {
    canonical: "",
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