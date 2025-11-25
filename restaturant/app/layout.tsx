import "./globals.css";
import BottomNav from "./components/BottomNav";
import type { ReactNode } from "react";

export const metadata = {
  title: "RESTAURANT",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {/* main content; add bottom padding so content isn't hidden behind navbar */}
        <div className="pb-[80px]">{children}</div>

        {/* sticky bottom nav */}
        <BottomNav />
      </body>
    </html>
  );
}
