import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";

export default function ReembolsosPage() {
  return (
    <>
      <PageHero
        title="Reembolsos y Cambios"
        eyebrow="Políticas"
        subtitle="Lineamientos generales (puedes ajustar reglas exactas cuando quieras)."
        image="/hero/hero-2.jpg"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="card p-10">
            <h2 className="font-display text-2xl font-semibold text-slate-800">Productos con precio fijo</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Si aplica, revisamos cada caso según estado del pedido y coordinación previa por WhatsApp.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-slate-800">Por encargo / Cotización</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              En productos por encargo/cotización, una vez iniciada la preparación o reservado material/agenda, normalmente
              no procede reembolso. De ser necesario, se ofrecen alternativas de crédito o reprogramación (según caso).
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-slate-800">Talleres</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Los talleres suelen requerir abono para reservar cupo/fecha. Si hay reprogramación, se gestiona con aviso
              previo y según disponibilidad.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
