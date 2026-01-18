"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterPills from "@/components/shop/FilterPills";
import ProductCard from "@/components/shop/ProductCard";
import { kitchenSections, getKitchenBySection, KitchenSection } from "@/content/products";
import { useMemo, useState } from "react";

export default function KitchenPage() {
  const [section, setSection] = useState<KitchenSection>("Mermeladas");

  const list = useMemo(() => getKitchenBySection(section), [section]);

  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          align="left"
          title="Male’s Kitchen"
          subtitle="Jaleas, confituras, mermeladas y chutneys. Frascos 6oz. Diseño espacioso y claro."
        />

        <div className="mt-10">
          <FilterPills
            options={kitchenSections}
            value={section}
            onChange={(v) => setSection(v as KitchenSection)}
          />
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
