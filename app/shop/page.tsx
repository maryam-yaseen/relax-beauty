"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Leaf from "@/app/components/Leaf";
import { useCart } from "@/app/context/CartContext";
import { products } from "@/app/data/products";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 px-6 min-h-screen bg-[#FAF7F1] flex items-center justify-center">
          <div className="max-w-md w-full text-center bg-white border border-[#E4DAC9] rounded-2xl p-12">
            <Leaf className="w-8 h-8 mx-auto text-[#A9813F]" />
            <p className="mt-4 text-[#1D2B22] font-medium">Product not found</p>
            <button onClick={() => router.push("/shop")} className="btn-primary mt-6">
              Back to Shop
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 min-h-screen bg-[#FAF7F1]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">

          <div className="bg-white border border-[#E4DAC9] rounded-2xl p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="font-display text-4xl text-[#1D2B22] mt-3">
              {product.name}
            </h1>
            <p className="text-[#A9813F] font-semibold text-xl mt-3">
              {product.price}
            </p>
            <p className="text-[#4B5A4F] mt-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4 mt-10">
              <button
                onClick={() => addToCart(product)}
                className="btn-primary"
              >
                Add to Cart
              </button>
              <button
                onClick={() => router.push("/shop")}
                className="btn-ghost"
              >
                Back to Shop
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}