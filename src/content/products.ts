export type ProductWorld = "males-kitchen" | "males-garden" | "servicios-y-talleres";
export type KitchenSection = "Jaleas" | "Confituras" | "Mermeladas" | "Chutney" | "Extras";
export type ServicesSection = "Talleres" | "Servicios";

export type ProductBadge = "Por encargo" | "Cotización" | "Próximamente" | "Pedido especial";

export type Product = {
  id: string;
  slug: string;
  world: ProductWorld;
  section?: KitchenSection | ServicesSection;

  name: string;
  shortDescription: string;

  price?: number;              // si aplica
  currency?: "USD";            // default USD si no se setea
  badge?: ProductBadge;

  image: string;               // ruta en /public
  tags?: string[];
};

const USD: "USD" = "USD";

function kitchenImg(section: "jaleas" | "confituras" | "mermeladas" | "chutney", idx: number) {
  const safe = ((idx - 1) % 5) + 1; // 1..5 (si hay más productos, recicla imágenes)
  return `/products/kitchen/${section}-${String(safe).padStart(2, "0")}.jpg`;
}

function gardenImg(idx: number) {
  const safe = ((idx - 1) % 10) + 1;
  return `/products/garden/garden-${String(safe).padStart(2, "0")}.jpg`;
}

function serviceImg(idx: number) {
  const safe = ((idx - 1) % 10) + 1;
  return `/products/services/service-${String(safe).padStart(2, "0")}.jpg`;
}

