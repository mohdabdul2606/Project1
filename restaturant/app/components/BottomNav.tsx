"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

// Icon Props Type
interface IconProps {
  name: "home" | "menu" | "orders" | "bill";
  className?: string;
}

// Typed Icon Component
const Icon: FC<IconProps> = ({ name, className }) => {
  const icons: Record<IconProps["name"], ReactNode> = {
    home: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M5 21h14a1 1 0 0 0 1-1V11.5" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),

    menu: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
      </svg>
    ),

    orders: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
        <rect x="7" y="10" width="10" height="8" rx="2" />
      </svg>
    ),

    bill: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 10V6a2 2 0 0 0-2-2H7L3 7v13a1 1 0 0 0 1 1h16" />
        <path d="M7 10h6" />
        <path d="M7 14h6" />
      </svg>
    ),
  };

  return icons[name];
};

// Bottom Navigation
export default function BottomNav() {
  const pathname = usePathname() ?? "/";

  const items: { href: string; label: string; icon: IconProps["name"] }[] = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/menu", label: "Menu", icon: "menu" },
    { href: "/orders", label: "Orders", icon: "orders" },
    { href: "/bill", label: "Bill", icon: "bill" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-t border-gray-200"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)", // iPhone safe area
      }}
      aria-label="Bottom navigation"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center px-4 py-2">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center text-xs gap-1 py-2 px-1 w-full transition-colors ${
                  active
                    ? "text-orange-600"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <Icon name={item.icon} className="inline-block" />
                <span className="leading-none">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
