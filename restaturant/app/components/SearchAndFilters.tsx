"use client";

type Props = {
  query: string;
  setQuery: (v: string) => void;
  selectedFilter: "all" | "veg" | "nonveg" | "egg";
  setSelectedFilter: (v: "all" | "veg" | "nonveg" | "egg") => void;
};

export default function SearchAndFilters({
  query,
  setQuery,
  selectedFilter,
  setSelectedFilter,
}: Props) {
  
  // **Convert filter value → readable text**
  const filterLabel = {
    all: "Filters ▾",
    veg: "Veg ▾",
    nonveg: "Non-Veg ▾",
    egg: "Egg ▾",
  }[selectedFilter];

  return (
    <div className="px-4 pt-3 pb-2 bg-white ">
      <div className="flex items-center gap-3">
        
        {/* Search Input */}
        <div className="relative flex-1 border border-gray-200 rounded-lg">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search item"
            className="w-full pl-9 pr-3 py-2 rounded-lg border-none outline-none focus:ring-0 bg-white text-sm"
          />
        </div>

        {/* Filter Button (Dynamic Label) */}
        <button
          className="px-3 py-2 rounded-lg bg-white text-sm border border-gray-200 rounded-lg"
          onClick={() => {
            // simple cycle through filters
            const next =
              selectedFilter === "all"
                ? "veg"
                : selectedFilter === "veg"
                ? "nonveg"
                : selectedFilter === "nonveg"
                ? "egg"
                : "all";

            setSelectedFilter(next);
          }}
        >
          {filterLabel}
        </button>
      </div>
    </div>
  );
}
