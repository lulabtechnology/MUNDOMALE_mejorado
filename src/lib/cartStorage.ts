/**
 * Nota:
 * - En FASE 4 se implementa store completo + carrito real.
 * - En FASE 2 habilitamos "Agregar al carrito" ligero para que el badge funcione y el UX se sienta real.
 */
export const CART_STORAGE_KEY = "mundoDeMale.cart.v1";

export type CartItemLite = {
  id: string;
  name: string;
  qty: number;
  price?: number; // si aplica
  note?: string;  // "Por encargo", "Cotización", etc
};

type CartMap = Record<string, CartItemLite>;

function readCart(): CartMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as CartMap;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed;
  } catch {
    return {};
  }
}

function writeCart(next: CartMap) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
  // "storage" no dispara en la misma pestaña; forzamos un evento para el badge
  window.dispatchEvent(new Event("storage"));
}

export function getCartCountSafe(): number {
  if (typeof window === "undefined") return 0;
  const cart = readCart();
  let total = 0;
  for (const k of Object.keys(cart)) {
    const qty = Number(cart[k]?.qty ?? 0);
    if (Number.isFinite(qty) && qty > 0) total += qty;
  }
  return total;
}

export function addToCartLite(item: Omit<CartItemLite, "qty"> & { qty?: number }) {
  if (typeof window === "undefined") return;
  const cart = readCart();
  const current = cart[item.id];
  const addQty = Math.max(1, Math.floor(item.qty ?? 1));
  cart[item.id] = {
    id: item.id,
    name: item.name,
    price: item.price,
    note: item.note,
    qty: (current?.qty ?? 0) + addQty
  };
  writeCart(cart);
}
