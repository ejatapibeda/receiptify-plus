import AboutPage from "@/components/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Spotify Receiptify - Our Story and Mission",
  description: "Learn about Spotify Receiptify, how we transform your music listening data into beautiful receipts, and our mission to help music lovers visualize their listening habits.",
  openGraph: {
    title: "About Spotify Receiptify - Our Story and Mission",
    description: "Learn about Spotify Receiptify, how we transform your music listening data into beautiful receipts, and our mission to help music lovers visualize their listening habits.",
    type: "website",
  },
  alternates: {
    canonical: "https://betspot.vercel.app/about"
  }
};

export default function About() {
  return <AboutPage />;
}
