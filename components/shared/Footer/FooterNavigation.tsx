import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { FOOTER_NAV_ITEMS } from "@/lib/constants/navigation";

interface FooterNavigationProps {
  layout?: "grid" | "list";
  textAlign?: string;
  className?: string;
  navClassName?: string;
}

export function FooterNavigation({
  layout = "grid",
  textAlign = "text-left",
  className = "",
  navClassName = "",
}: FooterNavigationProps) {
  const listClasses = layout === "grid" 
    ? "grid grid-cols-2 gap-x-8 gap-y-2 px-4" 
    : "flex flex-col gap-1.5 items-center";

  return (
    <nav className={`flex ${layout === "grid" ? "justify-center" : "h-full items-center"} ${className}`}>
      <ul className={`${listClasses} ${navClassName}`}>
        {FOOTER_NAV_ITEMS.map((item) => (
          <li key={item.href} className={layout === "grid" ? "" : "w-full"}>
            <Link href={item.href} className="uppercase">
              <Typography
                variant="body-xl"
                className={`font-light text-white hover:text-[#69AE44] transition-colors duration-200 ${textAlign}`}
              >
                {item.label}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
