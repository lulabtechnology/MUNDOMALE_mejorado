import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";
import PageHero from "@/components/site/PageHero";
import { products } from "@/content/products";

export default function TiendaPage() {
  const featured = products.slice(0, 6);

  return (
    <>
      <PageHero
        title="Tienda"
        eyebrow="Mundo de Male"
        subtitle="Explora nuestros 3 mundos: Kitchen, Garden y Servicios/Talleres. Diseño aireado y consistente en móvil y desktop."
        image="/hero/hero-2.jpg"
        primaryCta={{ label: "Ver destacados", href: "#destacados", variant: "primary" }}
        secondaryCta={{ label: "Ver mundos", href: "#mundos", variant: "secondary" }}
        height="tall"
      />

      <section id="mundos" className="bg-white py-16">
        <Container>
          <SectionHeading
            align="left"
            title="Los 3 mundos"
            subtitle="Colecciones grandes, limpias y con buena respiración visual."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Male’s Garden",
                desc: "Arreglos, plantas y piezas vivas por encargo.",
                href: "/tienda/males-garden",
                img: "/products/garden/garden-02.jpg"
              },
              {
                title: "Male’s Kitchen",
                desc: "Jaleas, confituras, mermeladas y chutneys.",
                href: "/tienda/males-kitchen",
                img: "/products/kitchen/jaleas-01.jpg"
              },
              {
                title: "Servicios y Talleres",
                desc: "Experiencias, eventos, talleres y decoraciones.",
                href: "/tienda/servicios-y-talleres",
                img: "/products/services/service-02.jpg"
              }
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
              >
                <div className="relative h-[280px] w-full sm:h-[340px]">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/12 to-transparent" />
                </div>

                <div className="absolute bottom-0 p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/90">{t.desc}</p>

                  <span className="mt-4 inline-flex rounded-none border border-white/80 bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-slate-800">
                    Ver colección
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="destacados" className="bg-rose-50/40 py-20">
        <Container>
          <SectionHeading
            title="Destacados"
            subtitle="Selección rápida para empezar a armar tu carrito."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
