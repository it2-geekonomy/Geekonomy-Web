import { JsonLd } from "@/components/seo/JsonLd";
import { buildAboutJsonLd } from "@/lib/schema/about";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildAboutJsonLd()} />
      {children}
    </>
  );
}
