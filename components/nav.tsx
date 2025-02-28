import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Nav() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 w-full border-b border-black/5 dark:border-white/10">
      <header className="mx-auto flex items-center justify-between px-2 py-2.5 sm:px-4 lg:px-8">
        <Link href="/" className="pl-1">
          <Image src="/nav-icon.png" alt="nav-icon" width={32} height={32} />
        </Link>
        <ThemeToggle />
      </header>
    </div>
  );
}
