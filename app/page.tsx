import Link from "next/link";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Nav />
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
        <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block dark:[--pattern-fg:var(--color-white)]/10"></div>
        <div className="text-gray-950 dark:text-white">
          <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
            <div className="flex flex-auto flex-col items-center justify-center px-4 text-center">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200 sm:dark:border-gray-300/10">
                XO Starter
              </h1>
              <h2 className="mt-2 text-gray-700 dark:text-gray-400">
                Check out the {""}{" "}
                <Link
                  href="/"
                  className="text-blue-500 underline underline-offset-2"
                >
                  repository
                </Link>
                .
              </h2>
            </div>
          </div>
        </div>
        <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:col-start-3 lg:block dark:[--pattern-fg:var(--color-white)]/10"></div>
      </div>
    </div>
  );
}
