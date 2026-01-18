"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import TopBar from "@/components/site/TopBar";
import Brand from "@/components/site/Brand";
import MobileMenu from "@/components/site/MobileMenu";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";
import IconLink from "@/components/ui/IconLink";
import { getCartCountSafe } from "@/lib/cartStorage";

export default function Header() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container-pad">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <Brand />

            {/* Desktop nav minimal y aireado */}
            <nav className="hidden items-center gap-1 lg:flex">
              <Link href="/" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Inicio
              </Link>
              <Link href="/tienda" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Tienda
              </Link>
              <Link href="/nosotros" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Nosotros
              </Link>
              <Link href="/preguntas-frecuentes" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Preguntas frecuentes
              </Link>
              <Link href="/contacto" className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Contacto/WhatsApp
              </Link>
            </nav>

            {/* Mobile icons como Hario: search + cart + hamburger */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 lg:hidden"
                aria-label="Buscar (placeholder)"
                onClick={() => {
                  // placeholder: en FASE 3 podemos hacer scroll a la sección productos
                  const el = document.getElementById("best-sellers");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <Search className="h-5 w-5" />
              </button>

              <div className="relative">
                <IconLink href="/carrito" ariaLabel="Carrito">
                  <ShoppingBag className="h-5 w-5" />
                </IconLink>
                {count > 0 && (
                  <span className="absolute -right-1 -top-1">
                    <Badge>{count}</Badge>
                  </span>
                )}
              </div>

              <IconButton
                ariaLabel="Abrir menú"
                onClick={() => setMenuOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </IconButton>

              {/* Desktop CTA */}
              <Link
                href="/contacto"
                className="focus-ring hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-700 hover:bg-slate-50 lg:inline-flex"
              >
                Escribir por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
