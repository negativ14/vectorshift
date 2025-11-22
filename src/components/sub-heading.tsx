import { cn } from "@/lib/utils";
import React from "react";

export default function SubHeading({
  children,
  as = "p",
  className,
}: {
  children: React.ReactNode;
  as?: "p" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as || "p";
  return (
    <Tag
      className={cn(
        "text-base md:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl font-mono",
        className
      )}
    >
      {children}
    </Tag>
  );
}
