This is a [Next.js](https://nextjs.org) starter template created by [Ethan G.](https://egxo.dev).

## Getting Started

For ease and simplifcation, I will be using pnpm as my package manager. If you don't want to use pnpm, you may use npm, yarn, bun, etc.

First, clone the template onto your local machine.

...
...
...

Next, install your dependencies.

```bash
pnpm install
```

After, start development server:

```bash
pnpm dev
```

Last, open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. Now, get to building!

## Styling

This project uses shadcn/ui alongside Tailwind v4.

As of 2.27, since Tailwind v4 is brand new, we are using the canary version of the shadcn/ui CLI tool to add UI components to the project. To do so, simply use throw the script below into your terminal. Make sure you swap _comment_ with the actual UI component you want.

```bash
pnpm dlx shadcn@canary add [component]
```

If you would like to change the base color for the UI, you have to re-setup tour CSS variables by using this script.

```bash
pnpm dlx shadcn@canary init
```

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel. You make easily remove this font family and implement your own. I recommend sticking with next/font or sourcing locally, but be mindful of size when doing so.

## Deployment

Use the Deploy button above for a seamless deployment with Vercel. You do not have to use Vercel for deployment, but from personal experience, I have found it to be the easiest and fastest track to get your site up and running.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
