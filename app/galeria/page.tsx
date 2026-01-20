import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";

export default function GaleriaPage() {
  const items = Array.from({ length: 9 }).map((_, i) => ({
    src: `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Galería ${i + 1}`
  }));

  return (
    <>
      <PageHero
        title="Galería"
        eyebrow="Inspiración"
        subtitle="Un vistazo a creaciones de Kitchen y Garden. (Puedes reemplazar estas imágenes cuando quieras.)"
        image="/hero/hero-1.jpg"
        primaryCta={{ label: "Ver tienda", href: "/tienda" }}
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <div key={it.src} className="card overflow-hidden">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={it.src} alt={it.alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-600">
            Rutas sugeridas: <span className="font-semibold text-slate-700">/public/gallery/gallery-01.jpg</span> …
            <span className="font-semibold text-slate-700"> gallery-09.jpg</span>
          </p>
        </Container>
      </section>
    </>
  );
}
