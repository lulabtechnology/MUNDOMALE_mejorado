"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { Product } from "@/content/products";
import { readCartStorage, writeCartStorage, CartItem } from "@/cart/cartStorage";

type State = {
  items: CartItem[];
  hydrated: boolean;
};

type Action =
  | { type: "HYDRATE"; items: CartItem[] }
  | { type: "ADD"; item: Omit<CartItem, "qty">; qty: number }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items, hydrated: true };

    case "ADD": {
      const qty = Math.max(1, Math.floor(action.qty));
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) => (i.id === action.item.id ? { ...i, qty: i.qty + qty } : i))
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, qty }]
      };
    }

    case "SET_QTY": {
      const qty = Math.max(1, Math.floor(action.qty));
      return { ...state, items: state.items.map((i) => (i.id === action.id ? { ...i, qty } : i)) };
    }

    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

function computeSummary(items: CartItem[]) {
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const pricedSubtotal = items.reduce((sum, i) => sum + (typeof i.price === "number" ? i.price * i.qty : 0), 0);

  const hasQuoteItems = items.some((i) => {
    const badge = (i.badge ?? "").toLowerCase();
    return (
      typeof i.price !== "number" ||
      badge.includes("cotización") ||
      badge.includes("por encargo")
    );
  });

  return { itemCount, pricedSubtotal, hasQuoteItems };
}

type CartContextValue = {
  items: CartItem[];
  hydrated: boolean;

  itemCount: number;
  pricedSubtotal: number;
  hasQuoteItems: boolean;

  addProduct: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], hydrated: false });

  // Hydrate
  useEffect(() => {
    const items = readCartStorage();
    dispatch({ type: "HYDRATE", items });
  }, []);

  // Persist (solo cuando ya hidrató)
  useEffect(() => {
    if (!state.hydrated) return;
    writeCartStorage(state.items);
  }, [state.items, state.hydrated]);

  const summary = useMemo(() => computeSummary(state.items), [state.items]);

  const value: CartContextValue = useMemo(
    () => ({
      items: state.items,
      hydrated: state.hydrated,

      itemCount: summary.itemCount,
      pricedSubtotal: summary.pricedSubtotal,
      hasQuoteItems: summary.hasQuoteItems,

      addProduct: (p, qty = 1) => {
        dispatch({
          type: "ADD",
          item: {
            id: p.id,
            slug: p.slug,
            name: p.name,
            image: p.image,
            price: p.price,
            currency: p.currency ?? "USD",
            badge: p.badge
          },
          qty
        });
      },

      setQty: (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
      inc: (id) => {
        const it = state.items.find((x) => x.id === id);
        dispatch({ type: "SET_QTY", id, qty: (it?.qty ?? 0) + 1 });
      },
      dec: (id) => {
        const it = state.items.find((x) => x.id === id);
        const next = Math.max(1, (it?.qty ?? 1) - 1);
        dispatch({ type: "SET_QTY", id, qty: next });
      },

      remove: (id) => dispatch({ type: "REMOVE", id }),
      clear: () => dispatch({ type: "CLEAR" })
    }),
    [state.items, state.hydrated, summary.itemCount, summary.pricedSubtotal, summary.hasQuoteItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart() debe usarse dentro de <CartProvider>.");
  return ctx;
}
