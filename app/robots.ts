import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

//! WHAT IS OUTPUT !//
// User-Agent: *
// Allow: /
// Disallow: /private/
// Sitemap: https://xostarter.vercel.app/sitemap.xml
