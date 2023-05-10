import { buttonVariants } from "@/components/ui/button";
import { TypographyH1, TypographyH4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <section className="flex flex-col text-center pt-44">
      <TypographyH1 className="mb-2">Mini-Market</TypographyH1>
      <TypographyH4 className="font-medium mb-8">
        Comercia tus productos en línea de manera fácil y segura
      </TypographyH4>

      <div className="space-x-6">
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            })
          )}
          href="#"
        >
          Descubrir productos
        </Link>
        <Link
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            })
          )}
          href="/login"
        >
          Empezar a comerciar
        </Link>
      </div>
    </section>
  );
}
