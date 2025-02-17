import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const destinations = [
  { name: "Bali", icon: "🏢", trending: true },
  { name: "Rajasthan", icon: "🏰" },
  { name: "Vietnam", icon: "🚶" },
  { name: "Ladakh", icon: "🏔️", trending: true },
  { name: "South Africa", icon: "🏛️" },
  { name: "Spiti Valley", icon: "🧘" },
  { name: "Turkey", icon: "🕌" },
  { name: "USA", icon: "🗽" },
  { name: "Explore", icon: "🔥" },
  { name: "Dubai", icon: "🌇" },
  { name: "Singapore", icon: "🚶" },
  { name: "North East India", icon: "⛩️" },
  { name: "Thailand", icon: "🏯" },
  { name: "Kashmir", icon: "🎿" },
  { name: "Switzerland", icon: "🏛️" },
  { name: "Bhutan", icon: "🏯" },
  { name: "Japan", icon: "⛩️" },
  { name: "Abu Dhabi", icon: "🚶" },
];

export default function Banner() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[100vw] px-4 py-6">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 shadow-md backdrop-blur-sm hover:bg-white md:left-2"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 shadow-md backdrop-blur-sm hover:bg-white md:right-2"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {destinations.map((destination, index) => (
          <Link
            to={`/destination/${destination.name.toLowerCase().replace(/\s+/g, "-")}`} // Create dynamic URL paths
            key={index}
            className="flex min-w-[100px] flex-col items-center gap-2 rounded-lg p-3 transition-all hover:bg-gray-50 sm:min-w-[120px] md:min-w-[140px]"
          >
            <div className="relative">
              <span className="text-3xl sm:text-4xl">{destination.icon}</span>
              {destination.trending && (
                <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-medium text-white">
                  Trending
                </span>
              )}
            </div>
            <span className="text-center text-sm font-medium text-gray-700 sm:text-base">
              {destination.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
