"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Programs",
    href: "#",
  },
  {
    label: "Achivements",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

const Header = () => {
 

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b")}
    >
      <nav className="mx-auto flex h-25 w-full max-w-5xl items-center justify-between px-4">
         <h3 className="text-2xl font-bold">Landing</h3>
        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Button asChild key={link.label} size="lg" variant="ghost">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <Button size="sm">Call: (123) 456-7890</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
