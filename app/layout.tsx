import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Receiptify+ | Transform Your Spotify Listening History",
  description:
    "Transform your Spotify listening history into beautiful, customizable receipts. Share your music taste with the world through detailed listening statistics and personalized receipts.",
  keywords:
    "spotify, receiptify, music, receipt generator, listening history, spotify stats, music visualization",
  openGraph: {
    title: "Receiptify+ | Transform Your Spotify Listening History",
    description:
      "Create beautiful, shareable receipts from your Spotify listening history",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Receiptify+",
    description:
      "Transform your Spotify listening history into beautiful receipts",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://receiptify-plus.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
