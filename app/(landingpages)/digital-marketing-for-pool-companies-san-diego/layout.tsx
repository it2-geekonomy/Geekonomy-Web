// layout.tsx — clean version, no metadata needed
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Header";

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