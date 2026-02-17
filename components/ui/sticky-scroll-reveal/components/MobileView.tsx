import { useMemo } from "react";
import { motion } from "motion/react";
import { StickyScrollContent } from "../types";
import { NAV_HEIGHT, OPACITY_TRANSITION } from "../constants";
import { getImageHeight, calculateContentPadding } from "../utils";
import { useSectionVisibility } from "../hooks";

interface MobileViewProps {
  content: StickyScrollContent[];
  activeCard: number;
  imageHeight: number;
  screenWidth: number;
  imageRef: React.RefObject<HTMLDivElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export const MobileView = ({
  content,
  activeCard,
  imageHeight,
  screenWidth,
  imageRef,
  contentRef,
}: MobileViewProps) => {
  const isSectionVisible = useSectionVisibility(contentRef);
  const imgH = useMemo(() => getImageHeight(screenWidth), [screenWidth]);
  const padding = useMemo(
    () => calculateContentPadding(imageHeight, screenWidth),
    [imageHeight, screenWidth]
  );

  return (
    <div className="lg:hidden">
      <style>{`.mob-img-box{width:100%!important;height:100%!important;display:flex!important;align-items:center!important;justify-content:center!important;position:relative!important}.mob-img-box>*,.mob-img-box img,.mob-img-box span{width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;max-width:100%!important;max-height:100%!important;position:static!important}.mob-desc h2,.mob-desc h3,.mob-desc h4,.mob-desc p,.mob-desc li,.mob-desc span,.mob-desc div{color:#ffffff!important}`}</style>
      <div
        ref={imageRef}
        style={{
          position: isSectionVisible ? "fixed" : "absolute",
          top: isSectionVisible ? NAV_HEIGHT : "auto",
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
          <div key={`${item.title}-${i}`} style={{ padding: "1.5rem 1rem" }}>
            <motion.div>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  lineHeight: "1.9rem",
                  marginTop: 0,
                  marginBottom: "1rem",
                }}
              >
                {item.title}
              </h2>
              <div
                className="mob-desc"
                style={{ fontSize: "1rem", lineHeight: "1.75rem" }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {item.table != null && (
                <div style={{ marginTop: "1.5rem" }}>{item.table}</div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
