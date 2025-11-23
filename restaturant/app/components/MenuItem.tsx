"use client";
import React from "react";
import { Item } from "../../types";


export default function MenuItem({ item }: { item: Item }) {
return (
<div className={`px-4 py-4 flex flex-col gap-2`}>
<div className="flex items-start gap-3">
<div className="mt-1">
<span
className={`inline-flex w-4 h-4 rounded-[3px] border-2 ${
item.veg ? "border-green-700" : "border-yellow-400"
}`}
>
<span
className={`m-[2px] flex-1 rounded-[2px] ${
item.veg ? "bg-green-700" : "bg-yellow-400"
}`}
/>
</span>
</div>


<div className="flex-1 min-w-0">
<div className="flex justify-between gap-3">
<div className="min-w-0">
<p className="font-semibold text-base truncate">{item.title}</p>
<p className="mt-1 text-sm font-medium text-gray-800">₹ {item.price.toFixed(2)}</p>
</div>


{item.image && (
<div className="flex flex-col items-end gap-2 flex-shrink-0">
<div className="w-24 h-16 rounded-md overflow-hidden bg-gray-100">
<img src={item.image} alt={item.title} className="w-full h-full object-cover" />
</div>
<button className="px-4 py-1 rounded-lg border border-orange-500 text-orange-600 text-xs font-medium">+ Add</button>
<span className="text-[11px] text-gray-400">Customisable</span>
</div>
)}
</div>


{item.desc && (
<p className="mt-2 text-xs text-gray-500 leading-snug">
{item.desc} <span className="text-orange-500">Read More</span>
</p>
)}
</div>
</div>
</div>
);
}