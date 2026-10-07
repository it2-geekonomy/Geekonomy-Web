"use client";

import { LOCATIONS, getLocationUrl, type Region, REGION_TITLES } from "@/lib/constants/Locationlist";
import { useMemo, useState } from "react";
import Typography from "../ui/Typography";
import { MapPin } from "lucide-react";

  const INITIAL_COUNT = 35;
  const LOAD_STEP = 35;

type LocationSectionProps = {
  region: Region;
  HidecurrentSlug?: string;
};

export default function LocationList({ region, HidecurrentSlug }: LocationSectionProps) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const trimmed = query.trim().toLowerCase();
  const isSearching = trimmed.length > 0;

  // exclude the current page, then sort A-Z
  const sortedLocations = useMemo(
    () =>
      LOCATIONS.filter((l) => l.region === region && l.slug !== HidecurrentSlug).sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      ),
    [region, HidecurrentSlug]
  );

  const filtered = useMemo(
    () =>
      isSearching
        ? sortedLocations.filter((l) => l.name.toLowerCase().includes(trimmed))
        : sortedLocations,
    [isSearching, trimmed, sortedLocations]
  );

  const visible = isSearching ? filtered : filtered.slice(0, visibleCount);
  const hasMore = !isSearching && visibleCount < sortedLocations.length;



  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8 pb-9 lg:pb-15">
      <div className="mx-auto max-w-7xl rounded-[1.25rem] bg-neutral-900 border border-neutral-800 px-5 py-8 text-center shadow-lg sm:px-8 sm:py-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white text-nowrap">
              SEO Services With AI, ML, NLP
            </Typography>
        </div>
        <Typography variant="display-2xl" className="text-white mt-1 leading-tight ">
          {/* Explore Our SEO Services Across Florida */}
          {REGION_TITLES[region]}
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 ">
          Find your City from our serviced locations.
        </Typography>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your City..."
          aria-label="Search your city"
          className="mx-auto mt-6 block w-full max-w-sm rounded-[0.5rem] border border-white/30 px-4 py-2.5 text-sm text-white outline-none transition focus:border-white/70"
        />

        {visible.length > 0 ? (
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 text-left sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {visible.map((loc) => (
              <li key={loc.slug}>
                <a
                  href={getLocationUrl(loc.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1 break-words text-sm  sm:text-base"
                >
                  <MapPin size={15} color="#8FCB63" />
                  <Typography variant="body-lg" className="text-[#8FCB63] hover:underline decoration-[#8FCB63]" >{loc.name}</Typography>
                </a>  
              </li>
            ))}
          </ul>
        ) : (
          <Typography variant="body-lg" className="mt-10 text-white/60">
            No cities match &ldquo;{query}&rdquo;.
          </Typography>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + LOAD_STEP)}
            className="mt-12 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-6 py-2.5 text-sm font-medium text-white cursor-pointer"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}