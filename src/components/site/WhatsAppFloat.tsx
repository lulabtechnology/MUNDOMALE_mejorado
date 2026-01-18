"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { waMeLink } from "@/lib/links";

export default function WhatsAppFloat() {
  const href = waMeLink(site.contact.whatsappNumber, site.contact.whatsappDefaultMessage);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-50 flex max-w-[240px] items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-soft hover:bg-slate-50"
      aria-label="Escribir por WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-slate-50">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-slate-800">WhatsApp</span>
        <span className="block truncate text-xs text-slate-600">
          ¿Cómo podemos ayudarte?
        </span>
      </span>
    </a>
  );
}
