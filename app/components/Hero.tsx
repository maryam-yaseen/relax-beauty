"use client";

import { useState } from "react";
import Link from "next/link";
import Leaf from "./Leaf";
import InfoModal from "./InfoModal";

export default function Hero() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section className="bg-[#FAF7F1] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-4 h-4 text-[#A9813F]" />
            <span className="eyebrow">New Collection · 2026</span>
          </div>

          <h1 className="font-display text-6xl leading-[1.05] text-[#1D2B22]">
            Glow, <em className="not-italic text-[#4B6C52]">naturally.</em>
          </h1>

          <p className="text-[#4B5A4F] mt-6 text-lg max-w-md leading-relaxed">
            Small-batch skincare and haircare, formulated with real botanicals
            for skin that looks like skin — just better.
          </p>

          <div className="mt-10 flex items-center gap-8">
            <Link href="/shop" className="btn-primary">
              Shop Now
            </Link>

            <button onClick={() => setInfoOpen(true)} className="btn-ghost">
              Learn more
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="mt-14 flex gap-10 text-sm text-[#4B5A4F]">
            <div>
              <p className="font-display text-2xl text-[#1D2B22]">7+</p>
              <p>Signature formulas</p>
            </div>
            <div className="border-l border-[#E4DAC9] pl-10">
              <p className="font-display text-2xl text-[#1D2B22]">100%</p>
              <p>Dermatologist tested</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-[#EFE3D3]" />

          <img
            src="/image/serum.jpg"
            className="relative w-[340px] rounded-[2rem] shadow-2xl shadow-[#1D2B22]/10"
            alt="Vitamin C daily serum, Relax Beauty"
          />

          <div className="absolute -bottom-6 -left-6 bg-white border border-[#E4DAC9] rounded-2xl px-5 py-4 shadow-lg flex items-center gap-3">
            <Leaf className="w-5 h-5 text-[#4B6C52]" />
            <div className="text-sm">
              <p className="font-semibold text-[#1D2B22] leading-tight">Vitamin C Serum</p>
              <p className="text-[#A9813F] font-medium">PKR 550</p>
            </div>
          </div>
        </div>

      </div>

      <InfoModal open={infoOpen} onClose={() => setInfoOpen(false)} />
    </section>
  );
}