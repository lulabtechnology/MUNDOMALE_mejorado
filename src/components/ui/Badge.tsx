export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-slate-800 px-1.5 py-0.5 text-[11px] font-semibold text-slate-50">
      {children}
    </span>
  );
}
