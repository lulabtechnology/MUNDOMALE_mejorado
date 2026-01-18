import { CartItem } from "@/cart/cartStorage";
import { DeliveryMethod, deliveryLabel } from "@/cart/checkoutPrefs";

export function formatMoney(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export function buildWhatsAppMessage(args: {
  items: CartItem[];
  pricedSubtotal: number;
  hasQuoteItems: boolean;
  delivery: DeliveryMethod;
  name?: string;
  address?: string;
}) {
  const { items, pricedSubtotal, hasQuoteItems, delivery, name, address } = args;

  const lines: string[] = [];
  lines.push("Hola, quiero hacer un pedido en Mundo de Male.");
  lines.push("");
  lines.push("Pedido:");

  for (const it of items) {
    const qty = it.qty;
    const badge = it.badge ? ` (${it.badge})` : "";
    const pricePart =
      typeof it.price === "number"
        ? ` — ${formatMoney(it.price)} c/u`
        : " — Cotización/Por encargo";

    lines.push(`- ${it.name}${badge} x${qty}${pricePart}`);
  }

  lines.push("");
  lines.push(`Entrega: ${deliveryLabel(delivery)}`);
  if (delivery !== "pickup") lines.push("Nota: Envío se calcula según destino.");

  if (name && name.trim()) lines.push(`Nombre: ${name.trim()}`);
  if (address && address.trim()) lines.push(`Dirección/Área: ${address.trim()}`);

  lines.push("");
  lines.push(`Subtotal (items con precio): ${formatMoney(pricedSubtotal)}`);

  if (hasQuoteItems) {
    lines.push("Total estimado: sujeto a cotización/por encargo.");
  } else {
    lines.push(`Total: ${formatMoney(pricedSubtotal)}`);
  }

  lines.push("");
  lines.push("Gracias.");

  return lines.join("\n");
}
