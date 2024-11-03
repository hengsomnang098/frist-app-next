"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from ".//Navbar.module.css";

interface NavbarProps {
  href: string;
  children: React.ReactNode;
}

export default function Navbar({ href, children }: NavbarProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
