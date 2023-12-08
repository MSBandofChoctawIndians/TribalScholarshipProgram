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
  Image,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import NextImage from "next/image";

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
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="center">
        <Link href="/" color={"foreground"} as={NextLink}>
          <NavbarBrand>
            <Image
              src={"./image/tsplogo.svg"}
              as={NextImage}
              alt="Tribal Scholarship Program"
              width={36}
              height={18.5}
            />
            <p className="font-bold text-inherit">TSP</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <Link href="/" color={"foreground"} as={NextLink}>
          <NavbarBrand>
            <Image
              src={"./image/tsplogo.svg"}
              as={NextImage}
              alt="Tribal Scholarship Program"
              width={36}
              height={18.5}
            />
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
          <Button
            as={Link}
            color="danger"
            href="https://tribalscholarshipprogram.secure-platform.com/site"
            isExternal
          >
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
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
