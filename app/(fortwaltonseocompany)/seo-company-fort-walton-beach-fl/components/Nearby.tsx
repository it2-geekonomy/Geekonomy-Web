import { ArrowRight, MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { areas } from "../const/Nearby";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

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
            <Typography
              variant="display-2xl"
              as="h2"
              className="text-white leading-tight"
            >
              Serving Businesses Across Fort Walton Beach and Nearby Areas
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              Customers don't always search from the exact city where a business is located. They may search by a nearby community, service area, or broader regional term when looking for a provider. That’s why a strong local SEO strategy should reflect the areas your business actually serves.
            </Typography>
            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
              Geekonomy can help businesses target relevant searches across <span className="text-[#FFFFFF] font-semibold">Fort Walton Beach and nearby areas</span>, including:
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/fort-walton-beach-view.png"
                alt="fort walton beach areas"
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

        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          We build location targeting around your actual service area rather than creating thin pages simply to include city names. This can include optimizing service-area pages, strengthening local signals, improving internal links, and creating useful location-specific content where there is genuine customer demand.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Whether your customers are searching for a service in Fort Walton Beach or looking for a provider serving the wider Emerald Coast, the goal is to make your business easier to discover in the locations that matter most to your growth.
        </Typography>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
        <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 transition-transform hover:scale-[1.03] sm:w-auto">
            <Typography variant="body-lg" className="font-semibold text-black">
            Get Your Free SEO Strategy
            </Typography>
            <ArrowRight/>
        </a>
        </div>

      </div>
    </section>
  );
}