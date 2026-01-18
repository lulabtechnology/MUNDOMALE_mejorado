"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { site } from "@/content/site";
import IconButton from "@/components/ui/IconButton";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="focus-ring inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
        aria-label="Abrir menú"
      >
        Menú
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-3 top-3 w-[min(92vw,420px)]">
            <div className="card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">Navegación</p>
                <IconButton onClick={() => setOpen(false)} ariaLabel="Cerrar menú">
                  <X className="h-5 w-5" />
                </IconButton>
              </div>

              <nav className="mt-4 grid gap-1">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Contacto / WhatsApp
                </Link>
              </nav>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                Consejo: en FASE 4 el carrito tendrá drawer + persistencia completa.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
