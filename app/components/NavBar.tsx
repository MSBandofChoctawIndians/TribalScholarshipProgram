"use client"

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { TSPLogo } from "./TSPLogo.jsx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <TSPLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem>
          <Link
            color={`${pathname === "/" ? "primary" : "foreground"}`}
            href="/"
            as={NextLink}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={`${pathname === "/about" ? "primary" : "foreground"}`}
            href="/about"
            as={NextLink}
          >
            About
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color={`${pathname === "/" ? "primary" : "foreground"}`}
            className="w-full"
            href="/"
            size="lg"
            as={NextLink}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color={`${pathname === "/about" ? "primary" : "foreground"}`}
            className="w-full"
            href="/about"
            size="lg"
            as={NextLink}
          >
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
