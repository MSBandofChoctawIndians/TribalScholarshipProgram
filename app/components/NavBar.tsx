"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { TSPLogo } from "./TSPLogo.jsx";

export default function NavBar() {
  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Documents", path: "/documents" },
    { name: "FAQs", path: "/faqs" },
    { name: "Location", path: "/location" },
    { name: "Other Scholarships", path: "/otherscholarships" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="center">
        <Link href="/" color={"foreground"} as={NextLink}>
          <NavbarBrand>
            <TSPLogo />
            <p className="font-bold text-inherit">TSP</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <Link href="/" color={"foreground"} as={NextLink}>
          <NavbarBrand>
            <TSPLogo />
            <p className="pl-2 font-bold text-inherit">TRIBAL SCHOLARSHIP</p>
          </NavbarBrand>
        </Link>
        {navLinks.map((link, index) => (
          <NavbarItem key={`${link}-${index}`}>
            <Link
              color={`${pathname === link.path ? "primary" : "foreground"}`}
              href={link.path}
              as={NextLink}
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="#">
            Apply Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link
              color={`${pathname === link.path ? "primary" : "foreground"}`}
              className="w-full"
              href={link.path}
              as={NextLink}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
