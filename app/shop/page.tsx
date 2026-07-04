"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Leaf from "@/app/components/Leaf";
import { products } from "@/app/data/products";

export default function ShopPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 min-h-screen bg-[#FAF7F1]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl text-[#1D2B22] text-center">
            Shop
          </h1>

          <div className="max-w-md mx-auto mt-8">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-[#E4DAC9] bg-white text-[#1D2B22] focus:outline-none"
            />
          </div>

          {filtered.length === 0 ? (
            <div className="max-w-md w-full mx-auto mt-16 text-center bg-white border border-[#E4DAC9] rounded-2xl p-12">
              <Leaf className="w-8 h-8 mx-auto text-[#A9813F]" />
              <p className="mt-4 text-[#1D2B22] font-medium">Product not found</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              {filtered.map((product) => (
                <div
                  key={product.slug}
                  onClick={() => router.push(`/shop/${product.slug}`)}
                  className="bg-white border border-[#E4DAC9] rounded-2xl p-6 cursor-pointer hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-xl"
                  />
                  <p className="eyebrow mt-4">{product.category}</p>
                  <h2 className="font-display text-xl text-[#1D2B22] mt-1">
                    {product.name}
                  </h2>
                  <p className="text-[#A9813F] font-semibold mt-1">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}