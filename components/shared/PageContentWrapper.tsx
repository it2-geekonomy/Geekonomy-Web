"use client";

export default function PageContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: "var(--navbar-height, 0px)" }} className="relative z-10">
      {children}
    </div>
  );
}
