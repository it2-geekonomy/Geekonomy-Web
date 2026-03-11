interface FooterDividerProps {
  orientation?: "horizontal" | "vertical";
  position?: string;
  showAccent?: boolean;
  className?: string;
}

export function FooterDivider({
  orientation = "horizontal",
  position = "top-0",
  showAccent = true,
  className = "",
}: FooterDividerProps) {
  if (orientation === "horizontal") {
    return (
      <>
        <div className={`absolute ${position} left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50 ${className}`}></div>
        {showAccent && (
          <div className={`absolute ${position} left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#69AE44] to-transparent ${className}`}></div>
        )}
      </>
    );
  }

  return (
    <>
      <div className={`absolute ${position} top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-60 ${className}`}></div>
      <div className={`absolute ${position} top-1/2 -translate-y-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-[#69AE44] to-transparent ${className}`}></div>
    </>
  );
}
