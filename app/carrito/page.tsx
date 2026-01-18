"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CartItemRow from "@/components/cart/CartItemRow";
import { useCart } from "@/cart/CartContext";
import { site } from "@/content/site";
import { waMeLink } from "@/lib/links";
import { buildWhatsAppMessage, formatMoney } from "@/cart/whatsapp";
import {
  CheckoutPrefs,
  DeliveryMethod,
  defaultPrefs,
  deliveryLabel,
  readCheckoutPrefs,
  writeCheckoutPrefs
} from "@/cart/checkoutPrefs";

export default function CarritoPage() {
  const cart = useCart();

  const [prefs, setPrefs] = useState<CheckoutPrefs>(defaultPrefs);

  // Hydrate prefs (delivery/name/address)
  useEffect(() => {
    setPrefs(readCheckoutPrefs());
  }, []);

  // Persist prefs
  useEffect(() => {
    writeCheckoutPrefs(prefs);
  }, [prefs]);

  const message = useMemo(
    () =>
      buildWhatsAppMessage({
        items: cart.items,
        pricedSubtotal: cart.pricedSubtotal,
        hasQuoteItems: cart.hasQuoteItems,
        delivery: prefs.delivery,
        name: prefs.name,
        address: prefs.address
      }),
    [cart.items, cart.pricedSubtotal, cart.hasQuoteItems, prefs.delivery, prefs.name, prefs.address]
  );

  const waHref = waMeLink(site.contact.whatsappNumber, message);

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          align="left"
          title="Carrito"
          subtitle="Arma tu pedido y envíalo por WhatsApp. No hay pago en línea."
        />

        {cart.items.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10">
            <p className="text-sm text-slate-600">Tu carrito está vacío.</p>
            <a href="/tienda" className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-800">
              Ir a la tienda →
            </a>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr,380px]">
            {/* Items */}
            <div className="space-y-4">
              {cart.items.map((it) => (
                <CartItemRow key={it.id} item={it} />
              ))}

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => cart.clear()}
                  className="focus-ring rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Vaciar carrito
                </button>
                <a
                  href="/tienda"
                  className="focus-ring rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Seguir comprando
                </a>
              </div>
            </div>

            {/* Summary / Checkout */}
            <div className="card p-7">
              <p className="text-sm font-extrabold text-slate-800">Resumen</p>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-600">Subtotal (items con precio)</span>
                <span className="font-semibold text-slate-800">{formatMoney(cart.pricedSubtotal)}</span>
              </div>

              {cart.hasQuoteItems ? (
                <p className="mt-2 text-xs font-semibold text-slate-600">
                  Total estimado: sujeto a cotización/por encargo.
                </p>
              ) : (
                <p className="mt-2 text-xs font-semibold text-slate-600">
                  Total: {formatMoney(cart.pricedSubtotal)}
                </p>
              )}

              <div className="mt-7">
                <p className="text-sm font-extrabold text-slate-800">Entrega</p>
                <div className="mt-3 space-y-2">
                  {(["pickup", "city", "interior"] as DeliveryMethod[]).map((d) => (
                    <label key={d} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm">
                      <input
                        type="radio"
                        name="delivery"
                        checked={prefs.delivery === d}
                        onChange={() => setPrefs((p) => ({ ...p, delivery: d }))}
                      />
                      <span className="font-semibold text-slate-700">{deliveryLabel(d)}</span>
                      {d !== "pickup" ? (
                        <span className="ml-auto text-xs font-semibold text-slate-600">Se calcula según destino</span>
                      ) : null}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm font-extrabold text-slate-800">Datos (opcional)</p>

                <div className="mt-3 grid gap-3">
                  <input
                    value={prefs.name}
                    onChange={(e) => setPrefs((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Nombre"
                    className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
                  />
                  <input
                    value={prefs.address}
                    onChange={(e) => setPrefs((p) => ({ ...p, address: e.target.value }))}
                    placeholder="Dirección / Área (si aplica)"
                    className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="mt-7 grid gap-2">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                >
                  Enviar pedido por WhatsApp
                </a>

                <p className="text-center text-xs font-semibold text-slate-600">
                  El mensaje se genera automáticamente con tu carrito.
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
