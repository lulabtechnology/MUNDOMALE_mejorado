"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import { site } from "@/content/site";

type Slide = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export default function HeroSlider() {
  const tagline = site.hero.taglines[site.hero.selectedTaglineIndex] ?? site.hero.taglines[0];

  const slides: Slide[] = useMemo(
    () => [
      {
        image: "/hero/hero-1.jpg",
        alt: "Mundo de Male - Hero 1",
        title: "Mundo de Male",
        subtitle: tagline,
        primary: { label: "Ver tienda", href: "/tienda" },
        secondary: { label: "Ordenar por WhatsApp", href: "/contacto" }
      },
      {
        image: "/hero/hero-2.jpg",
        alt: "Mundo de Male - Hero 2",
        title: "Male’s Kitchen • Garden • Talleres",
        subtitle: "Catálogo por encargo con entregas coordinadas y atención personalizada.",
        primary: { label: "Ver colecciones", href: "/tienda" },
        secondary: { label: "Escribir por WhatsApp", href: "/contacto" }
      }
    ],
    [tagline]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[58vh] min-h-[420px] w-full sm:h-[64vh] lg:h-[72vh]">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />

            {/* Overlay similar a Hario: oscuro suave + gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/25 to-slate-900/10" />
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>
        ))}

        <div className="container-pad relative z-10 flex h-full items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
              Pedidos por encargo
            </div>

            <h1 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slides[index].title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              {slides[index].subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink href={slides[index].primary.href} variant="hero">
                {slides[index].primary.label}
              </ButtonLink>

              <ButtonLink
                href={slides[index].secondary.href}
                variant="secondary"
                className="border-white/70 bg-white/15 text-white hover:bg-white/20"
              >
                {slides[index].secondary.label}
              </ButtonLink>
            </div>

            {/* Dots como Hario */}
            <div className="mt-8 flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                    i === index ? "bg-white" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
