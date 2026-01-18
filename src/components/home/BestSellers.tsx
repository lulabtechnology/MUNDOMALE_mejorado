"use client";

import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { addToCartLite } from "@/lib/cartStorage";

type Card = {
  id: string;
  world: string;
  title: string;
  note: string;
  image: string;
  categoryHref: string;
  price?: number;
  badge?: "Por encargo" | "Cotización" | "Próximamente";
};

export default function BestSellers() {
  const cards: Card[] = [
    {
      id: "kitchen-mermelada-bacon",
      world: "Male’s Kitchen",
      title: "Mermelada Bacón",
      note: "Pedido especial. Frasco 6oz.",
      image: "/products/kitchen/mermeladas-01.jpg",
      categoryHref: "/tienda/males-kitchen",
      price: 20
    },
    {
      id: "garden-terrario",
      world: "Male’s Garden",
      title: "Terrario (por encargo)",
      note: "Diseño a medida según espacio y estilo.",
      image: "/products/garden/garden-01.jpg",
      categoryHref: "/tienda/males-garden",
      badge: "Por encargo"
    },
    {
      id: "services-cata",
      world: "Servicios y Talleres",
      title: "Cata a ciegas",
      note: "Experiencia guiada. Coordinación previa.",
      image: "/products/services/service-01.jpg",
      categoryHref: "/tienda/servicios-y-talleres",
      badge: "Cotización"
    }
  ];

  return (
    <section id="best-sellers" className="bg-rose-50/40 py-20">
      <div className="container-pad">
        <SectionHeading
          title="Productos Nuevos"
          subtitle="Selección destacada por mundo. Mucho aire, lectura clara, y una experiencia que se siente premium en móvil y desktop."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.id} className="card overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image src={c.image} alt={c.title} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
                {c.badge ? (
                  <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-xs font-extrabold text-slate-700">
                    {c.badge}
                  </div>
                ) : null}
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-slate-600">{c.world}</p>
                <h3 className="mt-2 font-display text-xl tracking-tight text-slate-800">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{c.note}</p>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <ButtonLink href={c.categoryHref} variant="secondary" className="px-4 py-2">
                    Ver categoría
                  </ButtonLink>

                  <button
                    type="button"
                    className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                    onClick={() =>
                      addToCartLite({
                        id: c.id,
                        name: c.title,
                        price: c.price,
                        note: c.badge ? c.badge : undefined
                      })
                    }
                    aria-label={`Agregar ${c.title} al carrito`}
                  >
                    Agregar al carrito
                  </button>
                </div>

                {typeof c.price === "number" ? (
                  <p className="mt-4 text-sm font-semibold text-slate-800">${c.price.toFixed(2)}</p>
                ) : (
                  <p className="mt-4 text-xs font-semibold text-slate-600">Precio: se confirma por WhatsApp</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
