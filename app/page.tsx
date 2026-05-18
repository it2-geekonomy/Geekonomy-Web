import HomeClient from "./HomeClient";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildHomePageJsonLd } from "@/lib/schema/home";

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomePageJsonLd()} />
      <HomeClient />
    </>
  );
}
