import type { Metadata } from "next";

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

      {children}

    </>
  );
}