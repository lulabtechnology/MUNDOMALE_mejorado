import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-pad">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              title="¿Quiénes somos?"
              subtitle="Mundo de Male reúne tres mundos: cocina artesanal, jardín y experiencias. Todo por encargo, con atención cercana y detalles hechos con intención."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/nosotros" variant="primary">
                Conocer más
              </ButtonLink>
              <ButtonLink href="/contacto" variant="secondary">
                Ordenar por WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-700">Hecho por encargo:</span> tiempos y detalles coordinados contigo.</p>
              <p><span className="font-semibold text-slate-700">Entrega:</span> pick up / delivery ciudad / delivery interior.</p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src="/about/male.jpg"
                alt="Male - Mundo de Male"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
