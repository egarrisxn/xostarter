import { siteUrl } from "./env";

type SiteConfig = {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  socialHandle: string;
  links: {
    x: string;
    github: string;
    website: string;
    linkedin: string;
  };
};

export const siteConfig: SiteConfig = {
  title: "XO Starter",
  description: "An easy-to-deploy Next.js 15 starter template!",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image.png`,
  socialHandle: "@eg__xo",
  links: {
    x: "https://x.com/eg__xo",
    github: "https://github.com/egarrisxn",
    website: "https://egxo.dev",
    linkedin: "https://linkedin.com/in/ethan-gx",
  },
};
