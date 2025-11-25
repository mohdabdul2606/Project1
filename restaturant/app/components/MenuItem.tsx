"use client";

import React, { useState } from "react";
import { Item } from "../../types";

export default function MenuItem({ item }: { item: Item }) {
  const [expanded, setExpanded] = useState(false);

  const shortDesc =
    item.desc && item.desc.length > 80
      ? item.desc.slice(0, 80) + "..."
      : item.desc;

  return (
    <div className="px-4 py-4 flex flex-col gap-3 border-b border-gray-200 bg-white">
      <div className="flex items-start gap-3">
        {/* Veg / Non-Veg Icon */}
        <div className="mt-1">
          <span
            className={`inline-flex w-4 h-4 rounded-[3px] border-2 ${
              item.veg ? "border-green-700" : "border-red-600"
            }`}
          >
            <span
              className={`m-[2px] flex-1 rounded-[2px] ${
                item.veg ? "bg-green-700" : "bg-red-600"
              }`}
            />
          </span>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-3">
            <div className="min-w-0">
              <p className="font-semibold text-sm leading-tight">{item.title}</p>

              <p className="mt-1 text-sm font-semibold text-gray-800">
                ₹ {item.price.toFixed(2)}
              </p>
            </div>

            {/* Image + Add Button */}
            {item.image && (
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <div className="w-24 h-20 rounded-md overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button className="px-4 py-1 rounded-lg border border-orange-500 text-orange-600 text-xs font-medium active:scale-95 transition">
                  + Add
                </button>

                <span className="text-[11px] text-gray-400">Customisable</span>
              </div>
            )}
          </div>

          {/* Description with Read More toggle */}
          {item.desc && (
            <p className="mt-2 text-xs text-gray-600 leading-snug">
              {expanded ? item.desc : shortDesc}
              {item.desc.length > 80 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-orange-500 ml-1 font-medium"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
