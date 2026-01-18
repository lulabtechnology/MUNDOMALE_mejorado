import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/content/site";
import { waMeLink } from "@/lib/links";

export default function ContactoPage() {
  const wa = waMeLink(site.contact.whatsappNumber, site.contact.whatsappDefaultMessage);

  return (
    <section className="py-20">
      <Container>
        <div className="card p-10">
          <SectionHeading
            align="left"
            title="Contacto / WhatsApp"
            subtitle="Escríbenos con tu pedido. No hay pago en línea: el pedido se confirma por WhatsApp."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Escribir por WhatsApp
            </a>

            <ButtonLink href="/tienda" variant="secondary">
              Ver tienda
            </ButtonLink>

            <a
              href={site.contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
