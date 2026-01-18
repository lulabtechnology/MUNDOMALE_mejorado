"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { CartItem } from "@/cart/cartStorage";
import { useCart } from "@/cart/CartContext";

export default function CartItemRow({ item }: { item: CartItem }) {
  const cart = useCart();

  const showPrice = typeof item.price === "number";
  const badge = item.badge;

  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4">
      <div className="relative h-20 w-20 flex-none overflow-hidden rounded-2xl bg-slate-100">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/producto/${item.slug}`}
              className="focus-ring inline-block rounded-xl font-display text-base font-semibold text-slate-800 hover:underline"
            >
              {item.name}
            </Link>
            <div className="mt-1 text-xs font-semibold text-slate-600">
              {badge ? badge : showPrice ? "Precio fijo" : "Cotización/Por encargo"}
            </div>
          </div>

          <button
            type="button"
            onClick={() => cart.remove(item.id)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            aria-label="Eliminar"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => cart.dec(item.id)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              aria-label="Restar"
            >
              −
            </button>

            <div className="min-w-12 text-center text-sm font-semibold text-slate-800">
              {item.qty}
            </div>

            <button
              type="button"
              onClick={() => cart.inc(item.id)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              aria-label="Sumar"
            >
              +
            </button>
          </div>

          <div className="text-sm font-semibold text-slate-800">
            {showPrice ? `$${(item.price! * item.qty).toFixed(2)}` : "Se confirma por WhatsApp"}
          </div>
        </div>
      </div>
    </div>
  );
}
