
import { Typography } from "@/components/ui/Typography";
import { BulletPoints } from "../const/Buildaround";

export default function BuiltAround() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-7 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Across St Ives, Cornwall
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Get Found When Customers Search for Your Services
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Your target market is already searching on Google for businesses, pricing comparisons, and the reasons to call you; if you are not ranking for the right searches, someone else is.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our <span className="text-[#FFFFFF] font-semibold">SEO Company St Ives</span>, Cornwall UK is all about creating the right link between your business and searches so your site is a lot more relevant to its visitors. We optimize your key pages based on search intent, enhance your local search presence, improve the technical aspects of your site and produce relevant content for your target group.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The focus here is to grow a search presence which drives genuine business leads, not just visits. When implemented correctly, SEO is capable of increasing the visibility of your website in Search Engines, increasing the number of relevant visitors to your site, and increasing enquiries, providing your visitors with a rational argument for dealing with your company.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/St-Ives-h2.webp"
                alt="St Ives Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>

        <ul className="mx-auto max-w-4xl ml-5 space-y-4 text-white/90">
          {BulletPoints.map(({ point }) => (
            <li key={point} className="flex gap-4">
              <span className="mt-2.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#69AE44]" />
              <Typography variant="body-xl" className="leading-relaxed">
                {point}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}