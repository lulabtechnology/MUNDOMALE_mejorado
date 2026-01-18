"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useCart } from "@/cart/CartContext";
import { site } from "@/content/site";
import { waMeLink } from "@/lib/links";
import { buildWhatsAppMessage } from "@/cart/whatsapp";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const cart = useCart();

  if (!open) return null;

  const message = buildWhatsAppMessage({
    items: cart.items,
    pricedSubtotal: cart.pricedSubtotal,
    hasQuoteItems: cart.hasQuoteItems,
    delivery: "pickup",
    name: "",
    address: ""
  });

  const waHref = waMeLink(site.contact.whatsappNumber, message);

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <aside className="absolute right-0 top-0 h-full w-[min(94vw,440px)] bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-slate-800">Carrito</p>
            <p className="text-xs text-slate-600">{cart.itemCount} artículo(s)</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-[calc(100%-220px)] overflow-auto px-6 py-5">
          {cart.items.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              Tu carrito está vacío.
              <div className="mt-4">
                <Link href="/tienda" onClick={onClose} className="text-sm font-semibold text-slate-700 hover:text-slate-800">
                  Ir a la tienda →
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((it) => (
                <div key={it.id} className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-semibold text-slate-800">{it.name}</p>
                      <p className="mt-1 text-xs text-slate-600">
                        {typeof it.price === "number" ? `$${it.price.toFixed(2)} c/u` : "Cotización/Por encargo"}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => cart.dec(it.id)}
                        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        aria-label="Restar"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold text-slate-800">{it.qty}</span>
                      <button
                        type="button"
                        onClick={() => cart.inc(it.id)}
                        className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        aria-label="Sumar"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => cart.remove(it.id)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-800"
                    >
                      Eliminar
                    </button>

                    <span className="text-xs font-semibold text-slate-700">
                      {typeof it.price === "number" ? `$${(it.price * it.qty).toFixed(2)}` : "—"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 px-6 py-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal (con precio)</span>
            <span className="font-semibold text-slate-800">${cart.pricedSubtotal.toFixed(2)}</span>
          </div>

          {cart.hasQuoteItems ? (
            <p className="mt-2 text-xs font-semibold text-slate-600">
              Total estimado: sujeto a cotización/por encargo.
            </p>
          ) : null}

          <div className="mt-4 grid gap-2">
            <Link
              href="/carrito"
              onClick={onClose}
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Ver carrito
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Enviar por WhatsApp (Pick up)
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
