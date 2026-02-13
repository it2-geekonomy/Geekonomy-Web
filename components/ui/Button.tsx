import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-block text-white border-2 border-transparent px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200";

  const variantStyles = {
    primary:
      "bg-[#6FAF4E]/80 hover:bg-transparent hover:border-[#6FAF4E] hover:text-[#6FAF4E] hover:scale-105",
    secondary:
      "bg-transparent border-[#6FAF4E] text-[#6FAF4E] hover:bg-[#6FAF4E]/80 hover:text-white hover:scale-105",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
