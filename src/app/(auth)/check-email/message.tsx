"use client";

import { TypographyH1, TypographyMuted } from "@/components/ui/typography";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Plane } from "lucide-react";
import React from "react";

export default function CheckEmailMessage() {
  return (
    <>
      <AccessibleIcon label="Avión">
        <figure className="block mx-auto mb-4 bg-primary p-4 rounded-full w-fit">
          <Plane className="w-8 h-8" />
        </figure>
      </AccessibleIcon>
      <TypographyH1 className="mb-4">
        Se le ha enviado un correo electrónico
      </TypographyH1>
      <TypographyMuted className="text-lg max-w-lg mx-auto">
        Verifique su correo eletrónico para iniciar sesión con el link en él.
        Será redirigido al dashboard.
      </TypographyMuted>
    </>
  );
}
