import PrivacyPolicyPage from "@/components/PrivacyPolicyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Spotify Receiptify",
  description:
    "Read our privacy policy to understand how Spotify Receiptify handles your data. Learn about our commitment to protecting your privacy and personal information.",
  openGraph: {
    title: "Privacy Policy - Spotify Receiptify",
    description:
      "Read our privacy policy to understand how Spotify Receiptify handles your data. Learn about our commitment to protecting your privacy and personal information.",
    type: "website",
  },
  alternates: {
    canonical: "https://receiptify-plus.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
