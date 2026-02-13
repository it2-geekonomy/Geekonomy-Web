import Image from "next/image";
import Link from "next/link";

interface NavbarLogoProps {
  pathname: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onCloseMenu: () => void;
}

export function NavbarLogo({ pathname, onNavigate, onCloseMenu }: NavbarLogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 sm:gap-3 z-50 shrink-0"
      onClick={(e) => {
        onCloseMenu();
        if (pathname !== "/") {
          onNavigate(e, "/");
        }
      }}
    >
      <Image
        src="/Geekonomy Logo.webp"
        alt="GEEKONOMY Logo"
        width={350}
        height={350}
        className="object-contain w-[clamp(190px,10vw,150px)] sm:w-[clamp(250px,10vw,150px)] lg:w-70 xl:w-full"
        priority
      />
    </Link>
  );
}
