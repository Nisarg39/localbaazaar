import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Radar - Local Retailers At Your Service Just One Click Away",
  description: "Shop Radar is a Communication App that allows Customer to communicate with Local Stores in a very simple way and help's you select Best Deal For Free",
  robots: {
    index: true,
    follow: true,
    noindex: false,
    noarchive: false
  },
  icon: {
    src: "/favicon.ico",
    sizes: "16x16 32x32 48x48 64x64 128x128 256x256",
    type: "image/x-icon"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://localbaazaar.com",
    title: "Shop Radar App - Contact nearby shops with a single click",
    description: "Shop Radar is a Communication App that allows Customer to communicate with local stores  in a very simple way and help's you select Best Deal For Free",
    defaultImage: "https://localbaazaar.com/logo.png",
    site_name: "Shop Radar",
    images: [
      {
        url: "https://shopradar.in/logo.png",
        width: 800,
        height: 400,
        alt: "Shop Radar - Local Retailers At Your Service Just One Click Away"
      }
    ]
  },
  keywords: [

  ]
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
