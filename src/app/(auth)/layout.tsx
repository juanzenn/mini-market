import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: Props) {
  return (
    <>
      <Link
        href="/"
        className={buttonVariants({
          variant: "link",
          className: "relative top-4 left-4",
        })}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Inicio
      </Link>

      <main className="container py-6">{children}</main>
    </>
  );
}
