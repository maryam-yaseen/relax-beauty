"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Leaf from "@/app/components/Leaf";
import { useCart } from "../context/CartContext";

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-6 min-h-screen bg-[#FAF7F1]">

        <div className="text-center mb-14">
          <p className="eyebrow">Your Bag</p>
          <h1 className="font-display text-5xl text-[#1D2B22] mt-3">Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="max-w-md mx-auto text-center bg-white border border-[#E4DAC9] rounded-2xl p-12">
            <Leaf className="w-8 h-8 mx-auto text-[#A9813F]" />
            <p className="mt-4 text-[#1D2B22] font-medium">Your cart is empty</p>
            <p className="text-[#4B5A4F] text-sm mt-1">
              Browse the range and add something you'll love.
            </p>
            <Link href="/shop" className="btn-primary mt-6">
              Shop the Edit
            </Link>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">

            {cart.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white border border-[#E4DAC9] p-5 rounded-2xl flex justify-between items-center"
              >
                <div>
                  <h2 className="font-display text-lg text-[#1D2B22]">{item.name}</h2>
                  <p className="text-[#A9813F] font-medium">{item.price}</p>
                  <p className="text-sm text-[#4B5A4F] mt-1">Qty: {item.quantity}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-sm font-medium text-[#8C5A4B] hover:text-[#1D2B22] transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-white border border-[#E4DAC9] rounded-2xl p-6 flex justify-between items-center mt-8">
              <span className="font-display text-xl text-[#1D2B22]">Subtotal</span>
              <span className="font-display text-xl text-[#A9813F]">
                PKR {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="text-center pt-4">
              <Link href="/checkout" className="btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}