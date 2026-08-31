import { Typography } from "@/components/ui/Typography";
import { types } from "../const/Strategybussiness";
import { ArrowRight } from "lucide-react";

export default function StrategyBussiness() {
  return (
    <section id="types" className="bg-white/[0.02] py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Strategy by bussiness type
            </Typography>
          </div>
          
          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Digital Marketing Strategy for Different Jaipur Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
           Every business in Jaipur is different. A digital marketing strategy that is effective for a service-based company dealing in high prices will not necessarily work for an online brand that has hundreds of products or a small, local business targeting a particular locality.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           Geekonomy adjusts the marketing mix to suit your business model, the nature of the customers, the competition, and your growth plans.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="flex flex-col justify-center w-full max-w-95 mx-auto md:max-w-none md:mx-0 rounded-[1.25rem] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 ">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
                Not sure where to start?
            </Typography>
            <Typography variant="body-lg" className="mb-3 text-black/70">
              You don’t need to be an expert in every digital channel to grow your business. We’ll help you understand where your biggest opportunities are and recommend a practical approach based on your business goals, audience, competition, and budget.
            </Typography>
            <Typography variant="body-lg" className="mb-4 text-black/70">
              From SEO and content to conversion optimization and other digital marketing channels, we focus on what can actually move your business forward—not simply adding more marketing activities.
            </Typography>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get a Free Plan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>


        </div>
         <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          Industry is not the only factor we take into account when creating the right channel mix for you. We also look at the value of each customer, sales cycle, location, competitors, awareness, margin, and conversion process.
        </Typography>
         <Typography variant="body-xl" className="mt-3 leading-relaxed text-white/90">
          This is enough to identify where your marketing spend will have the biggest opportunity for our Jaipur offering. Organic visibility, qualified leads, online sales, local discovery, brand awareness, or a growth and success strategy are all vital components of our services in Jaipur.
        </Typography>
      </div>

    </section>
  );
}