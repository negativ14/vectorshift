import { cn } from "@/lib/utils";

export default function GridBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px)] bg-size-[40px_40px] opacity-20",
        className
      )}
    />
  );
}
