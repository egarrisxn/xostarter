import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import {
  Zap,
  Layout,
  Palette,
  Shield,
  Smartphone,
  Globe,
  RefreshCw,
  Code2,
} from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description:
      "Built on Next.js 15 with React 19 for optimal performance and server components.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Modern UI Components",
    description:
      "Includes the full shadcn/ui component library pre-configured and ready to use.",
    icon: Layout,
    color: "from-blue-500 to-violet-500",
  },
  {
    name: "Tailwind 4 Integration",
    description:
      "Styled with the latest version of Tailwind CSS for rapid, responsive development.",
    icon: Palette,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Type Safety",
    description:
      "Full TypeScript support with strict type checking for a robust development experience.",
    icon: Shield,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Responsive Design",
    description:
      "Fully responsive layouts that work perfectly across mobile, tablet, and desktop.",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Internationalization Ready",
    description:
      "Set up for easy localization with support for multiple languages.",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Dark & Light Modes",
    description:
      "Built-in theme support with seamless switching between light and dark modes.",
    icon: RefreshCw,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Developer Experience",
    description:
      "ESLint, Prettier, and other tools pre-configured for an optimal developer workflow.",
    icon: Code2,
    color: "from-rose-500 to-pink-500",
  },
];

export default function Features() {
  return (
    <section id='features' className='bg-muted/50 py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
            Everything You Need to Build Faster
          </h2>
          <p className='text-lg text-muted-foreground'>
            Our template comes packed with features to accelerate your
            development process while maintaining code quality and user
            experience.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature, idx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className='h-full rounded-xl border bg-card p-6 transition-shadow hover:shadow-md'>
                <div
                  className={cn(
                    "mb-4 flex size-12 items-center justify-center rounded-lg",
                    "bg-gradient-to-br text-foreground"
                  )}
                  style={
                    {
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      "--tw-gradient-from": feature.color.split(" ")[0],
                      "--tw-gradient-to": feature.color.split(" ")[1],
                    } as any
                  }
                >
                  <feature.icon className='size-6' />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>{feature.name}</h3>
                <p className='text-muted-foreground'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
