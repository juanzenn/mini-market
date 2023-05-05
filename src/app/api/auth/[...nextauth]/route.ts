import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const nextAuthHandler = NextAuth(authOptions);

export { nextAuthHandler as GET, nextAuthHandler as POST };
