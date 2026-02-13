import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MouseLight from "@/components/shared/MouseLight";
import PageContentWrapper from "@/components/shared/PageContentWrapper";
import PageTransition from "@/components/shared/PageTransition";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Geekonomy | Branding, Marketing & Development",
  description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <MouseLight />
        <PageTransition>
          <PageContentWrapper>
            <Navbar />
            {children}
            <Footer />
          </PageContentWrapper>
        </PageTransition>
      </body>
    </html>
  );
}
