import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MouseLight from "@/components/shared/MouseLight";
import PageContentWrapper from "@/components/shared/PageContentWrapper";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ChatwootIntegration from "@/components/chatbot/ChatwootIntegration";
import DisableRightClick from "@/components/shared/DisableRightClick";
import { NavbarHeightProvider } from "@/contexts/NavbarHeightContext";
import { getDynamicSEODataFromHeaders } from "@/seoData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getDynamicSEODataFromHeaders("home");

  return {
    metadataBase: new URL(baseUrl),
    title: seoData.title,
    description: seoData.description,
    icons: {
      icon: [
        { url: "/Logo.png", sizes: "any" },
        { url: "/Logo.png", type: "image/png" },
      ],
      apple: [
        { url: "/Logo.png", sizes: "180x180", type: "image/png" },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: seoData.canonical,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.url,
      siteName: "Geekonomy Technology",
      type: "website",
      images: seoData.image ? [{ url: seoData.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: seoData.image ? [seoData.image] : [],
      creator: seoData.twitterHandle,
    },
  };
}

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
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '803972362726573');
fbq('track', 'PageView');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RGKDG2K8H6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RGKDG2K8H6');
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=803972362726573&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <DisableRightClick />
        <NavbarHeightProvider>
          <MouseLight />
          <Navbar />
          <PageContentWrapper>
            {children}
            <Footer />
            <ChatwootIntegration />
          </PageContentWrapper>
        </NavbarHeightProvider>
      </body>
    </html>
  );
}
