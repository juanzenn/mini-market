import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";
import CheckEmailMessage from "./message";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="mx-auto text-center mt-48">
      <CheckEmailMessage />
    </div>
  );
}
