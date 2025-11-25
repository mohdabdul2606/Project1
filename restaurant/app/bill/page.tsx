"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Types for restore messages
interface RestoreMessage {
  type: "success" | "error";
  text: string;
}

export default function BillPage() {
  const router = useRouter();

  const [showRestore, setShowRestore] = useState<boolean>(false);
  const [restoreKey, setRestoreKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [restoreMsg, setRestoreMsg] = useState<RestoreMessage | null>(null);

  const handleStartOrdering = () => {
    router.push("/menu");
  };

  const openRestore = () => {
    setRestoreMsg(null);
    setRestoreKey("");
    setShowRestore(true);
  };

  const closeRestore = () => {
    setShowRestore(false);
    setRestoreMsg(null);
    setRestoreKey("");
    setLoading(false);
  };

  const handleRestore = async () => {
    setRestoreMsg(null);

    if (!restoreKey || restoreKey.trim().length < 4) {
      setRestoreMsg({
        type: "error",
        text: "Enter a valid Bill ID or Mobile number (at least 4 chars).",
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise((r) => setTimeout(r, 800));

      // Show success
      setRestoreMsg({
        type: "success",
        text: `Bill restored for "${restoreKey}". Redirecting…`,
      });

      setTimeout(() => {
        router.push("/orders");
      }, 800);
    } catch (err: any) {
      setRestoreMsg({
        type: "error",
        text: err?.message || "Unable to restore bill. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Illustration */}
        <div className="mb-6 flex justify-center">
          <svg
            width="220"
            height="160"
            viewBox="0 0 220 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="max-w-full"
          >
            <rect
              x="10"
              y="40"
              width="200"
              height="90"
              rx="12"
              stroke="#F97316"
              strokeWidth="3"
              fill="#fff"
            />
            <rect
              x="30"
              y="55"
              width="60"
              height="14"
              rx="4"
              fill="#F97316"
            />
            <rect
              x="100"
              y="55"
              width="70"
              height="10"
              rx="3"
              fill="#F97316"
            />
            <path
              d="M70 105c0-10 28-18 40-18s40 8 40 18"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 35c8-6 22-10 35-10s27 4 35 10"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M130 30c10 4 18 11 22 20"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="44"
              y="68"
              width="18"
              height="18"
              rx="4"
              fill="#fff"
              stroke="#111827"
              strokeWidth="1.5"
            />
            <g transform="translate(140, 15)">
              <path
                d="M0 36c7 3 14 7 18 12"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="4"
                y="10"
                width="50"
                height="12"
                rx="3"
                fill="#F97316"
              />
            </g>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-gray-800 font-semibold text-2xl mb-2">
          No Bill Generated Yet
        </h1>
        <p className="text-gray-500 mb-6">
          Your bill will appear here once you place your order.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
          <button
            onClick={handleStartOrdering}
            className="inline-block px-6 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Start Ordering
          </button>

          <button
            onClick={openRestore}
            className="inline-block px-6 py-3 rounded-md bg-orange-100 text-orange-600 font-medium hover:bg-orange-200 transition"
          >
            Restore Bill
          </button>
        </div>
      </div>

      {/* Restore Modal */}
      {showRestore && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeRestore}
          />

          {/* Modal Box */}
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md z-10 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                Restore Bill
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Enter your Bill ID or registered mobile number.
              </p>
            </div>

            <div className="px-6 py-5">
              <label className="block text-sm text-gray-700 mb-2">
                Bill ID or Mobile
              </label>

              <input
                value={restoreKey}
                onChange={(e) => setRestoreKey(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-200 text-gray-800"
                placeholder=" e.g. 12345 or 9876523456"
                aria-label="Bill ID or mobile"
              />

              {restoreMsg && (
                <div
                  className={`mt-3 p-3 rounded-md text-sm ${
                    restoreMsg.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {restoreMsg.text}
                </div>
              )}

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={closeRestore}
                  className="flex-1 py-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleRestore}
                  disabled={loading}
                  className="flex-1 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition disabled:opacity-60"
                >
                  {loading ? "Restoring…" : "Restore"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
