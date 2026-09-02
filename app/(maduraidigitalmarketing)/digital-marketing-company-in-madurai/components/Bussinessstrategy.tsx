"use client";
import { Typography } from "@/components/ui/Typography";
import { types } from "../const/Bussinessstrategy";

export default function BussinessStrategy() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Business Strategy 
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Business With a Digital Strategy Built for Madurai
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Most consumers today will research about a product or a service online even before coming to the store, calling up a service provider, shopping or buying. Hence it becomes crucial to find a place in a competitive market. As a Madurai business you can make a notable difference in enquiries and sales by appearing in search results for your products and services through effective digital marketing solutions.         
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Having a robust local strategy means your business will show at every touchpoint that your prospective customer might use including Google Search, Google Maps, other social media and online channels where they are already searching (particularly paid social media marketing channels). Instead of only using one way to attract customers, our approach integrates paid and organic advertising, online content and social channels into a seamless user experience.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Being a digital marketing agency in Madurai we look at your target audience, geography, competitor landscape, industry, search patterns, business objectives and then guide you on where you need to invest your marketing budget.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          {types.map(({ image, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
            >
              <div className="mb-4 overflow-hidden rounded-[0.8125rem] border border-white/10 bg-white/[0.03]">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>

               {Array.isArray(desc) ? (
                <div className="space-y-2">
                  {desc.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body-lg"
                      className="leading-relaxed text-white/90"
                    >
                      {line}
                    </Typography>
                  ))}
                </div>
              ) : (
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
              )}
            </div>
          ))}
        </div>

        {/* <div className="mt-11 overflow-x-auto lg:overflow-visible rounded-[1.25rem] border border-[#69AE44] bg-[#69AE44]/10 p-7">
          <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
            {flow.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === flow.length - 1
                      ? "bg-[#69AE44] text-black"
                      : "border border-white/10 bg-white/10 text-white/80"
                    }`}
                >
                  {s}
                </span>
                {i < flow.length - 1 && <span className="text-[#69AE44]">→</span>}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}