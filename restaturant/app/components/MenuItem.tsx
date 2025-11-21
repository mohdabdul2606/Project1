"use client";

import { Item } from "../../types";

export default function MenuItem({ it }: { it: Item }) {
  return (
    <div className="px-4 pb-4 border-b last:border-b-0">
      <div className="flex items-start gap-4">
        <span
          className={`inline-block w-4 h-4 rounded-sm border ${
            it.veg ? "bg-green-500" : "bg-yellow-400"
          }`}
        />

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-lg font-semibold">{it.title}</h4>
              <div className="text-gray-700 font-medium mt-1">
                ₹ {it.price.toFixed(2)}
              </div>
            </div>

            {it.image && (
              <img
                src={it.image}
                className="w-20 h-14 rounded object-cover"
                alt={it.title}
              />
            )}
          </div>

          {it.desc && (
            <p className="text-sm text-gray-500 mt-2">
              {it.desc}{" "}
              <span className="text-orange-500 cursor-pointer">Read More</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
