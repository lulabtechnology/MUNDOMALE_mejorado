/**
 * FASE 1: solo lectura segura del contador para mostrar badge en header.
 * En FASE 4 se implementa store completo + persistencia.
 */
const KEY = "mundoDeMale.cart.v1";

type CartItemLite = { qty: number };

export function getCartCountSafe(): number {
  if (typeof window === "undefined") return 0;

  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return 0;

    const parsed = JSON.parse(raw) as Record<string, CartItemLite> | null;
    if (!parsed || typeof parsed !== "object") return 0;

    let total = 0;
    for (const k of Object.keys(parsed)) {
      const qty = Number((parsed as any)[k]?.qty ?? 0);
      if (Number.isFinite(qty) && qty > 0) total += qty;
    }
    return total;
  } catch {
    return 0;
  }
}

export const CART_STORAGE_KEY = KEY;
