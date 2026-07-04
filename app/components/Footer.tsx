import Link from "next/link";
import Leaf from "./Leaf";

export default function Footer() {
  return (
    <footer className="bg-[#2F4A35] text-[#FAF7F1] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            <span className="font-display italic text-2xl">Relax</span>
          </div>
          <p className="text-sm text-[#CBD6C9] mt-4 max-w-xs">
            Small-batch skincare and haircare, formulated with real botanicals
            for a natural glow.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[#D9C4A0] mb-4">Shop</p>
          <ul className="space-y-2 text-sm text-[#CBD6C9]">
            <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#D9C4A0] mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-[#CBD6C9]">
            <li>+92 300 1234567</li>
            <li>hello@relaxbeauty.pk</li>
            <li>Peshawar, Khyber Pakhtunkhwa, Pakistan</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#D9C4A0] mb-4">Follow</p>
          <div className="flex gap-4 text-sm text-[#CBD6C9]">
            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">Instagram</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">Facebook</a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-[#CBD6C9]">
        © {new Date().getFullYear()} Relax Beauty. All rights reserved.
      </div>
    </footer>
  );
}