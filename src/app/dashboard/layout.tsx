import Navbar from "@/components/navbar";
import Avatar from "@/components/ui/avatar";
import { getCurrentUser } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function MarketingLayout({ children }: Props) {
  const themeCookie = cookies().get("theme")?.value as
    | "light"
    | "dark"
    | undefined;

  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/login");

  return (
    <>
      <Navbar defaultTheme={themeCookie}>
        <Avatar
          className="mr-4"
          avatarImage={currentUser.image ?? undefined}
          avatarFallback={currentUser.name?.[0].toUpperCase() ?? "C"}
          alt="user-profile-avatar"
        />
      </Navbar>

      <main className="container py-6 ">{children}</main>
    </>
  );
}
