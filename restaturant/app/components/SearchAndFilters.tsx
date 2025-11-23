"use client";
import React from "react";


export default function SearchAndFilters({
query,
setQuery,
}: {
query: string;
setQuery: (v: string) => void;
}) {
return (
<div className="px-4 pt-3 pb-2 bg-[#faf9f7]">
<div className="flex items-center gap-3">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
🔍
</span>
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search item"
className="w-full pl-9 pr-3 py-2 rounded-lg border text-sm bg-white"
/>
</div>
<button className="px-3 py-2 rounded-lg border bg-white text-sm flex items-center gap-1">
Filters ▾
</button>
</div>
</div>
);
}