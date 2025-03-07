import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/utils/config";
import { ThemeProvider } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster as SonnerToaster } from "sonner";
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
  verification: {},
  appLinks: {},

  //---SEE README FOR INFO OVER COMMENTED OUT METADATA---//

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SonnerToaster richColors closeButton position="bottom-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
