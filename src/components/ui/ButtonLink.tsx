import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "hero";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    primary:
      "rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-slate-700",
    secondary:
      "rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50",
    ghost:
      "rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50",
    // Muy parecido al botón del hero de Hario (recto, blanco, borde)
    hero:
      "rounded-none border border-white/80 bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-slate-800 shadow-soft hover:bg-white/90"
  };

  return (
    <Link href={href} className={cn("focus-ring inline-flex items-center justify-center", styles[variant], className)}>
      {children}
    </Link>
  );
}
