"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import Leaf from "./Leaf";

export default function Navbar() {
  const { cart } = useCart();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const count = cart?.reduce((sum: number, item: any) => sum + item.quantity, 0) ?? 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setMenuOpen(false);
      setQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FAF7F1]/90 backdrop-blur-md border-b border-[#E4DAC9] z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 gap-4">

        <Link href="/" className="flex items-center gap-2 text-[#2F4A35] shrink-0">
          <Leaf className="w-6 h-6" />
          <span className="font-display italic text-2xl tracking-tight">Relax</span>
        </Link>

        {!searchOpen && (
          <div className="hidden md:flex gap-10 text-sm font-medium tracking-wide uppercase text-[#1D2B22]">
            <Link href="/" className="hover:text-[#4B6C52] transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-[#4B6C52] transition-colors">Shop</Link>
          </div>
        )}

        {searchOpen && (
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full border border-[#E4DAC9] bg-white rounded-full px-5 py-2 text-sm text-[#1D2B22] outline-none focus:border-[#4B6C52]"
            />
          </form>
        )}

        <div className="flex items-center gap-5 text-[#1D2B22] shrink-0">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hover:text-[#4B6C52] transition-colors"
          >
            {searchOpen ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <Link href="/cart" aria-label="Cart" className="relative hover:text-[#4B6C52] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A9813F] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden hover:text-[#4B6C52] transition-colors"
          >
            {menuOpen ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#E4DAC9] bg-[#FAF7F1] px-6 py-4 flex flex-col gap-4 text-sm font-medium uppercase tracking-wide text-[#1D2B22]">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#4B6C52] transition-colors">Home</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)} className="hover:text-[#4B6C52] transition-colors">Shop</Link>
        </div>
      )}
    </nav>
  );
}