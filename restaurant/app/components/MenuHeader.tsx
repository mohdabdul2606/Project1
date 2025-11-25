"use client";
import { useEffect, useState } from "react";

export default function MenuHeader() {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const OPEN_TIME = "08:00";
    const OPEN_DATE = new Date("2025-11-22");

    const now = new Date();
    const openAt = new Date(OPEN_DATE);

    const [h, m] = OPEN_TIME.split(":").map(Number);
    openAt.setHours(h, m, 0, 0);

    setIsClosed(now < openAt);
  }, []);

  return (
    <header className="px-4 py-3 bg-white shadow-sm sticky top-0 z-40">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.avif"   // 🔥 Correct Next.js public folder image
            className="w-10 h-10 rounded-md object-cover"
            alt="Restaurant Logo"
          />

          <div>
            <div className="text-sm font-semibold">Capella Bakery</div>
            <div className="text-xs text-gray-500">7 Items</div>
          </div>
        </div>

        {/* Right: Group Order */}
        <button className="text-xs text-black bg-gray-200 px-3 py-1 rounded-full">
          Group Order
        </button>
      </div>

      {/* Closed Message */}
      {isClosed && (
        <div className="mt-3">
          <div className="text-sm text-red-600 border border-red-200 rounded-md px-3 py-2 bg-red-50">
            Sorry! Restaurant is closed now. Please try after{" "}
            <span className="font-semibold">22 November 2025, 08:00 AM</span>.
          </div>
        </div>
      )}
    </header>
  );
}
