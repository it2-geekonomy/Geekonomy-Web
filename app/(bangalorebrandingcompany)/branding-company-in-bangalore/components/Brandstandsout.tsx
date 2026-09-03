
import { Typography } from "@/components/ui/Typography";

export default function StandOut() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              brand Stands out
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Build a Brand That Stands Out in Bangalore
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            In fact, Bangalore is one of the best branding hubs in India. Here, ambitious startups, technology companies, D2C brands, professional services companies, and big companies tend to get lost amidst crowded markets with their fierce competition. Powerful branding of your business allows you to convey its uniqueness and give your customers a reason to buy from you.    
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           Our Bangalore branding process begins with gaining an understanding of your market, customer, competition and business objectives so we can fit into your current branding and marketing strategy in bangalore we will analyze where your brand can build a stronger position and then develop the strategy into messaging and visual identity that is fresh and relevant.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Whether starting a new business, growing a startup or repositioning an existing business, Geekonomy guides you to build a cohesive brand on your website, social media channels, advertising, packaging, sales packet and every customer interaction.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our branding agency in Bangalore is not just about giving your business a new look. We develop brands that have clarity of purpose, presence & positioning to help you sustain growth.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/pexelslogo.png"
                alt="Brand logo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}