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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ]
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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