"use client";

import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import Cookies from "js-cookie";
import { LucideIcon, Moon, Sun } from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme?: "light" | "dark";
  Icon?: LucideIcon;
  handleChangeTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextType>({});

export function ThemeProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark";
}) {
  const themeFromCookies = Cookies.get("theme") as "dark" | "light";

  const [theme, setTheme] = useState(
    defaultTheme ?? themeFromCookies ?? "dark"
  );

  const Icon = theme === "light" ? Sun : Moon;

  const handleChangeTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    document.body.classList.toggle("dark");
    Cookies.set("theme", nextTheme);
  };

  useEffect(() => {
    if (!defaultTheme) {
      // Only on FIRST CLIENT RENDER
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      const nextTheme = prefersDark.matches ? "dark" : "light";

      setTheme(nextTheme);
      Cookies.set("theme", nextTheme);
      if (nextTheme !== "dark") document.body.classList.remove("dark");
    }
  }, [defaultTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        Icon,
        handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  if (!ThemeContext)
    throw new Error("useThemeContext must be used within a ThemeProvider");

  return useContext(ThemeContext);
}

export function ChangeThemeButton() {
  const { Icon, handleChangeTheme } = useThemeContext();

  if (!Icon) return null;

  return (
    <button onClick={handleChangeTheme}>
      <AccessibleIcon label="Cambiar tema">
        <Icon className="w-6 h-6" />
      </AccessibleIcon>
    </button>
  );
}

ThemeProvider.ChangeTheme = ChangeThemeButton;