export const products: Product[] = [
  // =========================
  // MALE’S KITCHEN (con datos reales del doc)
  // =========================

  // MERMELADAS
  {
    id: "mk-mermelada-albahaca-toronja",
    slug: "mermelada-albahaca-y-toronja",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Albahaca y Toronja",
    shortDescription: "Frasco 6oz. Artesanal.",
    price: 15,
    currency: USD,
    image: kitchenImg("mermeladas", 1)
  },
  {
    id: "mk-mermelada-pera-higos-datiles",
    slug: "mermelada-pera-higos-datiles",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Pera, Higos y Dátiles",
    shortDescription: "Frasco 6oz. Artesanal.",
    price: 15,
    currency: USD,
    image: kitchenImg("mermeladas", 2)
  },
  {
    id: "mk-mermelada-hierbabuena-pina-naranja",
    slug: "mermelada-hierbabuena-pina-naranja",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Hierbabuena, Piña y Naranja",
    shortDescription: "Frasco 6oz. Artesanal.",
    price: 15,
    currency: USD,
    image: kitchenImg("mermeladas", 3)
  },
  {
    id: "mk-mermelada-raspadura-lima-limon",
    slug: "mermelada-raspadura-lima-limon",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Raspadura, Lima y Limón",
    shortDescription: "Frasco 6oz. Artesanal.",
    price: 15,
    currency: USD,
    image: kitchenImg("mermeladas", 4)
  },
  {
    id: "mk-mermelada-romero-ciruela-apple",
    slug: "mermelada-romero-ciruela-apple",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Romero, Ciruela y Apple",
    shortDescription: "Frasco 6oz. Artesanal.",
    price: 15,
    currency: USD,
    image: kitchenImg("mermeladas", 5)
  },
  {
    id: "mk-mermelada-jengibre-naranja",
    slug: "mermelada-jengibre-y-naranja",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Jengibre y Naranja",
    shortDescription: "Frasco 6oz. Artesanal.",
    price: 10,
    currency: USD,
    image: kitchenImg("mermeladas", 6)
  },
  {
    id: "mk-mermelada-bacon",
    slug: "mermelada-bacon",
    world: "males-kitchen",
    section: "Mermeladas",
    name: "Mermelada Bacón",
    shortDescription: "Pedido especial. Frasco 6oz.",
    price: 20,
    currency: USD,
    badge: "Pedido especial",
    image: kitchenImg("mermeladas", 7)
  },

  // CONFITURAS
  {
    id: "mk-confitura-cebollas-caramelizadas",
    slug: "confitura-cebollas-caramelizadas",
    world: "males-kitchen",
    section: "Confituras",
    name: "Confitura de Cebollas Caramelizadas",
    shortDescription: "Frasco 6oz. Ideal para tablas y panes.",
    price: 10,
    currency: USD,
    image: kitchenImg("confituras", 1)
  },
  {
    id: "mk-confitura-higos-datiles",
    slug: "confitura-higos-y-datiles",
    world: "males-kitchen",
    section: "Confituras",
    name: "Confitura de Higos y Dátiles",
    shortDescription: "Frasco 6oz. Perfil dulce y elegante.",
    price: 15,
    currency: USD,
    image: kitchenImg("confituras", 2)
  },

  // JALEAS
  {
    id: "mk-jalea-culantro",
    slug: "jalea-culantro",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea de Culantro",
    shortDescription: "Frasco 6oz. Sabor fresco y herbal.",
    price: 10,
    currency: USD,
    image: kitchenImg("jaleas", 1)
  },
  {
    id: "mk-jalea-petalos-rosa-12dic",
    slug: "jalea-petalos-de-rosa-12-diciembre",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea Pétalos de Rosa (12 diciembre)",
    shortDescription: "Frasco 6oz. Edición especial.",
    price: 15,
    currency: USD,
    image: kitchenImg("jaleas", 2)
  },
  {
    id: "mk-jalea-roses-in-love-wine",
    slug: "jalea-roses-in-love-wine",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea Roses in Love (wine)",
    shortDescription: "Frasco 6oz. Nota floral y sofisticada.",
    price: 15,
    currency: USD,
    image: kitchenImg("jaleas", 3)
  },
  {
    id: "mk-jalea-bouquet-de-novia",
    slug: "jalea-bouquet-de-novia",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea Bouquet de Novia",
    shortDescription: "Frasco 6oz. Delicada y floral.",
    price: 15,
    currency: USD,
    image: kitchenImg("jaleas", 4)
  },
  {
    id: "mk-jalea-aji-picante",
    slug: "jalea-aji-picante",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea Ají Picante",
    shortDescription: "Frasco 6oz. Picante balanceado.",
    price: 10,
    currency: USD,
    image: kitchenImg("jaleas", 5)
  },
  {
    id: "mk-jalea-ajies-dulces",
    slug: "jalea-ajies-dulces",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea Ajíes Dulces",
    shortDescription: "Frasco 6oz. Dulce suave.",
    price: 10,
    currency: USD,
    image: kitchenImg("jaleas", 6)
  },
  {
    id: "mk-jalea-rizos-de-angel",
    slug: "jalea-rizos-de-angel",
    world: "males-kitchen",
    section: "Jaleas",
    name: "Jalea Rizos de Ángel",
    shortDescription: "Delicatessen. Frasco 6oz.",
    price: 20,
    currency: USD,
    image: kitchenImg("jaleas", 7)
  },

  // CHUTNEY
  {
    id: "mk-chutney-mini-tomatillos-cherry",
    slug: "chutney-mini-tomatillos-cherry",
    world: "males-kitchen",
    section: "Chutney",
    name: "Chutney Mini Tomatillos Cherry",
    shortDescription: "Frasco 6oz. Agridulce y versátil.",
    price: 15,
    currency: USD,
    image: kitchenImg("chutney", 1)
  },
  {
    id: "mk-chutney-mango",
    slug: "chutney-mango",
    world: "males-kitchen",
    section: "Chutney",
    name: "Chutney de Mango",
    shortDescription: "Frasco 6oz. Tropical y especiado.",
    price: 15,
    currency: USD,
    image: kitchenImg("chutney", 2)
  },
  {
    id: "mk-chutney-pina",
    slug: "chutney-pina",
    world: "males-kitchen",
    section: "Chutney",
    name: "Chutney de Piña",
    shortDescription: "Frasco 6oz. Dulce con carácter.",
    price: 15,
    currency: USD,
    image: kitchenImg("chutney", 3)
  },
  {
    id: "mk-chutney-manzana",
    slug: "chutney-manzana",
    world: "males-kitchen",
    section: "Chutney",
    name: "Chutney de Manzana",
    shortDescription: "Frasco 6oz. Suave y especiado.",
    price: 15,
    currency: USD,
    image: kitchenImg("chutney", 4)
  },
  {
    id: "mk-chutney-uchuas-aji",
    slug: "chutney-uchuas-y-aji",
    world: "males-kitchen",
    section: "Chutney",
    name: "Chutney Uchuas y Ají",
    shortDescription: "Frasco 6oz. Se confirma por WhatsApp.",
    badge: "Cotización",
    image: kitchenImg("chutney", 5)
  },

  // EXTRAS
  {
    id: "mk-miel-agave-pecado-adan",
    slug: "miel-de-agave-pecado-de-adan",
    world: "males-kitchen",
    section: "Extras",
    name: "Miel de Agave “Pecado de Adán”",
    shortDescription: "Frasco 6oz. Dulzor suave.",
    price: 10,
    currency: USD,
    image: "/products/kitchen/confituras-03.jpg"
  },
  {
    id: "mk-ron-ponche",
    slug: "ron-ponche-proximamente",
    world: "males-kitchen",
    section: "Extras",
    name: "Licor de la casa: Ron Ponche",
    shortDescription: "Próximamente / Por encargo.",
    badge: "Próximamente",
    image: "/products/kitchen/ron-ponche.jpg"
  },

  // =========================
  // MALE’S GARDEN (10 productos; mayoría por encargo/cotización)
  // =========================
  {
    id: "mg-arreglo-floral",
    slug: "arreglo-floral-por-encargo",
    world: "males-garden",
    name: "Arreglo floral (por encargo)",
    shortDescription: "Diseño a medida según ocasión.",
    badge: "Por encargo",
    image: gardenImg(1)
  },
  {
    id: "mg-kokedama-clasica",
    slug: "kokedama-clasica",
    world: "males-garden",
    name: "Kokedama clásica",
    shortDescription: "Pieza viva decorativa. Coordinación previa.",
    badge: "Por encargo",
    image: gardenImg(2)
  },
  {
    id: "mg-kokedama-premium",
    slug: "kokedama-premium",
    world: "males-garden",
    name: "Kokedama premium",
    shortDescription: "Selección especial de planta y acabado.",
    badge: "Por encargo",
    image: gardenImg(3)
  },
  {
    id: "mg-plantas",
    slug: "plantas-seleccion",
    world: "males-garden",
    name: "Plantas (selección)",
    shortDescription: "Variedad según disponibilidad.",
    badge: "Cotización",
    image: gardenImg(4)
  },
  {
    id: "mg-diseno-jardines",
    slug: "diseno-de-jardines",
    world: "males-garden",
    name: "Diseño de jardines",
    shortDescription: "Cita + cotización según espacio.",
    badge: "Cotización",
    image: gardenImg(5)
  },
  {
    id: "mg-terrarios",
    slug: "terrarios-por-encargo",
    world: "males-garden",
    name: "Terrarios (por encargo)",
    shortDescription: "Diseño y armado a medida.",
    badge: "Por encargo",
    image: gardenImg(6)
  },
  {
    id: "mg-tillandsias",
    slug: "tillandsias",
    world: "males-garden",
    name: "Tillandsias",
    shortDescription: "Piezas ligeras y decorativas.",
    badge: "Cotización",
    image: gardenImg(7)
  },
  {
    id: "mg-velas",
    slug: "velas-aromaticas",
    world: "males-garden",
    name: "Velas aromáticas",
    shortDescription: "Hechas por encargo. Fragancias según disponibilidad.",
    badge: "Por encargo",
    image: gardenImg(8)
  },
  {
    id: "mg-bromelias",
    slug: "bromelias",
    world: "males-garden",
    name: "Bromelias",
    shortDescription: "Variedad según temporada.",
    badge: "Cotización",
    image: gardenImg(9)
  },
  {
    id: "mg-kits-regalo",
    slug: "kits-regalo-garden",
    world: "males-garden",
    name: "Kits regalo (Garden)",
    shortDescription: "Combinaciones personalizadas.",
    badge: "Por encargo",
    image: gardenImg(10)
  },

  // =========================
  // SERVICIOS Y TALLERES (catálogo tipo producto)
  // =========================
  {
    id: "st-taller-kokedamas",
    slug: "taller-de-kokedamas",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Taller de Kokedamas",
    shortDescription: "Taller práctico. Cupos y fecha por WhatsApp.",
    badge: "Cotización",
    image: serviceImg(1)
  },
  {
    id: "st-taller-velas-jabones",
    slug: "taller-velas-y-jabones",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Taller de Velas y Jabones",
    shortDescription: "Experiencia creativa guiada.",
    badge: "Cotización",
    image: serviceImg(2)
  },
  {
    id: "st-taller-miniveranitos",
    slug: "taller-miniveranitos",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Taller de Miniveranitos",
    shortDescription: "Sesión temática. Coordinación previa.",
    badge: "Cotización",
    image: serviceImg(3)
  },
  {
    id: "st-taller-protocolo-etiqueta",
    slug: "taller-protocolo-y-etiqueta",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Taller de Protocolo y Etiqueta",
    shortDescription: "Taller formativo. Ideal para grupos.",
    badge: "Cotización",
    image: serviceImg(4)
  },
  {
    id: "st-taller-crecimiento-personal",
    slug: "taller-crecimiento-personal",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Taller de Crecimiento Personal",
    shortDescription: "Sesión guiada. Agenda por WhatsApp.",
    badge: "Cotización",
    image: serviceImg(5)
  },
  {
    id: "st-taller-corporativos",
    slug: "talleres-corporativos",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Talleres Corporativos",
    shortDescription: "Diseño según objetivo y cantidad de personas.",
    badge: "Cotización",
    image: serviceImg(6)
  },
  {
    id: "st-taller-personales",
    slug: "talleres-personales",
    world: "servicios-y-talleres",
    section: "Talleres",
    name: "Talleres Personales",
    shortDescription: "Sesiones a medida.",
    badge: "Cotización",
    image: serviceImg(7)
  },

  {
    id: "st-eventos-corporativos",
    slug: "eventos-corporativos",
    world: "servicios-y-talleres",
    section: "Servicios",
    name: "Eventos Corporativos",
    shortDescription: "Planificación y ejecución a medida.",
    badge: "Cotización",
    image: serviceImg(8)
  },
  {
    id: "st-eventos-personales",
    slug: "eventos-personales",
    world: "servicios-y-talleres",
    section: "Servicios",
    name: "Eventos Personales",
    shortDescription: "Detalles y ambientación por encargo.",
    badge: "Cotización",
    image: serviceImg(9)
  },
  {
    id: "st-cata-a-ciegas",
    slug: "cata-a-ciegas",
    world: "servicios-y-talleres",
    section: "Servicios",
    name: "Cata a ciegas",
    shortDescription: "Precio fijo; se confirma por WhatsApp.",
    badge: "Cotización",
    image: serviceImg(10)
  },
  {
    id: "st-decoracion-eventos",
    slug: "decoracion-de-eventos",
    world: "servicios-y-talleres",
    section: "Servicios",
    name: "Decoración de eventos",
    shortDescription: "Cotización según concepto y escala.",
    badge: "Cotización",
    image: serviceImg(11)
  }
];

export const kitchenSections: KitchenSection[] = ["Mermeladas", "Confituras", "Jaleas", "Chutney", "Extras"];

export function getProductsByWorld(world: ProductWorld) {
  return products.filter((p) => p.world === world);
}

export function getKitchenBySection(section: KitchenSection) {
  return products.filter((p) => p.world === "males-kitchen" && p.section === section);
}

export function getServicesBySection(section: ServicesSection) {
  return products.filter((p) => p.world === "servicios-y-talleres" && p.section === section);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount?: number, currency: "USD" = "USD") {
  if (typeof amount !== "number") return null;
  const symbol = currency === "USD" ? "$" : "$";
  return `${symbol}${amount.toFixed(2)}`;
}
