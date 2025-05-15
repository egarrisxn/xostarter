"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Computer, Sun, Moon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup
      variant='outline'
      type='single'
      size='sm'
      className='text-sm *:data-[slot=toggle-group-item]:w-8'
      value={theme || resolvedTheme}
      onValueChange={(value) => value && setTheme(value)}
    >
      <ToggleGroupItem value='system' aria-label='Toggle system theme'>
        <Computer className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='light' aria-label='Toggle light theme'>
        <Sun className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='dark' aria-label='Toggle dark theme'>
        <Moon className='size-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
