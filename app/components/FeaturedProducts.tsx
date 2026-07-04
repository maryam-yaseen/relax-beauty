import Link from "next/link";
import Leaf from "./Leaf";
import ProductCard from "./ProductCard";
import { products } from "@/app/data/products";

const featuredSlugs = ["vitamin-c-serum", "hair-treatment", "apricot-scrub"];

const featured = products.filter((p) => featuredSlugs.includes(p.slug));

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto">
          <p className="eyebrow">Best Sellers</p>
          <h2 className="font-display text-4xl text-[#1D2B22] mt-3">
            Featured Products
          </h2>
          <div className="divider-leaf mt-6">
            <Leaf className="w-4 h-4" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}