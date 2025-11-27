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
  const filterLabel =
    selectedFilter === "all"
      ? "Filters ▾"
      : selectedFilter === "veg"
      ? "Veg ▾"
      : selectedFilter === "nonveg"
      ? "Non-Veg ▾"
      : "Egg ▾";

  return (
    <div className="px-4 pt-3 pb-2 bg-white">
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
            className="w-full pl-9 pr-3 py-2 rounded-lg outline-none bg-white text-sm"
          />
        </div>

        {/* Filter Toggle Button (cycles through all → veg → nonveg → egg) */}
        <button
          className="px-3 py-2 rounded-lg bg-white text-sm border border-gray-200"
          onClick={() => {
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
