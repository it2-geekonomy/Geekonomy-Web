import ComingSoon from "@/components/shared/ComingSoon";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSuccessLabJsonLd } from "@/lib/schema/successLab";

export default function SuccessLabPage() {
  return (
    <>
      <JsonLd data={buildSuccessLabJsonLd()} />
      <ComingSoon title="SUCCESS LAB" />
    </>
  );
}
