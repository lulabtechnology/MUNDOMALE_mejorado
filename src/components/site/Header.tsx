"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import TopBar from "@/components/site/TopBar";
import Brand from "@/components/site/Brand";
import MobileMenu from "@/components/site/MobileMenu";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";
import { site } from "@/content/site";
import { getCartCountSafe } from "@/lib/cartStorage";

import { useEffect, useState } from "react";

export default function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCartCountSafe());

    function onStorage() {
      setCount(getCartCountSafe());
    }

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <TopBar />

      <div className="border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="container-pad">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Brand />
            </div>

            <nav className="hidden items-center gap-1 lg:flex">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contacto/WhatsApp
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/contacto"
                className="focus-ring hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 lg:inline-flex"
              >
                Escribir por WhatsApp
              </Link>

              <Link href="/carrito" className="relative">
                <IconButton ariaLabel="Abrir carrito">
                  <ShoppingBag className="h-5 w-5" />
                </IconButton>
                {count > 0 && (
                  <span className="absolute -right-1 -top-1">
                    <Badge>{count}</Badge>
                  </span>
                )}
              </Link>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
