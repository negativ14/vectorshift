import { cn } from "@/lib/utils";
import React from "react";

export default function Heading({
  children,
  as = "h2",
  className,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = as || "h2";
  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl lg:text-6xl tracking-tight font-poppins font-medium",
        className
      )}
    >
      {children}
    </Tag>
  );
}
