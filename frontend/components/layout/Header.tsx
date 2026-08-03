"use client";
import { Phone } from "lucide-react";



const Header = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Sound<span className="text-green-600">Max</span>
        </h1>
        <a
          href="tel:0161234567"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600"
        >
          <Phone size={16} />
          <span>0161234567</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
