import { JsonLd } from "@/components/seo/JsonLd";
import { buildContactJsonLd } from "@/lib/schema/contact";

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildContactJsonLd()} />
      {children}
    </>
  );
}
