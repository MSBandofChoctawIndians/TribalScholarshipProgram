// app/components/NavBar.tsx
"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <Link href="./" color={"foreground"}>
          <NavbarBrand>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="18.5"
              viewBox="0 0 245 125.8"
              className="h-6 w-auto"
              fill="currentColor"
            >
              <path d="M211.2,58.8c-0.8,0-1.7,0-2.6,0c-10-0.3-19.8,0.5-29.4,3.4c-6.8,2-13.1,5-19.3,8.5c-2.6,1.4-5.2,2.9-7.8,4.4l-6.3,3.4 c-2.1,0.9-4.5,2.1-7,3.1c-6.9,2.7-14.1,4.1-21.5,4.3l-9.9,0.8c-2.5,0.4-5.1,0.8-7.9,1.2l-6.5,1.6c-11.3,3.3-21.6,9-31.1,16.6 c-0.3-0.8-0.5-1.2-0.6-1.8c-3.1-16.4-0.3-31.8,8-46.2c1.5-2.7,3.4-5.2,5.3-7.7c0.6-0.9,1.6-1.5,2.6-2c12-6.2,24.5-10.9,37.4-14.8 c12.1-3.7,24.4-6.7,36.9-8.6c6.7-1,13.5-1.7,20.2-2.6c1.8-0.2,3.3,0.3,4.8,1.1c6.5,3.8,12.3,8.3,17.7,13.4 c6.1,5.8,11.5,12.2,16,19.3c0.4,0.6,0.7,1.2,1.1,1.9C211.2,58.3,211.2,58.5,211.2,58.8z M59.8,74.3c2.5-8.6,6.1-16.7,11.5-23.8 c1.5-2,3.2-3.7,5.6-4.8c3.2-1.4,6.4-2.9,9.7-4.3c23-9.7,46.9-16.4,71.6-20c4.4-0.7,8.9-1,13.3-1.5c2.2-0.2,4.3,0.3,6.2,1.6 c6.5,4.4,12.9,8.9,18.6,14.3c0.5,0.4,1,0.8,1.5,1.3c0.5-0.3,0.9-0.4,1.3-0.7c14.5-9.7,28.9-19.4,43.4-29.2c0,0,0.1-0.1,0.1-0.2 c0-0.1,0-0.2-0.1-0.3c-0.3,0-0.7-0.1-1.1-0.1C216.5,5.8,191.7,5,167,4.2c-18-0.6-36-1.1-53.9-1.7c-1.8-0.1-3.4,0.4-4.9,1.4 C97,11.3,85.9,18.7,74.8,26.1C51.2,41.9,27.6,57.7,4,73.4c-0.4,0.3-0.7,0.6-1.5,1.2c19.1,0.7,37.7,1.5,56.6,2.2 C59.4,75.8,59.6,75.1,59.8,74.3z M230.5,105.3c-0.2-0.4-0.4-0.9-0.6-1.3c-2.5-3.8-3.7-7.9-4.2-12.4c-0.6-5.3-0.5-10.6,0.3-15.8 c0.8-4.9-0.5-9.2-2.4-13.5c-0.3-0.8-0.9-1.4-1.3-2.1c-1.4,0.3-1.6,1.2-1.7,2.1c-0.4,2.3-0.9,4.6-1,6.9c-0.1,2.3-0.6,4.6-1.4,6.8 c-4.5,13-6.5,26.3-6.2,40.1c0,2.1,0.3,4.3,0.4,6.3c4.2,1.7,9.1,0.5,11.3-2.9c-3.8-9.5-4.9-19.3-3-29.5c0.4,1.9,0.5,3.9,0.7,5.8 c0.5,4,1,8.1,3,11.8l-0.1,0.1c-0.1-0.9-0.1-1.7-0.3-2.6c-0.9-3.8-1.3-7.7-1.4-11.6c0-0.6,0.1-1.2,0.2-1.8c0.7,0.7,0.9,1.4,1.2,2.1 C225.5,98.1,227.3,102.1,230.5,105.3L230.5,105.3z M204.8,37.6c4.8,1.8,9.7,2.5,14.8,3c1.9,0.2,3.8,0.4,5.7,0.9 c1.8,0.4,2.9,1.8,2.9,3.6c0,1.6-0.2,3.2-0.5,4.7c-0.6,3.1-2.1,5.8-3.9,8.5c0.5,0.5,1,0.9,1.6,1.5c1-1.6,2.1-3.1,2.9-4.6 c1.8-3.5,2.8-7.1,2-11.1c-0.5-2.4-1.7-4-4-4.6c-1.6-0.4-3.3-0.8-4.9-0.9c-5.4-0.4-10.8-1.2-16-3.1c-0.1-0.1-0.3,0-0.6,0 c-0.4,0.3-0.9,0.6-1.8,1.3C203.8,37.2,204.3,37.4,204.8,37.6z" />
            </svg>
            <p className="pl-2 font-bold text-inherit">TSP</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        <Link href="./" color={"foreground"}>
          <NavbarBrand>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="18.5"
              viewBox="0 0 245 125.8"
              className="h-6 w-auto"
              fill="currentColor"
            >
              <path d="M211.2,58.8c-0.8,0-1.7,0-2.6,0c-10-0.3-19.8,0.5-29.4,3.4c-6.8,2-13.1,5-19.3,8.5c-2.6,1.4-5.2,2.9-7.8,4.4l-6.3,3.4 c-2.1,0.9-4.5,2.1-7,3.1c-6.9,2.7-14.1,4.1-21.5,4.3l-9.9,0.8c-2.5,0.4-5.1,0.8-7.9,1.2l-6.5,1.6c-11.3,3.3-21.6,9-31.1,16.6 c-0.3-0.8-0.5-1.2-0.6-1.8c-3.1-16.4-0.3-31.8,8-46.2c1.5-2.7,3.4-5.2,5.3-7.7c0.6-0.9,1.6-1.5,2.6-2c12-6.2,24.5-10.9,37.4-14.8 c12.1-3.7,24.4-6.7,36.9-8.6c6.7-1,13.5-1.7,20.2-2.6c1.8-0.2,3.3,0.3,4.8,1.1c6.5,3.8,12.3,8.3,17.7,13.4 c6.1,5.8,11.5,12.2,16,19.3c0.4,0.6,0.7,1.2,1.1,1.9C211.2,58.3,211.2,58.5,211.2,58.8z M59.8,74.3c2.5-8.6,6.1-16.7,11.5-23.8 c1.5-2,3.2-3.7,5.6-4.8c3.2-1.4,6.4-2.9,9.7-4.3c23-9.7,46.9-16.4,71.6-20c4.4-0.7,8.9-1,13.3-1.5c2.2-0.2,4.3,0.3,6.2,1.6 c6.5,4.4,12.9,8.9,18.6,14.3c0.5,0.4,1,0.8,1.5,1.3c0.5-0.3,0.9-0.4,1.3-0.7c14.5-9.7,28.9-19.4,43.4-29.2c0,0,0.1-0.1,0.1-0.2 c0-0.1,0-0.2-0.1-0.3c-0.3,0-0.7-0.1-1.1-0.1C216.5,5.8,191.7,5,167,4.2c-18-0.6-36-1.1-53.9-1.7c-1.8-0.1-3.4,0.4-4.9,1.4 C97,11.3,85.9,18.7,74.8,26.1C51.2,41.9,27.6,57.7,4,73.4c-0.4,0.3-0.7,0.6-1.5,1.2c19.1,0.7,37.7,1.5,56.6,2.2 C59.4,75.8,59.6,75.1,59.8,74.3z M230.5,105.3c-0.2-0.4-0.4-0.9-0.6-1.3c-2.5-3.8-3.7-7.9-4.2-12.4c-0.6-5.3-0.5-10.6,0.3-15.8 c0.8-4.9-0.5-9.2-2.4-13.5c-0.3-0.8-0.9-1.4-1.3-2.1c-1.4,0.3-1.6,1.2-1.7,2.1c-0.4,2.3-0.9,4.6-1,6.9c-0.1,2.3-0.6,4.6-1.4,6.8 c-4.5,13-6.5,26.3-6.2,40.1c0,2.1,0.3,4.3,0.4,6.3c4.2,1.7,9.1,0.5,11.3-2.9c-3.8-9.5-4.9-19.3-3-29.5c0.4,1.9,0.5,3.9,0.7,5.8 c0.5,4,1,8.1,3,11.8l-0.1,0.1c-0.1-0.9-0.1-1.7-0.3-2.6c-0.9-3.8-1.3-7.7-1.4-11.6c0-0.6,0.1-1.2,0.2-1.8c0.7,0.7,0.9,1.4,1.2,2.1 C225.5,98.1,227.3,102.1,230.5,105.3L230.5,105.3z M204.8,37.6c4.8,1.8,9.7,2.5,14.8,3c1.9,0.2,3.8,0.4,5.7,0.9 c1.8,0.4,2.9,1.8,2.9,3.6c0,1.6-0.2,3.2-0.5,4.7c-0.6,3.1-2.1,5.8-3.9,8.5c0.5,0.5,1,0.9,1.6,1.5c1-1.6,2.1-3.1,2.9-4.6 c1.8-3.5,2.8-7.1,2-11.1c-0.5-2.4-1.7-4-4-4.6c-1.6-0.4-3.3-0.8-4.9-0.9c-5.4-0.4-10.8-1.2-16-3.1c-0.1-0.1-0.3,0-0.6,0 c-0.4,0.3-0.9,0.6-1.8,1.3C203.8,37.2,204.3,37.4,204.8,37.6z" />
            </svg>
            <p className="pl-2 font-bold text-inherit">TRIBAL SCHOLARSHIP</p>
          </NavbarBrand>
        </Link>
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path} passHref color={"foreground"}>
            <NavbarItem isActive={pathname === link.path}>
              {link.name}
            </NavbarItem>
          </Link>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://tribalscholarshipprogram.secure-platform.com/site"
            target="_blank"
          >
            <Button color="danger">Apply Now</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-10">
        {navLinks.map((link, index) => (
          <Link key={link.path} href={link.path} color={"foreground"}>
            <NavbarMenuItem
              isActive={pathname === link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavbarMenuItem>
          </Link>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
