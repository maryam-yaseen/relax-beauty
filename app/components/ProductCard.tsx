"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  category?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="card-apothecary p-6 text-center flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative bg-[#FAF7F1] rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={280}
            height={280}
            className="mx-auto object-cover h-56 w-full"
          />
        </div>

        {product.category && (
          <p className="eyebrow mt-5">{product.category}</p>
        )}

        <h3 className="font-display text-lg text-[#1D2B22] mt-2 hover:text-[#4B6C52] transition-colors">
          {product.name}
        </h3>
      </Link>

      <p className="text-[#A9813F] font-semibold mt-1">{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-5 w-full border border-[#2F4A35] text-[#2F4A35] py-2.5 rounded-full font-medium text-sm transition-colors hover:bg-[#2F4A35] hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}