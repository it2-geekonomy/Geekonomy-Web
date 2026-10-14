import type { Metadata } from "next";
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