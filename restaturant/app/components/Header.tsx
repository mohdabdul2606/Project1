"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [showClosedBar, setShowClosedBar] = useState(false);

  useEffect(() => {
    // Change this to whatever date/time you want
    const openAt = new Date("2025-11-22T08:00:00+05:30"); // 22 Nov 2025, 08:00 AM IST

    const checkStatus = () => {
      const now = new Date();
      // Show the red bar ONLY while restaurant is still closed
      setShowClosedBar(now < openAt);
    };

    // Run once immediately
    checkStatus();

    // Re-check every 60 seconds while page is open
    const id = setInterval(checkStatus, 60_000);

    return () => clearInterval(id);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* ROW 1 – logo + name + 7 + group order */}
      <div className="px-4 py-3 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.avif"
            alt="Capella logo"
            className="w-10 h-10 rounded-md"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Capella Bakery</span>
            {/* You can put address / subtitle here if you want */}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="text-sm text-black bg-gray-200 px-3 py-1 rounded-full">
            7
          </div>
          <button className="text-sm text-black bg-gray-200 px-3 py-1 rounded-full">
            Group Order
          </button>
        </div>
      </div>

      {/* ROW 2 – red closed notice (auto hides after openAt) */}
      {showClosedBar && (
        <div className="px-4 pb-3">
          <div className="text-xs sm:text-sm text-red-600 border border-red-200 rounded-md px-3 py-2 bg-red-50">
            Sorry! Restaurant is closed now. Please try after{" "}
            <span className="font-semibold">22 November 2025 08:00 AM</span>
          </div>
        </div>
      )}
    </header>
  );
}
