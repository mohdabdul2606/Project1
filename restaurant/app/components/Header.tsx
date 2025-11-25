"use client";
import React from "react";

export default function Header({ count = 0 }: { count?: number }) {
  return (
    <header className="bg-white px-4 py-3  sticky top-0 z-50">
      <div className="flex items-center justify-between">

        {/* LEFT — LOGO + TITLE */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.avif"
            alt="Capella Bakery"
            className="w-10 h-10 rounded-md object-cover"
          />

          <div className="flex flex-col">
            <h1 className="text-base font-semibold leading-none truncate max-w-[140px]">
              Capella Bakery
            </h1>
            <p className="text-xs text-gray-500 mt-[2px]">Bakery & Cafe</p>
          </div>
        </div>

        {/* RIGHT — COUNT + BUTTON */}
        <div className="flex items-center gap-2">
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
