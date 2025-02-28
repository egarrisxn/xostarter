import { siteConfig } from "@/utils/config";

import type { SitemapEntry } from "@/utils/types";

export default async function sitemap(): Promise<SitemapEntry[]> {
  const staticPages: SitemapEntry[] = [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },

    //---EXAMPLE OF ANOTHER SITEMAP PAGE---//

    // {
    //   url: `${siteConfig.url}/blog`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // }
  ];

  return [...staticPages];
}
