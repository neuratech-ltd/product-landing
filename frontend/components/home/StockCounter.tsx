import React from "react";
import { Flame } from "lucide-react";

interface StockCounterProps {
  currentStock?: number;
  totalStock?: number;
}

export default function StockCounter({
  currentStock = 7,
  totalStock = 100,
}: StockCounterProps) {
  const progressPercentage = (currentStock / totalStock) * 100;

  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 rounded-xl bg-[var(--our-bg)] border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-[var(--our-bg-hover)] font-bold text-sm md:text-base">
          <Flame className="w-5 h-5 text-red-500 animate-pulse" />
          <span>সীমিত স্টক!</span>
        </div>
        <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
          Hurry Up
        </span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[var(--our-primary)] rounded-full transition-all duration-1000 ease-out animate-pulse"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="py-4 text-center">
        <button className="bg-[var(--our-primary)] hover:bg-[var(--our-bg-hover)] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
}
