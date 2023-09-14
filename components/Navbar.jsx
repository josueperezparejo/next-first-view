"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import Link from 'next/link'

export default function NavbarUI() {
  return (
    <Navbar className="flex justify-between">
      <NavbarBrand>
        <p className="font-bold text-inherit">NextJS / Curso</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" aria-current="page">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
