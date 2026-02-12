// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll, motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import { Typography } from "@/components/ui/Typography";

// export const StickyScroll = ({
//   content,
//   contentClassName,
// }: {
//   content: {
//     title: string;
//     description: string;
//     content?: React.ReactNode;
//   }[];
//   contentClassName?: string;
// }) => {
//   const [activeCard, setActiveCard] = useState(0);

//   // 🔥 Two refs: one for page scroll (mobile), one for container (desktop)
//   const pageRef = useRef<HTMLDivElement | null>(null);
//   const desktopRef = useRef<HTMLDivElement | null>(null);

//   // Mobile → page scroll
//   const mobileScroll = useScroll({
//     target: pageRef,
//     offset: ["start start", "end end"],
//   });

//   // Desktop → container scroll
//   const desktopScroll = useScroll({
//     container: desktopRef,
//     offset: ["start start", "end end"],
//   });

//   const cardLength = content.length;

//   const updateActive = (latest: number) => {
//     const points = content.map((_, i) => i / (cardLength - 1));

//     let closest = 0;
//     let min = Infinity;

//     points.forEach((p, i) => {
//       const d = Math.abs(latest - p);
//       if (d < min) {
//         min = d;
//         closest = i;
//       }
//     });

//     setActiveCard(closest);
//   };

//   useMotionValueEvent(mobileScroll.scrollYProgress, "change", (v) => {
//     if (window.innerWidth < 1024) updateActive(v);
//   });

//   useMotionValueEvent(desktopScroll.scrollYProgress, "change", (v) => {
//     if (window.innerWidth >= 1024) updateActive(v);
//   });

//   //comment lines from 64 to 74 and also comment 95 and 139 to remove the gradient background in the place of images
//   // const gradients = [
//   //   "linear-gradient(to bottom right, #06b6d4, #10b981)",
//   //   "linear-gradient(to bottom right, #ec4899, #6366f1)",
//   //   "linear-gradient(to bottom right, #f97316, #eab308)",
//   // ];

//   // const [bg, setBg] = useState(gradients[0]);

//   // useEffect(() => {
//   //   setBg(gradients[activeCard % gradients.length]);
//   // }, [activeCard]);

//   return (
//     <section ref={pageRef} className="relative w-full">
//       <div
//         ref={desktopRef}
//         className="
//           relative flex w-full gap-8
//           px-4 sm:px-8 md:px-14
//           flex-col lg:flex-row   
//           lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:no-scrollbar
//         "
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//           paddingRight: "12px",
//           marginRight: "-12px",
//         }}
//       >
//         {/* ✅ STICKY IMAGE (mobile) */}
//         <div
//           // style={{ background: bg }}
//           className={cn(
//             `
//             sticky top-2 z-30 sm:-ml-2 md:-ml-6 lg:ml-0
//             flex lg:hidden        
//             w-full h-[40vh]
//             items-center justify-center
//             overflow-hidden
//             `,
//             contentClassName
//           )}
//         >
//           {content[activeCard]?.content}
//         </div>

//         {/* ✅ CONTENT (on desktop) */}
//         <div className="w-full lg:w-[60%]">
//           <div className="space-y-12 py-4 xl:py-20 md:pb-0">
//             {content.map((item, index) => (
//               <div key={item.title + index}>
//                 <motion.div animate={{ opacity: activeCard === index ? 1 : 0.3 }}>
//                   <Typography
//                     as="h2"
//                     variant="2xl"
//                     className="text-[#FFFFFF] font-bold"
//                   >
//                     {item.title}
//                   </Typography>

//                   <Typography
//                     as="p"
//                     variant="lg"
//                     className="mt-6 text-[#FFFFFF]"
//                   >
//                     {item.description}
//                   </Typography>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ✅ DESKTOP STICKY IMAGE */}
//         <div
//           // style={{ background: bg }}
//           className={cn(
//             `
//             hidden lg:flex       
//             sticky lg:top-25 xl:top-50 px-8
//             w-[40%] h-[60vh]
//             lg:h-[50vh]
//             items-center justify-center
//             overflow-hidden
//             `,
//             contentClassName
//           )}
//         >
//           {content[activeCard]?.content}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/Typography";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image?: React.ReactNode;   // ✅ Sticky image
    table?: React.ReactNode;   // ✅ Table below content
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  // 🔥 Two refs: one for page scroll (mobile), one for container (desktop)
  const pageRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);

  // Mobile → page scroll
  const mobileScroll = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  // Desktop → container scroll
  const desktopScroll = useScroll({
    container: desktopRef,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  const updateActive = (latest: number) => {
    const points = content.map((_, i) =>
      cardLength === 1 ? 0 : i / (cardLength - 1)
    );

    let closest = 0;
    let min = Infinity;

    points.forEach((p, i) => {
      const d = Math.abs(latest - p);
      if (d < min) {
        min = d;
        closest = i;
      }
    });

    setActiveCard(closest);
  };

  useMotionValueEvent(mobileScroll.scrollYProgress, "change", (v) => {
    if (window.innerWidth < 1024) updateActive(v);
  });

  useMotionValueEvent(desktopScroll.scrollYProgress, "change", (v) => {
    if (window.innerWidth >= 1024) updateActive(v);
  });

  return (
    <section ref={pageRef} className="relative w-full">
      <div
        ref={desktopRef}
        className="
          relative flex w-full gap-8
          px-4 sm:px-8 md:px-14
          flex-col lg:flex-row   
          lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:no-scrollbar
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingRight: "12px",
          marginRight: "-12px",
        }}
      >
        {/* ✅ STICKY IMAGE (mobile) */}
        <div
          className={cn(
            `
            sticky top-2 z-30
            flex lg:hidden        
            w-full h-[40vh]
            items-center justify-center
            overflow-hidden rounded-xl
            `,
            contentClassName
          )}
        >
          {content[activeCard]?.image}
        </div>

        {/* ✅ CONTENT */}
        <div className="w-full lg:w-[60%]">
          <div className="space-y-12 py-4 xl:py-20 md:pb-0">
            {content.map((item, index) => (
              <div key={item.title + index}>
                <motion.div
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                >
                  <Typography
                    as="h2"
                    variant="2xl"
                    className="text-[#FFFFFF] font-bold"
                  >
                    {item.title}
                  </Typography>

                  <div
                    className="mt-6 text-[#FFFFFF] text-lg leading-relaxed space-y-4 [&>p]:mb-4
    [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2
    [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:space-y-2
    [&>li]:ml-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  {/* ✅ TABLE BELOW CONTENT */}
                  {item.table && (
                    <div className="mt-8">
                      {item.table}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ DESKTOP STICKY IMAGE */}
        <div
          className={cn(
            `
            hidden lg:flex       
            sticky top-24
            w-[40%] h-[60vh]
            lg:h-[50vh]
            items-center justify-center
            overflow-hidden rounded-xl
            `,
            contentClassName
          )}
        >
          {content[activeCard]?.image}
        </div>
      </div>
    </section>
  );
};
