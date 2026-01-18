import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Brand() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 focus-ring rounded-2xl">
      <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image
          src={site.brand.logo}
          alt={site.brand.name}
          fill
          sizes="40px"
          className="object-contain p-1.5"
          priority
        />
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg font-semibold tracking-tight text-slate-800">
          {site.brand.name}
        </div>
        <div className="text-xs text-slate-600">Male’s Kitchen • Garden • Talleres</div>
      </div>
    </Link>
  );
}
