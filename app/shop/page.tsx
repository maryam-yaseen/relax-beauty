"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ProductCard from "@/app/components/ProductCard";
import Leaf from "@/app/components/Leaf";
import { products as allProducts } from "@/app/data/products";

export default function Shop() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase().trim() ?? "";

  const products = query
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    : allProducts;

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-6 bg-[#FAF7F1] min-h-screen">

        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="eyebrow">{query ? "Search Results" : "The Full Range"}</p>
          <h1 className="font-display text-5xl text-[#1D2B22] mt-3">
            {query ? `Results for "${searchParams.get("q")}"` : "Our Products"}
          </h1>
          <div className="divider-leaf mt-6">
            <Leaf className="w-4 h-4" />
          </div>
        </div>

        {products.length === 0 ? (
          <div className="max-w-md mx-auto text-center bg-white border border-[#E4DAC9] rounded-2xl p-12">
            <Leaf className="w-8 h-8 mx-auto text-[#A9813F]" />
            <p className="mt-4 text-[#1D2B22] font-medium">Product not found</p>
            <p className="text-[#4B5A4F] text-sm mt-1">
              Try a different search, or browse our full range instead.
            </p>
            <a href="/shop" className="btn-primary mt-6 inline-flex">
              View All Products
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}