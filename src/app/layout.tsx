import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
});

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
      <body className={`${inter.variable} ${themeClass}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
