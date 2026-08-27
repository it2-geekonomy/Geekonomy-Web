

import { Typography } from "@/components/ui/Typography";
import { privacyMeta, privacySections } from "@/lib/constants/PrivacyPolicyData";
import { renderWithLinks } from "@/lib/linkifDomain";

export default function PrivacyPolicyPage() {
  return (
    <section id="privacy-policy" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <div className="mb-14">
          <Typography
            variant="display-2xl"
            as="h1"
            className="text-white leading-tight">
            Privacy Policy
          </Typography>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-white/60">
            <Typography variant="body-lg">
              Effective Date: {privacyMeta.effectiveDate}
            </Typography>
            <Typography variant="body-lg">
              Last Updated: {privacyMeta.lastUpdated}
            </Typography>
          </div>

          <div className="mt-8 space-y-4">
              <Typography
                variant="body-lg"
                className="leading-relaxed text-white/90">
                At Geekonomy, we respect your privacy and are committed to protecting the personal information you share with us.
              </Typography>
              <Typography
                variant="body-lg"
                className="leading-relaxed text-white/90">
                This Privacy Policy explains how Geekonomy (“Geekonomy,” “we,” “us,” or “our”) collects, uses, discloses, stores, and protects personal information when you visit or use <a href="https://thegeekonomy.com" target="_blank" rel="noopener noreferrer" className="text-[#69AE44] hover:underline underline-offset-2 ">thegeekonomy.com</a>, contact us, request information, submit a form, engage our services, or otherwise interact with us.
              </Typography>
              <Typography
                variant="body-lg"
                className="leading-relaxed text-white/90">
                Geekonomy provides branding, technology, website development, digital marketing, SEO, advertising, and related business growth services.
              </Typography>
              <Typography
                variant="body-lg"
                className="leading-relaxed text-white/90">
                    This Privacy Policy is intended to provide transparency to visitors and customers worldwide, including individuals located in the 
                    <span className="text-[#FFFFFF] font-semibold"> European Economic Area (EEA), United Kingdom, Switzerland, and the United States</span>.
              </Typography>
          </div>
        </div>


        {/* Sections */}
        <div className="space-y-12">
          {privacySections.map((section) => (
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
