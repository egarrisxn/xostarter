import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/utils/config";
import { ThemeProvider } from "@/components/providers";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.title,
  referrer: "origin-when-cross-origin",
  creator: siteConfig.links.website,
  keywords: [
    "typescript",
    "javascript",
    "nextjs",
    "next15",
    "react",
    "react19",
    "tailwindCSS",
    "tailwindv4",
    "shadcnui",
    "eslint",
    "vercel",
  ],
  appleWebApp: {
    capable: true,
    title: siteConfig.title,
    startupImage: siteConfig.ogImage,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  appLinks: {},

  //---SEE README FOR INFO OVER COMMENTED OUT METADATA---//

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
    // images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.socialHandle,
    site: siteConfig.socialHandle,
    // images: [siteConfig.ogImage],
  },
  // manifest: "/manifest.json",
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
  //     { url: "/icon.png", sizes: "96x96", type: "image/png" },
  //     { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
  //   ],
  //   apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020618" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} max-w-screen overflow-x-hidden font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="grid min-h-dvh w-full grid-cols-1 justify-center">{children}</main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
