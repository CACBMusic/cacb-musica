import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://cacbmusica.com"
  ),

  title: {
    default: "CACB Música",
    template: "%s | CACB Música",
  },

  description:
    "Sello discográfico independiente enfocado en artistas urbanos, visuales y lanzamientos digitales.",

  openGraph: {
    title: "CACB Música",
    description:
      "Noticias, artistas y lanzamientos oficiales.",
    url: "https://cacbmusica.com",
    siteName: "CACB Música",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col bg-black text-white">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}