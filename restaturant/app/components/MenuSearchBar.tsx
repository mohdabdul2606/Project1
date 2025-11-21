"use client";

type Props = {
  query: string;
  setQuery: (q: string) => void;
};

export default function MenuSearchBar({ query, setQuery }: Props) {
  return (
    <div className="p-4 bg-[#faf9f7] sticky top-[88px] z-20">
      <div className="flex gap-3 items-center">
        <div className="flex-1 relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search item"
            className="w-full pl-10 pr-3 py-3 rounded-lg border bg-white text-sm"
          />
        </div>
        <button className="px-3 py-3 rounded-lg border bg-white text-sm">
          Filters ▾
        </button>
      </div>
    </div>
  );
}
