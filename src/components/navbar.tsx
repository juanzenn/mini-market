"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";

interface Props {
  defaultTheme?: "light" | "dark";
}

export default function Navbar({ defaultTheme }: Props) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <header>
        <nav className="container py-4 flex justify-between">
          <Link
            href="/"
            className="font-extrabold text-lg hover:text-slate-600 dark:hover:text-slate-200"
          >
            Mini Market
          </Link>

          <ThemeProvider.ChangeTheme />
        </nav>
      </header>
    </ThemeProvider>
  );
}
