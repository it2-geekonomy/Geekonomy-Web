
import { Typography } from "@/components/ui/Typography";

export default function BuiltBusiness() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Built Businesses
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Digital Marketing Built for Ocean Springs Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            To market a local business is not simply being present online; you need a powerful online presence to be successful with the correct SEO services. Your company‘s strategy should be shaped by how residents of Ocean Springs search, research, and then choose your services. We merge all aspects of local search, content, paid marketing, social media, and conversion optimization into a cohesive digital marketing campaign on behalf of your company objectives.   
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           Let‘s explore the opportunities available in Ocean Springs and the broader Mississippi Gulf Coast to see how your business can achieve exposure and attract highly targeted customers through the perfect marketing solution. Whether you want to enhance your Google profile, generate additional enquiries or develop a stronger online presence in the long-term, every channel is chosen for a reason.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our right goal - is to build a “magnetic” web presence that brings you more targeted customers. Bring business to people who are actually looking for you, and convert more searchers or visitors into customers.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/ocean-spring-h2.png"
                alt="Ocean Springs Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}