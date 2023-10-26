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
import { navLinks } from "./NavLinks.jsx";
import { TSPLogo } from "./TSPLogo.jsx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <TSPLogo />
          <p className="font-bold text-inherit pl-4">TRIBAL SCHOLARSHIP</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navLinks.map((link, index) => (
          <NavbarItem key={`${link}-${index}`}>
            <Link
              color={`${pathname === link.path ? "primary": "foreground"}`}
              href={link.path}
              as={NextLink}
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
        {/* <NavbarItem>
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
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link 
              color={
                index === 2 ? "primary" : index === navLinks.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={link.path}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {/* <NavbarMenuItem>
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
        </NavbarMenuItem> */}
      </NavbarMenu>
    </Navbar>
  );
}
