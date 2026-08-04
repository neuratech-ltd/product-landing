import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex gap-8 justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Sound<span className="text-green-500">Max</span>
          </h2>
          <div className="flex gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 hover:bg-blue-50 text-gray-500 hover:text-blue-600 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 hover:bg-pink-50 text-gray-500 hover:text-pink-600 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/88013322839685" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 hover:bg-green-50 text-gray-500 hover:text-green-600 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.905-11.89 11.905-2.004-.001-3.973-.507-5.731-1.472L0 24zm6.59-4.846c1.657.983 3.279 1.498 5.293 1.499 5.427 0 9.843-4.388 9.845-9.782.002-2.613-1.012-5.07-2.859-6.92C16.928 2.096 14.47 1.08 11.892 1.08c-5.43 0-9.85 4.387-9.852 9.783-.001 2.031.53 4.021 1.538 5.757L2.55 21.147l4.097-1.993zm11.39-4.873c-.317-.159-1.874-.925-2.162-1.03-.287-.104-.497-.158-.705.158-.209.317-.808.925-1.02 1.163-.209.238-.419.264-.736.105-.317-.159-1.341-.494-2.555-1.577-.945-.843-1.583-1.885-1.768-2.201-.186-.317-.02-.489.139-.647.143-.142.317-.37.476-.556.16-.186.213-.317.32-.528.106-.213.053-.397-.027-.556-.08-.159-.706-1.701-.967-2.332-.254-.613-.513-.53-.705-.54-.183-.009-.393-.011-.604-.011-.211 0-.555.079-.846.397-.291.317-1.11 1.083-1.11 2.642 0 1.559 1.134 3.065 1.292 3.276.159.213 2.232 3.409 5.407 4.779.755.326 1.344.52 1.803.666.76.241 1.45.207 1.996.126.608-.091 1.874-.766 2.138-1.467.264-.702.264-1.303.185-1.428-.079-.126-.291-.207-.608-.366z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">যোগাযোগ</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={14} /> 01612-345678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> support@soundmax.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} /> 01612-345678 (WhatsApp)
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} /> সকাল ৯টা – রাত ৯টা (প্রতিদিন)
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> ঢাকা, বাংলাদেশ
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">
        ©{new Date().getFullYear()} SoundMax. All rights reserved.
      </div>
    </footer>
  );
}
