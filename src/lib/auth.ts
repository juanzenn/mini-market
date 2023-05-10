import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import { db } from "./db";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      // server: {
      //   host: process.env.EMAIL_SERVER_HOST!,
      //   port: +process.env.EMAIL_SERVER_PORT!,
      //   auth: {
      //     user: process.env.EMAIL_SERVER_USER!,
      //     pass: process.env.EMAIL_SERVER_PASSWORD!,
      //   },
      // },
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
