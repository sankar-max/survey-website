"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return;
  if (resolvedTheme === "dark") {
    return <Sun className="cursor-pointer" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Moon className="cursor-pointer" onClick={() => setTheme("dark")} />;
  }
};

export default ThemeSwitcher;
