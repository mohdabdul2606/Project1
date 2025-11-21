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
    <div className="px-4 py-3 bg-white shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/mnt/data/Screenshot_2025-11-21-19-11-11-403_com.android.chrome.jpg"
            className="w-10 h-10 rounded"
          />
          <div>
            <div className="text-sm font-medium">Capella Bakery</div>
            <div className="text-xs text-gray-500">7</div>
          </div>
        </div>

        <button className="text-sm border px-3 py-1 rounded-full bg-white">
          Group Order
        </button>
      </div>

      {isClosed && (
        <div className="mt-3">
          <div className="text-sm text-red-600 border border-red-200 rounded-md px-3 py-2 bg-red-50">
            Sorry! Restaurant is closed now. Please try after 22 November 2025,
            08:00 AM
          </div>
        </div>
      )}
    </div>
  );
}
