"use client";

import { createContext, useContext, useState } from "react";

type Product = {
  name: string;
  price: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.name === product.name);

      if (exists) {
        return prev.map((p) =>
          p.name === product.name
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((p) => p.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);