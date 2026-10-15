
import { Typography } from "@/components/ui/Typography";

export default function BuiltAround() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
              Grow Business
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Grow Your Business With Local SEO in Casselberry
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Local customers often turn to Google when they need a nearby business, service, or professional they can trust. A well-planned local SEO strategy helps your business become more visible for searches connected to your services and location, making it easier for potential customers to discover you at the right moment.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Working with a seo company casselberry Fl can help you optimize your website and local presence around relevant search intent. This includes improving location-based pages, Google Business Profile signals, local citations, on-page elements, and content that provides genuine value to people in the Casselberry area.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Geekonomy combines these elements into a coordinated local SEO strategy designed around your business goals. Instead of focusing on rankings alone, we work toward attracting relevant visitors, generating calls and inquiries, and creating a stronger digital presence that supports long-term growth.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Casselberry-h2.webp"
                alt="Business in Casselberry"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

