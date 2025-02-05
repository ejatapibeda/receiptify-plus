import ContactPage from "@/components/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Spotify Receiptify - Get in Touch",
  description:
    "Have questions about Spotify Receiptify? Get in touch with our team. We're here to help you with any questions about our music visualization service.",
  openGraph: {
    title: "Contact Spotify Receiptify - Get in Touch",
    description:
      "Have questions about Spotify Receiptify? Get in touch with our team. We're here to help you with any questions about our music visualization service.",
    type: "website",
  },
  alternates: {
    canonical: "https://receiptify-plus.vercel.app/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
