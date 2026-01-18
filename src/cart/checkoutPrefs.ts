export const CHECKOUT_PREFS_KEY = "mundoDeMale.checkout.v1";

export type DeliveryMethod = "pickup" | "city" | "interior";

export type CheckoutPrefs = {
  delivery: DeliveryMethod;
  name: string;
  address: string;
};

export const defaultPrefs: CheckoutPrefs = {
  delivery: "pickup",
  name: "",
  address: ""
};

export function readCheckoutPrefs(): CheckoutPrefs {
  if (typeof window === "undefined") return defaultPrefs;

  try {
    const raw = window.localStorage.getItem(CHECKOUT_PREFS_KEY);
    if (!raw) return defaultPrefs;
    const parsed = JSON.parse(raw) as Partial<CheckoutPrefs>;
    return {
      delivery: (parsed.delivery as DeliveryMethod) ?? "pickup",
      name: (parsed.name ?? "") as string,
      address: (parsed.address ?? "") as string
    };
  } catch {
    return defaultPrefs;
  }
}

export function writeCheckoutPrefs(prefs: CheckoutPrefs) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CHECKOUT_PREFS_KEY, JSON.stringify(prefs));
}

export function deliveryLabel(d: DeliveryMethod) {
  switch (d) {
    case "pickup":
      return "Pick up";
    case "city":
      return "Delivery Ciudad";
    case "interior":
      return "Delivery Interior";
  }
}
