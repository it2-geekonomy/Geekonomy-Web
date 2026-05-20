import { JsonLd } from "@/components/seo/JsonLd";
import { buildHowWeWorkJsonLd } from "@/lib/schema/howWeWork";

export default function HowWeWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <JsonLd data={buildHowWeWorkJsonLd()} /> */}
      {children}
    </>
  );
}
