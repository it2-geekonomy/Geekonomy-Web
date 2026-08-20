import Hero from "./components/Herosection";
import WhatWeDo from "./components/Whatwedo";
import Seoservices from "./components/Seoservices";
import Whyus from "./components/Whyus";
import CTA from "./components/CTA";
import Localsearch from "./components/localsearch";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <WhatWeDo />
      <Seoservices />
      <Whyus />
      <CTA />
      <Localsearch />
      </main>
  );
}