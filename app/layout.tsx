import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Relax Beauty — Skincare & Haircare",
  description: "Small-batch skincare & haircare, formulated for a natural glow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#FAF7F1] text-[#1D2B22] font-body antialiased">
        <CartProvider>
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}