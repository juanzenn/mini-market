"use client";

import Avatar from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { Camera, Loader } from "lucide-react";
import React from "react";
import { handleSubmit } from "./actions";

type Props = {
  userId: string;
  name: string;
  email: string;
  image?: string;
};

export default function ProfileForm({ image, name, email, userId }: Props) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [pending, setPending] = React.useState(false);
  const { toast } = useToast();

  function submitAction(data: FormData) {
    data.append("id", userId);
    handleSubmit(data, { setPending, toast });
  }

  return (
    <form className="space-y-6 max-w-lg" action={submitAction}>
      <div className="relative w-fit mx-auto">
        <Avatar
          alt=""
          avatarFallback=""
          avatarImage={image || undefined}
          className="w-24 h-24 block"
        />
        <Button
          disabled={pending}
          type="button"
          variant="ghost"
          className="rounded-full w-10 h-10 p-0 bg-foreground text-background shadow absolute -bottom-4 right-0"
          onClick={() => fileInputRef.current?.click()}
        >
          <Camera className="w-5 h-5" />
        </Button>
        <input hidden type="file" ref={fileInputRef} />
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
  );
}
