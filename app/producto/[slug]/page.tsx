import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getProductBySlug, formatPrice } from "@/content/products";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug);

  if (!p) {
    return (
      <section className="py-20">
        <Container>
          <div className="card p-10">
            <SectionHeading align="left" title="Producto no encontrado" subtitle="Revisa el enlace o vuelve a la tienda." />
            <Link href="/tienda" className="mt-6 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-800">
              Volver a Tienda →
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const price = formatPrice(p.price, p.currency ?? "USD");

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
          </div>

          <div>
            <SectionHeading align="left" title={p.name} subtitle={p.shortDescription} />

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              <p className="font-semibold text-slate-700">Detalle (placeholder)</p>
              <p className="mt-2">
                En FASE 5 se implementa el detalle completo (galería, descripción extendida, recomendaciones y UX final).
              </p>
            </div>

            <div className="mt-6">
              {price ? (
                <p className="text-lg font-semibold text-slate-800">{price}</p>
              ) : (
                <p className="text-sm font-semibold text-slate-600">Precio: se confirma por WhatsApp</p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/tienda"
                className="focus-ring rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Volver a tienda
              </Link>

              <Link
                href="/carrito"
                className="focus-ring rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Ir al carrito
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
