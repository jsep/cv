import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Outfit } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Juan Sepulveda | Full Stack Engineer",
  description: "Full Stack Engineer with 13+ years of experience",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
