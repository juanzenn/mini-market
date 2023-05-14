import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user as Session["user"] & { id?: string | null };
}
