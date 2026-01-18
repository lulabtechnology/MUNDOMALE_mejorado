"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { site } from "@/content/site";
import IconButton from "@/components/ui/IconButton";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute right-0 top-0 h-full w-[min(92vw,420px)] bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <p className="text-sm font-semibold text-slate-800">Menú</p>
          <IconButton onClick={onClose} ariaLabel="Cerrar menú">
            <X className="h-5 w-5" />
          </IconButton>
        </div>

        <nav className="px-3 py-3">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="focus-ring block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-6 pt-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600">
            <p className="font-semibold text-slate-700">Pedidos por WhatsApp</p>
            <p className="mt-1">
              No hay pago en línea. Armamos el carrito y enviamos el pedido por WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
