import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import mapImage from "../images/map.png";

const areas = [
  "San Diego",
  "La Jolla",
  "Del Mar",
  "Encinitas",
  "Carlsbad",
  "Chula Vista",
  "Coronado",
  "Poway",
  "Escondido",
  "Santee",
  "El Cajon",
  "San Marcos",
  "Rancho Santa Fe",
  "Solana Beach",
  "Vista",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80">
                ACROSS SAN DIEGO COUNTY
              </Typography>
            </div>
            <Typography
              variant="display-xl"
              as="h2"
              className="text-white text-2xl sm:text-4xl lg:text-5xl"
            >
              Pool Marketing Services Across San Diego County
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              Pool companies operate in many communities throughout San Diego, and each market may have varying levels of demand, competition, and customer expectations. Geekonomy creates location-specific marketing strategies so their pool clients can target customers in the locations they operate.
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              Our San Diego pool marketing strategies can support businesses serving areas such as:
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-[520px] lg:justify-self-end">
            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src={mapImage.src}
                alt="Map of San Diego County service areas"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {areas.map((area) => (
            <Typography
              key={area}
              as="span"
              variant="body-lg"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:border-[#69AE44]/40 hover:bg-[#69AE44]/10 hover:text-white"
            >
              <MapPin className="h-3.5 w-3.5 text-[#69AE44]" />
              {area}
            </Typography>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-8">
            <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
              Build Visibility Where Your Customers Search
            </Typography>
            <Typography variant="body-lg" className="leading-relaxed text-white/90">
              Instead of equalizing every place, we concentrate on the package of services, customer intent, competition, and Search Opportunities that run through each particular landscape. This may be Location-focused service content, local SEO, Google Business Profile optimization, paid search targeting, and local landing pages.
            </Typography>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-8">
            <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
              Expand Into New Service Areas
            </Typography>
            <Typography variant="body-lg" className="leading-relaxed text-white/90">
              If you intend to branch your pool business into other communities in San Diego, all your marketing programs should support that plan from day one.
              Identify local search opportunities, analyze competitors, create targeted content, and devise marketing campaigns to get your business in front of new customer segments when expanding into new service areas.
            </Typography>
          </div>
        </div>
        <Typography variant="body-xl" className="mt-10 max-w-7xl leading-relaxed text-white font-semibold">
          If your pool company is within any part of San Diego County, the objective remains consistent: ensure your services are presented to the right local customers and convert search demand into qualified leads.         </Typography>
      </div>
    </section>
  );
}