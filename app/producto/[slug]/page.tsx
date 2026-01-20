"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";
import { getProductBySlug, formatPrice } from "@/content/products";
import { useCart } from "@/cart/CartContext";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const cart = useCart();
  const p = useMemo(() => getProductBySlug(params.slug), [params.slug]);
  const [qty, setQty] = useState(1);

  if (!p) {
    return (
      <section className="py-20">
        <Container>
          <div className="card p-10">
            <h1 className="font-display text-2xl font-semibold text-slate-800">Producto no encontrado</h1>
            <p className="mt-2 text-sm text-slate-600">Revisa el enlace o vuelve a la tienda.</p>
            <Link href="/tienda" className="mt-6 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-800">
              Volver a Tienda →
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const price = formatPrice(p.price, p.currency ?? "USD");
  const isQuote =
    typeof p.price !== "number" ||
    (p.badge ?? "").toLowerCase().includes("cotización") ||
    (p.badge ?? "").toLowerCase().includes("por encargo");

  return (
    <>
      <PageHero
        title={p.name}
        eyebrow={p.badge ? p.badge : p.world === "males-kitchen" ? "Male’s Kitchen" : p.world === "males-garden" ? "Male’s Garden" : "Servicios y Talleres"}
        subtitle={p.shortDescription}
        image={p.image}
        primaryCta={{ label: "Ver carrito", href: "/carrito" }}
        secondaryCta={{ label: "Volver a tienda", href: "/tienda" }}
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-extrabold text-slate-800">Precio</p>
                <p className="mt-2 text-sm text-slate-600">
                  {price ? (
                    <span className="text-lg font-semibold text-slate-800">{price}</span>
                  ) : (
                    <span className="font-semibold text-slate-700">Se confirma por WhatsApp</span>
                  )}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      aria-label="Restar"
                    >
                      −
                    </button>
                    <div className="min-w-12 text-center text-sm font-semibold text-slate-800">{qty}</div>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      aria-label="Sumar"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => cart.addProduct(p, qty)}
                    className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                  >
                    Agregar al carrito
                  </button>
                </div>

                {isQuote ? (
                  <p className="mt-4 text-xs font-semibold text-slate-600">
                    Este producto es por encargo/cotización: el total final se confirma por WhatsApp.
                  </p>
                ) : null}
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-extrabold text-slate-800">Notas</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {p.world === "males-kitchen"
                      ? "Perfecto para quesos, glaseados, aderezos con aceite de oliva o postres “á la mode”."
                      : p.world === "males-garden"
                      ? "Producto vivo o pieza decorativa: puede variar por disponibilidad/temporada."
                      : "Se coordina fecha, cupos y detalles por WhatsApp."}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-extrabold text-slate-800">Entrega</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Pick up, Delivery Ciudad o Delivery Interior (servicios externos). El costo se calcula según destino.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tienda"
                  className="focus-ring rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Volver a tienda
                </Link>
                <Link
                  href="/carrito"
                  className="focus-ring rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Ir al carrito
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
