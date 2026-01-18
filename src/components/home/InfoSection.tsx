import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function InfoSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-pad">
        <SectionHeading
          title="Información"
          subtitle="Envíos, pagos y políticas rápidas. Copys editables y enlaces placeholder listos."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card p-7">
            <p className="text-sm font-extrabold text-slate-800">Envíos</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Pick up</li>
              <li>Delivery Ciudad (empresa externa)</li>
              <li>Delivery Interior (empresa externa)</li>
              <li className="pt-2 text-xs font-semibold text-slate-600">Se calcula según destino</li>
            </ul>
            <div className="mt-6">
              <Link href="/politicas/envios" className="text-sm font-semibold text-slate-700 hover:text-slate-800">
                Ver política de envíos →
              </Link>
            </div>
          </div>

          <div className="card p-7">
            <p className="text-sm font-extrabold text-slate-800">Pagos</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Todo se cancela antes</li>
              <li>Únicamente talleres con abono</li>
              <li className="pt-2 text-xs font-semibold text-slate-600">Checkout siempre por WhatsApp</li>
            </ul>
            <div className="mt-6">
              <Link href="/terminos" className="text-sm font-semibold text-slate-700 hover:text-slate-800">
                Ver términos →
              </Link>
            </div>
          </div>

          <div className="card p-7">
            <p className="text-sm font-extrabold text-slate-800">Políticas rápidas</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Plantas pueden morir</li>
              <li>No responsabilidad por manejo de empresa externa</li>
            </ul>
            <div className="mt-6">
              <Link href="/reembolsos" className="text-sm font-semibold text-slate-700 hover:text-slate-800">
                Ver reembolsos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
