import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { StickyScrollContent, AuthorInfo } from "../types";
import { stripHeadingTags } from "../utils";
import { getAuthorSlug } from "@/lib/blog/authorMapping";

/** Section index → heading tag. Add "h3", "h4" etc. to the array only if you want those levels; last tag is used for remaining sections. */
const SECTION_TITLE_TAGS: readonly ["h1", "h2", ...string[]] = ["h1", "h2"];
const SECTION_TITLE_CLASS =
  "text-[#FFFFFF] font-bold text-[clamp(1.5rem,2vw,2.5rem)] leading-tight mt-0 mb-3";

interface DesktopViewProps {
  content: StickyScrollContent[];
  activeCard: number;
  sectionsWrapperRef: React.RefObject<HTMLDivElement | null>;
  desktopRef: React.RefObject<HTMLDivElement | null>;
  contentClassName?: string;
  useSemanticHeadings?: boolean;
  authorInfo?: AuthorInfo;
  dateInfo?: { date: string; label: "Published" | "Updated" } | null;
}

export const DesktopView = ({
  content,
  activeCard,
  sectionsWrapperRef,
  desktopRef,
  contentClassName,
  useSemanticHeadings = true,
  authorInfo,
  dateInfo,
}: DesktopViewProps) => {
  useEffect(() => {
    const container = desktopRef.current;
    if (!container) return;
    const ensureSmooth = () => {
      if (container.style.overflowY === "auto") {
        container.style.scrollBehavior = "smooth";
      }
    };
    const observer = new MutationObserver(ensureSmooth);
    observer.observe(container, { attributes: true, attributeFilter: ["style"] });
    ensureSmooth();
    return () => observer.disconnect();
  }, [desktopRef]);


  return (
    <div
      ref={desktopRef}
      className="hidden lg:flex relative w-full gap-6 lg:gap-8 px-4 sm:px-8 md:px-14 flex-row lg:h-[calc(100vh-4rem)] lg:no-scrollbar"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        paddingRight: "12px",
        marginRight: "-12px",
        overflowY: "auto",
        scrollBehavior: "smooth",
      }}
    >
      <div className="w-full lg:w-[60%]">
        <div ref={sectionsWrapperRef} className="space-y-8 md:pb-0">
          {content.map((item, i) => (
            <div key={`${item.title}-${i}`}>
              {item.title && (
                <motion.div>
                  {(() => {
                    const tagName = SECTION_TITLE_TAGS[Math.min(i, SECTION_TITLE_TAGS.length - 1)];
                    const Tag = tagName as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
                    return (
                      <Tag
                        className={SECTION_TITLE_CLASS}
                        aria-hidden={!useSemanticHeadings || undefined}
                      >
                        {item.title}
                      </Tag>
                    );
                  })()}
                </motion.div>
              )}
              {/* Author Section - Show after first section title */}
              {i === 0 && authorInfo?.name && (
                <div className="mb-6 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 bg-gray-800">
                      <Image
                        src={authorInfo.image || "/author/Rahul author.webp"}
                        alt={authorInfo.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-white text-sm md:text-base">Author :</span>
                        <Link
                          href={`/blog/author/${getAuthorSlug(authorInfo.name)}`}
                          className="text-[#6FAF4E] font-medium text-sm md:text-base hover:underline transition-all cursor-pointer"
                        >
                          {authorInfo.name}
                        </Link>
                        <span className="text-white text-sm md:text-base">|</span>
                        <span className="text-white text-sm md:text-base">
                          {authorInfo.role}
                        </span>
                      </div>
                      {dateInfo && (
                        <span className="text-white text-xs md:text-sm mt-1">
                          {dateInfo.label} {dateInfo.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <motion.div>
                <div
                  className="mt-6 text-white text-lg leading-relaxed space-y-4
                    [&>p]:mb-4
                    [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2
                    [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:space-y-2
                    [&>li]:ml-2"
                  dangerouslySetInnerHTML={{
                    __html: useSemanticHeadings ? item.description : stripHeadingTags(item.description),
                  }}
                />
                {item.table != null && (
                  <div className="mt-8">{item.table}</div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:flex sticky w-[40%] h-[50vh] lg:h-[50vh] items-center justify-center overflow-hidden rounded-xl",
          contentClassName
        )}
        style={{
          top: "30%",
          transform: "translateY(-50%)",
          alignSelf: "flex-start",
        }}
      >
        {content[activeCard]?.image}
      </div>
    </div>
  );
};