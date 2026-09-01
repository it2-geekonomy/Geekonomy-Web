
import { Typography } from "@/components/ui/Typography";
import {  metrics, tags } from "../const/Whatmatters";
import { ArrowRight, Check } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function WhatMatters() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Track What Matters
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            Track the Leads That Matter
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Of course, traffic and rankings are important in the paving industry, but they aren‘t the whole story. Traffic on your paving marketing should be given no weight unless it produces data and business opportunities.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We track the metrics that connect marketing activity to your sales pipeline, including:
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}

        <div className="flex flex-col justify-center w-full max-w-95 mx-auto md:max-w-none md:mx-0 rounded-[1.25rem] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 ">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
                Not sure where to start?
            </Typography>
            <Typography variant="body-lg" className="mb-2 text-black/70">
              Every paving company is different. We’ll create a custom digital marketing strategy based on your goals, service area, target customers, and the channels most likely to generate qualified paving leads.
            </Typography>
            <Typography variant="body-lg" className="mb-4 text-black/70">
              From SEO and local search to PPC and lead generation, we’ll focus on what helps turn more searches into quote requests, paving projects, and new customers.
            </Typography>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get a Free Plan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-9">
          <Typography variant="h3" as="h3" className="mb-5 text-white font-semibold">
            Metrics We Track
          </Typography>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-[18px] py-2.5 text-sm font-medium text-white/80"
              >
                <Check className="h-3.5 w-3.5 text-[#69AE44]" strokeWidth={3} />
                {tag}
              </span>
            ))}
          </div>
        </div>

         <Typography variant="body-xl" className="mt-6 max-w-7xl leading-relaxed text-white font-semibold">
        This gives you a much clearer picture of what is working and where best to use your marketing budget in order to have the biggest effect.
        </Typography>

      </div>
    </section>
  );
}