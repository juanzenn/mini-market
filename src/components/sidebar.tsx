import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  return (
    <aside className="min-w-[200px] h-full border-foreground/20 border-r pr-4">
      <ul className="space-y-2 relative flex flex-col h-full justify-between">
        {children}
      </ul>
    </aside>
  );
}

function SidebarItem({
  children,
  Icon,
  href,
  classes,
  ...rest
}: React.ComponentProps<typeof Link> & {
  Icon: LucideIcon;
  classes?: {
    root?: string;
  };
}) {
  const pathname = usePathname();
  const isActiveHref = pathname === href;

  return (
    <li className={cn(classes?.root)}>
      <Link
        href={href}
        className={cn(sidebarItemVariants({ active: isActiveHref }))}
        {...rest}
      >
        <Icon className="mr-2 w-4 h-4" />
        {children}
      </Link>
    </li>
  );
}

function SidebarDrawerItem({
  children,
  Icon,
  href,
  label,
  ...rest
}: React.HTMLProps<HTMLLIElement> & { Icon: LucideIcon }) {
  const [open, setOpen] = useState(false);
  const ChevronIcon = open ? ChevronRight : ChevronDown;

  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center px-4 py-2 text-sm font-medium rounded text-foreground/60 hover:bg-foreground/10 transition-colors"
        {...rest}
      >
        <Icon className="mr-2 w-4 h-4" />
        {label}
        <ChevronIcon className="ml-auto w-4 h-4" />
      </li>
      {open && <ul className="pl-4 space-y-2">{children}</ul>}
    </>
  );
}

const sidebarItemVariants = cva(
  "flex items-center px-4 py-2 text-sm font-medium rounded text-foreground/60",
  {
    variants: {
      active: {
        true: "bg-foreground/20 text-foreground",
        false: "hover:bg-foreground/10 transition-colors",
      },
    },
  }
);

Sidebar.Item = SidebarItem;
Sidebar.DrawerItem = SidebarDrawerItem;
