# XO Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/egxo-starter) ![GitHub last commit](https://img.shields.io/github/last-commit/egarrisxn/egxo-starter)

## Overview

This is a [Next.js](https://nextjs.org) starter template created by [Ethan G.](https://egxo.dev).

## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **More**: TBD

## Getting Started

This template uses [pnpm](https://pnpm.io) as the default package manager for faster and more efficient dependency management. However, you are free to use `npm`, `yarn`, or `bun` if you prefer.

### 1. Clone the Template

First, clone the repository onto your local machine:

```bash
git clone https://github.com/your-username/your-template.git my-project
cd my-project
```

2. Install Dependencies
   Run the following command to install dependencies:

```bash
pnpm install
```

3. Start the Development Server
   Launch the local development server:

```bash
pnpm dev
```

4. Open in Your Browser
   Once the server is running, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   You can start editing the page by modifying `app/page.tsx`. TThe page will auto-update as you edit the file. Now, get to building! 🚀

## Styling

This project utilizes [shadcn/ui](https://ui.shadcn.com/) alongside [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4).

Since Tailwind v4 is still new (as of 2/27), we are using the canary version of the `shadcn/ui` CLI to add components. To install a UI component, run the following command, replacing `[component]` with the actual component name:

```bash
pnpm dlx shadcn@canary add [component]

```

## Updating UI Theme

To customize the base UI colors, you'll need to reconfigure your CSS variables. Run:

```bash
pnpm dlx shadcn@canary init
```

## **Configuration**

Easily customize your project by updating `utils/config.ts`. This file centralizes important settings, allowing for quick adjustments without modifying multiple files.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for optimized font loading. By default, it includes [Geist](https://vercel.com/font), a modern typeface by Vercel.

You can easily swap out the font for another one. I recommend using `next/font` for built-in optimization or self-hosting fonts for better performance. Be mindful of font file sizes if sourcing them locally.

## Favicon

For generating favicons, icons, and a `manifest.json`, I recommend using [Real Favicon Generator](https://realfavicongenerator.net). This tool ensures proper cross-browser compatibility.

## Analytics

This template includes [Vercel Analytics](https://vercel.com/docs/analytics) for basic site tracking. After deployment, you can enable analytics through your Vercel dashboard.

If you prefer another analytics solution or are deploying elsewhere, simply uninstall the package and remove the import from `layout.tsx`.

## Deployment

For a seamless deployment experience, use the **Deploy** button above to launch your project on Vercel.

You are not limited to Vercel—you can deploy this template on any platform that supports Next.js. However, in my experience, Vercel provides the fastest and most convenient setup.

## Learn More

To explore more about Next.js, check out these resources:

- 📖 [Next.js Documentation](https://nextjs.org/docs) – Official docs covering features and best practices.
- 🛠️ [Next.js GitHub](https://github.com/vercel/next.js) – Browse the source code and contribute.

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or need further assistance, feel free to reach out via GitHub: [egarrisxn](https://github.com/egarrisxn) and/or Email: [egarrisxn@gmail.com](mailto:egarrisxn@gmail.com).
