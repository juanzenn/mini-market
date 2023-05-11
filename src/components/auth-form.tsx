"use client";

import { useToast } from "@/components/ui/use-toast";
import { Github, Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TypographyMuted } from "./ui/typography";

export default function AuthForm() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [showHelper, setShowHelper] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoadingEmail(true);
    const email = z.string().email().parse(inputRef.current?.value);
    try {
      await signIn("email", { email, callbackUrl: "/" });
    } catch (error) {
      toast({
        title: "Oh no!",
        description:
          "Ocurrió un error al intentar iniciar sesión. Intenta de nuevo.",
        variant: "destructive",
      });
    }
    setLoadingEmail(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mt-12 md:w-[450px] mx-auto"
    >
      <div className="mb-2">
        <Input
          required
          ref={inputRef}
          type="email"
          placeholder="Email"
          onFocus={() => setShowHelper(true)}
          onBlur={() => setShowHelper(false)}
        />
        {showHelper ? (
          <TypographyMuted className="text-left mt-1.5">
            Al iniciar sesión con tu correo, recibirás un enlace de acceso.
          </TypographyMuted>
        ) : (
          <div className="h-[26px]" />
        )}
      </div>

      {loadingEmail ? (
        <Loader className="animate-spin text-primary mx-auto w-8 h-8" />
      ) : (
        <Button type="submit">Iniciar sesión</Button>
      )}

      <hr className="my-2" />

      <Button onClick={() => signIn("github")} type="button">
        <Github size={18} className="mr-2" />
        Iniciar sesión con Github
      </Button>
    </form>
  );
}
