"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  veg?: boolean;
  image?: string;
};

export default function OrdersPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"orders" | "items">("orders");
  const [items, setItems] = useState<CartItem[]>([]);

  const goToMenu = () => router.push("/menu");

  // load cart from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("cart");
    if (!saved) return;

    try {
      const obj = JSON.parse(saved) as Record<string, CartItem>;
      setItems(Object.values(obj));
    } catch {
      // ignore
    }
  }, []);

  const distinctItemsCount = items.length;
  const totalQty = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );
  const orderTotal = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  );

  return (
    <main className="bg-[#faf9f7] min-h-screen flex flex-col pb-24">
      {/* HEADER - Mobile Sticky */}
      <div className="bg-white px-4 py-3 shadow-sm sticky top-0 z-50">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.avif" alt="logo" className="w-10 h-10 rounded-md" />
            <h1 className="text-black text-lg font-semibold">Capella Bakery</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              {totalQty}
            </span>
            <button className="text-sm bg-gray-200 px-3 py-1 rounded-full">
              Group Order
            </button>
          </div>
        </div>

        {/* Tabs Row */}
        <div className="flex mt-3 border-b text-sm font-semibold">
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex-1 pb-2 ${
              activeTab === "orders"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-400"
            }`}
          >
            Orders{" "}
            <span
              className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                activeTab === "orders"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {distinctItemsCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("items")}
            className={`flex-1 pb-2 ${
              activeTab === "items"
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-gray-400"
            }`}
          >
            Item List{" "}
            <span
              className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                activeTab === "items"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              {totalQty}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="flex-1 flex justify-center items-start p-6 text-center">
        {activeTab === "orders" && (
          <>
            {items.length === 0 ? (
              <div className="mt-10">
                <div className="text-6xl mb-4">🛒</div>
                <h2 className="font-semibold text-lg mb-2">No Orders Yet</h2>
                <p className="text-gray-500 text-sm max-w-xs mx-auto mb-6">
                  You haven’t ordered anything yet. Place your first order.
                </p>

                <button
                  onClick={goToMenu}
                  className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md w-full max-w-[200px]"
                >
                  Start Ordering
                </button>
              </div>
            ) : (
              <div className="mt-6 w-full max-w-md text-left">
                <h2 className="font-semibold text-lg mb-3 text-center">
                  Current Order
                </h2>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-white rounded-md px-3 py-2 shadow-sm"
                    >
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.qty} × ₹ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">
                        ₹ {(item.qty * item.price).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <span className="text-sm text-gray-600">Total</span>
                  <span className="text-base font-semibold">
                    ₹ {orderTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-md shadow-md w-full"
                  onClick={() => alert("Place order logic goes here")}
                >
                  Place Order
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === "items" && (
          <>
            {items.length === 0 ? (
              <div className="mt-10">
                <div className="text-6xl mb-4">📄</div>
                <h2 className="font-semibold text-lg mb-2">No Items Added</h2>
                <p className="text-gray-500 text-sm max-w-xs mx-auto mb-6">
                  Your item list is empty. Add items from the menu.
                </p>

                <button
                  onClick={goToMenu}
                  className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md w-full max-w-[200px]"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="mt-6 w-full max-w-md text-left">
                <h2 className="font-semibold text-lg mb-3 text-center">
                  Items in Cart
                </h2>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-white rounded-md px-3 py-2 shadow-sm"
                    >
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.qty}
                        </p>
                      </div>
                      <p className="text-sm font-semibold">
                        ₹ {(item.qty * item.price).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
