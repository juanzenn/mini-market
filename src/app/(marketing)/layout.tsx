import Navbar from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function MarketingLayout({ children }: Props) {
  const themeCookie = cookies().get("theme")?.value as
    | "light"
    | "dark"
    | undefined;

  return (
    <>
      <Navbar
        defaultTheme={themeCookie}
        navLinks={[
          { href: "/", label: "Inicio" },
          { href: "/contact", label: "Contacto" },
          { href: "/search", label: "Descubrir" },
        ]}
      >
        <Link
          href="/login"
          className={cn(
            buttonVariants({
              variant: "default",
            }),
            "mr-4 bg-sky-500 hover:bg-sky-600 text-white"
          )}
        >
          Login
        </Link>
      </Navbar>

      <main className="container py-6 ">{children}</main>
    </>
  );
}
