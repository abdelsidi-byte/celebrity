import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/sections/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Style & Society - Celebrity News, Fashion & Entertainment",
    template: "%s | Style & Society",
  },
  description:
    "Your source for celebrity news, fashion trends, entertainment gossip, red carpet coverage, and exclusive celebrity interviews.",
  keywords: ["celebrity", "fashion", "entertainment", "gossip", "news", "Hollywood", "red carpet", "society"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Style & Society",
    title: "Style & Society - Celebrity News, Fashion & Entertainment",
    description:
      "Your source for celebrity news, fashion trends, entertainment gossip, red carpet coverage, and exclusive celebrity interviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Style & Society - Celebrity News, Fashion & Entertainment",
    description:
      "Your source for celebrity news, fashion trends, entertainment gossip, red carpet coverage, and exclusive celebrity interviews.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
