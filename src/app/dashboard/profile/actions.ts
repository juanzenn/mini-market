"use server";

import { db } from "@/lib/db";

export async function updateProfile(formData: FormData) {
  await db.user.update({
    data: {
      name: formData.get("name") as string,
    },
    where: {
      id: formData.get("id") as string,
    },
  });
}

export async function updateAvatar(str: string) {
  console.log(str);
}
