import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";
import { site } from "@/content/site";
import { waMeLink } from "@/lib/links";

export default function NosotrosPage() {
  const waHref = waMeLink(
    site.contact.whatsappNumber,
    "Hola, me gustaría conocer más sobre Mundo de Male y hacer un pedido. ¿Me ayudas?"
  );

  return (
    <>
      <PageHero
        title="Nosotros"
        eyebrow="Mundo de Male"
        subtitle="Un concepto artesanal y sensorial: conservas originales, piezas vivas y decoración inspirada en la naturaleza."
        image="/hero/hero-1.jpg"
        primaryCta={{ label: "Ver tienda", href: "/tienda" }}
        secondaryCta={{ label: "Escribir por WhatsApp", href: waHref }}
        height="tall"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src="/about/male.jpg" alt="Male" fill className="object-cover" />
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-600">
                ¿Quiénes somos?
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-800">
                Soy Male, y esto nace de una pasión: deleitar con recetas originales hechas con amor.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                En <span className="font-semibold text-slate-700">Male’s Kitchen</span> preparo jaleas,
                mermeladas y mieles pensadas para compartir: sobre quesos favoritos, como glaseados en
                carnes blancas o rojas, en aderezos con aceite de oliva, o como postre “á la mode”
                sobre un bizcocho, magdalena o una bola de helado.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-extrabold text-slate-800">
                  Guía rápida: ¿qué es cada cosa?
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  <li>
                    <span className="font-semibold text-slate-700">Jaleas:</span> se utiliza el jugo
                    extraído o la fruta/hierva/vegetal licuado.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Mermeladas:</span> al menos un 30%
                    de fruta en el peso del producto final.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Confituras:</span> aprox. 35% de fruta;
                    el resto es almíbar que la cubre.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Chutneys:</span> conservas de origen
                    indio; suelen incorporar especias características.
                  </li>
                  <li>
                    <span className="font-semibold text-slate-700">Mieles preparadas:</span> mezcla de
                    miel con especias, pétalos, frutas o vegetales que aportan sabor.
                  </li>
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/tienda/males-kitchen"
                  className="focus-ring rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Ver Male’s Kitchen
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-rose-50/40 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-slate-600">
                Male’s Garden
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-800">
                Mucho más que una floristería: piezas vivas, originalidad y experiencia sensorial.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Nuestro concepto se distingue por combinar flores frescas, troncos, ramas secas y
                piezas especiales (algunas en alquiler) para crear arreglos memorables para
                celebraciones. También trabajamos kokedamas, tillandsias, terrarios y velas aromáticas
                artesanales con esencia floral para reforzar el ambiente.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                La jardinería y la decoración nos impulsan a ofrecer confección de jardines de exterior,
                además de diseño y composición de potes y plantas para recrear jardines interiores en
                casas o apartamentos.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-extrabold text-slate-800">Servicios destacados</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  <li>• Kokedamas y tillandsias</li>
                  <li>• Arreglos florales personalizados</li>
                  <li>• Velas aromáticas artesanales</li>
                  <li>• Terrarios por encargo</li>
                  <li>• Diseño de jardines</li>
                  <li>• Decoración para eventos</li>
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/tienda/males-garden"
                  className="focus-ring rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Ver Male’s Garden
                </Link>
                <Link
                  href="/tienda/servicios-y-talleres"
                  className="focus-ring rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Ver Servicios y Talleres
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image src="/about/garden.jpg" alt="Male’s Garden" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-800">
              Entregas y consideraciones
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Cualquier trabajo puede recibir servicio de entrega a domicilio dentro de la ciudad o al
              interior de la República a través de servicios externos. El costo se calcula según la
              cantidad de arreglos, tamaño y distancia entre nuestro taller y la dirección de entrega
              proporcionada.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Nota importante: en productos vivos (plantas/arreglos) pueden existir variaciones por
              disponibilidad y temporada. En envíos con empresas externas, el manejo/traslado no está
              bajo nuestro control.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
