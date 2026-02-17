import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MouseLight from "@/components/shared/MouseLight";
import PageContentWrapper from "@/components/shared/PageContentWrapper";
import PageTransition from "@/components/shared/PageTransition";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
// import ChatwootIntegration from "@/components/chatbot/ChatwootIntegration";
import DisableRightClick from "@/components/shared/DisableRightClick";
import { NavbarHeightProvider } from "@/contexts/NavbarHeightContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Geekonomy | 360 Branding, Marketing & Development",
  description: "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
  icons: {
    icon: [
      { url: "/Logo.png", sizes: "any" },
      { url: "/Logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/Logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Set initial navbar height immediately to prevent layout shift
                if (typeof document !== 'undefined') {
                  document.documentElement.style.setProperty('--navbar-height', '72px');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <DisableRightClick />
        <NavbarHeightProvider>
          <MouseLight />
          <Navbar />
          <PageTransition>
            <PageContentWrapper>
              {children}
              <Footer />
              {/* <ChatwootIntegration /> */}
            </PageContentWrapper>
          </PageTransition>
        </NavbarHeightProvider>
      </body>
    </html>
  );
}
