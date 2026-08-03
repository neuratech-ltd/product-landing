"use client";
import { ShieldCheck, Lock, MessageCircle } from "lucide-react";
import CountdownTimer from "@/components/home/CountdownTimer";
import HeroImg2 from "@/assets/images/landing-image.webp" ;
import { use } from "react";

export default function HeroOffer() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-8">
      <div className="grid md:grid-cols-2 gap-6 items-stretch ">
        <div className="bg-linear-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6 md:p-8 flex flex-col justify-self-start py-6 shadow-none md:shadow-lg">
          <div>
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
              <ShieldCheck size={14} />
              এই মুহূর্তের ধামাকা অফার
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-3">
              প্রিমিয়াম কটন লন থ্রি পিস কালেকশন — ৪ রঙে!
            </h2>

            <p className="text-sm text-gray-600 mb-5">
              ব্র্যান্ড সহ ৪টি এক্সক্লুসিভ কালার — কফার গোল্ডেন ফ্লোরাল প্রিন্ট সাজানো জানুইছ থ্রি পিস। লিমিটেড স্টক!
            </p>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-gray-400 line-through text-sm">৳1990.00</span>
              <span className="text-3xl font-extrabold text-green-600">৳1090.00</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-45% ছাড়</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-red-500 font-medium">অফার শেষ:</span>
              <CountdownTimer />
            </div>
          </div>    

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors">
              <Lock size={16} />
              এখনই অর্ডার করুন
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-green-600 text-green-700 hover:bg-green-50 font-semibold px-5 py-3 rounded-lg transition-colors">
              <MessageCircle size={16} />
              WhatsApp অর্ডার
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden bg-gray-100 min-h-80 md:min-h-0 shadow-none md:shadow-lg">
          <img
            src={HeroImg2.src}
            alt="প্রোডাক্ট"
            className="w-full h-100  md:h-100 lg:h-150 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
