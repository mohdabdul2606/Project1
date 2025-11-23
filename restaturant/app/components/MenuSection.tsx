"use client";
import React from "react";
import { Section } from "../../types";
import MenuItem from "./MenuItem";


export default function MenuSection({
section,
collapsed,
toggleCollapsed,
}: {
section: Section;
collapsed: boolean;
toggleCollapsed: () => void;
}) {
return (
<section className="bg-white mt-2">
<div className="px-4 pt-4 flex items-center justify-between border-b border-gray-100">
<h2 className="font-semibold text-base">
{section.title} <span className="text-gray-500 text-sm">({section.items.length})</span>
</h2>
<button onClick={toggleCollapsed} className="text-gray-500 text-lg">
{collapsed ? "▾" : "▴"}
</button>
</div>


{!collapsed && (
<div className="pt-1">
{section.items.map((it, idx) => (
<div
key={it.id}
className={`${idx !== section.items.length - 1 ? "border-b border-dotted border-gray-200" : ""}`}>
<MenuItem item={it} />
</div>
))}
</div>
)}
</section>
);
}