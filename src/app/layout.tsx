import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

export const metadata = {
  title: "Mini Market",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeCookie = cookies().get("theme")?.value as
    | "light"
    | "dark"
    | undefined;

  const themeClass = !themeCookie ? "dark" : themeCookie;

  return (
    <html lang="es">
      <body className={`${inter.className} ${themeClass}`}>{children}</body>
    </html>
  );
}
