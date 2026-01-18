export const site = {
  url: "https://mundo-de-male.vercel.app", // placeholder (Vercel luego lo reemplaza; puedes editar)
  brand: {
    name: "Mundo de Male",
    description:
      "Creaciones artesanales por encargo: cocina, jardín y experiencias para regalar, compartir y celebrar.",
    logo: "/brand/logo-mundo-de-male.png"
  },

  topbar: {
    enabled: true,
    text: "Pedidos por encargo • Envíos disponibles"
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/tienda" },
    { label: "Galería", href: "/galeria" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" }
  ],

  contact: {
    // IMPORTANTE: placeholder. Reemplazas luego por el real.
    // Formato recomendado: solo dígitos con código país (sin +). Ej: "50761234567"
    whatsappNumber: "50700000000",
    whatsappDefaultMessage: "Hola, me gustaría hacer un pedido con Mundo de Male.",
    instagramUrl: "https://instagram.com/tu_instagram_aqui"
  },

  footer: {
    legal: "© Mundo de Male. Todos los derechos reservados."
  }
} as const;
