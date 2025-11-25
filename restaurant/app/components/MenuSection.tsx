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
    <section className="bg-white mt-3 rounded-md">
      
      {/* TITLE BAR */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <h2 className="font-semibold text-base leading-tight">
          {section.title}
          <span className="text-gray-500 text-sm ml-1">
            ({section.items.length})
          </span>
        </h2>

        <button
          onClick={toggleCollapsed}
          className="text-gray-500 text-xl leading-none active:scale-90 transition"
        >
          {collapsed ? "▾" : "▴"}
        </button>
      </div>

      {/* COLLAPSIBLE ITEMS */}
      {!collapsed && (
        <div className="divide-y divide-dotted divide-gray-200">
          {section.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
