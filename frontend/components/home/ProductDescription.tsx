import { FileText } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

export default function ProductDescription({
  title = "পণ্যের বিবরণ",
  description = `পণ্যের বর্ণনার ক্ষমতা সম্পর্কে কখনো ভেবেছেন? আপনি যদি মনে করেন যে এই সংক্ষিপ্ত সারাংশটি আপনার ক্রেতার সিদ্ধান্তকে খুব কমই প্রভাবিত করে, তাহলে আপনার কাছে সম্পূর্ণ ছবি নাও থাকতে পারে। একটি গল্প আকারে একটি বাধ্যতামূলক পণ্য বিবরণ উচ্চ রূপান্তর হার হতে পারে. 

আপনার পণ্যের বিস্তারিত বর্ণনা করলে আপনার ওয়েবসাইট বা পণ্যের পৃষ্ঠায় অবতরণ করা গ্রাহকদের জন্য আপনার পণ্য বোঝা সহজ হয়। এটি আপনাকে একটি বিক্রয়কে শক্তিশালী করার সুযোগ দেয়, কারণ গ্রাহককে তারা কি কিনছে তা বোঝার জন্য সর্বনিম্ন প্রচেষ্টা করতে হবে। `,
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6 ">
      <div className="bg-white border rounded-2xl p-6 md:p-8 shadow-none md:shadow-lg">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-3">
          <FileText size={18} className="text-green-600" />
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
