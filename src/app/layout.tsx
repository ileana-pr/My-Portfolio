import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ileana Perez - Computer Science Student & Web3 Developer",
  description: "Computer Science student with a passion for AI, decentralized systems, and community. Dedicated to continuous learning, networking and building.",
  keywords: ["Computer Science", "Web3", "AI", "Blockchain", "Developer", "Student"],
  authors: [{ name: "Ileana Perez" }],
  openGraph: {
    title: "Ileana Perez - Computer Science Student & Web3 Developer",
    description: "Computer Science student with a passion for AI, decentralized systems, and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
