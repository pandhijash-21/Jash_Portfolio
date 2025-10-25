import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jash Pandhi - Full Stack Developer",
  description: "Professional full-stack developer from Ahmedabad, Gujarat. Specializing in modern web technologies and crafting digital experiences that bridge the gap between imagination and reality.",
  keywords: ["Jash Pandhi", "full stack developer", "web development", "react", "node.js", "typescript", "portfolio", "Ahmedabad", "Gujarat"],
  authors: [{ name: "Jash Pandhi" }],
  creator: "Jash Pandhi",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // NUCLEAR OPTION: Completely disable custom cursor and fix mobile viewport
              if (window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
                document.addEventListener('DOMContentLoaded', function() {
                  // Remove any cursor elements that might exist
                  const cursorElements = document.querySelectorAll('.custom-cursor, .cursor-dot, .cursor-hover, .cursor-click');
                  cursorElements.forEach(el => el.remove());
                  
                  // Fix mobile viewport and prevent horizontal scrolling
                  document.documentElement.style.overflowX = 'hidden';
                  document.body.style.overflowX = 'hidden';
                  document.documentElement.style.maxWidth = '100vw';
                  document.body.style.maxWidth = '100vw';
                  
                  // Disable cursor styles globally and fix mobile layout
                  const style = document.createElement('style');
                  style.textContent = \`
                    html, body {
                      overflow-x: hidden !important;
                      max-width: 100vw !important;
                      width: 100% !important;
                      margin: 0 !important;
                      padding: 0 !important;
                    }
                    
                    .custom-cursor, .cursor-dot, .cursor-hover, .cursor-click {
                      display: none !important;
                      visibility: hidden !important;
                      opacity: 0 !important;
                      pointer-events: none !important;
                      position: absolute !important;
                      left: -9999px !important;
                      top: -9999px !important;
                      width: 0 !important;
                      height: 0 !important;
                      overflow: hidden !important;
                    }
                    
                    * {
                      max-width: 100% !important;
                      box-sizing: border-box !important;
                    }
                  \`;
                  document.head.appendChild(style);
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
