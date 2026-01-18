import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <section className="py-16">
      <Container>
        <div className="card p-8 sm:p-10">
          <p className="text-sm font-medium text-slate-600">FASE 1</p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-slate-800 sm:text-4xl">
            Base lista: Layout, tipografías, Header/Footer y WhatsApp
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            En la siguiente fase construiremos el Home completo con estructura similar a la referencia (Hero, Best Sellers,
            Nosotros, Tiles de colecciones, sección Info), manteniendo la paleta sin negro puro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/tienda"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-soft"
            >
              Ver tienda (placeholder)
            </a>
            <a
              href="/carrito"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700"
            >
              Ir al carrito (placeholder)
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
