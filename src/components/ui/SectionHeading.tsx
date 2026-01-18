import { cn } from "@/lib/cn";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter ? "text-center" : "text-left", className)}>
      <h2 className="font-display text-3xl tracking-tight text-slate-800 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mt-3 text-sm leading-6 text-slate-600", isCenter ? "mx-auto max-w-2xl" : "max-w-2xl")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
