
import { Typography } from "@/components/ui/Typography";
import { steps } from "../const/Strongbrand";
import { ArrowRight } from "lucide-react";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function StrongBrand() {
  return (
    <section id="service" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Build Strong Brand
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Build a Strong Brand From Day One
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
           The Bangalore market is very competitive for startups, so a good idea in itself will rarely attract a long lasting reputation. Your brand must tell people what you stand for and what value you can provide, almost immediately. You need to gain credibility and give customers a reason to buy from you.     
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           By providing one-of-a-kind design solutions and strategies, Geekonomy enables startups to translate their business idea into a unique and scalable brand. Leveraging the power of brand strategy, positioning, messaging and identity design, we build a foundation for growing your business.      
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
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
              Build a stronger brand with a tailored branding strategy for your Bangalore business. From brand identity to visual design, we help you stand out, connect with your audience, and grow.
            </Typography>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex w-fit items-center gap-2 mt-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get a Free Brand Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          So as a branding company located in Bangalore, we help the startup founders to develop a sound & reliable brand platform right at the outset of the company so that each and every forward marketing activity leverages the same direction!
        </Typography>
      </div>
    </section>
  );
}