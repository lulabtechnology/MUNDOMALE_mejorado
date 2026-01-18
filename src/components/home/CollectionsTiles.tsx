import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";

type Tile = {
  title: string;
  desc: string;
  href: string;
  image: string;
};

export default function CollectionsTiles() {
  const tiles: Tile[] = [
    {
      title: "Male’s Garden",
      desc: "Arreglos, plantas y piezas vivas para espacios con intención.",
      href: "/tienda/males-garden",
      image: "/products/garden/garden-02.jpg"
    },
    {
      title: "Male’s Kitchen",
      desc: "Jaleas, confituras, mermeladas y chutneys en frascos 6oz.",
      href: "/tienda/males-kitchen",
      image: "/products/kitchen/jaleas-01.jpg"
    },
    {
      title: "Servicios y Talleres",
      desc: "Experiencias, eventos y talleres personales o corporativos.",
      href: "/tienda/servicios-y-talleres",
      image: "/products/services/service-02.jpg"
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-pad">
        <SectionHeading
          title="Nuestras colecciones"
          subtitle="Bloques grandes, limpios y aireados (muy en la línea de Hario), con CTA directo por mundo."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiles.map((t) => (
            <div key={t.href} className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
              <div className="relative h-[320px] w-full sm:h-[360px]">
                <Image src={t.image} alt={t.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/15 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl tracking-tight text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">{t.desc}</p>
                <div className="mt-4">
                  <ButtonLink href={t.href} variant="hero">
                    Ver colección
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
