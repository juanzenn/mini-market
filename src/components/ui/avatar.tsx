"use client";

import { cn } from "@/lib/utils";
import * as RadixAvatar from "@radix-ui/react-avatar";
import React from "react";

type Props = {
  avatarImage?: string;
  alt: string;
  avatarFallback: string;
} & React.ComponentProps<typeof RadixAvatar.Root>;

export default function Avatar({
  avatarFallback,
  avatarImage,
  alt,
  ...rest
}: Props) {
  return (
    <RadixAvatar.Root
      {...rest}
      className={cn(
        "bg-background inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle",
        rest.className
      )}
    >
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={avatarImage}
        alt={alt}
      />
      <RadixAvatar.Fallback
        className="flex h-full w-full items-center justify-center font-bold border rounded-[inherit] text-foreground bg-border/10 text-lg"
        delayMs={600}
      >
        {avatarFallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
