import { Typography } from "@/components/ui/Typography";
import { rockhillareas } from "../const/Nearby";
import { MapPin } from "lucide-react";

export default function ServingNearby() {
  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 uppercase">
                Across Rock Hill, SC
              </Typography>
            </div>
            <Typography
              variant="display-2xl"
              as="h2"
              className="text-white leading-tight"
            >
              Serving Rock Hill and Nearby Communities
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              Your customers do not always search from within one city limit. Travel time considerations may make it so that neighboring communities, not necessarily within the same city limit, could be potential customers.
            </Typography>
             <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
               Your SEO can be based on the regions you actually operate in, aiding in the generation of relevant exposure in:
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/rock-hill-map.png"
                alt="Map of rock hill service areas"
                className="h-full w-full  object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {rockhillareas.map((area) => (
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
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          It‘s not about having duplicate pages for every location. We pinpoint the most important areas to your business and build useful local content where there‘s real customer interest.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Using this strategy allows your website to reinforce a strong regional point of relevance, all the while providing express detail to prospective customers about geographic coverage.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Our SEO company Rock Hill SC strategies are designed around your real market area and potential if you‘re not just targeting one city or neighborhood but servicing a larger area then we take that into account when developing a plan for your success.
        </Typography>
      </div>
    </section>
  );
}