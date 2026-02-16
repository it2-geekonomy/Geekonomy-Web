"use client";

export default function PageContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div 
      style={{ paddingTop: "var(--navbar-height, 72px)" }} 
      className="relative z-10"
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
