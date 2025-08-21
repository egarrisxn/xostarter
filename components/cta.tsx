import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "./icons";

export default function CallToAction() {
  return (
    <section className='relative overflow-hidden py-24'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-0 right-0 left-0 h-[50%] bg-gradient-to-b from-background to-transparent' />
        <div className='absolute top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-[120px] dark:opacity-30' />
        <div className='absolute right-0 bottom-0 left-0 h-[50%] bg-gradient-to-t from-background to-transparent' />
      </div>

      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mx-auto max-w-3xl text-center'
        >
          <h2 className='mb-6 text-3xl font-bold md:text-4xl'>
            Ready to Start Building Your Next Big Idea?
          </h2>
          <p className='mb-8 text-lg text-muted-foreground md:text-xl'>
            Get started in seconds with our pre-configured template. Focus on
            building features, not configuration.
          </p>

          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/'>
              <Button size='lg' className='group gap-1'>
                Get Started
                <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
              </Button>
            </Link>
            <a href='https://github.com' target='_blank' rel='noopener'>
              <Button size='lg' variant='outline' className='gap-2'>
                <GitHubIcon className='size-4' />
                Star on GitHub
              </Button>
            </a>
          </div>

          <p className='mt-8 text-sm text-muted-foreground'>
            Already using our template? Check out the{" "}
            <span className='underline'>documentation</span> for some special
            treats.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
