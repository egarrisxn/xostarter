import type { MetadataRoute } from "next";
import { siteUrl } from "@/utils/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
  return staticPages;
}

//---EXAMPLE OF A DYNAMIC SITEMAP SETUP---//

// import type { SitemapEntry } from "@/utils/types";
// import { siteUrl } from "@/utils/env";

// export default async function sitemap(): Promise<SitemapEntry[]> {
//   const staticPages: SitemapEntry[] = [
//     {
//       url: siteUrl,
//       lastModified: new Date().toISOString(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `${siteUrl}/blog`,
//       lastModified: new Date().toISOString(),
//       changeFrequency: "weekly",
//       priority: 0.8,
//     }
//   ];
//   return [...staticPages];
// }
