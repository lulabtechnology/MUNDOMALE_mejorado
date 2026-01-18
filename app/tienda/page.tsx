import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TiendaPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="card p-10">
          <SectionHeading
            align="left"
            title="Tienda"
            subtitle="En FASE 3 se implementan listados por categoría y el catálogo tipado completo."
          />
        </div>
      </Container>
    </section>
  );
}
