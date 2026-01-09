export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://xostarter.vercel.app");

export const SITE_DATA: {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  twitterImage: string;
  socialHandle: string;
  links: {
    x: string;
    github: string;
    website: string;
    linkedin: string;
  };
} = {
  title: "XOStarter",
  description: "An easy-to-deploy Next.js 15 starter template!",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image.png`,
  twitterImage: `${SITE_URL}/twitter-image.png`,
  socialHandle: "@eg__xo",
  links: {
    x: "https://x.com/eg__xo",
    github: "https://github.com/egarrisxn",
    website: "https://egxo.dev",
    linkedin: "https://linkedin.com/in/ethan-gx",
  },
};
