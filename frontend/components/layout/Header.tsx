"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/oplogo.svg";



const Header = () => {
  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b shawdow-sm backdrop-blur-md")}
    >
      <nav className="mx-auto flex h-18  w-full max-w-5xl items-center justify-between px-4">
        <img src={logo.src} alt="Logo" className="h-50 w-50" />
        <ul className="flex items-center gap-2 ">          
          <li>
            <Button size="sm"> <span><i className="bi bi-person"></i> Login</span></Button>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
