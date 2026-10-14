
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Seobusiness";

export default function SeoBusiness() {
  return (
    <section id="result" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              SEO Business
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Business With a Kyle TX SEO Company
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Having a good online presence can help potential customers in Kyle find your business at the exact time they are looking for what you have to offer. But it is not enough to just have a website: it must be optimized for the search intent, contain helpful information, and be simple for people to navigate.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            LFor Geekonomy, we design SEO campaigns that achieve long-term organic visibility for organizations. For a Kyle TX seo agency, we see the whole search experience, from keyword choice and site architecture to local optimization, content, technical SEO and conversion.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our strategy is all about reaching out to the target audience that is pre searching for what you have to offer. An SEO company Kyle TX strategy relies on attracting high value local and service specific searches and generating additional opportunities for the right visitors to contact you.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Kyle-h2.webp"
                alt="Business in Kyle"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          {Items.map(({ icon: Icon, title, desc }) => (
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
      </div>
    </section>
  );
}