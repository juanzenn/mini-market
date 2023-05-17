import { buttonVariants } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function ProductsPage() {
  const user = await getCurrentUser();

  if (!user.id) return null;

  const products = await db.product.findMany({
    where: {
      ownerId: user.id,
    },
  });

  return (
    <>
      <TypographyH1 className="mb-6">Mis productos</TypographyH1>

      <section className="flex w-full justify-end">
        <Link
          className={buttonVariants({
            variant: "default",
          })}
          href="/dashboard/products/create"
        >
          Agregar producto
          <Plus className="ml-2 w-4 h-4" />
        </Link>
      </section>

      <ul className="space-y-4 list-disc px-6">
        {products?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
