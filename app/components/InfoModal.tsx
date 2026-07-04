"use client";

import Leaf from "./Leaf";

export default function InfoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#4B5A4F] hover:text-[#1D2B22] text-xl leading-none"
        >
          ×
        </button>

        <div className="flex items-center gap-2 mb-6">
          <Leaf className="w-5 h-5 text-[#4B6C52]" />
          <span className="font-display italic text-2xl text-[#2F4A35]">Relax</span>
        </div>

        <h2 className="font-display text-2xl text-[#1D2B22] mb-4">
          Get in touch
        </h2>

        <div className="space-y-4 text-[#4B5A4F]">
          <div>
            <p className="eyebrow mb-1">Phone</p>
            <p className="text-[#1D2B22] font-medium">+92 300 1234567</p>
          </div>
          <div>
            <p className="eyebrow mb-1">Email</p>
            <p className="text-[#1D2B22] font-medium">hello@relaxbeauty.pk</p>
          </div>
          <div>
            <p className="eyebrow mb-1">Location</p>
            <p className="text-[#1D2B22] font-medium">
              Peshawar, Khyber Pakhtunkhwa, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}