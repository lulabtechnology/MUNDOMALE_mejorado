import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="card p-10">
          <SectionHeading
            align="left"
            title="Preguntas frecuentes"
            subtitle="Placeholder elegante. En FASE 5 se completa FAQ final."
          />
        </div>
      </Container>
    </section>
  );
}
