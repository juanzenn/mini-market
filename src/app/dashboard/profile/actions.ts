"use server";

import { db } from "@/lib/db";

type HandleSubmitOptions = {
  setPending: (pending: boolean) => void;
  toast: (options: { title: string; description: string }) => void;
};

export async function handleSubmit(
  formData: FormData,
  { setPending, toast }: HandleSubmitOptions
) {
  console.log("handleSubmit");
  setPending(true);

  await db.user.update({
    data: {
      name: formData.get("name") as string,
    },
    where: {
      id: formData.get("id") as string,
    },
  });

  setPending(false);
  toast({
    title: "Perfil actualizado",
    description: "Tu perfil ha sido actualizado correctamente.",
  });
}
