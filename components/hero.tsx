import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "./icons";

export default function Hero() {
  return (
    <section className='relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-48 lg:pb-28'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-[40%] -left-[20%] h-[80%] w-[80%] rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-[120px] dark:opacity-30' />
        <div className='absolute -right-[20%] -bottom-[40%] h-[80%] w-[80%] rounded-full bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-600 opacity-20 blur-[120px] dark:opacity-30' />
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl space-y-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='mb-4 inline-block'>
              <span className='inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/20'>
                Next.js 15 + React 19 + Tailwind 4
              </span>
            </div>
            <h1 className='mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl'>
              The Ultimate{" "}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Next.js 15
              </span>{" "}
              Starter Template
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl'>
              Jumpstart your next web project with our modern, feature-rich
              template. Built with the latest technologies for exceptional
              performance and developer experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-col items-center justify-center gap-4 sm:flex-row'
          >
            <Link href='/'>
              <Button size='lg' className='group gap-1'>
                Get Started
                <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
              </Button>
            </Link>
            <a href='https://github.com' target='_blank' rel='noopener'>
              <Button size='lg' variant='outline' className='gap-2'>
                <GitHubIcon className='size-4' />
                GitHub
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='relative mx-auto mt-16 max-w-3xl'
      >
        <div className='relative overflow-hidden rounded-lg border bg-card shadow-2xl'>
          <div className='absolute top-0 right-0 left-0 flex items-center gap-1.5 border-b bg-muted/80 p-3 backdrop-blur-sm'>
            <div className='size-3 rounded-full bg-destructive/70' />
            <div className='size-3 rounded-full bg-amber-400/70' />
            <div className='size-3 rounded-full bg-emerald-400/70' />
            <div className='flex flex-1 items-center justify-center'>
              <div className='flex items-center gap-1 text-xs font-medium text-muted-foreground'>
                <Code className='size-3.5' />
                <span>app/page.tsx</span>
              </div>
            </div>
          </div>
          <pre className='overflow-x-auto p-4 pt-12 text-left text-sm'>
            <code className='language-tsx'>
              {`export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to XOStarter</h1>
      <p className="mt-4 text-center text-gray-500">
        The ultimate starter template for your next web project
      </p>
      <div className="mt-8 flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">Documentation</Button>
      </div>
    </main>
  )
}`}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  );
}
