import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react'; 
import workImage from '@/assets/images/workit.png'

export default function HowItWorks() {
  const benefits = [
    "শরীরের জমে থাকা টক্সিন বের করে ডিটক্স করে",
    "হজম প্রক্রিয়া উন্নত করে খাবার দ্রুত ব্রেকডাউন করতে সাহায্য করে",
    "অতিরিক্ত ফ্যাট জমা হওয়া কমাতে সহায়তা করে",
    "কোষ্ঠকাঠিন্য দূর করে পেট পরিষ্কার রাখতে সাহায্য করে",
    "মেটাবলিজম বাড়িয়ে ক্যালরি বার্নিং প্রক্রিয়া সক্রিয় করে",
    "শরীরের পানি জমে থাকা (water retention) কমাতে সহায়তা করে",
    "এনার্জি লেভেল বাড়িয়ে সারাদিন ফ্রেশ রাখে",
    "জাঙ্ক ফুডের ক্ষতিকর প্রভাব কমাতে সাহায্য করে",
    "নিয়মিত ব্যবহারে ধীরে ধীরে ওজন নিয়ন্ত্রণে রাখতে সহায়ক",
    "শরীরকে হালকা, ক্লিন ও ফিট অনুভব করতে সাহায্য করে"
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <h2 className="text-2xl md:text-4xl font-black text-center text-gray-900 mb-10 md:mb-16 tracking-wide">
          Product কীভাবে কাজ করে?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
         
          <div className="lg:col-span-7 space-y-2 md:space-y-5 order-2 lg:order-1">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50/50 transition-colors duration-200"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />                
                <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/10 border-4 border-white transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
              
              <Image
                src={workImage} 
                alt="MIKEO FIBER XS Preparation"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
