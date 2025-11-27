"use client";

import React from "react";
import { Section } from "../../types";
import MenuItem from "./MenuItem";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  veg?: boolean;
  image?: string;
};

type MenuSectionProps = {
  section: Section;
  collapsed: boolean;
  toggleCollapsed: () => void;
  cart: Record<string, CartItem>;
  onChangeItemQty: (itemId: string, delta: number) => void;
};

export default function MenuSection({
  section,
  collapsed,
  toggleCollapsed,
  cart,
  onChangeItemQty,
}: MenuSectionProps) {
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

      {/* ITEMS INSIDE SECTION */}
      {!collapsed && (
        <div className="divide-y divide-dotted divide-gray-200">
          {section.items.map((item) => {
            const qty = cart[item.id]?.qty ?? 0;
            return (
              <MenuItem
                key={item.id}
                item={item}
                quantity={qty}
                onChangeQuantity={onChangeItemQty}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
