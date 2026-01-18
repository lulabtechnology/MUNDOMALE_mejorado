import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image src={site.brand.logo} alt={site.brand.name} fill sizes="44px" className="object-contain p-2" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-slate-800">
                  {site.brand.name}
                </p>
                <p className="text-sm text-slate-600">Artesanal • Por encargo • Hecho con intención</p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              {site.brand.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">Menú</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-slate-800">
                  {item.label}
                </Link>
              ))}
              <Link href="/tienda" className="hover:text-slate-800">Tienda</Link>
              <Link href="/carrito" className="hover:text-slate-800">Carrito</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">Redes / Contacto</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              <a href={site.contact.instagramUrl} className="hover:text-slate-800" target="_blank" rel="noreferrer">
                Instagram (placeholder)
              </a>
              <Link href="/contacto" className="hover:text-slate-800">
                WhatsApp (placeholder)
              </Link>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600">
              <p className="font-medium text-slate-700">Nota</p>
              <p className="mt-1">
                No hay pago en línea. El pedido se envía por WhatsApp con el resumen del carrito.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-xs text-slate-600">
          {site.footer.legal}
        </div>
      </Container>
    </footer>
  );
}
