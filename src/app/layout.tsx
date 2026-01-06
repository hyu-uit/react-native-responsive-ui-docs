import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "React Native Responsive UI - Zero-Config Responsive Design Library",
  description:
    "A zero-config responsive design library for React Native / Expo. Build beautiful UIs that look perfect on phones, tablets, and iPads with minimal code.",
  keywords: [
    "react-native",
    "responsive",
    "scaling",
    "expo",
    "ui",
    "mobile",
    "tablet",
    "ipad",
  ],
  authors: [{ name: "vincent-huy-uit" }],
  openGraph: {
    title: "React Native Responsive UI",
    description: "Zero-config responsive design for React Native / Expo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
