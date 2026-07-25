
import Image from "next/image";
import Link from "next/link";
import { Video, MessageSquare } from "lucide-react";
import logo from "@/assets/logo/oplogo.svg"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="Neuratech" className="h-10 w-auto" />
              
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Welcome to Neuratech Product Landing Online, your trusted destination for authentic 
              beauty and cosmetic products. 
            </p>
            <div className="mt-2">
              {/* <span className="text-xs font-bold uppercase tracking-wider text-gray-900 block mb-2">
                GET APP
              </span> */}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Connect With Us
            </h3>
            <ul className="space-y-2.5 text-sm">
              
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-700 transition">
                  <MessageSquare className="h-4 w-4 text-blue-500" />
                  <span>Facebook Group</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-black transition">
                  <Video className="h-4 w-4 text-black" />
                  <span>Tiktok</span>
                </a>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <Link href="#" className="hover:text-pink-600 transition">Terms & Condition</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-pink-600 transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Talk To Us
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-gray-400">Got Questions? Call us</p>
                <a href="tel:+8801805528872" className="text-base font-bold text-gray-900 hover:text-pink-600 transition">
                  +880100000000
                </a>
              </div>
              <div>
                <a href="mailto:sales@beautysuccessbd.com" className="text-blue-600 hover:underline break-all">
                  info@neuratechltd.com
                </a>
              </div>
              <p className="text-gray-500 leading-relaxed">
                House #63, (7th Floor), Road #27, Gulshan-1. Dhaka 1212.<br />
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <div className="w-full border-t border-gray-100 bg-gray-50 py-4 text-center text-xs text-gray-500">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>©{currentYear} Beauty Success All rights reserved.</p>
          <p>Developed By Neuratech Ltd.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;