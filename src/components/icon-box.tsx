import { cn } from "@/lib/utils";
import { ElementType } from "react";

export default function IconBox({
  icon: Icon,
  className,
  iconClassName,
  variant = "primary",
  title,
}: {
  icon: ElementType;
  className?: string;
  iconClassName?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  title?: string;
}) {
  const variants = {
    primary: "bg-foreground",
    secondary: "bg-secondary",
    outline: "border border-px",
    ghost: "",
  };
  return (
    <span
      className={cn(
        "rounded-lg shadow p-2 flex flex-col gap-2 justify-center items-center h-fit w-fit aspect-square",
        variants[variant],
        className
      )}
    >
      <Icon className={cn("size-5 stroke-1 shrink-0", iconClassName)} />
      {title && (
        <h3 className="font-poppins text-xs tracking-tight font-medium text-center leading-tight text-muted-foreground">
          {title}
        </h3>
      )}
    </span>
  );
}
