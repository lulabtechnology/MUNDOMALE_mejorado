import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";

export default function TerminosPage() {
  return (
    <>
      <PageHero
        title="Términos y Condiciones"
        eyebrow="Legal"
        subtitle="Condiciones generales para pedidos, productos por encargo y servicios."
        image="/hero/hero-1.jpg"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="card p-10">
            <h2 className="font-display text-2xl font-semibold text-slate-800">Pedidos</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Los pedidos se confirman por WhatsApp. Algunos productos/servicios pueden requerir coordinación previa
              (disponibilidad, fechas, tamaños, ingredientes/elementos).
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-slate-800">Pagos</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              No existe pago en línea. El pago se coordina antes de preparar/entregar. Para talleres, puede requerirse abono.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-slate-800">Disponibilidad y variaciones</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              En productos vivos (plantas/flores) pueden existir variaciones por temporada y disponibilidad. Nuestro objetivo
              es mantener un resultado final de alta calidad y coherente con el estilo de Mundo de Male.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
