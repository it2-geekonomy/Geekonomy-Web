import { Typography } from "@/components/ui/Typography";

export default function SeoServices() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Search Strategy
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Get Found When Frederick Customers Are Searching
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            If they’re looking for a service in Frederick, chances are they are going to check out a few different providers before they call one up. An effective local SEO plan will allow your business to be present where those searches are taking place - both on Google and Google Maps.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy focuses on tailoring your website and local search platform to the services, locations and search terms most relevant to your business. This encompasses improving your location relevance, enhancing your service pages, optimizing your Google Business Profile and creating authoritative local signals.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            It‘s not just about ranking for <span className="text-[#FFFFFF] font-semibold">Frederick SEO company</span> or whatever location specific terms you want to target. It‘s about creating the visibility for the searches your real customers actually perform and the ease of choosing your business.
          </Typography>
        </div>
      </div>
    </section>
  );
}

