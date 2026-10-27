import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${siteName} — Crochet designs`,
  description: siteDescription,
};

export const viewport: Viewport = {
  themeColor: "#f7f1e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-linen font-sans text-ink">{children}</body>
    </html>
  );
}
