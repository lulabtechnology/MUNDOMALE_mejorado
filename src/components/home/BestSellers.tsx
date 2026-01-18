"use client";

import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCart } from "@/cart/CartContext";
import { getProductBySlug, formatPrice } from "@/content/products";

export default function BestSellers() {
  const cart = useCart();

  const p1 = getProductBySlug("mermelada-bacon");
  const p2 = getProductBySlug("terrarios-por-encargo");
  const p3 = getProductBySlug("cata-a-ciegas");

  const list = [p1, p2, p3].filter(Boolean) as NonNullable<typeof p1>[];

  return (
    <section id="best-sellers" className="bg-rose-50/40 py-20">
      <div className="container-pad">
        <SectionHeading
          title="Productos Nuevos"
          subtitle="Selección destacada por mundo. Aireado, premium y consistente en móvil/desktop."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const price = formatPrice(p.price, p.currency ?? "USD");
            return (
              <div key={p.id} className="card overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image src={p.image} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  {p.badge ? (
                    <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-xs font-extrabold text-slate-700">
                      {p.badge}
                    </div>
                  ) : null}
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-slate-600">
                    {p.world === "males-kitchen" ? "Male’s Kitchen" : p.world === "males-garden" ? "Male’s Garden" : "Servicios y Talleres"}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-slate-800">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{p.shortDescription}</p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <ButtonLink
                      href={p.world === "males-kitchen" ? "/tienda/males-kitchen" : p.world === "males-garden" ? "/tienda/males-garden" : "/tienda/servicios-y-talleres"}
                      variant="secondary"
                      className="px-4 py-2"
                    >
                      Ver categoría
                    </ButtonLink>

                    <button
                      type="button"
                      className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                      onClick={() => cart.addProduct(p, 1)}
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
          })}
        </div>
      </div>
    </section>
  );
}
