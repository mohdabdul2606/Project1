import "./globals.css";
import BottomNav from "./components/BottomNav";

export const metadata = {
  title: "App with Bottom Nav",
};

export default function RootLayout({ children }) {
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
