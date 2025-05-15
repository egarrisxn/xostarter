import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_DATA } from "@/lib/config";
import { ThemeProvider } from "@/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//! SEE README FOR INFO ON COMMENTED OUT METADATA !//
export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.url),
  title: {
    default: SITE_DATA.title,
    template: `%s | ${SITE_DATA.title}`,
  },
  description: SITE_DATA.description,
  applicationName: SITE_DATA.title,
  referrer: "origin-when-cross-origin",
  creator: SITE_DATA.links.website,
  keywords: [
    "typescript",
    "javascript",
    "next",
    "nextjs",
    "next15",
    "react",
    "reactjs",
    "react19",
    "tailwind",
    "tailwindcss",
    "tailwindcssv4",
    "shadcnui",
    "radixui",
    "eslint",
    "prettier",
    "vercel",
  ],
  // manifest: "/manifest.json",
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },
  openGraph: {
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    url: SITE_DATA.url,
    siteName: SITE_DATA.title,
    type: "website",
    locale: "en_US",
    // images: [SITE_DATA.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    creator: SITE_DATA.socialHandle,
    site: SITE_DATA.socialHandle,
    // images: [SITE_DATA.ogImage],
  },
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
  //     { url: "/icon0.png", sizes: "96x96", type: "image/png" },
  //     { url: "/icon1.svg", sizes: "any", type: "image/svg+xml" },
  //   ],
  //   apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  // },
  // verification: {},
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid min-h-[100dvh] w-full max-w-screen grid-rows-[auto_1fr_auto] overflow-x-hidden font-sans antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className='grid'>{children}</main>
          <Footer />
          <SonnerToaster richColors closeButton position='bottom-right' />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
