import { TypographyH1 } from "@/components/ui/typography";
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
