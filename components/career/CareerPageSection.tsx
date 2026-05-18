import { cn } from "@/lib/utils";

/** Same horizontal rhythm as how-we-work, what-we-do, about. */
export const careerPageMargins =
  "mx-4 sm:mx-6 lg:mx-12 xl:mx-[clamp(0.5rem,0.5rem+8vw,10rem)] 2xl:mx-[clamp(1rem,1rem+12vw,22rem)]";

export const careerPagePadding = "w-full px-4 sm:px-6 lg:px-10";

type CareerPageSectionProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "div";
};

export function CareerPageSection({
  children,
  className,
  innerClassName,
  as: Tag = "section",
}: CareerPageSectionProps) {
  return (
    <Tag className={cn(careerPageMargins, className)}>
      <div className={cn(careerPagePadding, innerClassName)}>{children}</div>
    </Tag>
  );
}
