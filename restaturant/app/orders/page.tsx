"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "items">("orders");

  return (
    <main className="min-h-screen bg-[#faf9f7] flex flex-col">

      {/* HEADER */}
      <div className="bg-white p-4 shadow-md flex flex-col">

        {/* ROW 1 */}
        <div className="flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <img src="logo.avif" className="w-10 h-10 rounded-md" alt="logo" />
            <h1 className="text-black text-xl font-bold">Capella Bakery</h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <div className="text-sm text-black bg-gray-200 px-3 py-1 rounded-full">
              7
            </div>
            <button className="text-sm text-black bg-gray-200 px-3 py-1 rounded-full">
              Group Order
            </button>
          </div>
        </div>

        {/* ROW 2 — Tabs */}
        <div className="flex items-center mt-3 border-b">

          {/* Orders Tab */}
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex-1 py-2 text-md font-bold text-center ${
              activeTab === "orders"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
          >
            Orders
            <span
              className={`ml-2 rounded-full px-1 py-0.5 text-sm ${
                activeTab === "orders"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              0
            </span>
          </button>

          {/* Item List Tab */}
          <button
            onClick={() => setActiveTab("items")}
            className={`flex-1 py-2 text-md font-bold text-center ${
              activeTab === "items"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-500"
            }`}
          >
            Item List
            <span
              className={`ml-2 rounded-full px-1 py-0.5 text-sm ${
                activeTab === "items"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              0
            </span>
          </button>
        </div>
      </div>

      {/* BODY — CONTENT BASED ON TAB */}
      <div className="flex-1 p-6 flex flex-col items-center justify-start text-center">

        {/* ORDERS TAB CONTENT */}
        {activeTab === "orders" && (
          <div className="mt-14">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-lg font-semibold mb-2">No Orders Yet</h2>
            <p className="text-gray-500 mb-6">
              You haven’t ordered anything yet. Place your first order.
            </p>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600 transition">
              Start Ordering
            </button>
          </div>
        )}

        {/* ITEM LIST TAB CONTENT */}
        {activeTab === "items" && (
          <div className="mt-14">
            <div className="text-6xl mb-6">📄</div>
            <h2 className="text-lg font-semibold mb-2">No Items Added</h2>
            <p className="text-gray-500 mb-6">
              Your item list is empty. Add items from the menu.
            </p>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600 transition">
              Browse Menu
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
