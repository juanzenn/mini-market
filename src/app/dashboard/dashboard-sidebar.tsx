"use client";

import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Home, Loader, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

function getDashboardLink(href: string) {
  return `/dashboard/${href}`;
}

export default function DashboardSidebar() {
  const [signingOut, setSigningOut] = useState(false);

  async function handleLogout() {
    setSigningOut(true);
    await signOut({ callbackUrl: "/login" });
    setSigningOut(false);
  }

  return (
    <Sidebar>
      <Sidebar.Item href="/dashboard" Icon={Home}>
        Dashboard
      </Sidebar.Item>

      <ul className="space-y-2">
        <Sidebar.Item href={getDashboardLink("profile")} Icon={User}>
          Perfil
        </Sidebar.Item>

        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-destructive/80 text-foreground/60"
          onClick={handleLogout}
          disabled={signingOut}
        >
          {signingOut && <Loader className="animate-spin" />}
          {!signingOut && (
            <>
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar sesión
            </>
          )}
        </Button>
      </ul>
    </Sidebar>
  );
}
