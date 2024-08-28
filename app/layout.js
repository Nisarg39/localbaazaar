import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Local Baazaar - Local Retailers At Your Service Just One Click Away",
  description: "Local Baazaar is a Communication App that allows Customer to communicate with Local Retailers in a very simple way and help's you select Best Deal For Free",
  robots: {
    index: true,
    follow: true,
    noindex: false,
    noarchive: false
  },
  icon: "/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
