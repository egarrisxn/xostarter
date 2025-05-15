import * as motion from "motion/react-client";
import Image from "next/image";

const technologies = [
  {
    name: "Next.js 15",
    description: "The React framework for the web",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png",
  },
  {
    name: "React 19",
    description: "JavaScript library for user interfaces",
    logo: "https://reactjs.org/favicon.ico",
  },
  {
    name: "Tailwind CSS 4",
    description: "Utility-first CSS framework",
    logo: "https://tailwindcss.com/favicons/favicon-32x32.png",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript at scale",
    logo: "https://www.typescriptlang.org/favicon-32x32.png",
  },
  {
    name: "shadcn/ui",
    description: "Re-usable UI components",
    logo: "https://ui.shadcn.com/favicon.ico",
  },
  {
    name: "Lucide Icons",
    description: "Beautiful & consistent icons",
    logo: "https://lucide.dev/favicon.svg",
  },
];

export default function TechStack() {
  return (
    <section id='tech-stack' className='py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            Cutting-Edge Technology Stack
          </h2>
          <p className='text-muted-foreground text-lg'>
            Built with the latest and most powerful tools in the web development
            ecosystem to ensure performance, reliability, and developer
            happiness.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className='bg-card rounded-xl border p-6 transition-all hover:shadow-lg'
            >
              <div className='flex items-start space-x-4'>
                <div className='relative size-12 flex-shrink-0 overflow-hidden rounded-lg bg-white'>
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className='object-contain p-1'
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className='mb-1 text-xl font-semibold'>{tech.name}</h3>
                  <p className='text-muted-foreground'>{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
