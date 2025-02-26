"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();

  return (
    <div
      className={`absolute top-[120px] left-0 right-0 bg-white py-4 px-6 transition-transform duration-300 ease-in-out ${
        isOpen ? "block" : "hidden"
      } lg:hidden`}
    >
      <nav className="flex flex-col space-y-4">
        <Link
          href="/"
          className={`text-lg transition-colors ${
            pathname === "/" ? "font-bold text-[#00298D]" : "text-black hover:text-[#00298D]"
          }`}
          onClick={() => toggleMenu(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-lg transition-colors ${
            pathname === "/about" ? "font-bold text-[#00298D]" : "text-black hover:text-[#00298D]"
          }`}
          onClick={() => toggleMenu(false)}
        >
          About Us
        </Link>
        <Link
          href="/login"
          className="px-[15px] py-[10px] text-[20px] text-black border border-black rounded-[5px] hover:bg-black hover:text-white transition-all text-center"
          onClick={() => toggleMenu(false)}
        >
          Login
        </Link>
        <a
          href="#"
          className="px-[15px] py-[10px] text-[20px] text-white bg-black rounded-[5px] hover:bg-[#222] transition-colors text-center"
          onClick={() => toggleMenu(false)}
        >
          Try for free
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
