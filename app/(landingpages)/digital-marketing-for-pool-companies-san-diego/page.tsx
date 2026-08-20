import Hero from "./components/Herosection";
import Strategywins from "./components/Strategywins";
import Serviceares from "./components/Serviceareas";
import Services from "./components/Services";
import Businesstypes from "./components/Businesstypes";
import Highintent from "./components/Highintent";
import Ourapproach from "./components/Ourapproach";
import Whyus from "./components/Whygeekonomy";
import Measurablegrowth from "./components/Measurablegrowth";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Comparision from "./components/Comparision";
import DataCompliance from "./components/Datacompliance";
import TargetCTA from "./components/TargetingCTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Strategywins />
      <Serviceares />
      <Services />
      <Businesstypes />
      <Highintent />
      <Ourapproach />
      <TargetCTA />
      <Whyus />
      <Comparision />
      <Measurablegrowth />
      <DataCompliance />
      <FAQ />
      <CTA />
    </main>
  );
}