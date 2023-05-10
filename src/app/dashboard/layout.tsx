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
      <Navbar defaultTheme={themeCookie}>
        {/* <Link
          href="/login"
          className={cn(
            buttonVariants({
              variant: "default",
            }),
            "mr-4 bg-sky-500 hover:bg-sky-600 text-white"
          )}
        >
          Login
        </Link> */}
      </Navbar>

      <main className="container py-6 ">{children}</main>
    </>
  );
}
