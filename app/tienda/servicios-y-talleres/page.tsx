"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterPills from "@/components/shop/FilterPills";
import ProductCard from "@/components/shop/ProductCard";
import { getServicesBySection, ServicesSection } from "@/content/products";
import { useMemo, useState } from "react";

const tabs: ServicesSection[] = ["Talleres", "Servicios"];

export default function ServicesPage() {
  const [tab, setTab] = useState<ServicesSection>("Talleres");
  const list = useMemo(() => getServicesBySection(tab), [tab]);

  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          align="left"
          title="Servicios y Talleres"
          subtitle="Catálogo tipo producto para cotizar y agendar por WhatsApp."
        />

        <div className="mt-10">
          <FilterPills options={tabs} value={tab} onChange={(v) => setTab(v as ServicesSection)} />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
