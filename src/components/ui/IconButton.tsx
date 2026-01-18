import { cn } from "@/lib/cn";

export default function IconButton({
  children,
  onClick,
  ariaLabel,
  className
}: {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
        className
      )}
    >
      {children}
    </button>
  );
}
