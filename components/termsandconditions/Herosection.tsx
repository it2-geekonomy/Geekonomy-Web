import { Typography } from "@/components/ui/Typography";
import { termsIntro, termsMeta, termsSections } from "@/lib/constants/TermsData";
import { renderWithLinks } from "@/lib/linkifDomain";

export default function TermsAndConditions() {
  return (
    <section id="terms-and-conditions" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Meta + Intro (title now lives in LegalHero) */}
        <div className="mb-14">
            <Typography
            variant="display-2xl"
            as="h1"
            className="text-white leading-tight">
            Terms and Conditions
          </Typography>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-white/60">
            <Typography variant="body-lg">
              Effective Date: {termsMeta.effectiveDate}
            </Typography>
            <Typography variant="body-lg">
              Last Updated: {termsMeta.lastUpdated}
            </Typography>
          </div>

          <div className="mt-8 space-y-4">
            {termsIntro.map((para, i) => (
              <Typography
                key={i}
                variant="body-lg"
                className="leading-relaxed text-white/90"
              >
                {para}
              </Typography>
            ))}
          </div>
        </div>


        <div className="space-y-12">
          {termsSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-t border-white/10 pt-8"
            >
              <Typography
                variant="h3"
                as="h2"
                className="mb-4 text-white font-semibold"
              >
                {section.title}
              </Typography>

              {section.paragraphs?.map((para, i) => (
                <Typography
                  key={i}
                  variant="body-lg"
                  className="mb-3 leading-relaxed whitespace-pre-line text-white/90"
                >

                  {renderWithLinks(para)}
                </Typography>
              ))}

              {section.list && (
                <ul className="mb-3 ml-5 list-disc list-inside space-y-1.5">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-white/90">
                      <Typography
                        variant="body-lg"
                        className="inline leading-relaxed text-white/90"
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections?.map((sub, i) => (
                <div key={i} className="mt-5">
                  {sub.title && (
                    <Typography
                      variant="h4"
                      as="h3"
                      className="mb-2 text-white/95 font-medium"
                    >
                      {sub.title}
                    </Typography>
                  )}

                  {sub.paragraphs?.map((para, j) => (
                    <Typography
                      key={j}
                      variant="body-lg"
                      className="mb-3 leading-relaxed whitespace-pre-line text-white/90"
                    >
                      {para}
                    </Typography>
                  ))}

                  {sub.list && (
                    <ul className="mb-3 ml-5 list-disc list-inside space-y-1.5">
                      {sub.list.map((item, j) => (
                        <li key={j} className="text-white/90" >
                          <Typography
                            variant="body-lg"
                            className="inline leading-relaxed text-white/90"
                          >
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}