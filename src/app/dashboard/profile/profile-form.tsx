"use client";

import Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import React, { useTransition } from "react";
import { updateProfile } from "./actions";

type Props = {
  userId: string;
  name: string;
  email: string;
  image?: string;
};

export default function ProfileForm({ image, name, email, userId }: Props) {
  const { toast } = useToast();

  const [pending, startTransition] = useTransition();

  function handleUpdateProfile(data: FormData) {
    data.append("id", userId);

    startTransition(() => {
      updateProfile(data);
    });

    toast({
      title: "Perfil actualizado",
      description: "Tu perfil ha sido actualizado correctamente.",
    });
  }

  return (
    <>
      <form className="space-y-6 max-w-lg" action={handleUpdateProfile}>
        <div className="relative w-fit mx-auto">
          <Avatar
            alt=""
            avatarFallback=""
            avatarImage={image || undefined}
            className="w-20 h-20 block"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input defaultValue={name || ""} id="name" name="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Correo electrónico</Label>
          <Input disabled defaultValue={email || ""} id="email" name="email" />
        </div>

        <Button
          variant="default"
          className="block ml-auto min-w-[150px]"
          type="submit"
          disabled={pending}
        >
          {pending ? (
            <Loader className="block w-5 h-5 animate-spin mx-auto text-white" />
          ) : (
            "Actualizar perfil"
          )}
        </Button>
      </form>
    </>
  );
}
