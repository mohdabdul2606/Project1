"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Icon({ name, className = "" }) {
  // tiny inline svg icons for Home/Menu/Orders/Bill
  const icons = {
    home: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 11.5L12 4l9 7.5"></path>
        <path d="M5 21h14a1 1 0 0 0 1-1V11.5"></path>
        <path d="M9 21V12h6v9"></path>
      </svg>
    ),
    menu: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="6" rx="2"></rect>
        <rect x="3" y="14" width="18" height="6" rx="2"></rect>
      </svg>
    ),
    orders: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8"></path>
        <rect x="7" y="10" width="10" height="8" rx="2"></rect>
      </svg>
    ),
    bill: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 10V6a2 2 0 0 0-2-2H7L3 7v13a1 1 0 0 0 1 1h16"></path>
        <path d="M7 10h6"></path>
        <path d="M7 14h6"></path>
      </svg>
    ),
  };
  return icons[name] ?? null;
}

export default function BottomNav() {
  const pathname = usePathname() || "/";

  const items = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/menu", label: "Menu", icon: "menu" },
    { href: "/orders", label: "Orders", icon: "orders" },
    { href: "/bill", label: "Bill", icon: "bill" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-t border-gray-200"
      style={{
        // ensures safe area on iOS
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
      aria-label="Bottom navigation"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center px-4 py-2">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`flex flex-col items-center text-xs gap-1 py-2 px-1 w-full transition-colors ${
                  active ? "text-orange-600" : "text-gray-500 hover:text-gray-800"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon name={it.icon} className="inline-block" />
                <span className="leading-none">{it.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
