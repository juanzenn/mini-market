import { buttonVariants } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import { getCurrentUser } from "@/lib/session";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProductForm from "../product-form";

export default async function CreateProductPage() {
  const user = await getCurrentUser();

  if (!user.id) return null;

  return (
    <>
      <Link
        className={buttonVariants({
          variant: "ghost",
          class: "mb-4",
        })}
        href="/dashboard/products"
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Mis productos
      </Link>

      <TypographyH1 className="mb-6">Agregar producto</TypographyH1>

      <ProductForm currentUserId={user.id} />
    </>
  );
}
