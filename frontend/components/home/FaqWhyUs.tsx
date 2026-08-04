"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Star, CheckCircle2 } from "lucide-react";

type FaqItem = { question: string; answer: string };

const defaultFaqs: FaqItem[] = [
  { question: "ডেলিভারি সময় কতদিন?", answer: "সাধারণত ঢাকার ভেতরে ১-২ দিন এবং ঢাকার বাইরে ৩-৫ কার্যদিবস সময় লাগে।" },
  { question: "রিটার্ন পলিসি কি?", answer: "পণ্য হাতে পাওয়ার ৭ দিনের মধ্যে অক্ষত অবস্থায় থাকলে রিটার্ন করা যাবে।" },
  { question: "ওয়ারেন্টি কত?", answer: "প্রতিটি পণ্যে ৬ মাসের অফিসিয়াল ওয়ারেন্টি দেওয়া হয়।" },
  { question: "কোন ডিভাইসে কাজ করবে?", answer: "সকল স্মার্টফোন, ল্যাপটপ ও ব্লুটুথ সাপোর্টেড ডিভাইসে ব্যবহার করা যাবে।" },
  { question: "ক্যাশ অন ডেলিভারি কি আছে?", answer: "হ্যাঁ, সারা দেশে ক্যাশ অন ডেলিভারি সুবিধা রয়েছে।" },
];

const defaultReasons = [
  "১০০% অরিজিনাল পণ্য — সরাসরি ব্র্যান্ড থেকে সংগ্রহ",
  "সেরা মূল্য গ্যারান্টি — কোথাও কম পেলে মূল্য ফিরিয়ে দেব",
  "দ্রুত ডেলিভারি — ঢাকায় পরের দিনই পাবেন",
  "ক্যাশ অন ডেলিভারি — দেখে পছন্দ না হলে ফেরত",
  "২৪/৭ কাস্টমার সাপোর্ট — যেকোনো সময়ায় পাশে",
  "নিরাপদ প্যাকেজিং — পণ্য নিরাপদে আপনার কাছে পৌঁছাবে",
];

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 bg-gray-50 hover:bg-gray-100"
      >
        {item.question}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 py-3 text-sm text-gray-600 bg-white border-t">{item.answer}</div>
      )}
    </div>
  );
}

type Props = {
  faqs?: FaqItem[];
  reasons?: string[];
};

export default function FaqWhyUs({ faqs = defaultFaqs, reasons = defaultReasons }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-6">
      <div className="grid md:grid-cols-2 gap-6 bg-white border rounded-2xl p-6 shadow-lg">
        {/* FAQ */}
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
            <HelpCircle size={18} className="text-green-600" />
            সাধারণ জিজ্ঞাসা
          </h3>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <FaqAccordionItem key={i} item={f} />
            ))}
          </div>
        </div>

        {/* Why us */}
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
            <Star size={18} className="text-yellow-500 fill-yellow-500" />
            কেন আমরা সেরা?
          </h3>
          <ul className="space-y-2 bg-green-100 py-1 rounded-lg ">
            {reasons.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-700 bg-green-50/50 px-3 py-2.5 rounded-lg"
              >
                <CheckCircle2 size={16} className="text-white bg-green-600 shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
