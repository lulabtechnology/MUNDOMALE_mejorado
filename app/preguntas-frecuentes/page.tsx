import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";
import { site } from "@/content/site";
import { waMeLink } from "@/lib/links";

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl border border-slate-200 bg-white p-6">
      <summary className="cursor-pointer list-none font-display text-base font-semibold text-slate-800">
        <span className="inline-flex items-center gap-2">
          <span className="text-slate-500 group-open:rotate-45 transition-transform">＋</span>
          {q}
        </span>
      </summary>
      <p className="mt-4 text-sm leading-7 text-slate-600">{a}</p>
    </details>
  );
}

export default function FAQPage() {
  const waHref = waMeLink(site.contact.whatsappNumber, "Hola, tengo una consulta sobre Mundo de Male.");

  return (
    <>
      <PageHero
        title="Preguntas frecuentes"
        eyebrow="Ayuda rápida"
        subtitle="Respuestas claras sobre pedidos, entregas, pagos y productos por encargo."
        image="/hero/hero-2.jpg"
        primaryCta={{ label: "Escribir por WhatsApp", href: waHref }}
        secondaryCta={{ label: "Ver tienda", href: "/tienda" }}
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <FaqItem
              q="¿Hay pago en línea?"
              a="No. El pedido se arma en el carrito y se envía por WhatsApp. Coordinamos el pago antes de preparar/entregar."
            />
            <FaqItem
              q="¿Cómo hago un pedido?"
              a="Entra a la tienda, agrega productos al carrito y presiona “Enviar pedido por WhatsApp”. Allí confirmamos disponibilidad, tiempos y entrega."
            />
            <FaqItem
              q="¿Qué significa “Por encargo” o “Cotización”?"
              a="Son productos o servicios que requieren coordinación previa (disponibilidad, tamaño, ingredientes/elementos, fechas). Te confirmamos el precio final por WhatsApp."
            />
            <FaqItem
              q="¿Hacen entregas?"
              a="Sí. Pick up, delivery en ciudad y al interior mediante servicios externos. El costo se calcula según destino, tamaño y cantidad."
            />
            <FaqItem
              q="¿Los talleres requieren abono?"
              a="Sí. Los talleres normalmente se confirman con abono para reservar cupo/fecha. Te indicamos condiciones por WhatsApp."
            />
            <FaqItem
              q="¿Hay cambios o reembolsos?"
              a="Depende del tipo de producto. Los pedidos por encargo/cotización suelen no ser reembolsables una vez iniciada la preparación. Revisa la página de reembolsos para el detalle."
            />
            <FaqItem
              q="¿Los productos vivos (plantas/arreglos) pueden variar?"
              a="Sí. La naturaleza es única: puede haber variaciones por temporada y disponibilidad. Aun así, cuidamos que el resultado final sea espectacular."
            />
            <FaqItem
              q="¿Puedo pedir algo personalizado?"
              a="Sí. Puedes solicitar sabores especiales, combinaciones y arreglos a medida. Escríbenos por WhatsApp con tu idea."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
