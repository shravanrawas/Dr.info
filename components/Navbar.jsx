"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import WaitlistModal from "./Tryforfree";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white/20 px-6 md:px-32 py-4 flex flex-col justify-center h-[100px] fixed w-full top-0 shadow-lg backdrop-blur-lg z-50">
        <div className="flex items-center justify-between w-full">
          <div className="text-[32px] font-[500] text-[#0C0C0C]">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              Dr.Info
            </Link>
          </div>

          <div className="hidden md:flex gap-14 items-center">
            <div className="flex gap-9">
              <Link
                href="/"
                className={`text-lg font-medium ${
                  pathname === "/" ? "text-[#00298d] font-bold" : "text-black"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium ${
                  pathname === "/about" ? "text-[#00298d] font-bold" : "text-black"
                }`}
              >
                About Us
              </Link>
            </div>
            <div className="flex gap-2">
              <Link href="/login">
                <button className="border border-black rounded px-4 py-2 text-black text-lg font-medium">
                  Login
                </button>
              </Link>

              <button
                className="bg-black text-white rounded px-4 py-2 text-lg font-medium"
                onClick={() => setIsModalOpen(true)}
              >
                Try for free
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={setIsMobileMenuOpen} />
      </nav>

      {isModalOpen && <WaitlistModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Navbar;
