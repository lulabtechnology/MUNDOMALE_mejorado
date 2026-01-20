import Container from "@/components/ui/Container";
import PageHero from "@/components/site/PageHero";

export default function EnviosPage() {
  return (
    <>
      <PageHero
        title="Política de Envíos"
        eyebrow="Información"
        subtitle="Opciones de entrega, tiempos y condiciones generales."
        image="/hero/hero-2.jpg"
      />

      <section className="bg-white py-16">
        <Container>
          <div className="card p-10">
            <h2 className="font-display text-2xl font-semibold text-slate-800">Opciones de entrega</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              <li><span className="font-semibold text-slate-700">Pick up:</span> Coordinamos lugar y horario.</li>
              <li><span className="font-semibold text-slate-700">Delivery Ciudad:</span> Se calcula según destino.</li>
              <li><span className="font-semibold text-slate-700">Delivery Interior:</span> Se realiza mediante servicios externos.</li>
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-slate-800">Cálculo del costo</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              El costo se calcula de acuerdo a la cantidad de arreglos/productos, sus tamaños y la distancia entre nuestro
              taller y la dirección de entrega proporcionada.
            </p>

            <h3 className="mt-10 font-display text-xl font-semibold text-slate-800">Productos vivos</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              En plantas/arreglos pueden existir variaciones por disponibilidad y temporada. Si el envío se realiza por
              empresas externas, el manejo/traslado no está bajo nuestro control.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
