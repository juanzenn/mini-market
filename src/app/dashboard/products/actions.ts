"use server";

import { db } from "@/lib/db";
import { ZodError, z } from "zod";

const productSchema = z.object({
  name: z.string().trim().min(3, "El nombre debe tener al menos 3 caracteres."),
  description: z
    .string()
    .trim()
    .min(3, "La descripción debe tener al menos 3 caracteres."),
  price: z
    .number({
      invalid_type_error: "El precio debe ser un número.",
    })
    .min(0.01, "El precio debe ser mayor a 0."),
  image: z.string().trim().nonempty("Debes subir una imagen."),
  userId: z.string().trim(),
});

function validateProduct(formData: FormData) {
  const parsedForm = Object.fromEntries(formData.entries());
  const product = {
    name: parsedForm.name,
    description: parsedForm.description,
    price: parseFloat(parsedForm.price as string),
    image: parsedForm.image,
    userId: parsedForm.userId,
  };
  const validator = productSchema.safeParse(product);

  if (!validator.success) {
    return validator.error;
  }

  return validator.data;
}

export async function handleCreateProduct(formData: FormData) {
  const product = validateProduct(formData);
  function validateRequest() {
    const isError = product instanceof ZodError;

    return {
      error: Boolean(isError),
      issues: isError ? product.issues : [],
      data: isError ? undefined : product,
    };
  }

  const req = validateRequest();

  if (req.error || !req.data) {
    return req;
  }

  const { data } = req;

  const prismaRes = await db.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
      ownerId: data.userId,
    },
  });

  return {
    error: false,
    issues: [],
    data: prismaRes,
  };
}

export async function handleUpdateProduct() {
  return {
    error: false,
    issues: [],
    data: undefined,
  };
}
