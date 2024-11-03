import React from "react";
import Link from "next/link";
// import logoImg from "@/assets/logo.png";
// import Image from "next/image";
import classes from "./MainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import Navbar from "../Navbar/Navbar";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* <Image height={100} width={100} src={logoImg.src} alt="" /> */}
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navbar href={"/meals"}>Browse Meals</Navbar>
            </li>
            <li>
              <Navbar href={"/community"}>Join the Community</Navbar>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
