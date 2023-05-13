import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Avatar from "@/components/ui/avatar";
import { getCurrentUser } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import DashboardSidebar from "./dashboard-sidebar";

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

      <main className="container py-6 flex h-4/5">
        <DashboardSidebar />

        <section className="flex-1 pl-8 h-full overflow-auto">
          {children}
        </section>
      </main>
    </>
  );
}
