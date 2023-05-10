import AuthForm from "@/components/auth-form";
import { TypographyH1 } from "@/components/ui/typography";
import React from "react";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <>
      <TypographyH1>Login</TypographyH1>
      <AuthForm />
    </>
  );
}
