import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Typography } from "@/components/ui/Typography";

interface DesktopNavProps {
  pathname: string;
  isMounted: boolean;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function DesktopNav({ pathname, isMounted, onNavigate }: DesktopNavProps) {
  return (
    <ul className="hidden lg:flex items-center gap-6 lg:gap-3 xl:gap-9 2xl:gap-20">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = isMounted && (pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href)));
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={(e) => onNavigate(e, item.href)}
              className={`font-normal uppercase transition-colors duration-200 ${
                isActive
                  ? "text-[#6FAF4E]"
                  : "text-white hover:text-[#6FAF4E]"
              }`}
            >
              <Typography as="span" variant="base" className="font-normal">
                {item.label}
              </Typography>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
