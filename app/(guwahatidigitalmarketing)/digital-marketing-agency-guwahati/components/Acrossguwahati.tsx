import { ArrowRight, MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { guwahatiareas } from "../const/Acrossguwahati";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 uppercase">
                Across Guwahati, Assam
              </Typography>
            </div>
            <Typography
              variant="display-xl"
              as="h2"
              className="text-white text-2xl sm:text-4xl lg:text-5xl"
            >
             Digital Marketing Services Across Guwahati
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            No matter if your focus is on the city center or whether your customers are located across various parts of Guwahati; your digital marketing plan should be in accordance with where your ideal customers are and how they look for you.
            </Typography>
             <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
             Geekonomy provides a point of referral for commerce in Dispur, Beltola, Ganeshguri, Six Mile, GS Road, Chandmari, Zoo Road, Bhangagarh, Hatigaon, Panjabari, Khanapara, Jalukbari, Paltan Bazaar & Fancy Bazaar.
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[6/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/guwahati-map.png"
                alt="Map of Guwahati service areas"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {guwahatiareas.map((area) => (
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

        <Typography variant="h3" as="h3" className=" text-white font-semibold">
          Serving Businesses Beyond Guwahati
        </Typography>

        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            If your business covers the Assam region, we can also use this online marketing strategy to expand beyond Guwahati to other cities and locations where your business operates. This means your website and campaigns can expand with your business rather than being restricted to one local market.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The goal is still unchanged: get the right customers to your Site design is crucial for effective web design and user engagement. improve organic visibility, and translate local online demand into real solutions.
        </Typography>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:w-auto">
              <Typography variant="body-lg" className="font-semibold text-black">
              Get Your Free Digital Marketing Strategy
              </Typography>
              <ArrowRight/>
          </a>
        </div>

      </div>
    </section>
  );
}