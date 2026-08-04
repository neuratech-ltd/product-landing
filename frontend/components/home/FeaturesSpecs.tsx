import { ListChecks, FileSpreadsheet, CheckCircle2, Check,  } from "lucide-react";

type Spec = { label: string; value: string };

type Props = {
  features?: string[];
  specs?: Spec[];
};

export default function FeaturesSpecs({
  features = ["Hi-Fi Stereo Sound Hi-Fi Stereo Sound Hi-Fi Stereo Sound Hi-Fi Stereo SoundHi-Fi Stereo Sound SoundHi-Fi Stereo Sound ", "Hi-Fi Stereo Sound", "Hi-Fi Stereo Sound", "Hi-Fi Stereo Sound"],
  specs = [
    { label: "sdfsdf", value: "dfgdzfgdfg" },
    { label: "dfgsdfg", value: "sdfgsdfgg" },
  ],
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="grid md:grid-cols-2 gap-6 bg-white border rounded-2xl p-6 shadow-none md:shadow-lg">
        {/* Features */}
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
            <ListChecks size={18} className="text-green-600" />
            ফিচার
          </h3>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700 border-b last:border-b-0 pb-2">
                <Check size={16} className="text-green-600 bg-green-100 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
            <FileSpreadsheet size={18} className="text-green-600" />
            স্পেসিফিকেশন
          </h3>
          <div className="divide-y">
            {specs.map((s, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-2.5 text-sm ${
                  i % 2 === 0 ? "bg-gray-50" : ""
                } px-2 rounded`}
              >
                <span className="text-gray-500">{s.label}</span>
                <span className="text-gray-900 font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
