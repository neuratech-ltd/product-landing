"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";

type UpsellItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  image: string;
};

const defaultItems: UpsellItem[] = [
  { id: "1", name: "কফার ফ্লোরাল প্রিন্ট কটন লন থ্রি পিস (আরেকটি)", variant: "Black", price: 1099, image: "/images/upsell-1.jpg" },
  { id: "2", name: "কফার ফ্লোরাল প্রিন্ট কটন লন থ্রি পিস (আরেকটি)", variant: "Black", price: 1099, image: "/images/upsell-2.jpg" },
  { id: "3", name: "কফার ফ্লোরাল প্রিন্ট কটন লন থ্রি পিস (আরেকটি)", variant: "Black", price: 1099, image: "/images/upsell-3.jpg" },
  { id: "4", name: "কফার ফ্লোরাল প্রিন্ট কটন লন থ্রি পিস (আরেকটি)", variant: "Black", price: 1099, image: "/images/upsell-4.jpg" },
];

type Props = {
  items?: UpsellItem[];
  onSelectionChange?: (selectedIds: string[]) => void;
};

export default function CartUpsell({ items = defaultItems, onSelectionChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      onSelectionChange?.(next);
      return next;
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-6">
      <div className="bg-white border rounded-2xl p-6 shadow-lg">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
          <ShoppingCart size={18} className="text-green-600" />
          কার্ট আইটেম
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 border border-green-100 rounded-xl p-3 cursor-pointer hover:border-green-400 transition-colors"
            >
              <input
                type="checkbox"
                checked={selected.includes(item.id)}
                onChange={() => toggle(item.id)}
                className="w-4 h-4 accent-green-600"
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover bg-yellow-50 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-gray-400">রং: {item.variant}</p>
              </div>
              <span className="text-sm font-bold text-green-600 shrink-0">
                {item.price.toLocaleString("bn-BD")}৳
              </span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
