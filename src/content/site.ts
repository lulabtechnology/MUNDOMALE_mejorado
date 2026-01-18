export const site = {
  url: "https://mundo-de-male.vercel.app", // placeholder; Vercel luego lo reemplaza si quieres

  brand: {
    name: "Mundo de Male",
    description:
      "Creaciones artesanales por encargo: cocina, jardín y experiencias para regalar, compartir y celebrar.",
    logo: "/brand/logo-mundo-de-male.png"
  },

  topbar: {
  enabled: true,
  text: "Pedidos por encargo • Envíos disponibles",
  bgClass: "bg-[#F1D3D9]",      // Icy Pink approx
  textClass: "text-slate-800"   // mejor contraste que blanco
},

  hero: {
    // Elige UNA (por ahora dejo la 1 como default)
    taglines: [
      "Detalles hechos con calma, para regalar y disfrutar.",
      "Jardín, cocina y experiencias con sello artesanal.",
      "Creaciones por encargo que convierten momentos en rituales."
    ],
    selectedTaglineIndex: 0
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/tienda" },
    { label: "Galería", href: "/galeria" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Contacto/WhatsApp", href: "/contacto" }
  ],

  contact: {
    // Reemplaza por el real. Recomendado: solo dígitos con país (sin +)
    whatsappNumber: "50700000000",
    whatsappDefaultMessage: "Hola, me gustaría hacer un pedido con Mundo de Male.",
    instagramUrl: "https://instagram.com/tu_instagram_aqui"
  },

  footer: {
    legal: "© Mundo de Male. Todos los derechos reservados."
  }
} as const;
