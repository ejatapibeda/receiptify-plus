import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://receiptify-plus.vercel.app/"),
  title: {
    default: "Receiptify+ - Visualize Your Music History",
    template: "%s | Receiptify+",
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  description:
    "Transform your Spotify listening history into a beautiful receipt format. View your top tracks, analyze your music taste, and share your listening habits with friends.",
  keywords: [
    "Spotify, Receiptify+, Music History, Music Visualization, Spotify Stats, Music Analytics, Top Tracks",
  ],
  authors: [{ name: "Receiptify+" }],
  creator: "Receiptify+",
  publisher: "Receiptify+",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://receiptify-plus.vercel.app",
    title: "Receiptify+ - Visualize Your Music History",
    description:
      "Transform your Spotify listening history into a beautiful receipt format. View your top tracks, analyze your music taste, and share your listening habits with friends.",
    siteName: "Receiptify+",
  },
  twitter: {
    card: "summary_large_image",
    title: "Receiptify+ - Visualize Your Music History",
    description:
      "Transform your Spotify listening history into a beautiful receipt format",
    creator: "@receiptifyplus",
  },
  verification: {
    google: "_Ce7FHzFlQZY8gli3n2M_YavlxKwFgGtM3hjKr9yzCU",
  },
  alternates: {
    canonical: "https://receiptify-plus.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background`}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
