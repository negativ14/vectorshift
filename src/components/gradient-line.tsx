import { cn } from "@/lib/utils";

export default function GradientLines({
  className,
  delay,
  gradientClassName,
}: {
  className: string;
  delay: string;
  gradientClassName?: string;
}) {
  return (
    <div
      className={cn(
        "absolute hidden lg:block w-px h-31 bg-muted overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "w-px h-10 bg-linear-to-t from-primary to-primary/0 animate-flow",
          gradientClassName
        )}
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  );
}
