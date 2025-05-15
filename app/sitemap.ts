import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
  return [...staticPages];
}

//! WHAT IS OUTPUT !//
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://xostarter.vercel.app</loc>
//     <lastmod>2025-06-06T06:06:06.021Z</lastmod>
//     <changefreq>yearly</changefreq>
//     <priority>1</priority>
//   </url>
// </urlset>
