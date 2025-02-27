import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
  return (
    <div className=" w-full fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
      <header className="flex items-center mx-auto justify-between py-2.5 px-2 sm:px-4 lg:px-8">
        <Link href="/" className="pl-1">
          <Image src="/nav-icon.png" alt="nav-icon" width={32} height={32} />
        </Link>
        <ThemeToggle />
      </header>
    </div>
  );
}
