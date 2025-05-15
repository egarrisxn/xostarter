"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Documentation", href: "#docs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 border-b backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center gap-2'>
              <span className='from-primary bg-gradient-to-r to-blue-500 bg-clip-text text-xl font-bold text-transparent'>
                XOStarter
              </span>
            </Link>
          </div>
          <nav className='hidden items-center gap-6 md:flex'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-muted-foreground hover:text-foreground text-sm font-medium transition-colors'
              >
                {item.name}
              </Link>
            ))}
            <div className='flex items-center gap-6'>
              <Button size='sm'>Get Started</Button>
              <ThemeToggle />
            </div>
          </nav>
          <div className='flex items-center gap-3 md:hidden'>
            <ThemeToggle />
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? (
                <X className='size-5' />
              ) : (
                <Menu className='size-5' />
              )}
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "bg-background fixed inset-0 top-16 z-40 transform border-t transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className='bg-background h-screen space-y-6 px-4 py-6'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-foreground hover:text-primary block text-base font-medium'
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className='w-full'>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
