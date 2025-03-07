import type { SitemapEntry } from "@/utils/types";
import { siteUrl } from "@/utils/env";

export default async function sitemap(): Promise<SitemapEntry[]> {
  const staticPages: SitemapEntry[] = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
  return [...staticPages];
}

// import type { MetadataRoute } from "next";
// import { siteUrl } from "@/utils/env";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const staticPages: MetadataRoute.Sitemap = [
//     {
//       url: siteUrl,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//   ];
//   return staticPages;
// }
