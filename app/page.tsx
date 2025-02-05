"use client";

import { Suspense } from "react";
import Header from "../components/Header";
import SpotifyReceiptify from "../components/SpotifyReceiptify";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Receiptify+",
            "description": "Transform your Spotify listening history into beautiful receipt visualizations",
            "applicationCategory": "MusicApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Spotify Integration",
              "Music History Visualization",
              "Personalized Music Stats",
              "Receipt Style Format",
              "Share Functionality"
            ]
          })
        }}
      />
      <Suspense fallback={<Loading />}>
        <div className="min-h-screen bg-gradient-to-br from-[#121212] to-[#1DB954] text-white flex flex-col">
          <Header />
          <SpotifyReceiptify />
        </div>
      </Suspense>
    </>
  );
}
