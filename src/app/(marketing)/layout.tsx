import Navbar from "@/components/navbar";
import { cookies } from "next/headers";
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
        ]}
      />

      <main className="container py-6 min-h-full">{children}</main>
    </>
  );
}
