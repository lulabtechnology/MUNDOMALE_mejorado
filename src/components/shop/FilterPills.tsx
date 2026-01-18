"use client";

import { cn } from "@/lib/cn";

export default function FilterPills({
  options,
  value,
  onChange
}: {
  options: string[];
  value: string;
  onChange: (next: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm font-semibold",
              active
                ? "border-slate-300 bg-slate-800 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
