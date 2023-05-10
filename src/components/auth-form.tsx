"use client";

import { signIn } from "next-auth/react";
import React, { FormEvent } from "react";
import { Button } from "./ui/button";

export default function AuthForm() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    signIn("email", { email: inputRef.current?.value, callbackUrl: "/" });
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col w-[200px] gap-4">
        <input ref={inputRef} type="email" className="text-black" />

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
