
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Businessgrowth";

export default function BusinessGrowth() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Business Growth
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Measure Marketing by Leads and Business Growth
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            The effectiveness of digital marketing is not determined by the number of impressions, followers, or clicks your campaign receives, but by how it benefits your business. 
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            We set out to link marketing activity to measurable results so you will know who’s getting the results of your marketing investment and where activities are falling short.
          </Typography>

          <Typography variant="h2" as="h3" className="mt-5 text-white font-semibold">
            Track the Metrics That Matter
          </Typography>
          <Typography variant="body-xl" className="mt-4 max-w-3xl mx-auto leading-relaxed text-white/90">
            Depending on your goals, we can monitor:    
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[0.8125rem] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h4" className="mb-2 text-white font-semibold">
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
        <Typography variant="h3" as="h3" className="mt-5 text-white font-semibold">
          Connect Marketing Activity With Business Outcomes
        </Typography>

        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
           Just because rankings go up and/or amount of traffic goes up does not mean the campaign is successful. In the larger scheme of things, we examine the full journey from visibility to traffic, to lead, to qualified opportunities and to win customers.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          This allows you to more successfully identify where additional investment in the strategies is required and where modifications made to these strategies would earn an increased return from your marketing spend.
        </Typography>
      </div>
    </section>
  );
}