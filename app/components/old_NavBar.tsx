"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl text-white font-semibold">Your Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link className={`${pathname === "/" ? "text-slate-300" : "text-white" }`} href="/">
            Home
          </Link>
          <Link className={`${pathname === "/about" ? "text-slate-300" : "text-white" }`} href="/about">
            About
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2">
          <Link className={`block py-2 px-4${pathname === "/" ? "text-slate-300" : "text-white" }`} href="/">Home</Link>
          <Link className={`block py-2 px-4${pathname === "/about" ? "text-slate-300" : "text-white" }`} href="/about">About</Link>
        </div>
      )}
    </nav>
  );
};
