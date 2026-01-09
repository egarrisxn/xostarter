import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "XOStarter",
    short_name: "XO",
    description: "An easy-to-deploy Next.js 15 starter template!",
    id: "/",
    start_url: "/",
    theme_color: "#000000",
    background_color: "#000000",
    orientation: "any",
    display: "standalone",
    icons: [
      {
        src: "/icons-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    //! INCLUDE IF YOU'D LIKE !//
    // screenshots: [
    //   {
    //     src: "/desktop.png",
    //     sizes: "1920x1080",
    //     type: "image/png",
    //     form_factor: "wide",
    //   },
    //   {
    //     src: "/mobile.png",
    //     sizes: "750x1334",
    //     type: "image/png",
    //   },
    // ],
  };
}
