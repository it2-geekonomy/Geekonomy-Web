
import { LANDING_PAGE_MAPS, LandingPageMapKey } from "@/lib/constants/LandingpageMaps";

interface LandingPageMapProps {
  location: LandingPageMapKey;
  title?: string;
  className?: string;
}

export function LandingPageMap({
  location,
  title = "Service area map",
  className = "",
}: LandingPageMapProps) {
  return (
    <section id="map" className="bg-black px-4 sm:px-6 lg:px-10 py-9 lg:py-10 lg:pb-15 font-sans">
      <div className={`w-full max-w-5xl mx-auto h-75 rounded-[1rem] overflow-hidden ${className}`}>
        <iframe
          src={LANDING_PAGE_MAPS[location]}
          title={title}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}