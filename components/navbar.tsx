import Link from "next/link";
import Image from "next/image";
import NavLinks from "./nav-links";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <section className="fixed inset-x-0 top-0 z-10 w-full border-b border-black/5 dark:border-white/10">
      <header className="mx-auto flex items-center justify-between px-2 py-2.5 sm:px-4 sm:py-3 lg:px-6 lg:py-4">
        <nav className="flex flex-row items-center gap-6">
          <Link href="/">
            <Image src="/nav-icon.png" alt="nav-icon" width={32} height={32} />
          </Link>
          <NavLinks />
        </nav>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>
    </section>
  );
}
