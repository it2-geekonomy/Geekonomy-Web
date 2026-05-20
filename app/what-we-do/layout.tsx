import { JsonLd } from "@/components/seo/JsonLd";
import { buildWhatWeDoJsonLd } from "@/lib/schema/whatWeDo";

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <JsonLd data={buildWhatWeDoJsonLd()} /> */}
      {children}
    </>
  );
}