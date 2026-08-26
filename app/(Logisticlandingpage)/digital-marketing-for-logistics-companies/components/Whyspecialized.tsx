


import { Typography } from "@/components/ui/Typography";
import { whySpecializedItems } from "../const/Whyspecializedlist";

export default function WhySpecialized() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               WHY SPECIALIZED
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Why Logistics Companies Need a Specialized Digital Marketing Strategy
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          More and more logistics customers surf the Internet to find a transportation, freight, warehousing, or 3PL provider. Your company’s visibility in the digital world helps you be found when your target audience hunts for the logistics services you provide, keeping your brand top-of-mind.         
          </Typography>

          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          But digital is not enough for logistics marketing. To succeed in the logistics industry, you must specify the services, the locations, the industries, the needs, the buyers, and convert website visitors into quote requests and qualified sales opportunities through effective digital marketing for logistics.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whySpecializedItems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[0.8125rem] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}