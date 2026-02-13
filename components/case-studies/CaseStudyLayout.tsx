"use client";
import Image from "next/image";
import { CaseStudy } from "@/types";
import CaseStudyForm from "@/components/case-studies/casestudyform";
import LastSection from "./LastSection";
import OptionalGrid from "@/components/case-studies/OptionalGrid";
import { Typography } from "../ui/Typography";
interface CaseStudyLayoutProps {
  post: CaseStudy;
}

export default function CaseStudyLayout({ post }: CaseStudyLayoutProps) {
  const improvedContent = post.contentSections?.find((s) => s.id === 2);
  const overviewContent = post.contentSections?.find((s) => s.id === 1);
  const solutionContent = post.contentSections?.find((s) => s.id === 4);

  return (
    <section className="w-full pb-12 bg-black text-white">
      {/* Banner */}
      <div className="relative aspect-[3/1] overflow-hidden mx-auto mb-6">
        <Image
          src={post.banner || post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Title */}
      {post.internalTitle && (
        <Typography
          as="h1"
          variant="2xl"
          className="text-[clamp(1.1rem,1vw,2rem)] md:text-[clamp(1.35rem,3vw,2.5rem)] xl:text-[clamp(1.25rem,4vw,2.5rem)] drop-shadow-lg text-center capitalize mb-6 lg:mb-24"
        >
          {post.internalTitle}
        </Typography>
      )}
      {/* Metrics */}
      {post.imageGrid2 && post.imageGrid2.length > 0 && (
        <div className="my-12">
          <Typography
            as="h2"
            variant="2xl"
            className="font-medium max-w-[85%] md:max-w-[70%] mx-auto  
              mb-4 lg:mb-8"
          >
            Metrics
          </Typography>

          <div
            className={`grid gap-4 mb-10 max-w-[85%] md:max-w-[70%] mx-auto ${post.imageGrid2.length === 3 || post.imageGrid2.length === 5
              ? "grid-cols-2 sm:grid-cols-3"
              : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
              }`}
          >
            {post.imageGrid2.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center rounded-lg pt-4 pb-6 bg-[#18181B] bg-opacity-80 border border-gray-700"
              >
                {item.icon && (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative mb-3">
                    <Image
                      src={item.icon}
                      alt={`icon-${i}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                <Typography
                  as="h3"
                  variant="lg"
                  className="font-normal mb-1 text-white"
                >
                  {item.title}
                </Typography>

                <Typography
                  as="p"
                  variant="base"
                  className="text-[#FFFFFF99] text-opacity-60 mb-8 px-3"
                >
                  {item.text}
                </Typography>

                {/* Gradient line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#6FAF4E] to-transparent shadow-[0_0_12px_#6FAF4E]" />
              </div>
            ))}
          </div>

          {/* Improved Content */}
          {improvedContent?.content && (
            <div className="max-w-[85%] md:max-w-[70%] mx-auto mt-8">
              <Typography
                as="div"
                variant="base"
                className="text-[#FFFFFF99] leading-relaxed [&_p]:mb-4"
              >
                <div dangerouslySetInnerHTML={{ __html: improvedContent.content }} />
              </Typography>
            </div>
          )}

        </div>
      )}
      {/*overview content */}
      {overviewContent?.content && (
        <div className="max-w-[85%] md:max-w-[70%] mx-auto mb-24">
          <div className="relative rounded-lg bg-[#18181B] bg-opacity-80 border border-gray-700 p-6 md:p-8">
            <Typography
              as="div"
              variant="lg"
              className="text-[#FFFFFF99] leading-relaxed [&_p]:mb-4"
            >
              <div dangerouslySetInnerHTML={{ __html: overviewContent.content }} />
            </Typography>
          </div>
        </div>
      )}

      {/* ✅ Optional Grid – Only Mushashi Delta */}
      {post.imageGridOptional && post.imageGridOptional.length > 0 && (
        <OptionalGrid images={post.imageGridOptional} />
      )}

      {solutionContent?.content && (
        <div className="max-w-[85%] md:max-w-[70%] mx-auto mb-24">
          <Typography
            as="div"
            variant="lg"
            className="text-[#FFFFFF99] leading-relaxed [&_p]:mb-4"
          >
            <div dangerouslySetInnerHTML={{ __html: solutionContent.content }} />
          </Typography>
        </div>
      )}

      <CaseStudyForm post={post} />
      <LastSection />
    </section>
  );
}
