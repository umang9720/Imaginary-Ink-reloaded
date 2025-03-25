"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR hydration mismatch
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-5 w-5 ${!isDark ? "text-pink-500" : ""}`} />
      <Switch
        className="data-[state=checked]:bg-pink-500 data-[state=unchecked]:bg-input"
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
      />
      <Moon className={`h-5 w-5 ${isDark ? "text-pink-500" : ""}`} />
    </div>
  );
}
