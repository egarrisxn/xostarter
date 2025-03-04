import Link from "next/link";
import Image from "next/image";
import NavLinks from "./nav-links";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <section className="shadow-foreground/10 w-full border-b shadow-[1px_2px_8px_0px]">
      <header className="mx-auto flex items-center justify-center p-3 sm:justify-between sm:py-4 lg:p-6 xl:px-8">
        <nav className="flex w-full flex-row items-center justify-between sm:justify-start sm:gap-6 lg:gap-8 xl:gap-9">
          <Link href="/">
            <Image src="/nav-icon.png" alt="nav-icon" width={32} height={32} />
          </Link>
          <NavLinks />
        </nav>
        <div className="hidden sm:flex sm:items-center sm:justify-end">
          <ThemeToggle />
        </div>
      </header>
    </section>
  );
}
