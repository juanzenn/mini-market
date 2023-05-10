import AuthForm from "@/components/auth-form";
import { TypographyH1, TypographyMuted } from "@/components/ui/typography";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="mx-auto text-center mt-48">
      <TypographyH1 className="mb-2">Bienvenido de vuelta</TypographyH1>
      <TypographyMuted>
        Inicia sesión con el servicio de tu preferencia
      </TypographyMuted>

      <AuthForm />
    </div>
  );
}
