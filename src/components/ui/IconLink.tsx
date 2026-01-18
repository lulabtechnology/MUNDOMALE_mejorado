import Link from "next/link";
import { cn } from "@/lib/cn";

export default function IconLink({
  href,
  ariaLabel,
  children,
  className
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
        className
      )}
    >
      {children}
    </Link>
  );
}
