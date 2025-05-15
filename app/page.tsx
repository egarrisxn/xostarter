import Hero from "@/components/hero";
import Features from "@/components/features";
import TechStack from "@/components/tech-stack";
import CallToAction from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TechStack />
      <CallToAction />
    </>
  );
}

// export default function Home() {
//   return (
//     <section className="flex flex-auto flex-col items-center justify-center px-4 text-center">
//       <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200 sm:dark:border-gray-300/10">
//         Home
//       </h1>
//     </section>
//   );
// }
