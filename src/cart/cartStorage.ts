import { products } from "@/content/products";

export const CART_STORAGE_KEY = "mundoDeMale.cart.v1";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  image: string;
  qty: number;
  price?: number;
  currency?: "USD";
  badge?: string;
};

type LegacyMap = Record<string, { qty: number; name?: string; price?: number; note?: string }>;

function isArrayCart(x: unknown): x is CartItem[] {
  return Array.isArray(x);
}

function isLegacyMap(x: unknown): x is LegacyMap {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

export function readCartStorage(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);

    // Formato nuevo: array
    if (isArrayCart(parsed)) {
      return parsed
        .map((it) => ({
          ...it,
          qty: Math.max(1, Math.floor(Number(it.qty ?? 1)))
        }))
        .filter((it) => !!it.id && !!it.name);
    }

    // Formato viejo (map): { id: {qty, name...} }
    if (isLegacyMap(parsed)) {
      const items: CartItem[] = [];
      for (const id of Object.keys(parsed)) {
        const v = parsed[id];
        const qty = Math.max(1, Math.floor(Number(v?.qty ?? 1)));
        const p = products.find((pp) => pp.id === id);

        items.push({
          id,
          slug: p?.slug ?? id,
          name: p?.name ?? v?.name ?? "Producto",
          image: p?.image ?? "/products/garden/garden-01.jpg",
          qty,
          price: p?.price ?? v?.price,
          currency: (p?.currency ?? "USD") as "USD",
          badge: (p?.badge ?? v?.note) as string | undefined
        });
      }
      return items;
    }

    return [];
  } catch {
    return [];
  }
}

export function writeCartStorage(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}
