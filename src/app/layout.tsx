import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Banner, Footer, Nav } from "~/components/layout";
import { Hero } from "~/components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alecx Moritz",
  description: "Accessible Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-10 sm:px-50 sm:py-30 bg-linear-to-br from-gray-800 to-gray-950`}
      >
        <Hero />
        {children}
      </body>
    </html>
  );
}
