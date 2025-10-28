import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jash Pandhi - Full Stack Developer",
  description: "Professional full-stack developer from Ahmedabad, Gujarat. Specializing in modern web technologies and crafting digital experiences that bridge the gap between imagination and reality.",
  keywords: ["Jash Pandhi", "full stack developer", "web development", "react", "node.js", "typescript", "portfolio", "Ahmedabad", "Gujarat"],
  authors: [{ name: "Jash Pandhi" }],
  creator: "Jash Pandhi",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jashpandhi.dev",
    title: "Jash Pandhi - Full Stack Developer",
    description: "Professional full-stack developer from Ahmedabad, Gujarat. Specializing in modern web technologies.",
    siteName: "Jash Pandhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jash Pandhi - Full Stack Developer",
    description: "Professional full-stack developer from Ahmedabad, Gujarat. Specializing in modern web technologies.",
    creator: "@jashpandhi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
