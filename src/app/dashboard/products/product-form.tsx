"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH2, TypographyLarge } from "@/components/ui/typography";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Loader, Upload } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { handleCreateProduct, handleUpdateProduct } from "./actions";
import { useProductForm } from "./use-product-form";

type ProductFormProps = {
  action?: "create" | "update";
  currentUserId: string;
};

const ACTIONS = {
  create: handleCreateProduct,
  update: handleUpdateProduct,
};

export default function ProductForm({
  action = "create",
  currentUserId,
}: ProductFormProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { getRootProps, getInputProps, isDragActive, image, loadingFile } =
    useProductForm(pending);

  const formAction = ACTIONS[action];
  const isLoading = pending || loadingFile;

  const handleSubmitAction = (formData: FormData) => {
    if (!image) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Debes subir una imagen para el producto",
      });

      return;
    }

    startTransition(async () => {
      formData.append("image", image.fileUrl);
      formData.append("userId", currentUserId);
      const res = await formAction(formData);

      if (res.error) {
        for (const error of res.issues) {
          toast({
            variant: "destructive",
            title: "Error",
            description: error.message,
          });
        }
      }

      toast({
        title: "Producto agregado",
        description: "El producto ha sido agregado exitosamente.",
      });
    });

    router.push("/dashboard/products");
  };

  return (
    <form action={handleSubmitAction} className="pb-12 pr-6 mt-8">
      <TypographyH2 className="mb-4">Información del producto</TypographyH2>
      <div className="border-b border-foreground/30 mb-6" />

      <section className="max-w-xl space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" name="name" disabled={isLoading} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descripción</Label>
          <Textarea id="description" name="description" disabled={isLoading} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Precio</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            disabled={isLoading}
          />
        </div>
      </section>

      <section className="mt-8">
        <TypographyH2 className="mb-4">Detalles del producto</TypographyH2>
        <div className="border-b border-foreground/30 mb-6" />

        <TypographyLarge className="mb-2">Subir imagen</TypographyLarge>
        <div
          {...getRootProps()}
          className={cn(
            "border-foreground/30 rounded-md px-4 py-6 text-foreground/60 max-w-xl border-2",
            isDragActive && "border-dashed border-primary"
          )}
        >
          <input {...getInputProps()} disabled={isLoading} />
          <div className="text-center min-h-[120px] flex flex-col justify-center">
            {loadingFile ? (
              <Loader className="w-6 h-6 mx-auto animate-spin" />
            ) : (
              <Upload className="w-6 h-6 mx-auto mb-2" />
            )}

            {loadingFile ? null : isDragActive ? (
              <p className="text-sm">Suelta el archivo aquí.</p>
            ) : (
              <>
                <p className="text-sm">
                  Arrastra una imágen, o dale click para escoger una.
                </p>

                <p className="text-xs mt-4">
                  Tamaño máximo: 2MB. Formatos: PNG, JPG, JPEG.
                </p>
              </>
            )}
          </div>
        </div>
        {image && (
          <figure className="mt-2">
            <Image
              className="rounded-md shadow-sm"
              src={image.fileUrl}
              alt={image.fileKey}
              width={200}
              height={200}
            />
          </figure>
        )}
      </section>

      <footer className="max-w-xl mt-8">
        <Button disabled={isLoading} type="submit" className="block ml-auto">
          {pending ? (
            <Loader className="w-4 h-4 animate-spin" />
          ) : (
            "Agregar producto"
          )}
        </Button>
      </footer>
    </form>
  );
}
