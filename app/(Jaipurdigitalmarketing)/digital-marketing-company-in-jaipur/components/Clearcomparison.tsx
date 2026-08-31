import { Typography } from "@/components/ui/Typography";
import { rows } from "../const/Clearcomparison";

export default function Comparison() {
  return (
    <section className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80 text-nowrap">
              CLEAR COMPARISON
            </Typography>
          </div>

          <Typography
            variant="display-xl"
            as="h2"
            className="mx-auto max-w-5xl text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
           What Makes Our Approach Different From a Typical Digital Marketing Agency?
          </Typography>

          <Typography variant="body-xl" className="mx-auto max-w-5xl mt-5 leading-relaxed text-white/90">
            There are a great many marketing agencies in Jaipur that do SEO, paid advertising, manage social media, or do content marketing. Many of those will offer the same services. The distinction is often in the realm of leading digital marketing strategies. how they tie into the proven SEO strategies that enhance online visibility. those services back to the business.
          </Typography>

          <Typography variant="body-xl" className="mx-auto max-w-5xl mt-4 leading-relaxed text-white/90">
            Geekonomy follows a more holistic view of professional digital marketing to enhance organic traffic. We analyze your brand, marketing channels, technology, customer experiences, and commercial objectives first, then determine what should be implemented.
          </Typography>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.25rem] border border-white/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-250 border-collapse">
              <thead>
                <tr className="bg-[#69AE44]/30">
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      What Your Jaipur Business Needs
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Geekonomy (Jaipur-Specific)
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Generalist Agency
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Self-Managed Marketing
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.need}
                    className={`border-t border-white/30 ${
                      i % 2 === 1 ? "bg-white/[0.03]" : "bg-transparent"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="text-white">
                        {row.need}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="font-semibold text-[#69AE44]">
                        {row.geekonomy}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="text-white">
                        {row.generalist}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="text-white">
                        {row.selfManaged}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}