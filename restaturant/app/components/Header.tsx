"use client";
import React from "react";


export default function Header({ count = 0 }: { count?: number }) {
return (
<header className="bg-white px-4 py-3 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img
src="/logo.avif"
alt="Capella Bakery"
className="w-10 h-10 rounded-md object-cover"
/>
<div>
<h1 className="text-sm font-semibold">Capella Bakery</h1>
</div>
</div>


<div className="flex items-center gap-3">
<div className="text-xs text-black bg-gray-200 px-3 py-1 rounded-full">
{count}
</div>
<button className="text-xs text-black bg-gray-200 px-3 py-1 rounded-full">
Group Order
</button>
</div>
</div>
</header>
);
}