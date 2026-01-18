"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/content/products";
import { useCart } from "@/cart/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const cart = useCart();

  const price = formatPrice(product.price, product.currency ?? "USD");
  const badge = product.badge;

  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {badge ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-xs font-extrabold text-slate-700">
            {badge}
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-slate-800">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            href={`/producto/${product.slug}`}
            className="focus-ring rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Ver
          </Link>

          <button
            type="button"
            className="focus-ring rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            onClick={() => cart.addProduct(product, 1)}
          >
            Agregar
          </button>
        </div>

        <div className="mt-4">
          {price ? (
            <p className="text-sm font-semibold text-slate-800">{price}</p>
          ) : (
            <p className="text-xs font-semibold text-slate-600">Precio: se confirma por WhatsApp</p>
          )}
        </div>
      </div>
    </div>
  );
}
