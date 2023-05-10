"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  defaultTheme?: "light" | "dark";
  navLinks?: {
    href: string;
    label: string;
  }[];
}

// Add prop for "user actions (login, register, userIcon if user)"

export default function Navbar({ defaultTheme, navLinks }: Props) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <header className="">
        <nav className="container py-4 flex items-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200 font-bold text-xl mr-8 flex items-center gap-2"
          >
            <ShoppingBag size={20} />
            Mini Market
          </Link>

          <ul className="mr-auto space-x-6">
            {navLinks?.map(({ href, label }, index) => (
              <NavLink key={`nav-item-${index}`} href={href} label={label} />
            ))}
          </ul>

          <ThemeProvider.ChangeTheme />
        </nav>
      </header>
    </ThemeProvider>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <li className="inline-block mr-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors duration-200">
      <Link href={href} className="font-medium">
        {label}
      </Link>
    </li>
  );
}

Navbar.NavLink = NavLink;
