"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterPills from "@/components/shop/FilterPills";
import ProductCard from "@/components/shop/ProductCard";
import { getProductsByWorld, ProductBadge, Product } from "@/content/products";
import { useMemo, useState } from "react";

const filters = ["Todos", "Por encargo", "Cotización"] as const;

export default function GardenPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");

  const list = useMemo(() => {
    const all = getProductsByWorld("males-garden");
    if (filter === "Todos") return all;
    return all.filter((p) => p.badge === (filter as ProductBadge));
  }, [filter]);

  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          align="left"
          title="Male’s Garden"
          subtitle="Arreglos, plantas, terrarios, kokedamas y diseño de jardines. La mayoría es por encargo/cotización."
        />

        <div className="mt-10">
          <FilterPills options={[...filters]} value={filter} onChange={(v) => setFilter(v as any)} />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p: Product) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
