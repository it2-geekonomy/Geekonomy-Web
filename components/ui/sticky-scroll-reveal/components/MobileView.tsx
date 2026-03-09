import { useMemo } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { StickyScrollContent, AuthorInfo } from "../types";
import { NAV_HEIGHT, OPACITY_TRANSITION } from "../constants";
import { getImageHeight, calculateContentPadding, stripHeadingTags } from "../utils";
import { useSectionVisibility } from "../hooks";
import { getAuthorSlug, AuthorName } from "@/lib/blog/authorMapping";

const SECTION_TITLE_STYLE: React.CSSProperties = {
  color: "#fff",
  fontSize: "1.375rem",
  fontWeight: 700,
  lineHeight: "1.9rem",
  marginTop: 0,
  marginBottom: "1rem",
};

interface MobileViewProps {
  content: StickyScrollContent[];
  activeCard: number;
  imageHeight: number;
  screenWidth: number;
  imageRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  useSemanticHeadings?: boolean;
  authorInfo?: AuthorInfo;
  dateInfo?: { date: string; label: "Published" | "Updated" } | null;
}

export const MobileView = ({
  content,
  activeCard,
  imageHeight,
  screenWidth,
  imageRef,
  contentRef,
  useSemanticHeadings = true,
  authorInfo,
  dateInfo,
}: MobileViewProps) => {
  const isSectionVisible = useSectionVisibility(contentRef);
  const imgH = useMemo(() => getImageHeight(screenWidth), [screenWidth]);
  const padding = useMemo(
    () => calculateContentPadding(imageHeight, screenWidth),
    [imageHeight, screenWidth]
  );

  return (
    <div className="lg:hidden">
      <style>{`
.mob-img-box{width:100%!important;height:100%!important;display:flex!important;align-items:center!important;justify-content:center!important;position:relative!important}
.mob-img-box>*,.mob-img-box img,.mob-img-box span{width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;max-width:100%!important;max-height:100%!important;position:static!important}
.mob-desc h2,.mob-desc h3,.mob-desc h4,.mob-desc p,.mob-desc li,.mob-desc span,.mob-desc div{color:#ffffff!important}
.mob-desc{max-width:100%!important;overflow-x:hidden!important}
.mob-desc .table-container,.mob-table-wrap{overflow-x:auto!important;-webkit-overflow-scrolling:touch!important;max-width:100%!important}
.mob-desc table,.mob-table-wrap table{width:100%!important;table-layout:fixed!important;border-collapse:collapse!important}
.mob-desc table th,.mob-desc table td,.mob-table-wrap table th,.mob-table-wrap table td{padding:6px 6px!important;font-size:0.68rem!important;line-height:1.3!important;word-break:break-word!important;overflow-wrap:break-word!important;hyphens:auto!important;white-space:normal!important}
.mob-desc table th,.mob-table-wrap table th{font-size:0.7rem!important;font-weight:600!important}
.mob-desc h3[class*="6FAF4E"],.mob-desc h3.text-\\[\\#6FAF4E\\]{color:#6FAF4E!important}
      `}</style>
      <div
        ref={imageRef}
        style={{
          position: isSectionVisible ? "fixed" : "absolute",
          top: isSectionVisible ? `${NAV_HEIGHT}px` : "auto",
          left: 0,
          right: 0,
          zIndex: isSectionVisible ? 30 : -1,
          height: imgH,
          overflow: "hidden",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "0.5rem",
          opacity: isSectionVisible ? 1 : 0,
          pointerEvents: isSectionVisible ? "auto" : "none",
          transition: OPACITY_TRANSITION,
        }}
      >
        <motion.div
          key={activeCard}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="mob-img-box" style={{ width: "100%", height: "100%" }}>
            {content[activeCard]?.image}
          </div>
        </motion.div>
      </div>
      <div
        ref={contentRef}
        style={{
          backgroundColor: "#000",
          paddingTop: isSectionVisible ? padding : "0px",
        }}
      >
        {content.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            style={{
              padding: "1.5rem 1rem",
              overflowX: "hidden",
              maxWidth: "100vw",
            }}
          >
            <motion.div>
              {item.title && (() => {
                const tagName = i === 0 ? "h1" : "h2";
                const Tag = tagName as "h1" | "h2";
                return (
                  <Tag
                    style={SECTION_TITLE_STYLE}
                    aria-hidden={!useSemanticHeadings || undefined}
                  >
                    {item.title}
                  </Tag>
                );
              })()}
              {/* Author Section - Show after first section title */}
              {i === 0 && authorInfo && authorInfo.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: "1.5rem", marginBottom: "1.5rem", position: "relative", zIndex: 10 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        position: "relative",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        backgroundColor: "#1f1f1f",
                      }}
                    >
                      <Image
                        src={authorInfo.image || "/author/Rahul author.webp"}
                        alt={authorInfo.name}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                                <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.875rem" }}>Author:</span>
                                <Link
                                  href={`/blog/author/${getAuthorSlug(authorInfo.name as AuthorName)}`}
                                  style={{ 
                                    color: "#6FAF4E", 
                                    fontWeight: 500, 
                                    fontSize: "0.875rem",
                                    textDecoration: "none"
                                  }}
                                  className="hover:underline transition-all"
                                >
                                  {authorInfo.name}
                                </Link>
                                <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.875rem" }}>|</span>
                                <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.875rem" }}>
                                  {authorInfo.role}
                                </span>
                              </div>
                      {dateInfo && (
                        <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                          {dateInfo.label} {dateInfo.date}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
              <div
                className="mob-desc"
                style={{ fontSize: "1rem", lineHeight: "1.75rem" }}
                dangerouslySetInnerHTML={{
                  __html: useSemanticHeadings ? item.description : stripHeadingTags(item.description),
                }}
              />
              {item.table != null && (
                <div className="mob-table-wrap" style={{ marginTop: "1.5rem" }}>
                  {item.table}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
