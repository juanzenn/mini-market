import Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH1, TypographyMuted } from "@/components/ui/typography";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import ProfileForm from "./profile-form";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user || !user.id) return null;

  return (
    <div>
      <TypographyH1 className="mb-8">Perfil</TypographyH1>

      <ProfileForm
        userId={user.id}
        email={user.email || ""}
        name={user.name || ""}
        image={user.image || undefined}
      />
    </div>
  );
}
