import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

type TypographyProps<T> = HTMLProps<T>;

export function TypographyH1(props: TypographyProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: TypographyProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: TypographyProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      )}
    >
      {props.children}
    </h3>
  );
}

export function TypographyH4(props: TypographyProps<HTMLHeadingElement>) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className
      )}
    >
      {props.children}
    </h4>
  );
}

export function TypographyP(props: TypographyProps<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
    >
      {props.children}
    </p>
  );
}

export function TypographyLarge(props: TypographyProps<HTMLDivElement>) {
  return (
    <div {...props} className={cn("text-lg font-semibold", props.className)}>
      {props.children}
    </div>
  );
}

export function TypographyMuted(props: TypographyProps<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={cn("text-sm text-muted-foreground", props.className)}
    >
      {props.children}
    </p>
  );
}
