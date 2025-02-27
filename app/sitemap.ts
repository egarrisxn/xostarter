import { siteUrl } from "@/utils/env";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

export default async function sitemap(): Promise<SitemapEntry[]> {
  const staticPages: SitemapEntry[] = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },

    //-----------------------------------
    // EXAMPLES OF A FEW MORE STATIC PAGES
    //-----------------------------------

    // {
    //   url: `${siteUrl}/about`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
    // {
    //   url: `${siteUrl}/blog`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "daily",
    //   priority: 0.8,
    // },
    // {
    //   url: `${siteUrl}/contact`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "yearly",
    //   priority: 0.4,
    // },
  ];

  return [...staticPages];
}
