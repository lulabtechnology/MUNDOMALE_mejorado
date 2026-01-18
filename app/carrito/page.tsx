import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CarritoPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="card p-10">
          <SectionHeading
            align="left"
            title="Carrito"
            subtitle="En FASE 4 se implementa el carrito completo (sumar/restar/eliminar) y el checkout por WhatsApp."
          />
          <p className="mt-4 text-sm text-slate-600">
            En esta fase, el botón “Agregar al carrito” del Home solo actualiza el contador para UX.
          </p>
        </div>
      </Container>
    </section>
  );
}
