"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/logo-6e90a.svg";

// export const navLinks = [
//   {
//     label: "Shop",
//     href: "#",
//   },
//   {
//     label: "Eid Offers",
//     href: "#",
//   },
//   {
//     label: "Live Videos",
//     href: "#",
//   },
//   {
//     label: "Reels",
//     href: "#",
//   },
// ];

const Header = () => {
  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b bg-[#f8d0dd] shawdow-sm backdrop-blur-md")}
    >
      <nav className="mx-auto flex h-18  w-full max-w-5xl items-center justify-between px-4">
        <img src={logo.src} alt="Logo" className="h-50 w-50" />
        {/* <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Button asChild key={link.label} size="lg" variant="ghost">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div> */}
        <ul className="flex items-center gap-2 ">          
          <li>
            <Button size="sm"> <span><i className="bi bi-person"></i> Login</span></Button>
          </li>
          <li>
            <Button size="sm">C</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
