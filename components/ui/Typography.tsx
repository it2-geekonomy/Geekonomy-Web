import { type ReactNode, type ElementType } from "react";
import { typography } from "@/lib/typography";

type TypographyVariant = keyof typeof typography.fontSize;

type TypographyProps = {
  as?: ElementType;
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
  letterSpacing?: string;
  fontWeight?: string | number;
};

export function Typography({
  as: Component = "p",
  variant = "base",
  children,
  className,
  letterSpacing: customLetterSpacing,
  fontWeight: customFontWeight,
}: TypographyProps) {
  const fontSize = typography.fontSize[variant][0] as string;
  const fontConfig = typography.fontSize[variant][1] as {
    lineHeight: string;
    letterSpacing: string;
  };

  const style = {
    fontSize: fontSize,
    lineHeight: fontConfig.lineHeight,
    letterSpacing: customLetterSpacing || fontConfig.letterSpacing,
    fontFamily: typography.fontFamily.sans.join(", "),
    ...(customFontWeight && { fontWeight: customFontWeight }),
  };

  return (
    <Component 
      style={style} 
      className={className}
    >
      {children}
    </Component>
  );
}
