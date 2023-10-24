"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";


export function NavBar() {
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
      </div>
    </nav>
  );
}
