import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { areas } from "../const/Nearby";

export default function ServingNearby() {
  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 uppercase">
                Across Nearby Areas
              </Typography>
            </div>
            <Typography variant="display-2xl" as="h2" className="text-white leading-tight" >
              SEO for Bexley Nearby Areas
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              The Bexley area itself provides a good base to draw customers from, but local businesses also have the potential to cater for hungry customers in the surrounding areas, so local SEO should incorporate how broad you wish to reach into its strategy. Geekonomy can produce content and optimization plans targeting your service area without duplicating, or unnecessarily expanding your site.
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[6/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Bexley-view.webp"
                alt="Bexley areas"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
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
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          Your Bexley SEO Company campaign can be optimized so that Bexley is your definitive focus market but you can also build relevant presence in the satellite areas where your business actually operates. Each town should have unique and helpful content that is actually related to your services rather than copying and pasting the same page with a different title.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          This way a larger local search area can be created while making your site a valuable resource for customers in your regions of coverage.
        </Typography>
      </div>
    </section>
  );
}