"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";

import TopBar from "@/components/site/TopBar";
import Brand from "@/components/site/Brand";
import MobileMenu from "@/components/site/MobileMenu";
import Badge from "@/components/ui/Badge";
import IconButton from "@/components/ui/IconButton";
import { useCart } from "@/cart/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Header() {
  const cart = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <TopBar />

      <div className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container-pad">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <Brand />

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

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 lg:hidden"
                aria-label="Buscar (placeholder)"
                onClick={() => {
                  const el = document.getElementById("best-sellers");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                aria-label="Abrir carrito"
              >
                <ShoppingBag className="h-5 w-5" />
                {cart.itemCount > 0 ? (
                  <span className="absolute -right-1 -top-1">
                    <Badge>{cart.itemCount}</Badge>
                  </span>
                ) : null}
              </button>

              <IconButton ariaLabel="Abrir menú" onClick={() => setMenuOpen(true)} className="lg:hidden">
                <Menu className="h-5 w-5" />
              </IconButton>

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
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
