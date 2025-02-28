# XO Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/xostarter) ![GitHub last commit](https://img.shields.io/github/last-commit/egarrisxn/xostarter)

![opengraph-image](https://github.com/user-attachments/assets/a49fec98-b71b-4f67-8dbd-9c77156effb0)

## Overview

This is an easy-to-deploy [Next.js](https://nextjs.org) starter template created by [Ethan G.](https://egxo.dev). It is designed to streamline development with modern tools, ensuring a fast and efficient workflow from setup to deployment.

## Technologies

This template leverages a modern tech stack for a smooth developer experience:

- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) – Ensures type safety and better maintainability.
- **Framework**: [Next.js](https://nextjs.org/) – The leading React framework for hybrid static & server-side rendering.
- **Deployment**: [Vercel](https://vercel.com) – Optimized for seamless, serverless deployment.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS for rapid styling.
- **Linting & Formatting**:
  - [ESLint](https://eslint.org/) – Enforces code quality and best practices.
  - [Prettier](https://prettier.io/) – Automatic code formatting for consistency.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) – A flexible, customizable UI component library.
- **Animations**: [Motion](https://motion.dev) – Powerful animations with an intuitive API.
- **Icons**: [lucide-react](https://lucide.dev/) – Crisp, open-source React icons.
- **More**: TBD (Feel free to extend and customize based on your needs).

## Before You Begin

This template uses [pnpm](https://pnpm.io) as the default package manager for faster dependency resolution and disk space efficiency. However, you can switch to `npm`, `yarn`, or `bun` if preferred.

### Updataing Package Manager

By default, this template enforces `pnpm`. To use another package manager, follow these steps:

#### 1. Remove `pnpm` Enforcement

Open `package.json` and modify or remove the following lines:

```json
"preinstall": "npx only-allow pnpm",
"prebuild": "pnpm run lint"
```

#### 2. Install Dependencies Using Your Preferred Manager

Run one of the following commands:

```bash
npm install  # or yarn install, bun install
```

Now you're ready to start building! 🚀

## Getting Started

#### 1. Clone the Template

First, clone the repository onto your local machine:

```bash
git clone https://github.com/egarrisxn/xostarter.git my-next-starter-project
cd my-next-starter-project
```

#### 2. Install Dependencies

Run the following command to install dependencies:

```bash
pnpm install
```

#### 3. Start the Development Server

Launch the local development server:

```bash
pnpm dev
```

#### 4. Open in Your Browser

Once the server is running, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. TThe page will auto-update as you edit the file. Now, get to building! 🚀

## Configuration

Easily customize your project by updating `utils/config.ts`. This file centralizes important settings, allowing for quick adjustments without modifying multiple files.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for optimized font loading. By default, it includes [Geist](https://vercel.com/font), a modern typeface by Vercel.

You can easily swap out the font for another one. I recommend using `next/font` for built-in optimization or self-hosting fonts for better performance. Be mindful of font file sizes if sourcing them locally.

## Favicon

For generating favicons, icons, and a `manifest.json`, I recommend using [Real Favicon Generator](https://realfavicongenerator.net). This tool ensures proper cross-browser compatibility.

## Styling

This project utilizes [shadcn/ui](https://ui.shadcn.com/) alongside [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4).

Since Tailwind v4 is still new (as of 2/27), we are using the canary version of the `shadcn/ui` CLI to add components. To install a UI component, run the following command, replacing `[component]` with the actual component name:

```bash
pnpm dlx shadcn@canary add [component]
```

### Updating UI Theme

To customize the base UI colors, you'll need to reconfigure your CSS variables. Run:

```bash
pnpm dlx shadcn@canary init
```

## Analytics

This template includes [Vercel Analytics](https://vercel.com/docs/analytics) for basic site tracking. After deployment, you can enable analytics through your Vercel dashboard.

If you prefer another analytics solution or are deploying elsewhere, simply uninstall the package and remove the import from `layout.tsx`.

## Deployment

For a seamless deployment experience, use the **Deploy** button below to launch your project on Vercel.

Note: You are not limited to Vercel and may deploy this template on any platform that supports Next.js. However, in my experience, Vercel provides the fastest and most convenient setup.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fegarrisxn%2Fxostarter)

## Learn More

To explore more about Next.js, check out these resources:

- 📖 [Next.js Documentation](https://nextjs.org/docs) – Official docs covering features and best practices.
- 🛠️ [Next.js GitHub](https://github.com/vercel/next.js) – Browse the source code and contribute.

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or need further assistance, feel free to reach out to me at [github.com/garrisxn](https://github.com/egarrisxn) or send an email to [egarrisxn@gmail.com](mailto:egarrisxn@gmail.com) and I'll get back to you as soon as possible!
