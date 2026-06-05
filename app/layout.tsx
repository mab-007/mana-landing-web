import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://mana.com";
const title = "MANA — The financial home for Filipinos abroad";
const description =
  "Send money home in seconds, hold US dollars, and spend anywhere — all in one app built for Filipinos working abroad. Low fees, real exchange rates, no surprises.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "MANA",
  keywords: [
    "MANA",
    "remittance",
    "send money to the Philippines",
    "Filipinos abroad",
    "OFW",
    "stablecoin neobank",
    "USD wallet",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MANA",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MANA" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
