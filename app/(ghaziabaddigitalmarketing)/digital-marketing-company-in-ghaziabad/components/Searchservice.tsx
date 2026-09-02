
import { Typography } from "@/components/ui/Typography";
import { flow } from "../const/Searchservice";

export default function SearchService() {
  return (
    <section id="service" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 ">
                Turn Searches Into Sales
              </Typography>
            </div>
            <Typography
              variant="display-2xl"
              as="h2"
              className="text-white leading-tight"
            >
             Digital Marketing That Turns Searches Into Customers
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
             However, attracting the visitors to your website is only part of the story. Your digital marketing should ensure the right people find and recognize your business, know how it can address their needs and take that crucial next step.
            </Typography>
            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
             We combine SEO, local SEO, Google Ads, Content, social media and conversion marketing to help develop a clearer journey from our broad scope of digital marketing services. search to enquire about the customer. Whether they are finding out about your business on Google or shopping around town, we target them at the right time in their buying journey with the right digital marketing solution.
            </Typography>
            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 ">
             For Ghaziabad businesses, it‘s about establishing visibility for the services that people are searching for and then providing those visitors with an easy way to contact your company and enquire, quote or buy.
            </Typography>
            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 ">
             It‘s not about more clicks, but converting meaningfully via good performance marketing – it‘s about more relevant traffic, more quality leads, visible growth and good performance marketing from a leading design agency.
            </Typography>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/ghaziabad2ndimage.png"
                alt="Digital Marketing That Turns Searches Into Customers"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-11 overflow-x-auto lg:overflow-visible rounded-[1.25rem] border border-[#69AE44] bg-[#69AE44]/10 p-7">
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
        </div> 
      </div>
    </section>
  );
}