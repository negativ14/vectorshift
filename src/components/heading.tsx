import { cn } from "@/lib/utils";
import React from "react";

export default function Heading({
  children,
  as = "h2",
  className,
  variant = "mid",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  variant?: "big" | "mid" | "small";
}) {
  const Tag = as || "h2";

  const variants = {
    big: "text-2xl md:text-4xl lg:text-6xl",
    mid: "text-2xl md:text-4xl lg:text-4xl",
    small: "text-xl md:text-2xl lg:text-2xl font-normal",
  };
  return (
    <Tag
      className={cn(
        "tracking-tight font-poppins font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
