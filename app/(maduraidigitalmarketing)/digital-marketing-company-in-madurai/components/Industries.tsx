
import { Typography } from "@/components/ui/Typography";
import { metrics } from "../const/Industries";

export default function Industries() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Industries
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
           Digital Marketing Strategies for Different Businesses in Madurai
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Each type of business gets customers in a different way. A jewellery shop might rely on local searches and well-placed images, whereas a hospital might require high search engine prominence and credibility versus other providers. What a property company may need is a fusion of paid campaigns, geotargeted SEO and lead nurturing initiatives.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The digital marketing in Madurai.we are using a customized approach for each local business to establish a solid online presence. Digital marketing is customized for your business, your prospects, your competitors and your sales cycle instead of adopting a one-size-fits-all campaign structure.
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}