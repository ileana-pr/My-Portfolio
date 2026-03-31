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

const heartFavicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='52'%3E%E2%9D%A4%EF%B8%8F%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Ileana Perez - Computer Science Student & Web3 Developer",
  description: "Computer Science student with a passion for AI, decentralized systems, and community. Dedicated to continuous learning, networking and building.",
  keywords: ["Computer Science", "Web3", "AI", "Blockchain", "Developer", "Student"],
  authors: [{ name: "Ileana Perez" }],
  icons: {
    icon: heartFavicon,
    apple: heartFavicon,
  },
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
