
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
              Fort Walton Beach Search
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO Built Around How Fort Walton Beach Customers Search
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            People looking for a local business often start with Google, whether they search for a specific service, compare nearby providers, or use phrases such as “near me.” A strong local SEO strategy helps your business appear at the right moment when potential customers are actively searching.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            As a Fort Walton Beach SEO company, Geekonomy focuses on the search behaviors that matter to your business. We optimize your website and local presence around relevant service terms, location-based searches, Google Maps visibility, and commercially valuable queries. This creates a stronger connection between what customers search for and the services your business provides.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our strategy can include optimizing your Google Business Profile, strengthening location and service pages, improving local signals, developing relevant content, and building a website structure that makes it easier for search engines to understand your business.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The goal isn't simply to generate more website traffic. It's to attract relevant local visitors who are more likely to call, request a quote, schedule an appointment, make a booking, or become customers.
          </Typography>
        </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[3.5/4] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/fort-walton-beach-h2.png"
                alt="Business in Fort Walton Beach"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

