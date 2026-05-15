import { JsonLd } from "@/components/seo/JsonLd";
import { buildCareerJsonLd } from "@/lib/schema/career";

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildCareerJsonLd()} />
      {children}
    </>
  );
}
