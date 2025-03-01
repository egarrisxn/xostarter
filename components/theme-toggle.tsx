"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Computer, Sun, Moon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function ThemeToggle() {
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
      variant="outline"
      type="single"
      size="sm"
      className="*:data-[slot=toggle-group-item]:w-22"
      value={theme || resolvedTheme}
      onValueChange={(value) => value && setTheme(value)}
    >
      <ToggleGroupItem value="system" aria-label="Toggle system theme" className="text-xs">
        <Computer className="size-3.5" /> System
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Toggle light theme" className="text-xs">
        <Sun className="size-3.5" /> Light
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark theme" className="text-xs">
        <Moon className="size-3.5" /> Dark
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
