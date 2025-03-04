"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 xl:gap-4">
      {navLinks.map((link) => {
        const active = link.href === "/" ? pathname === link.href : pathname.includes(link.href);

        return (
          <Link
            className={`${active ? "bg-accent border-input rounded-md border shadow-xs" : "rounded-none bg-transparent shadow-none"} text-accent-foreground inline-flex min-w-8 items-center justify-center px-2 py-1 text-sm font-medium`}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
