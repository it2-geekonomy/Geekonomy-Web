import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import mapImage from "../images/mapC.png";

const areas = [
  "Carlsbad Village",
  "Olde Carlsbad",
  "La Costa",
  "Aviara",
  "Bressi Ranch",
  "Calavera Hills",
  "Rancho Carrillo",
  "South Carlsbad",
  "North Carlsbad",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 uppercase">
                Across Carlsbad, California
              </Typography>
            </div>
            <Typography
              variant="display-xl"
              as="h2"
              className="text-white text-2xl sm:text-4xl lg:text-5xl"
            >
              SEO Services Across Carlsbad, California
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy helps businesses in Carlsbad, CA boost their Google Organic Visibility, local search rankings, and qualified Lead Generation.
            </Typography>
             <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 font-semibold">
             Areas We Serve in Carlsbad
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Our Carlsbad SEO services support businesses across:
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
              Built Around Search Intent
            </Typography>
            <Typography variant="body-lg" className="leading-relaxed text-white/90">
              We match your pages to informational, commercial, and transactional intent so the visitors your website brings through are more likely to become your customers.
            </Typography>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-8">
            <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
              Local Signals That Matter
            </Typography>
            <Typography variant="body-lg" className="leading-relaxed text-white/90">
              Increase your signals to the local search on your website and business pages for relevant searches in Carlsbad and surrounding areas.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}