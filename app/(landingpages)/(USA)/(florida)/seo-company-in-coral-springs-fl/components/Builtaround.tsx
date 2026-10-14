
import { Typography } from "@/components/ui/Typography";

export default function BuiltAround() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Coral Springs Search
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO That Helps Coral Springs Businesses Compete Locally
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Getting ranked for local search means more than just having the words “Coral Springs” on your website. You must have business that is relevant to popular searches, user friendly for Google and present in the venues customers use to make purchasing choices.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We craft SEO campaigns focused on the services you offer and the customers you want to attract. This may involve website optimization, strengthening your local search visibility, enhancement of your Google Business Profile, developing content targeted at your services and increasing relevant local authority.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            As a Coral Springs <span className="text-[#FFFFFF] font-semibold">SEO company</span> we take a different approach, we look at where your business is showing up in organic search as well as local listings not just where one individual key word is. Our aim is to boost your exposure for those search terms that matter most and draw more potential customers in.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Your website, with the proper approach, can become not only a brochure, but also a steady transmitter of targeted traffic, calls, enquiries and growth opportunities.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Coral-Springs-h2.webp"
                alt="Business in Coral Springs"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}