import { useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { StickyScrollContent } from "../types";
import { stripHeadingTags } from "../utils";

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
}

export const DesktopView = ({
  content,
  activeCard,
  sectionsWrapperRef,
  desktopRef,
  contentClassName,
  useSemanticHeadings = true,
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
              <motion.div>
                <div
                  className="mt-6 text-[#FFFFFF] text-lg leading-relaxed space-y-4
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